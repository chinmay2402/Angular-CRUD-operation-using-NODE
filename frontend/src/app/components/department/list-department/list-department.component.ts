import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../../../services/department.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-department',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  // ✅ Import required modules
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
  departments: any[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => {
        console.log("API Response:", data);  // ✅ Debugging log
        this.departments = data;
        console.log("departments", this.departments);
      },
      error: (err) => {
        console.error("Error fetching departments:", err);  // ✅ Error handling
      }
    });
  }
}
