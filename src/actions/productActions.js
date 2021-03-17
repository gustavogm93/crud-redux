import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITO,
  COMENZAR_DESCARGA_PRODUCTOS,
} from '../types'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'

export function createNewProductAction(product) {
  return async dispatch => {
    dispatch(addProduct())

    try {
      await clienteAxios.post('/productos', product)

      Swal.fire('Correct', 'the product was added sucessfully', 'success')

      dispatch(addProductSuccess(product))
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'an error has ocurred',
        text: 'try again!',
      })
      dispatch(addProductFailed(true))
    }
  }
}

const addProduct = () => ({
  type: AGREGAR_PRODUCTO,
})

const addProductSuccess = product => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: product,
})

const addProductFailed = e => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: e,
})
const getProducts = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true,
})
const getProductsSucessful = products => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: products,
})
const getProductsError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: true,
})

export function getProductsAction() {
  return async dispatch => {
    dispatch(getProducts())

    try {
      const response = await clienteAxios.get('/productos')
      dispatch(getProductsSucessful(response.data))
    } catch (error) {
      dispatch(getProductsSucessful(getProductsError))
    }
  }
}
