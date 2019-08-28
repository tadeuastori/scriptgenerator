import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConstantComponent } from './constant/constant.component';
import { ParameterComponent } from './parameter/parameter.component';
import { FormsModule } from '@angular/forms';
import { ModalscriptComponent } from './modalscript/modalscript.component';
import { TranslatorComponent } from './translator/translator.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConstantComponent,
    ParameterComponent,
    ModalscriptComponent,
    TranslatorComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ModalscriptComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
