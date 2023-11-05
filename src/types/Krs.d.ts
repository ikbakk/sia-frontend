export interface Krs {
  id: string;
  semester: number;
  onYear: 'GANJIL' | 'GENAP';
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  courses: string[];
  studentID: string;
}
