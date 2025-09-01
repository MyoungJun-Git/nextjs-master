'use client'

import React from 'react'
import { BooksData } from '@/types/books-type'

type BookItemProps = {
    data: BooksData[]
}

const BookItem = ({ data = [] }: BookItemProps) => {
    return (
        <>
            {data.map((innerData) => (
                <div key={innerData.id}>
                    <div>{innerData.title}</div>
                    <div>{innerData.subTitle}</div>
                    <div>{innerData.author}</div>
                    <div>{innerData.publisher}</div>
                    <div>{innerData.description}</div>
                </div>
            ))}
        </>
    )
}

export default BookItem
