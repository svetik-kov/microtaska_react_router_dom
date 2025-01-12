import React from "react"
import { useParams } from "react-router-dom"
import { adidasArr } from "components/pages/Adidas"

export const Model = () => {
  const params = useParams()
  const { id } = params
  console.log(id)
  return (
    <div>
      MODEL: <h3 style={{ color: "steelblue" }}>{adidasArr[Number(id)] && adidasArr[Number(id)].model}</h3>
      <div>price:{adidasArr[Number(id)] && adidasArr[Number(id)].price}  </div>
      <div>< img
        src={adidasArr[Number(id)].picture}
        alt={adidasArr[Number(id)].model}
        style={{ width: "200px", height: "auto", marginRight: "10px" }}
      /></div>


    </div>
  )
}

