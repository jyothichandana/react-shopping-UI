
import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
      <div className='left'>
        <div className='title'>Shopping Mall</div>

      </div>
      <div className='center'>
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className='search'>
        <input type='text' placeholder='search....'></input>

      </div>
      <div className='right'>
        <div className='Signin'>Signin/signup</div>
      </div>
      <div className='cart'>Cart</div>
    </div>
  )
}

export default Header