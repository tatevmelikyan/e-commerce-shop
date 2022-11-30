import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import LoadingPage from '../../pages/loadingPage/loadingPage'
import { selectAllDepartments, fetchDepartments, selectDepartmentsStatus, selectDepartmentsError } from './departmentsSlice'
import { Link } from 'react-router-dom'
import './styles.css'


const DepartmentsNav = () => {
  const dispatch = useAppDispatch()

  const departments = useAppSelector(state => selectAllDepartments(state))
  const departmentsStatus = useAppSelector(selectDepartmentsStatus)
  const error = useAppSelector(selectDepartmentsError)

  useEffect(() => {
    if(departmentsStatus === 'idle') {
      dispatch(fetchDepartments())
    }
  }, [departmentsStatus, dispatch])
  


  const renderedDepartments = departments.map(department => {
   return (
   <li 
    key={department.id}
    className="department-list-item">
      <Link to={`/${department.id}`}>{department.name}</Link>
      </li>
      )
  })

  let content 
  if(departmentsStatus === 'loading') {
    content = <LoadingPage />
  } else if(departmentsStatus === 'succeeded') {
    content = <ul className='departments-list'>{renderedDepartments}</ul>
  } else if(departmentsStatus === 'failed') {
    content = <div>{error}</div>
  }

  return (
    <div className='departments-nav'>
      {content}
    </div>
  )
}

export default DepartmentsNav