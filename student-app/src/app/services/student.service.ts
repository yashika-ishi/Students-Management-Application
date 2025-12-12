import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    {
      name: 'Yashika Negi',
      class: '8',
      gender: 'Female',
      hasHobby: true,
      hobby: 'Drawing',
      favSubject: 'Science'
    },
    {
      name: 'Yashi N',
      class: '7',
      gender: 'Female',
      hasHobby: false,
      hobby: '',
      favSubject: 'Maths'
    }
  ];

  getStudents() {
    return this.students;
  }

  addStudent(s: Student) {
    this.students.push(s);
  }
}
