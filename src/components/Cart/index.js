import {Component} from 'react'

import Header from '../Header'
import Footer from '../Footer'

import CartContext from '../../Context/CartContext'
import NoOrdersAt from '../NoOrdersAt'
import CartList from '../CartList'

import './index.css'

class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const isCartEmpty = cartList.length === 0

          return (
            <>
              <Header />
              <div className="cart-container">
                {isCartEmpty ? <NoOrdersAt /> : <CartList />}
              </div>
              <Footer />
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Cart
