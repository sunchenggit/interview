// 1. 异步和同步区别
// 基于JS的单线程语言
// 异步不会阻塞代码执行
// 同步会阻塞代码执行

// 手写Promise加载图片
const url = '//cdn.fuwucms.com/a/367722276649/files/c838f566c9ba8365a40731d3ea98f326.jpg'
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
