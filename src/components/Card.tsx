import a from './../assets/vision/anemo.svg'
import c from './../assets/vision/cryo.svg'
import d from './../assets/vision/dendro.svg'
import h from './../assets/vision/hydro.svg'
import e from './../assets/vision/electro.svg'
import g from './../assets/vision/geo.svg'
import p from './../assets/vision/pyro.svg'

import { CardProps } from './../types'

const Card = ({ url, name, star, vision }: CardProps) => {
  return (
    <div className="relative w-64 h-72 sm:w-72 sm: md:w-80 bg-gray-700 p-2 mx-auto items-center flex justify-center flex-col rounded-xl my-4 group-img hover:drop-shadow-2xl duration-500">
      <img
        src={url}
        alt={name}
        className="mx-auto w-44 md:w-44 hover:scale-110 rounded-full duration-500"
      />
      <h2 className="text-xl uppercase text-font-color font-bold">{name}</h2>
      <h2>{star == 3 ? '⭐⭐⭐' : star == 4 ? '⭐⭐⭐⭐' : '⭐⭐⭐⭐⭐'}</h2>
      <img
        src={
          vision == 'anemo'
            ? a
            : vision == 'cryo'
            ? c
            : vision == 'dendro'
            ? d
            : vision == 'electro'
            ? e
            : vision == 'hydro'
            ? h
            : vision == 'geo'
            ? g
            : vision == 'pyro'
            ? p
            : null
        }
        alt={vision}
        className="absolute top-0 right-0 w-12 p-1"
      />
    </div>
  )
}

export default Card
