import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITO,
  COMENZAR_DESCARGA_PRODUCTOS,
} from '../types'

// Each reducer has his own state
const initialState = {
  products: [],
  error: null,
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_PRODUCTOS:
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      }
    case AGREGAR_PRODUCTO_EXITO:
      return { ...state, loading: false, products: [...state.products, action.payload] }

    case AGREGAR_PRODUCTO_ERROR:
    case DESCARGA_PRODUCTOS_ERROR:
      return { ...state, loading: false, error: action.payload }

    case DESCARGA_PRODUCTOS_EXITO:
      return { ...state, products: action.payload, error: null, loading: false }

    default:
      return state
  }
}
