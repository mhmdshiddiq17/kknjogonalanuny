"use client"
import React from 'react'
import styles from './pagination.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


const Pagination = ({count}: any) => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 3 ;

  const page = (searchParams.get('page') || '1').toString();
  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: any) => {
    type === "prev" ? params.set("page", `${parseInt(page)-1}`) : params.set("page", `${parseInt(page)-1}`);
    replace(`${pathname}?${params}`);
  }
  return (
    <div className={styles.container}>
        <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage('prev')}>Previous</button>
        <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage('next')}>Next</button>
    </div>
  )
}

export default Pagination
