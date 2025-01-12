import React from "react"
import { useParams } from "react-router-dom"
import { adidasArr, AdidasItem } from "components/pages/Adidas"
import { pumaArr, PumaItem } from "components/pages/Puma"

export const Model = () => {
  const params = useParams()

  const { id, model } = params
  type CrossModel = {
    [key: string]: AdidasItem[] | PumaItem[]
  }
  const crossModel:CrossModel = {
    adidas: adidasArr,
    puma: pumaArr
  }
  //const array = [...adidasArr, ...pumaArr]

  const currentModel =model ? crossModel[model].find(el => el.id === Number(id)):null
  console.log(currentModel)
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

