'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import api from '@/service/api'
import { BooksData } from '@/types/books-type'
import SearchableItem from '@/components/ui/searchable/searchable-item.tsx'

const Page = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('q') || ''
  const [booksData, setBooksData] = useState<BooksData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getApi(`/api/search?id=${id}`)
      setBooksData(data.response ?? [])
    }

    if (id) fetchData()
  }, [id])

  return <SearchableItem booksData={booksData} />
}

export default Page
