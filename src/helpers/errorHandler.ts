import { AxiosError } from 'axios'
export const errorHandler = (err: AxiosError) => {
  if (err) {
    const response = err.response
    if (response?.status === 401) {
      return 'Login required'
    }
    if (response?.data && response.data.detail) {
      return response.data.detail
    }
    if (response?.status === 422) {
      return 'Invalid input'
    }
    if (response?.status === 500) {
      return 'Server error'
    }
  }
}
