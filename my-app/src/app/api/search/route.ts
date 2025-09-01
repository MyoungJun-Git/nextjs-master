import { NextResponse } from 'next/server'
import booksData from '@/mocks/dummy/books/books.json'
import { callRealApi } from '@/service/proxy'
import { BooksData } from '@/types/books-type'

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (process.env.NODE_ENV === 'production') {
    const { data, status } = await callRealApi(request, `/api/search?q=${id}`)
    return NextResponse.json(data, { status })
  }

  let filtered: BooksData[] = []
  if (id) {
    filtered = (booksData as BooksData[]).filter((book) => String(book.id) === id)
  }

  // 개발 환경에서는 mock 데이터 반환
  return NextResponse.json({
    error_code: 'SUCCESS',
    error_msg: 'success',
    response: filtered
  })
}
