export type Student = {
  id: string;
  studentID: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'STUDENT';
  completedCoursesIDs: string[];
  enrolledCoursesIDs: string[];
  gradesIDs: string[];
  semester: number;
  faculty: string;
  major: string;
  createdAt: string;
};
