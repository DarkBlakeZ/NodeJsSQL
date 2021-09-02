import {Router} from 'express'
import { getProducts, createNewProduct, getProductById, deleteProductById } from '../controllers/products.controller'

const router = Router()

router.get('/products', getProducts)

router.get('/products/:id', getProductById)

router.post('/products', createNewProduct)

router.delete('/products/:id', deleteProductById)

router.put('/products', getProducts)

export default router