/*
 * @Description:
 * @Author: ShuaiBi
 * @Date: 2021-05-28 10:06:23
 * @LastEditTime: 2022-06-09 11:46:02
 * @LastEditors:
 */
import React from 'react'
import ReactDOM from 'react-dom'
import preHandle from './pre/prehandle'
import './index.css'
import Routers from './pages/router'

const App = () => (
  <div className="app" id="app">
    <Routers />
  </div>
)

preHandle()
  .then(() => {
    ReactDOM.render(
      <App />,
      document.getElementById('root'),
    )
  })
