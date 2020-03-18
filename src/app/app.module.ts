

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule, Table } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserPanelComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    ToastModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    DropdownModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    ProgressSpinnerModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: MainComponent
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
