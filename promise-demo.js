function loadImg (src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject(new Error(`图片加载失败 ${src}`))
    }
    img.src = src
  })
}
/*
const url = 'https://cdn.lanyuncms.cn/a/367573698993/files/54211f3149bfe03834268d8891de698f.jpeg'
loadImg(url).then(res => {
  document.body.appendChild(res)
})
*/

const url1 = 'https://cdn.lanyuncms.cn/a/367573698993/files/54211f3149bfe03834268d8891de698f.jpeg'
const url2 = 'https://cdn.lanyuncms.cn/a/367573698993/files/f827d207ca1bb55c32079c3e4de55569.jpeg'
loadImg(url1).then(img1 => {
  console.log(img1.width);
  return img1
}).then(img1 => {
  console.log(img1.height)
  return loadImg(url2)
}).then(img2 => {
  console.log(img2.width)
  return img2
}).then(img2 => {
  console.log(img2.height)
})