import React from 'react'
import './Header.css'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='header' id="home">
      <div className='header-content'>
        <h1 className='gradient__text' > We make it easy for you to plug into web3 </h1>
        <p> Just with one tap of your finger</p>
        <button type='button'> connect </button>
      </div>
      <div className='header-image'>
          <img src={ai} alt="ai"  />
      </div>
    </div>
  )
}

export default Header
