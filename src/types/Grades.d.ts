export type StudentGrade = {
  id: string;
  courseID: string;
  studentID: string;
  midTerm: number;
  finalExam: number;
  finalScore: number;
  grade: string;
  courseDetail: {
    id: string;
    name: string;
    code: string;
    credit: number;
    semester: number;
    type: 'MANDATORY' | 'OPTIONAL';
    available: boolean;
    onYear: 'GANJIL' | 'GENAP';
  };
};
