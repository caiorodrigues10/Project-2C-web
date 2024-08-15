interface AppResponse {
  message: string
  result: string | 'success' | 'error'
  statusCode: number
  data?: any
}

interface AppResponseNew<T> {
  message: string
  result: string | 'success' | 'error'
  statusCode: number
  data?: T
}

interface IFilter {
  page?: number
  limit?: number
}

export type { AppResponse, AppResponseNew, IFilter }
