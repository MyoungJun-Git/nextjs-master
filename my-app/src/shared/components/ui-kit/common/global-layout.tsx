import { ReactNode } from 'react'

import Link from 'next/link'

import style from '@/styles/src/assets/globals/globals-layout.module.css'

type GlobalLayoutProps = {
  children: ReactNode
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={'/'}>📚 BOOKS</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>제작 @MJ</footer>
    </div>
  )
}

export default GlobalLayout
