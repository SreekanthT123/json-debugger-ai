import { Component } from '@angular/core';
interface JsonValidationResult {
  valid: boolean;
  formatted?: string;
  error?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'json-debugger';

  validationResult: any = null;

  onJsonValidated(result: JsonValidationResult) {
    this.validationResult = result;
  }
}
/*
Valid json
{
  "user": {
    "id": 10293,
    "name": "Sreekanth",
    "email": "sreekanth@example.com",
    "roles": ["ADMIN", "EDITOR"],
    "profile": {
      "designation": "Frontend Engineer",
      "experience": 6,
      "skills": [
        "Angular",
        "RxJS",
        "Node.js",
        "REST APIs"
      ],
      "availability": {
        "timezone": "IST",
        "workingHours": {
          "from": "10:00",
          "to": "19:00"
        }
      }
    }
  },
  "projects": [
    {
      "id": "P-001",
      "name": "JSON Debugger",
      "status": "ACTIVE",
      "features": [
        "Validation",
        "Formatting",
        "AI Fix"
      ],
      "metadata": {
        "createdAt": "2024-12-01",
        "updatedAt": "2024-12-15"
      }
    },
    {
      "id": "P-002",
      "name": "Audit Logger",
      "status": "IN_PROGRESS",
      "features": [
        "Logging",
        "Filtering",
        "Export"
      ],
      "metadata": {
        "createdAt": "2024-10-10",
        "updatedAt": "2024-12-10"
      }
    }
  ],
  "settings": {
    "notifications": true,
    "theme": "dark",
    "limits": {
      "maxProjects": 5,
      "maxRequestsPerDay": 1000
    }
  }
}
=======================================================
invalid json
{
  "user": {
    "id": 10293,
    "name": "Sreekanth",
    "email": "sreekanth@example.com",
    "roles": ["ADMIN", "EDITOR",],
    "profile": {
      "designation": "Frontend Engineer",
      "experience": 6,
      "skills": [
        "Angular",
        "RxJS",
        "Node.js"
        "REST APIs"
      ],
      "availability": {
        "timezone": "IST",
        "workingHours": {
          "from": "10:00",
          "to": "19:00",
        }
      }
    }
  },
  "projects": [
    {
      "id": "P-001",
      "name": "JSON Debugger",
      "status": "ACTIVE",
      "features": [
        "Validation",
        "Formatting"
        "AI Fix"
      ]
    }
  ]
}

*/