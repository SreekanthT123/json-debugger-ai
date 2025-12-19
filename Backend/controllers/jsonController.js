exports.validateJSON = (req, res) => {
  const MAX_JSON_LENGTH = 20 * 1024; // 20 KB
  const { json } = req.body;
  if (json.length > MAX_JSON_LENGTH) {
    return res.json({
      valid: false,
      error: "JSON is too large to validate. Please reduce the size.",
    });
  }
  try {
    const parsed = JSON.parse(json);
    const formatted = JSON.stringify(parsed, null, 2);

    return res.json({
      valid: true,
      formatted,
    });
  } catch (err) {
    return res.json({
      valid: false,
      error: err.message,
    });
  }
};

const { fixJsonWithAI } = require("../services/aiService");

exports.fixJSON = async (req, res) => {
  const { json } = req.body;
  const MAX_JSON_LENGTH = 20 * 1024; // 20 KB

  if (!json || !json.trim()) {
    return res.json({
      fixed: null,
      explanation: null,
      error: "No JSON provided for fixing.",
    });
  }

  if (json.length > MAX_JSON_LENGTH) {
    return res.json({
      fixed: null,
      explanation: null,
      error:
        "JSON is too large to fix with AI. Please reduce the size and try again.",
    });
  }

  try {
    const fixedjson = await fixJsonWithAI(json);

    JSON.parse(fixedjson);

    return res.json({
      fixed: fixedjson,
      explanation: "JSON syntax errors were fixed without changing data.",
      error: null,
    });
  } catch (err) {
    return res.json({
      fixed: null,
      explanation: null,
      error: "AI failed to fix the JSON. Please try again.",
    });
  }
};
