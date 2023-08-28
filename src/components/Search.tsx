import { useState } from 'react'

const Search = () => {
  const [keyword, setKeyword] = useState<string>('')
  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-700 w-64 sm:w-72 md:w-80 h-8 flex items-center justify-between mx-auto md:mx-0 rounded-lg px-2">
        <input
          type="text"
          className=" md:mt-0 w-full md:mx-0 bg-gray-700  active:border-0 text-font-color outline-none bg-transparent placeholder:text-font-color placeholder:text-center"
          placeholder="SEARCH"
          required
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value)
          }}
        />
      </div>
    </div>
  )
}

export default Search
