export interface CreateSchoolInstitutionInput {
  title: string
  isGateway: boolean
}

export interface CreateFacultyInput {
  institutionId: string
  title: string
}

export interface CreateDepartmentInput {
  title: string
  facultyId: string
}

export interface CreateDepartmentCourseInput {
  title: string
  institutionId: string
  departmentId?: string
}
