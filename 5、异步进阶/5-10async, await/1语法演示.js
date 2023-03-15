const url = '//cdn.fuwucms.com/a/367722276649/files/c838f566c9ba8365a40731d3ea98f326.jpg'
const url1 = '//cdn.fuwucms.com/a/367713851725/files/f8bba6479ea52ff13baaaa242eabdecc.jpg'
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

async function loadimg1 () {
  const img1 = await loadImg(url)
  return img1
}
async function loadimg2 () {
  const img2 = await loadImg(url1)
  return img2
}

; (async function () {
  const img1 = await loadimg1(url)
  console.log(img1.height, img1.width)
  const img2 = await loadimg2(url1)
  console.log(img2.height, img2.width)
})()