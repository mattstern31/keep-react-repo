'use client'
import { useState } from 'react'
import { Pagination } from '~/src'

const PaginationWithBorder = () => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={30}
      iconWithOutText={true}
      paginateWithBorder={true}
      prevNextShape="circle"
    />
  )
}

const PaginationWithBorderCode = `
"use client";
import { useState } from "react";
import { Pagination } from "keep-react";

export const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      totalPages={30}
      iconWithOutText={true}
      paginateWithBorder={true}
      prevNextShape="circle"
    />
  );
}
`

export { PaginationWithBorder, PaginationWithBorderCode }
