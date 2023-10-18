const catImg = document.querySelector('#cat')
const foxImg = document.querySelector('#fox')

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = () => resolve(img)
        img.onerror = () => reject(img)
    })
}

Promise.all([
    loadImage('cat.gif'),
    loadImage('fox.gif')
]).then(([cat, fox]) => {
    catImg.style.backgroundImage = `url(${cat.src})`
    foxImg.style.backgroundImage = `url(${fox.src})`
})
