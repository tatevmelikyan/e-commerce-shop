import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  fetchSubDepartments,
  selectSubDepartmentsByDepartment,
  selectSubDepartmentsError,
  selectSubDepartmentsStatus,
} from './departmentPageSlice'

import { Link } from 'react-router-dom'
import './styles.css'

const DepartmentPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const { departmentId } = useParams()

  const subDepartments = useAppSelector(selectSubDepartmentsByDepartment)
  const subDepartmentsStatus = useAppSelector(selectSubDepartmentsStatus)
  const error = useAppSelector(selectSubDepartmentsError)

  useEffect(() => {
    if (subDepartmentsStatus === 'idle' || subDepartmentsStatus === 'succeeded') {
      dispatch(fetchSubDepartments(departmentId as string))
    }
  }, [departmentId, dispatch])

  const renderedSubDepartments = subDepartments.map((subDepartment) => {
    return (
      <div
        key={subDepartment.id}
        className='subDepartment'
      >
        <span className='subDepartment-name'>{subDepartment.name}</span>
        <div className='categories-container'>
          {subDepartment.categories.map((category) => {
            return (
              <div
                key={category.id}
                className='category'
              >
                <Link to={`/${departmentId}/${category.id}`}>
                  <img
                    src={category.imageUrl}
                    alt='category'
                    className='category-image'
                  />
                  <span className='category-name'>{category.name}</span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  })

  return (
    <div className='department-page'>
      <h2>{departmentId}</h2>
      {renderedSubDepartments}
    </div>
  )
}

export default DepartmentPage
