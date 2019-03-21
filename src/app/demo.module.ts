import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule,
  MatMenuModule, MatSelectModule, MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { AceEditorDirective } from './ace-editor.directive';
import { DemoComponent } from './demo.component';
import { DemoRootComponent } from './demo-root.component';

import { routes } from './demo.routes';
import {
  MaterialDesignFrameworkModule, Bootstrap4FrameworkModule,
  NoFrameworkModule
} from 'angular-json-form-engine';

@NgModule({
  declarations: [AceEditorDirective, DemoComponent, DemoRootComponent],
  imports: [
    BrowserModule, BrowserAnimationsModule, FlexLayoutModule, FormsModule,
    HttpClientModule, MatButtonModule, MatCardModule, MatCheckboxModule,
    MatIconModule, MatMenuModule, MatSelectModule, MatToolbarModule,
    RouterModule.forRoot(routes),
    MaterialDesignFrameworkModule,
    Bootstrap4FrameworkModule,
    NoFrameworkModule
  ],
  bootstrap: [DemoRootComponent]
})

export class DemoModule { }
