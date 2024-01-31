'use strict'
//
const gOriginalSize = { currWidth: 100, currHeight: 100 }
//

function onBallClick() {
    const elBall = document.querySelector(".ball")
    const maxDiameter = 400

    gOriginalSize.currWidth += getRandomInt(20, 60)
    gOriginalSize.currHeight += getRandomInt(20, 60)
    if (gOriginalSize.currWidth >= maxDiameter || gOriginalSize.currHeight >= maxDiameter) {
        gOriginalSize.currWidth = 100
        gOriginalSize.currHeight = 100
    }

    elBall.innerText = gOriginalSize.currWidth
    elBall.style.width = gOriginalSize.currWidth + 'px'
    elBall.style.height = gOriginalSize.currHeight + 'px'
    elBall.style.backgroundColor = getRandomColor()
}
