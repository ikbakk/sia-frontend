type CourseType = 'MANDATORY' | 'OPTIONAL';

export type EnrolledCourse = {
  id: string;
  name: string;
  credit: number;
  type: CourseType;
  available: Boolean;
  onYear: AcademicYear;
  semester: number;
  code: string;
};
