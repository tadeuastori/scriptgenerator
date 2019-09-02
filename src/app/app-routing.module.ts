import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConstantComponent } from './constant/constant.component';
import { ParameterComponent } from './parameter/parameter.component';
import { TranslatorComponent } from './translator/translator.component';
import { PageComponent  } from './page/page.component';
import { EditcubeComponent } from './editcube/editcube.component';

const routes: Routes = [
  { path:'', redirectTo: '/dashboard', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'constant', component: ConstantComponent },
  { path: 'parameter', component: ParameterComponent },
  { path: 'translator', component: TranslatorComponent },
  { path: 'page', component: PageComponent},
  { path: 'editcube', component: EditcubeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }