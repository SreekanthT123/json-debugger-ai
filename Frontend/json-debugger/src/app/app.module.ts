import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputEditorSectionComponent } from './components/input-editor-section/input-editor-section.component';
import { OutputViewerSectionComponent } from './components/output-viewer-section/output-viewer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    InputEditorSectionComponent,
    OutputViewerSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
