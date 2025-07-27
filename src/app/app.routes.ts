import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'teachers',
    component: TeachersComponent
  },
  {
    path: 'notes',
    component: HomeComponent
  }
];
