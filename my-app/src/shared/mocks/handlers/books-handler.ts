import { http, HttpResponse } from 'msw'
import booksData from '@/mocks/dummy/books/books.json'

const handlers = [
  http.post('/api/books', () => {
    return HttpResponse.json({
      error_code: 'SUCCESS',
      error_msg: 'success',
      response: booksData
    })
  })
]

export default handlers
