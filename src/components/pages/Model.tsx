import React from "react"
import { useParams } from "react-router-dom"
import { adidasArr } from "components/pages/Adidas"
import { pumaArr } from "components/pages/Puma"
import { Error404 } from "components/pages/Error404"

export const Model = () => {
  const params = useParams()
  const { id } = params
  console.log(id)

  const array = [...adidasArr, ...pumaArr]

  const currentModel=array.find(el=>el.id===Number(id))
  return (
    <div>
      {currentModel ?
        <>
          MODEL: <h3 style={{ color: "steelblue" }}>{currentModel.model}</h3>
          <div>price:{currentModel.price}  </div>
          <div>
            < img
              src={currentModel.picture}
              alt={currentModel.model}
              style={{ width: "200px", height: "auto", marginRight: "10px" }}
            />
          </div>
        </>
        : <h2> Такой модели не существует</h2>}

    </div>
  )
}

