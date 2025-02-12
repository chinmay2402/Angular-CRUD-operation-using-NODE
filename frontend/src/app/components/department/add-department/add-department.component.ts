import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ✅ Required for [(ngModel)]
import { DepartmentService } from '../../../services/department.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],  // ✅ Import necessary modules
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  departmentName = '';

  constructor(private departmentService: DepartmentService) {}

  addDepartment(): void {
    console.log("Department Name:", this.departmentName); // ✅ Debugging log
    if (this.departmentName) {
      const departmentData = { departmentName: this.departmentName }; // ✅ Correct key
  
      this.departmentService.addDepartment(departmentData).subscribe({
        next: () => {
          alert('✅ Department Added Successfully!');
          this.departmentName = ''; // ✅ Clear input field after success
        },
        error: (err) => {
          console.error("Error adding department:", err); // ✅ Error handling
        }
      });
    }
  }
  
}
