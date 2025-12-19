import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JsonService } from '../../services/json.service';

@Component({
  selector: 'app-output-viewer-section',
  standalone: false,
  templateUrl: './output-viewer-section.component.html',
  styleUrl: './output-viewer-section.component.css',
})
export class OutputViewerSectionComponent implements OnChanges {
  @Input() result: any;
  copied: boolean = false;
  isFixing: boolean = false;
  aiResult: any = null;

  aiFixCount = 0;
  MAX_AI_FIXES = 5;

  constructor(private jsonService: JsonService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['result']) {
      // New validation happened → clear old AI output
      this.aiResult = null;
    }
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this.copied = true;

    setTimeout(() => {
      this.copied = false;
    }, 1500);
  }

  onFixWithAI() {
    if (!this.result || this.result.valid) return;

    this.isFixing = true;
    this.aiResult = null;

    this.jsonService.fixJson(this.result.originalJson ?? '').subscribe({
      next: (res: any) => {
        this.aiResult = res;
        if (res?.fixed) {
          this.aiFixCount++;
        }
        this.isFixing = false;
      },
      error: (err) => {
        this.aiResult = {
          error: 'AI failed to fix the JSON',
        };
        this.isFixing = false;
      },
    });
  }
}
