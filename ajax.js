// const xhr = new XMLHttpRequest()
// xhr.open('GET', './data/test.json', true)
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       // alert(xhr.responseText)
//       console.log(JSON.parse(xhr.responseText))
//     } else {
//       console.log('请求失败')
//     }
//   }
// }
// xhr.send(null)

// const xhr = new XMLHttpRequest()
// xhr.open('POST', './login', true)
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       alert(xhr.responseText)
//       // console.log(JSON.parse(xhr.responseText))
//     } else {
//       console.log('请求失败')
//     }
//   }
// }
// const postData = {
//   userName: 'zhangsan',
//   password: 'xxx'
// }
// xhr.send(JSON.stringify(postData))

function ajax (url) {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        } else if (xhr.status === 404) {
          reject(new Error('404 not found'))
        }
      }
    }
    xhr.send(null)
  })
  return p
}

const url = './data/test.json'
ajax(url).then(res => console.log(res)).catch(err => console.log(err))