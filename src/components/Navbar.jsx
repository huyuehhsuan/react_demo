import React from 'react'
import './navbar.scss'
const navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="line top_line">
        <div className="logo">
          logo
        </div>
        <ul className='items_list'>
          <li className='item'>
            <div>中文</div>
          </li>
          <li className='item'>
            <div>TWD</div>
          </li>
          <li className='item'>
            <div>客服中心</div>
          </li>
          <li className='item'>
            <div>最近逛過</div>
          </li>
          <li className='item'>
            <div>註冊</div>
          </li>
          <li className='item'>
            <div>登入</div>
          </li>
        </ul>
        </div>
        <div className="line bootom_line">
        bootom_line
        </div>
      </div>
    </div>
  )
}

export default navbar