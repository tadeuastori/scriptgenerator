import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConstantComponent } from './constant/constant.component';
import { ParameterComponent } from './parameter/parameter.component';
import { TranslatorComponent } from './translator/translator.component';
import { PageComponent  } from './page/page.component';
import { EditcubeComponent } from './editcube/editcube.component';
import { NewcubeComponent } from './newcube/newcube.component';
import { FunctioncontrolComponent } from './functioncontrol/functioncontrol.component';
import { ExitComponent } from './exit/exit.component';

const routes: Routes = [
  { path:'', redirectTo: '/dashboard', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'constant', component: ConstantComponent },
  { path: 'parameter', component: ParameterComponent },
  { path: 'translator', component: TranslatorComponent },
  { path: 'page', component: PageComponent },
  { path: 'editcube', component: EditcubeComponent },
  { path: 'newcube', component: NewcubeComponent },
  { path: 'functioncontrol', component: FunctioncontrolComponent },
  { path: 'exit', component: ExitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }