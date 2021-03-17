import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { getProductsAction } from '../actions/productActions'

const Products = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    //Request API
    const loadProducts = () => dispatch(getProductsAction())
    loadProducts()
  }, [])

  return (
    <Fragment>
      <h2 className="text-center my-5">Products List</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
      </table>
    </Fragment>
  )
}

export default Products
