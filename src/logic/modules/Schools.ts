import { $api } from '../../services'
import Common from './Common'
import { Logic } from '..'
import { Paginated } from '../types/domains/common'
import {
  Department,
  DepartmentCourse,
  Faculty,
  Institution,
} from '../types/domains/schools'
import { QueryParams } from '../types/common'
import {
  CreateDepartmentCourseInput,
  CreateDepartmentInput,
  CreateFacultyInput,
  CreateSchoolInstitutionInput,
} from '../types/forms/schools'

export default class Schools extends Common {
  constructor() {
    super()
  }

  public AllInstitutions: Paginated<Institution> | undefined
  public SingleInstitution: Institution | undefined
  public AllFaculties: Paginated<Faculty> | undefined
  public SingleFaculty: Faculty | undefined
  public AllDepartments: Paginated<Department> | undefined
  public SingleDepartment: Department | undefined
  public AllDepartmentCourses: Paginated<DepartmentCourse> | undefined
  public SingleDepartmentCourse: DepartmentCourse | undefined

  // Form input
  public CreateInstitutionForm: CreateSchoolInstitutionInput | undefined
  public UpdateInstitutionForm: CreateSchoolInstitutionInput | undefined
  public CreateFacultyForm: CreateFacultyInput | undefined
  public UpdateFacultyForm: CreateFacultyInput | undefined
  public CreateDepartmentForm: CreateDepartmentInput | undefined
  public UpdateDepartmentForm: CreateDepartmentInput | undefined
  public CreateDepartmentCourseForm: CreateDepartmentCourseInput | undefined
  public UpdateDepartmentCourseForm: CreateDepartmentCourseInput | undefined

  public GetInstitutions = (filters: QueryParams) => {
    return $api.schools.institution.fetch(filters).then((response) => {
      this.AllInstitutions = response.data
    })
  }

  public GetIntitution = (id: string) => {
    return $api.schools.institution.get(id).then((response) => {
      this.SingleInstitution = response.data
    })
  }

  public GetFaculties = (filters: QueryParams) => {
    return $api.schools.faculty.fetch(filters).then((response) => {
      this.AllFaculties = response.data
    })
  }

  public GetFaculty = (id: string) => {
    return $api.schools.faculty.get(id).then((response) => {
      this.SingleFaculty = response.data
    })
  }

  public GetDepartments = (filters: QueryParams) => {
    return $api.schools.department.fetch(filters).then((response) => {
      this.AllDepartments = response.data
    })
  }

  public GetDepartment = (id: string) => {
    return $api.schools.department.get(id).then((response) => {
      this.SingleDepartment = response.data
    })
  }

  public GetDepartmentCourses = (filters: QueryParams) => {
    return $api.schools.course.fetch(filters).then((response) => {
      this.AllDepartmentCourses = response.data
    })
  }

  public GetDepartmentCourse = (id: string) => {
    return $api.schools.course.get(id).then((response) => {
      this.SingleDepartmentCourse = response.data
    })
  }

  public CreateInstitution = (formIsValid: boolean) => {
    if (formIsValid && this.CreateInstitutionForm) {
      return $api.schools.institution
        .post(null, this.CreateInstitutionForm)
        .then((response) => {
          this.SingleInstitution = response.data
        })
        .catch((errro) => {
          //
        })
    }
  }

  public UpdateInstitution = (formIsValid: boolean, id: string) => {
    if (formIsValid && this.UpdateInstitutionForm) {
      return $api.schools.institution
        .put(null, id, this.UpdateInstitutionForm)
        .then((response) => {
          this.SingleInstitution = response.data
        })
        .catch((errro) => {
          //
        })
    }
  }

  public CreateFaculty = (formIsValid: boolean) => {
    if (formIsValid && this.CreateFacultyForm) {
      return $api.schools.faculty
        .post(null, this.CreateFacultyForm)
        .then((response) => {
          this.SingleFaculty = response.data
        })
        .catch((errro) => {
          //
        })
    }
  }

  public UpdateFaculty = (formIsValid: boolean, id: string) => {
    if (formIsValid && this.UpdateFacultyForm) {
      return $api.schools.faculty
        .put(null, id, this.UpdateFacultyForm)
        .then((response) => {
          this.SingleFaculty = response.data
        })
        .catch((errro) => {
          //
        })
    }
  }

  public CreateDepartment = (formIsValid: boolean) => {
    if (formIsValid && this.CreateDepartmentForm) {
      return $api.schools.department
        .post(null, this.CreateDepartmentForm)
        .then((response) => {
          this.SingleDepartment = response.data
        })
        .catch((errro) => {
          //
        })
    }
  }

  public UpdateDepartment = (formIsValid: boolean, id: string) => {
    if (formIsValid && this.UpdateDepartmentForm) {
      return $api.schools.department
        .put(null, id, this.UpdateDepartmentForm)
        .then((response) => {
          this.SingleDepartment = response.data
        })
        .catch((errro) => {
          //
        })
    }
  }

  public CreateDepartmentCourse = (formIsValid: boolean) => {
    if (formIsValid && this.CreateDepartmentCourseForm) {
      return $api.schools.course
        .post(null, this.CreateDepartmentCourseForm)
        .then((response) => {
          this.SingleDepartmentCourse = response.data
        })
        .catch((errro) => {
          //
        })
    }
  }

  public UpdateDepartmentCourse = (formIsValid: boolean, id: string) => {
    if (formIsValid && this.UpdateDepartmentCourseForm) {
      return $api.schools.course
        .put(null, id, this.UpdateDepartmentCourseForm)
        .then((response) => {
          this.SingleDepartmentCourse = response.data
        })
        .catch((errro) => {
          //
        })
    }
  }

  public DeleteInstitution = (id: string) => {
    return $api.schools.institution
      .delete(id)
      .then((response) => {
        //
      })
      .catch((error) => {
        //
      })
  }

  public DeleteFaculty = (id: string) => {
    return $api.schools.faculty
      .delete(id)
      .then((response) => {
        //
      })
      .catch((error) => {
        //
      })
  }

  public DeleteDepartment = (id: string) => {
    return $api.schools.department
      .delete(id)
      .then((response) => {
        //
      })
      .catch((error) => {
        //
      })
  }

  public DeleteDepartmentCourse = (id: string) => {
    return $api.schools.course
      .delete(id)
      .then((response) => {
        //
      })
      .catch((error) => {
        //
      })
  }
}
