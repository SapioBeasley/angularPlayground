import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';
import {ReactiveFormArrayComponent} from './reactive-form-array/reactive-form-array.component';

const routes: Routes = [
  {path: 'reactive-forms', component: ReactiveFormsComponent},
  {path: 'reactive-form-array', component: ReactiveFormArrayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
