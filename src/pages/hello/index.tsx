/*
 * @Description:
 * @Author: ShuaiBi
 * @Date: 2021-05-28 10:06:24
 * @LastEditTime: 2022-06-14 15:00:58
 * @LastEditors:
 */
import React, { useState, ChangeEvent } from 'react'
import http from '@/core/http'
// import { useHistory } from 'react-router-dom'

export default function Index() {
  const [value, setValue] = useState<string>('')
  // const history = useHistory()
  // const aa = () => {

  // }
  const onget = async() => {
    const res = await http.get('hello?id=123')
    console.log(res)
  }

  const onException = async() => {
    const res = await http.get(`hello?id=${value}`)
    console.log(res)
  }

  console.log('1245')

  return (
    <div style={{ textAlign: 'center', paddingTop: '10vh' }}>
      <button onClick={onget}>get</button>

      <br />
      <input
        type="text"
        value={value}
        onInput={(event: ChangeEvent<HTMLInputElement>) => {
          const element = (event.target as HTMLInputElement).value
          setValue(element)
        }}
      />
      <button onClick={onException}>Exception</button>
    </div>
  )
}
