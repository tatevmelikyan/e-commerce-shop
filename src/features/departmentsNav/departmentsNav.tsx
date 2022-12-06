import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import LoadingPage from '../../pages/loading/loadingPage'
import {
  selectAllDepartments,
  fetchDepartments,
  selectDepartmentsStatus,
  selectDepartmentsError,
} from './departmentsSlice'
import { NavLink, useNavigate } from 'react-router-dom'
import './styles.css'
import axios from 'axios'

const DepartmentsNav = () => {
  const dispatch = useAppDispatch()

  type hover = {
    categories: [
      {
        id: string
        name: string
        imageUrl: string
        subDepartmentId: string
      },
    ]
    id: string
    name: string
    departmentId: string
  }

  const [hoverDepartments, setHoverDepartments] = useState<hover[]>([])
  const navigate = useNavigate()

  const departments = useAppSelector((state) => selectAllDepartments(state))
  const departmentsStatus = useAppSelector(selectDepartmentsStatus)
  const error = useAppSelector(selectDepartmentsError)

  const [hover, setHover] = useState(false)

  useEffect(() => {
    dispatch(fetchDepartments())
  }, [])

  function onMouse(e: string) {
    async function foo() {
      const response = await axios.get(
        `http://localhost:4000/departments/${e}/subDepartments?_embed=categories`,
      )
      setHoverDepartments(response.data)
    }
    foo()
    setHover(true)
  }

  function ofMouse() {
    setHover(false)
  }

  type nav = {
    departmentId?: string
    id?: string
  }

  function navigateFunc(subdep: nav, category: nav) {
    navigate(`/${subdep.departmentId}/${category.id}`)
    ofMouse()
  }

  const renderedDepartments = departments.map((department) => {
    return (
      <li
        key={department.id}
        className='department-list-item'
        onMouseOver={() => onMouse(department.id)}
      >
        <NavLink to={`/${department.id}`}>{department.name}</NavLink>
      </li>
    )
  })

  let content
  if (departmentsStatus === 'loading') {
    content = <LoadingPage />
  } else if (departmentsStatus === 'succeeded') {
    content = <ul className='departments-list'>{renderedDepartments}</ul>
  } else if (departmentsStatus === 'failed') {
    content = <div>{error}</div>
  }
  return (
    <nav
      onMouseOut={ofMouse}
      className='departments-nav'
    >
      {content}
      <div
        onMouseOver={() => setHover(true)}
        className={hover ? 'caregory-list-hover' : 'caregory-list'}
      >
        {hoverDepartments?.map((subdep) => (
          <div
            key={subdep.id}
            className='subdep'
            onMouseOver={() => setHover(true)}
          >
            <div>
              <b>{subdep.name}</b>
            </div>
            {subdep.categories?.map((category) => (
              <div className='dropDownCategories' key={category.id}>
                <p onClick={() => navigateFunc(subdep, category)}>{category.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default DepartmentsNav
