import React,{useEffect,useState} from 'react'
import { useAppSelector,  useAppDispatch} from '../../../../../app/hooks'
import { fetchedCategories } from './categoriesToFilterSlice'

export default function CategoriesToFilter() {
    const dispatch = useAppDispatch()
    const categories = useAppSelector((state) => state.allCategories.allCategories)

    useEffect(() => {
        dispatch(fetchedCategories())
      }, [])


  return (
    <div>CategoriesToFilter</div>
  )
}


