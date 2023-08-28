import { starFilter } from '../constant'

const Star = () => {
  return (
    <div className="space-x-3 flex justify-center items-center">
      {starFilter.map((sD) => {
        return (
          <button type="button" key={sD.id} onClick={() => {}}>
            {sD.stars}
          </button>
        )
      })}
    </div>
  )
}

export default Star
