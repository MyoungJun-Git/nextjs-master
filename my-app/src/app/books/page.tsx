import { postApi } from '@/service/api'

import BookItem from '@/components/ui/books/book-item.tsx'

// 서버 컴포넌트에서 SSR로 /api/books POST 호출
const Page = async () => {
    const data = await postApi('/api/books')
    const booksData = data.response ?? []

    return <BookItem data={booksData} />
}

export default Page
