import { useAppDispatch } from '../redux/store'

const Reset = () => {
  const dispatch = useAppDispatch()
  return (
    <div className="flex items-center justify-center ">
      <button
        className="w-64 sm:w-72 md:w-80 h-8 bg-gray-700 px-2 rounded-lg hover:text-red-200 duration-300 hover:bg-opacity-50 "
        onClick={() => {}}>
        RESET
      </button>
    </div>
  )
}

export default Reset
