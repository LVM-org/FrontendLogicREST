import CoursesApi from './CoursesApi'
import DepartmentsApi from './DepartmentsApi'
import FacultiesApi from './FacultiesApi'
import InstitutionsApi from './InstitutionsApi'

export const SchoolApi = {
  course: new CoursesApi(),
  department: new DepartmentsApi(),
  faculty: new FacultiesApi(),
  institution: new InstitutionsApi(),
}
