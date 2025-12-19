import { Component, EventEmitter, Output } from '@angular/core';
import { JsonService } from '../../services/json.service';

@Component({
  selector: 'app-input-editor-section',
  standalone: false,
  templateUrl: './input-editor-section.component.html',
  styleUrl: './input-editor-section.component.css'
})
export class InputEditorSectionComponent {
  @Output() jsonValidated = new EventEmitter<any>();

  jsonText:string ='';
  isLoading:boolean=false;

  constructor(private jsonService: JsonService) {}

  onValidate(){
    if(!this.jsonText.trim()){
      this.jsonValidated.emit({
        valid: false,
        error: 'Please paste JSON before validating.'
      });
      return;
    }
    this.isLoading = true;
    this.jsonValidated.emit(null);
    this.jsonService.validateJson(this.jsonText).subscribe({
      next:(res:any)=>{
        this.jsonValidated.emit({
          ...res,
          originalJson: this.jsonText
        });
        this.isLoading=false;
      },
      error:()=>{
        this.jsonValidated.emit({
          valid: false,
          error: 'Something went wrong while validating JSON.'
        });
        this.isLoading = false;
      }
    });
  }

  onClear(){
    this.jsonText='';
    this.jsonValidated.emit(null);
  }
}
