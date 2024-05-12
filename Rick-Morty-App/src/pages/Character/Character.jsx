import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import './character.scss'
import { ButtonRick } from "../../components/ButtonRick/ButtonRick"

const url_base = 'https://rickandmortyapi.com/api/character'

export const Character = () => {

  const [data, setData] = useState()
  const {id} = useParams();

  useEffect(() => {
    axios
      .get(url_base + `/${id}`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {console.log(err)});
  }, [])

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  console.log(data)

  return (
    <Fragment>
      <div className="characterInfo container">
        {data && <h1>{data.name}</h1>}
        {data &&
          <figure>
            <img src="/assets/images/portal.png" alt="" />
            <img src= {`${data.image}`} alt="" />
          </figure>}
        {data &&
            <article className="details">
            {data.species !== "" && <p className="mb-0">Specie</p>}
            {data.species !== "" && <h3 className="mb-4">{data.species}</h3>}
            {data.type !== "" &&<p className="mb-0">Type</p>}
            {data.type !== "" &&<h3 className="mb-4">{data.type}</h3>}
            {data.gender !== "" &&<p className="mb-0">Gender</p>}
            {data.gender !== "" &&<h3 className="mb-4">{data.gender}</h3>}
            {data.origin.name !== "" &&<p className="mb-0">Origin</p>}
            {data.origin.name !== "" &&<h3 className="mb-4">{data.origin.name}</h3>}
            {data.location.name !== "" &&<p className="mb-0">Location: </p>}
            {data.location.name !== "" &&<h3>{data.location.name}</h3>}
          </article>
        }
      </div>
      <div className="button">
        <ButtonRick onClick = {goBack}>Back</ButtonRick>
      </div>
      
    </Fragment>
  )
}
