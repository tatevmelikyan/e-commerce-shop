import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { departmentsSelector, fetchDepartments } from './departmentsSlice'

const DepartmentsNav = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDepartments())
  }, [])

  const departments = useAppSelector(state => departmentsSelector(state))

  const renderedDepartments = departments.map(department => {
   return (
   <li 
    key={department.id}
    className="department">
      {department.name}
      </li>
      )
  })

  return (
    <div>DepartmentsNav
      {renderedDepartments}
    </div>
  )
}

export default DepartmentsNav