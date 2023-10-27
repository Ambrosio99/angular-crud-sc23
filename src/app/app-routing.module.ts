import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';
import { HomeLoginComponent } from './pages/home-login/home-login.component';

const routes: Routes = [
  { path: '', component: HomeLoginComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-edit/:id', component: CustomerEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
