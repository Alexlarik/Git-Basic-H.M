'use strict'
//
const gOriginalSize = { currWidth: 100, currHeight: 100 }
//

function onBallClick() {
    const elBall = document.querySelector(".ball")

    gOriginalSize.currWidth += 50
    gOriginalSize.currHeight += 50

    elBall.innerText = gOriginalSize.currWidth
    elBall.style.width = gOriginalSize.currWidth + 'px'
    elBall.style.height = gOriginalSize.currHeight + 'px'
}
// to increment the ball’s width & height by 50px and