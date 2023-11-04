import { Dayjs } from "dayjs";

export interface Form {
  prefix: string;
  firstName: string;
  lastName: string;
  birthDate: Dayjs | null;
  nationality: string | any;
  idCard: string;
  gender: string;
  region: string;
  phoneNumber: string;
  passport: string;
  expectedSalary: string;
}
