'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, KeyboardEvent, ReactNode, useEffect, useState } from 'react'

import styles from '@/styles/src/assets/searchable-layout.module.css'

type SearchableLayoutProps = {
  children: ReactNode
}

const SearchableLayout = ({ children }: SearchableLayoutProps) => {
  const router = useRouter()

  const searchParams = useSearchParams()

  const [search, setSearch] = useState<string>('')
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const q = searchParams.get('q')
  useEffect(() => {
    setSearch(q || '')
  }, [q])

  const onSubmit = () => {
    if (!search || q === search) return
    router.push(`/search?q=${search}`)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit()
    }
  }

  return (
    <div>
      <div className={styles.searchbar_container}>
        <input
          placeholder="검색어를 입력하세요 ..."
          onKeyDown={onKeyDown}
          onChange={onChangeSearch}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  )
}

export default SearchableLayout
