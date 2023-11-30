import {
  DefinedUseQueryResult,
  UseMutationResult,
} from '@tanstack/react-query';
import { EnrolledCourse } from '../Courses';
import { Krs, KrsDetailed } from '../Krs';
import { SuccessResponse } from '../SuccessResponse';

export type NewKrsBody = {
  onYear: 'GENAP' | 'GANJIL';
  semester: number;
  studentID: string;
  courses: string[];
};
export type NewKrsRes = { message: srting };
export type KrsListType = SuccessResponse<Krs[]>;
export type KrsDetailedType = SuccessResponse<KrsDetailed>;
export type CoursesType = SuccessResponse<EnrolledCourse[]>;

export type KrsContextType = {
  token: string;
  studentID: string;
  semester: number;
  setSemester: React.Dispatch<React.SetStateAction<number>>;
  krsList: DefinedUseQueryResult<Krs[], Error>;
  krsDetail: DefinedUseQueryResult<KrsDetailed, Error>;
  courses: DefinedUseQueryResult<EnrolledCourse[], Error>;
  addNewKrs: UseMutationResult<
    AxiosResponse<PostClientRes<NewKrsRes>, any>,
    Error,
    AddNewKrsType,
    unknown
  >;
};

export type KrsProviderType = {
  children: React.ReactNode;
  token: string;
  studentID: string;
  initialKrsList: Krs[];
  initialKrsDetails: KrsDetailed;
  initialCourses: EnrolledCourse[];
};
