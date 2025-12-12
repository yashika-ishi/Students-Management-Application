import { Student } from './student.model';

describe('Student Interface', () => {
  it('should allow creating a valid student object', () => {

    const student: Student = {
      name: 'Test User',
      class: 'Class 6',
      gender: 'Female',
      hasHobby: true,
      hobby: 'Drawing',
      favSubject: 'Math'
    };

    expect(student).toBeTruthy();
    expect(student.name).toBe('Test User');
  });
});
