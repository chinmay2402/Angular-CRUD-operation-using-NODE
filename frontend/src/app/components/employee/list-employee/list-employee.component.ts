import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent implements OnInit{
  employees: any[] = [];
  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  deleteEmployee(employeeId: number): void {
    if (confirm("Are you sure you want to delete this employee?")) {
      this.employeeService.deleteEmployee(employeeId).subscribe({
        next: () => {
          this.loadEmployees();  // Refresh the list after deletion
          
        },
        error: (err) => {
          console.error("❌ Error deleting employee:", err);
        }
      });
    }
  }
  
  loadEmployees (): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        console.log("API Response:", data);  // ✅ Debugging log
        this.employees = data;
        console.log("departments", this.employees);
      },
      error: (err) => {
        console.error("Error fetching departments:", err);  // ✅ Error handling
      }
    });
  }

  // ✅ Navigate to Add/Edit Component and Pass Employee Data
  editEmployee(employee: any): void {
    this.router.navigate(['/add-employee'], { state: { employee } });
    console.log("employee", employee)
  }

}
