import { NextResponse } from 'next/server'
import booksData from '@/mocks/dummy/books/books.json'
import { callRealApi } from '@/service/proxy'

export const POST = async (request: Request) => {
  if (process.env.NODE_ENV === 'production') {
    const { data, status } = await callRealApi(request, '/api/books')
    return NextResponse.json(data, { status })
  }

  // 개발 환경에서는 mock 데이터 반환
  return NextResponse.json({
    error_code: 'SUCCESS',
    error_msg: 'success',
    response: booksData
  })
}
