import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'students',
    loadComponent: () =>
      import('./components/students/students.component').then(m => m.StudentsComponent)
  },
  {
    path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/students'
  },
  {
  path: 'teachers',
  loadComponent: () =>
    import('./components/teachers/teachers.component').then(m => m.TeachersComponent)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
