import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'http://localhost:5000/api/departments/'; // Your backend API

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addDepartment(department: { departmentName: string }): Observable<any> {
    console.log("ddddd", department);
    return this.http.post<any>(this.apiUrl, department);
  }
  // deleteDepartment()
}
