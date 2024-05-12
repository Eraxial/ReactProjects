/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { Fragment, useEffect, useState } from 'react';
import './pagination.scss'

export const Pagination = ({page, changePage, data}) => {

  const [pagination, setPagination] = useState([])
  let maxPages = data?.info.pages;
  
  console.log(maxPages, data, pagination)

  useEffect(() => {
    printButtons()
  }, [page])

  const printButtons = () => {
    const paginationProv = [];
    if (maxPages > 5 && page < 39){
      for (let i = page; i < page + 5; i ++){
        paginationProv.push(i)
      } 
      setPagination(paginationProv)
    }else if (maxPages > 5 && page > 39){
      for (let i = 38; i < maxPages + 1; i ++){
        paginationProv.push(i)
      } 
      setPagination(paginationProv)
    }else if (maxPages <= 5 && page === 1) {
      for (let i = page; i <= maxPages; i ++){
        paginationProv.push(i)
      } 
      setPagination(paginationProv)
    }
    /* const paginationProv = [];
    if (page < 39 ){
      for (let i = 0; i < 5; i ++){
        paginationProv.push(page + i)
      } 
      setPagination(paginationProv)
    }else if (maxPages < 5) {
      for (let i = 0; i < maxPages; i ++){
        paginationProv.push(page + i)
      } 
      setPagination(paginationProv)

    }else {
      for (let i = 38; i < maxPages + 1; i ++){
        paginationProv.push(i)
      } 
      setPagination(paginationProv)
    } */
  }

  console.log(page, pagination)

  return (
    <div className="pages">

      {page !== 1 && 
      <button 
        className='me-4' 
        onClick={() => changePage(page - 1)} 
        > 
        <img className='arrow' src="/assets/images/icons/prev.png" alt="" />
      </button>
      }
      {pagination?.map(elem => {
        return(
          <button 
            className='numeros' 
            key={elem} 
            onClick={() => changePage(elem)}
            >
            {elem}
          </button>
        )
      }) 
      }
      {page < (maxPages - 4) && 
        <Fragment>
          <p className='numeros'>...</p>
          <button className='numeros' 
            onClick={() => changePage(maxPages)}
            >
            {maxPages}
          </button>
        </Fragment>
      }
      {page !== maxPages && 
        <button 
          className='ms-4' 
          onClick={() => changePage(page + 1)}
          > 
          <img className='arrow' src="/assets/images/icons/next.png" alt="" />
        </button>
      }
    </div>
  )
}
