/**
 * 定义发送ajax的函数
 */
import axios from 'axios'
export default function ajax (url,data={},methods='GET') {
  return new Promise((resolve,reject) => {
    let promise
    if (methods === 'GET') {
      promise = axios.get(url,{params:data})
    }else if (methods === 'POST') {
      promise = axios.post(url,data)
    }
    promise
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        alert(error)
      })
  })

}
