export interface Institution {
  hash: string
  id: string
  title: string
  isGateway: boolean
  createdAt: number
  updatedAt: number
}

export interface Faculty {
  hash: string
  id: string
  title: string
  institutionId: string
  createdAt: number
  updatedAt: number
}

export interface Department {
  hash: string
  id: string
  title: string
  institutionId: string
  facultyId: string
  createdAt: number
  updatedAt: number
}

export interface DepartmentCourse {
  hash: string
  id: string
  title: string
  institutionId: string
  facultyId?: string
  departmentId?: string
  createdAt: number
  updatedAt: number
}
