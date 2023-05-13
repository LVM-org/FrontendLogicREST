interface ValidationError {
  field: string
  message: string
}

interface Paginated<D> {
  pages: {
    start: number
    last: number
    next?: number
    previous?: number
    current: number
  }
  docs: {
    limit: number
    total: number
    count: number
  }
  results: D[]
}

interface FileData {
  name: string
  type: string
  size: number
  path: string
  timestamp: number
  link: string
}

export enum QueryKeys {
  and = 'and',
  or = 'or',
}

export enum Conditions {
  lt = 'lt',
  lte = 'lte',
  gt = 'gt',
  gte = 'gte',
  eq = 'eq',
  ne = 'ne',
  in = 'in',
  nin = 'nin',
  exists = 'exists',
}

export interface QueryParams {
  where?: { field: string; value: any; condition?: Conditions }[]
  whereType?: QueryKeys
  sort?: [{ field: string; desc?: boolean }]
  limit?: number
  all?: boolean
  page?: number
  search?: { value: string; fields: string[] }
}

export { ValidationError, Paginated, FileData }
