import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from '../../../services/department.service';
import { EmployeeService } from '../../../services/employee.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], 
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeId: number | null = null;
  employeeName = '';
  loginEmail = '';
  loginPassword = '';
  departmentId: string = '';  // Selected department ID
  departments: any[] = [];
  isEditMode = false;  // Check if updating an employee
  originalDepartmentId: string = ''; // Store original departmentId

  constructor(
    private departmentService: DepartmentService, 
    private employeeService: EmployeeService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['employee']) {
      const employeeData = navigation.extras.state['employee'];
      console.log("📌 Prefilled Employee Data:", employeeData.departmentId);

      this.isEditMode = true;
      this.employeeId = employeeData.employeeId;
      this.employeeName = employeeData.employeeName;
      this.loginEmail = employeeData.loginEmail;
      this.loginPassword = employeeData.loginPassword;
      this.originalDepartmentId = employeeData.departmentId; // Store original departmentId
    }
  }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => {
        console.log("📌 Department List:", data);
        this.departments = data;

        // ✅ Ensure the department is set only AFTER departments are loaded
        if (this.isEditMode && this.originalDepartmentId) {
          this.departmentId = this.originalDepartmentId; // Set the departmentId from employee data
        }
      },
      error: (err) => console.error("❌ Error fetching departments:", err)
    });
  }

  saveEmployee(): void {
    if (!this.employeeName || !this.loginEmail || !this.loginPassword || !this.departmentId) {
      alert("⚠️ Please fill in all fields!");
      return;
    }

    const employeeData = {
      employeeName: this.employeeName,
      loginEmail: this.loginEmail,
      loginPassword: this.loginPassword,
      departmentId: this.departmentId // ✅ Pass correct department ID
    };

    if (this.isEditMode) {
      this.employeeService.updateEmployee(this.employeeId!, employeeData).subscribe({
        next: () => {
          alert("✅ Employee updated successfully!");
          this.router.navigate(['/employees']);
        },
        error: (err) => console.error("❌ Error updating employee:", err)
      });
    } else {
      this.employeeService.addEmployees(employeeData).subscribe({
        next: () => {
          alert("✅ Employee added successfully!");
          this.router.navigate(['/employees']);
        },
        error: (err) => console.error("❌ Error adding employee:", err)
      });
    }
  }
}
