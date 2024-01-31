'use strict'
//
const gOriginalSize = { currWidth: 100, currHeight: 100 }
//

function onBallClick(clickedBall) {
    const maxDiameter = 400

    gOriginalSize.currWidth += getRandomInt(20, 60)
    gOriginalSize.currHeight += getRandomInt(20, 60)
    if (gOriginalSize.currWidth >= maxDiameter || gOriginalSize.currHeight >= maxDiameter) {
        gOriginalSize.currWidth = 100
        gOriginalSize.currHeight = 100
    }
    clickedBall.innerText = gOriginalSize.currWidth
    clickedBall.style.width = gOriginalSize.currWidth + 'px'
    clickedBall.style.height = gOriginalSize.currHeight + 'px'
    clickedBall.style.backgroundColor = getRandomColor()
}

function onThirdBallClick() {
    const elBalls = document.querySelectorAll(".ball")

    for (var i = 0; i < elBalls.length - 1; i++) {
        const ball = elBalls[i]
        onBallClick(ball)
    }
}


