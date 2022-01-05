import {Component} from 'react'

import './index.css'

class Counter extends Component {
  render() {
    const {quantity, onincresedBtnClick, onDecreaseBtnClick} = this.props
    const onclickBtn = () => {
      onincresedBtnClick()
    }
    const onclickdecBtn = () => {
      onDecreaseBtnClick()
    }

    return (
      <div className="cart-counter">
        <button
          testid="decrement-quantity"
          type="button"
          className="inc-btn"
          onClick={onclickdecBtn}
        >
          -
        </button>
        <div testid="item-quantity">{quantity}</div>
        <button
          testid="increment-quantity"
          type="button"
          className="inc-btn"
          onClick={onclickBtn}
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
