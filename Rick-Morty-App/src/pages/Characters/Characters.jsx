import { useEffect, useState } from 'react'
import './characters.scss'
import axios from 'axios'
import { CardRick } from '../../components/CardRick/CardRick'
import { Pagination } from '../../components/Pagination/Pagination'
import { FilterRick } from '../../components/FilterRick/FilterRick'

const url_base = 'https://rickandmortyapi.com/api/character'

export const Characters = () => {

  const [data, setData] = useState()
  const [url, setUrl] = useState(url_base)
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
  
    axios
      .get(url)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [url])

  const changePage = (page) => {
    if (filter && search) {
      setUrl(url_base + `?page=${page}&${filter}=${search}`)
      setPage(page)
    }else{
      setUrl(url_base + `?page=${page}`)
      setPage(page)
    }

  }

  const filterPage = (filter, search) => {
    setUrl(url_base + `/?${filter}=${search}`)
    setPage(1)
  }

  return (
    <main>
      <section className='characters'>
          {data && <FilterRick filterPage = {filterPage} filter = {filter} setFilter = {setFilter} search = {search}
          setSearch = {setSearch} />}
          <h1>Page {page}</h1>
          {data && <Pagination page = {page} changePage = {changePage} data = {data} filter = {filter}/>}
        <div className='info container pb-5'>
      
          {data?.results.map (elem => {
            return(
              <CardRick key={elem.id} data = {elem} page = {page}/>
            );
          })}
        </div>
      </section>
    </main>
  )
}
