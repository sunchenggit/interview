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

const url1 = 'https://cdn.lanyuncms.cn/a/367573698993/files/54211f3149bfe03834268d8891de698f.jpeg'
const url2 = 'https://cdn.lanyuncms.cn/a/367573698993/files/f827d207ca1bb55c32079c3e4de55569.jpeg'

/*
!(async function () {
  const img1 = await loadImg(url1)
  console.log(img1.width, img1.height)
  const img2 = await loadImg(url2)
  console.log(img2.width, img2.height)
})()
*/

async function loadimg1 () {
  const img1 = await loadImg(url1)
  return img1
}

async function loadimg2 () {
  const img2 = await loadImg(url2)
  return img2
}

!(async function () {
  const img1 = await loadimg1()
  console.log(img1.width, img1.height)
  const img2 = await loadimg2()
  console.log(img2.width, img2.height)
})()