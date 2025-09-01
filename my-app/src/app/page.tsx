import styles from '@/styles/src/assets/page.module.css'

import Page from './books/page.tsx'
import SearchableLayout from '@/components/ui-kit/searchable/searchable-layout.tsx'

export default function Home() {
  return (
    <SearchableLayout>
      <div className={styles.container}>
        <Page />
      </div>
    </SearchableLayout>
  )
}
