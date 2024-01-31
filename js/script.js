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

    for (var i = 0; i < elBalls.length && i < 2; i++) {
        const ball = elBalls[i]
        onBallClick(ball)
    }
}
function onFourthBallClick() {
    const elBalls = document.querySelectorAll(".ball")
    for (var i = 0; i < elBalls.length && i < 2; i++) {
        const ball = elBalls[i]
        reduceBall(ball)
    }
}
function reduceBall(ball) {
    const minDiameter = 100

    var currWidth = parseInt(ball.style.width)
    var currHeight = parseInt(ball.style.height)

    var newWidth = (currWidth - getRandomInt(20, 60))
    var newHeight = (currHeight - getRandomInt(20, 60))

    newWidth = Math.max(newWidth, minDiameter)
    newHeight = Math.max(newHeight, minDiameter)

    ball.innerText = newWidth
    ball.style.width = newWidth + 'px'
    ball.style.height = newHeight + 'px'

}

function onFifthBallClick() {
    document.body.style.backgroundColor = getRandomColor()
}

