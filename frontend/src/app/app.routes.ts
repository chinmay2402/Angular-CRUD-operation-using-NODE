import { Routes } from '@angular/router';
import { ListDepartmentComponent } from './components/department/list-department/list-department.component';
import { AddDepartmentComponent } from './components/department/add-department/add-department.component';
import { ListEmployeeComponent } from './components/employee/list-employee/list-employee.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';

export const appRoutes: Routes = [
  { path: 'departments', component: ListDepartmentComponent },
  { path: 'add-department', component: AddDepartmentComponent },
  { path: '', redirectTo: 'departments', pathMatch: 'full' },
  { path: 'employees', component: ListEmployeeComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employee/:id', component: AddEmployeeComponent }
];
