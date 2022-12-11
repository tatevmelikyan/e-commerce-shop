import { ISubdepartment } from './../pages/department/subdepartmentsSlice'
import { IProduct } from './../pages/productPage/productPage'
import { collection, doc, getDocs, query, where, getDoc, orderBy } from 'firebase/firestore'
import { db } from './config'

import { DocumentReference, Query, DocumentData, OrderByDirection } from '@firebase/firestore'

export interface IDepartment {
  id: string
  name: string
  imageUrl: string
  subdepartments: ISubdepartment[]
}

// Gets all Departments from firestore database.
const getAllDepartments = async () => {
  const departmentsSnap = await getDocs(collection(db, 'departments'))
  const departments = departmentsSnap.docs.map<Promise<IDepartment>>(async (department) => {
    const subdepartments = await getSubdepartmentsWithCategoriesByDepartment(department.id)
    return {
      id: department.id,
      name: department.data().name,
      imageUrl: department.data().imageUrl,
      subdepartments,
    }
  })
  return Promise.all(departments)
}

export interface ICategory {
  id: string
  name: string
  imageUrl: string
  subdepartmentId: string
}

// Gets all categories that have their subDepartmentId field set to provided subdepartment reference.
const getCategoriesBySubdepartment = async (subDepartmentId: string) => {
  const q = query(collection(db, 'categories'), where('subDepartmentId', '==', subDepartmentId))
  const categoriesSnap = await getDocs(q)
  const categories: ICategory[] = []

  categoriesSnap.forEach((doc) =>
    categories.push({
      id: doc.id,
      name: doc.data().name,
      imageUrl: doc.data().imageUrl,
      subdepartmentId: doc.data().subDepartmentId,
    }),
  )
  return categories
}

const getSubdepartmentsWithCategoriesByDepartment = async (departmentId: string) => {
  const q = query(collection(db, 'subdepartments'), where('departmentId', '==', departmentId))
  const subdepartmentsSnap = await getDocs(q)
  const subdepartments = subdepartmentsSnap.docs.map<Promise<ISubdepartment>>(
    async (subdepartment) => {
      const categories = await getCategoriesBySubdepartment(subdepartment.id)
      return {
        id: subdepartment.id,
        name: subdepartment.data().name,
        departmentId: subdepartment.data().departmentId,
        categories,
      }
    },
  )
  return Promise.all(subdepartments)
}

const getProductById = async (productId: string) => {
  const productRef = doc(db, 'products', productId)
  const productSnap = await getDoc(productRef)
  return {...productSnap.data(),
    id: productSnap.id
  }
}

const getProductsByCategory = async (categoryId: string) => {
  const qProducts = query(collection(db, 'products'), where('categoryId', '==', categoryId))

  const qSnapshot = await getDocs(qProducts)

  const products: IProduct[] = qSnapshot.docs.map((snap) => {
    return {
      id: snap.id,
      title: snap.data().title,
      price: snap.data().price,
      description: snap.data().description,
      details: snap.data().details,
      imageUrls: snap.data().imageUrls,
      inStock: snap.data().inStock,
      categoryId,
    }
  })

  return products
}

// const getSortedProductsByCategory = async(sortOrder: any) => {
// const productsRef = collection(db, 'products')
// const q = query(productsRef, where('categoryId', '==', category), orderBy('price',sortOrder))

// const qSnapshot = await getDocs(q)
// console.log(qSnapshot,'kkkkkkkkkkkkkkkk');

//   const products:IProduct[] = qSnapshot.docs.map(snap=>{
//     console.log('map');

//     return {
//       id:snap.id,
//       title:snap.data().title,
//       price:snap.data().price,
//       description:snap.data().description,
//       details:snap.data().details,
//       imageUrls:snap.data().imageUrls,
//       inStock:snap.data().inStock,
//       categoryId: category.id,
//     }
//   })
//   console.log(products, 'order products  ::::');

//   return products
// }

export {
  getAllDepartments,
  getSubdepartmentsWithCategoriesByDepartment,
  getProductById,
  getProductsByCategory,
}
