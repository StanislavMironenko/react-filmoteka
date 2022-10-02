import { useEffect, useState } from 'react';
import { IProduct } from '../models';
import axios,{AxiosError} from 'axios';


export function useProducts() {
      const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] =useState(false)
  const [error, setError] =useState('')
  

  async function fetchProducts() {
try {
  setLoading(true)
  const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=10')
  setProducts(response.data)
  setLoading(false)
  
} catch (e: unknown) {
    setLoading(false)
  const error=e as AxiosError
  setError(error.message)
   setLoading(false)
}
    
  }
  useEffect(() => {
  fetchProducts()
  }, [])
    return{products,loading,error}
}