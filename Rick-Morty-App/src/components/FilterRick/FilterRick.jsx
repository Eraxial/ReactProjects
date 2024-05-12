/* eslint-disable react/prop-types */
import './filterrick.scss'

export const FilterRick = ({filterPage, filter, setFilter, search, setSearch}) => {

  const handleChange = (event) => {
    console.log(event.target.id)

    if (event.target.type === 'radio'){
      setFilter(event.target.id);
    }else if (event.target.type === 'text'){
      setSearch(event.target.value);
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    filterPage(filter, search);
  }

  const reset = () => {
    setFilter();
    setSearch();
  }

  return (
    <form className='filter px-3' onSubmit={onSubmit}>
      <label htmlFor="name">
        <input type="radio" name = 'filter' id="name" value={filter} onChange={handleChange}/>
        <p className='mb-0 label'>name</p>
      </label>
{/* 
      <label htmlFor="episode">
        <input type="radio" name = 'filter' id="episode" value={filter} onChange={handleChange}/>
        <p className='mb-0 label'>episode</p>
      </label>

      <label htmlFor="location">
        <input type="radio" name = 'filter' id="location" value={filter} onChange={handleChange}/>
        <p className='mb-0 label'>location</p>
      </label> */}

      <input className='search' name='search' type="text" value={search} onChange={handleChange} />
      <div className='buttons'>
        <button type='reset' onClick={reset}> reset</button>
        <button>search</button>
      </div>

    </form>
  )
}
