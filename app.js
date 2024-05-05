let color = document.getElementById('color')

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max-min) + min)
}
console.log(getRandomArbitrary(0, 256))

function generateRGBChannels() {
    let rgbChannels = []
    for (let i = 0; i < 3; i++) {
        rgbChannels.push(getRandomArbitrary(0, 256))
    } 
    return rgbChannels
}

function colorChange() {
    let rgbChannels = generateRGBChannels()
    let colorNew = `rgb(${rgbChannels[0]},${rgbChannels[1]},${rgbChannels[2]})`
    document.body.style.backgroundColor = colorNew

    color.textContent = colorNew
}