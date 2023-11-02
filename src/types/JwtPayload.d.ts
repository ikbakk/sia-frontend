export type Payload = {
  sub: string;
  studentID?: string;
  lecturerID?: string;
  role: string;
  iat: number;
  exp: number;
};
