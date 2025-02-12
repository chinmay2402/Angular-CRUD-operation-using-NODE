import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5000/api/employees/'; // Your backend API

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addEmployees(employees:{employeeName:string, loginEmail:string, loginPassword:string, departmentId:string}): Observable<any> {
    console.log("ddddd", employees);
    return this.http.post<any>(this.apiUrl, employees);
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${employeeId}`);
  }

  updateEmployee(employeeId: number, employeeData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${employeeId}`, employeeData);
  } 
}
