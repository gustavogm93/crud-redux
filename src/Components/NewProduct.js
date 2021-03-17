import { createNewProductAction } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const newProduct = ({ history }) => {
  const [name, saveName] = useState('')
  const [price, savePrice] = useState(0)

  //use dispatch for create Function
  const dispatch = useDispatch()

  //Call action from createNewProductAction
  const addProduct = product => dispatch(createNewProductAction(product))

  //access store state
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)

  // when user click on submit
  const submitNewProduct = e => {
    e.preventDefault()
    if (name.trim === '' || price <= 0) {
      return
    }
    addProduct({
      name,
      price,
    })

    //Redirect when finished
    history.push('/')
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Add New Product</h2>
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Name Product</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name Product"
                  name="name"
                  value={name}
                  onChange={e => saveName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Price"
                  name="price"
                  value={price}
                  onChange={e => savePrice(Number(e.target.value))}
                />
              </div>

              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                Agregar
              </button>
            </form>
            {loading ? <p>Cargando...</p> : null}
            {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default newProduct
