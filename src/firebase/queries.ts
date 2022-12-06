import { IProduct } from './../pages/productPage/productPage';
import { collection, doc, getDocs, query, where,getDoc } from 'firebase/firestore'
import { db } from './config'

import { DocumentReference } from '@firebase/firestore'

interface IDepartment {
  id: string
  name: string
  imageUrl: string
}

// Gets all Departments from firestore database.
const getAllDepartments = async () => {
  const docs = await getDocs(collection(db, 'departments'))
  const departments: IDepartment[] = []
  docs.forEach((doc) => {
    departments.push({ name: doc.data().name, id: doc.id, imageUrl: doc.data().imageUrl })
  })
  return departments
}

export interface ICategory {
  id: string
  name: string
  imageUrl: string
  subdepartmentId: DocumentReference
}

// Gets all categories that have their subDepartmentId field set to provided subdepartment reference.
const getCategoriesBySubdepartment = async (subdepartmentRef: DocumentReference) => {
  const q = query(collection(db, 'categories'), where('subDepartmentId', '==', subdepartmentRef))
  const categoriesSnap = await getDocs(q)
  const categories: ICategory[] = []

  categoriesSnap.forEach((doc) =>
    categories.push({
      id: doc.id,
      name: doc.data().name,
      imageUrl: doc.data().imageUrl,
      subdepartmentId: doc.data().subdepartmentId,
    }),
  )
  return categories
}

// Gets all subdepartments that have their departmentId field set to the reference generated by provided departmentId string.
const getSubdepartmentsWithCategoriesByDepartment = async (departmentId: string) => {
  const departmentRef = doc(db, 'departments', departmentId)
  const q = query(collection(db, 'subdepartments'), where('departmentId', '==', departmentRef))
  const subdepartmentsSnap = await getDocs(q)
  const subdepartments = subdepartmentsSnap.docs.map(async (subdepartment) => {
    const categories = await getCategoriesBySubdepartment(subdepartment.ref)
    return { name: subdepartment.data().name, id: subdepartment.id, categories }
  })
  return Promise.all(subdepartments)
}





const getProductById = async (productId:string) => {
  const productRef = doc(db,'products',productId)
  const productSnap = await getDoc(productRef)
  return productSnap.data()
}

const getProductsByCategory = async (categoryId:string) => {
  const categoryRef = doc(db,'categories',categoryId)
  const qProducts = query(collection(db,'products'), where('categoryId', '==' ,categoryRef)) 
  const qSnapshot = await getDocs(qProducts)
   const products:IProduct[] = qSnapshot.docs.map(snap=>{
    return {
      id:snap.id,
      title:snap.data().title,
      price:snap.data().price,
      description:snap.data().description,
      details:snap.data().details,
      imageUrls:snap.data().imageUrls,
      inStock:snap.data().inStock,
      categoryId,
    }
  })
  return products


}

export { getAllDepartments, getSubdepartmentsWithCategoriesByDepartment,getProductById,getProductsByCategory }
