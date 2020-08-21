import {Employee} from './employee';

export interface Review {
  id: string,
  title: string,
  reviewers: Array<Employee>
}
