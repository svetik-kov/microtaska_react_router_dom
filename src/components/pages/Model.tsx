import React from "react"
import { useParams } from "react-router-dom"
import { adidasArr } from "components/pages/Adidas"
import { pumaArr } from "components/pages/Puma"

export const Model = () => {
  const params = useParams()
  const { id } = params
  console.log(id)

  const array=[...adidasArr,...pumaArr]
  return (
    <div>
      MODEL: <h3 style={{ color: "steelblue" }}>{array[Number(id)] && array[Number(id)].model}</h3>
      <div>price:{array[Number(id)] && array[Number(id)].price}  </div>
      <div>< img
        src={array[Number(id)].picture}
        alt={array[Number(id)].model}
        style={{ width: "200px", height: "auto", marginRight: "10px" }}
      /></div>


    </div>
  )
}

