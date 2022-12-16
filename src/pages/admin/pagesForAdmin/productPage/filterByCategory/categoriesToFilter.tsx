import { useEffect } from 'react'
import { useAppSelector,useAppDispatch } from '../../../../../app/hooks'

import { fetchedCategories } from './categoriesToFilterSlice'

interface IChangingFunction {
  changeCategory: (category: string) => void
  selected: string
}

export default function CategoriesToFilter({ selected, changeCategory }: IChangingFunction) {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchedCategories())
  },[])
  const categories = useAppSelector((state) => state.allCategories.allCategories)

  return (
    <div
      style={{ position: 'absolute', right: '20px' }}
      className='filterByCategory'>
      <label htmlFor='filter'>
        <span>Filter By </span>
        <select
          name=''
          id='filter'
          value={selected}
          onChange={(e) => changeCategory(e.target.value)}
        >
          {' '}
          <option>All Products</option>
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
