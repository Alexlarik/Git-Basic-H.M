'use strict'
//
const gOriginalSize = { currWidth: 100, currHeight: 100 }
//

function onBallClick() {
    const elBall = document.querySelector(".ball")

    gOriginalSize.currWidth += 50
    gOriginalSize.currHeight += 50
    if (gOriginalSize.currWidth > 400 || gOriginalSize.currHeight > 400) {
        gOriginalSize.currWidth = 100
        gOriginalSize.currHeight = 100
    }

    elBall.innerText = gOriginalSize.currWidth
    elBall.style.width = gOriginalSize.currWidth + 'px'
    elBall.style.height = gOriginalSize.currHeight + 'px'
}
