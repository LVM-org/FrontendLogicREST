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

export enum StatusCodes {
  success = '200',
  unuthenticated = '401',
  unauthorized = '403',
  badRequest = '400',
  validationError = '422',
  expiredAccessToken = '461',
}

export type SocketReturn = {
  code: StatusCodes
  message: string
  channel: string
}

export type EmitTypes = 'created' | 'updated' | 'deleted'

export interface FormRule {
  type:
    | 'isRequired'
    | 'isGreaterThan'
    | 'isLessThan'
    | 'isEqualsTo'
    | 'isGreaterThanOrEqualsTo'
    | 'isLessThanOrEqualsTo'
    | 'isRegex'
    | 'isCondition'
  value: any | undefined
  errorMessage: string | undefined
}

export interface SelectOption {
  key: any
  value: string
  extras?: string
  hasIcon?: boolean
  isImage?: boolean
  isString?: boolean
}

export interface LoaderSetup {
  show: boolean
  useModal: boolean
  loading: boolean
  hasError?: boolean
  message?: string
  ctaText?: string
  ctaFunction?: any
  icon?: 'success-kite' | 'error-kite' | 'error-alert' | 'success-thumb'
  title?: string
}

export interface FetchRule {
  domain: string
  property: string
  method: string
  params: any[]
  requireAuth: boolean
  ignoreProperty: boolean | Function
  useRouteId: boolean
  useRouteQuery?: boolean
  queries?: string[]
  alignCurrency?: boolean
}

export interface FormContentRule {
  max: number
  characterToAdd: string
  addAfterCount: number
}
