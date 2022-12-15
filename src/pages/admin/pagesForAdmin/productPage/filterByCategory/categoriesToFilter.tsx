import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../../app/hooks'
import { fetchedCategories } from './categoriesToFilterSlice'
import { filterCategory } from '../productSlice'

// interface ICategoryOption {
//   value: COrder
//   text: 'All Products' |  string
// }

// export type COrder = 'All Products' | string

export default function CategoriesToFilter() {
  const [selected, setSelected] = useState('All Products')
  const dispatch = useAppDispatch()
  const categories = useAppSelector((state) => state.allCategories.allCategories)

  useEffect(() => {
    dispatch(fetchedCategories())
  }, [])



  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value)
  }

  return (
    <div className='filterByCategory'>
      <label htmlFor='filter'>
        <span>Filter By </span>
        <select
          name=''
          id='filter'
          value={selected}
          onChange={changeCategory}
        >
          {' '}
          <option>All Products</option>
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.name}
            >
              {category.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
