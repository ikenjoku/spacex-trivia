import React, { useState } from "react"

export function usePagination(data, limit) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(data.length / limit)

  function currentData() {
    const beginAt = (currentPage - 1) * limit
    const endAt = beginAt + limit
    return data.slice(beginAt, endAt)
  }

  function goNext() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages))
  }

  function goBack() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))
  }

  function goToPage(page) {
    const pageNumber = Math.max(1, page)
    setCurrentPage(() => Math.min(pageNumber, totalPages))
  }

  return {
    goNext,
    goBack,
    goToPage,
    currentData,
    currentPage,
    totalPages
  }
}
