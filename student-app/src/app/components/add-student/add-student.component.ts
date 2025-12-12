import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-student.component.html'
})
export class AddStudentComponent implements OnInit {

  studentForm: any;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      class: ['', Validators.required],
      gender: ['', Validators.required],
      hasHobby: [false],
      hobby: [''],
      favSubject: ['']
    });
  }

  save() {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    const s = this.studentForm.value;
    this.studentService.addStudent(s);
    this.router.navigate(['/']);
  }
}
