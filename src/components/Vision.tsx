import { visionFilter } from '../constant'

const Vision = () => {
  return (
    <div>
      {visionFilter.map((vD) => {
        return (
          <button type="button" key={vD.id} className="" onClick={() => {}}>
            <img
              src={vD.src}
              alt=""
              className={`w-10 mx-1 rounded-full 
           `}
            />
          </button>
        )
      })}
    </div>
  )
}

export default Vision
