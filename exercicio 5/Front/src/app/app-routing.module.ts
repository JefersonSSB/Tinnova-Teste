import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VeiculoCrudComponent } from './views/veiculo-crud/veiculo-crud.component';
import { VeiculoFormComponent } from './components/veiculo/veiculo-form/veiculo-form.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "veiculo", component: VeiculoCrudComponent },
  { path: "veiculo/create", component: VeiculoFormComponent },
  { path: "veiculo/update/:id", component: VeiculoFormComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
