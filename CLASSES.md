#Class Structure


This document describes the Class structure used in the "Breaking Bricks" project.

###Game

**Structure*

    makeNewGame

  - **proto**

    startGame

    initGame

    setKeyboardEvent

    getState

    loop

    definePadDirection

    ballCollisions

    ballCollideWithObject

    ballCollideWithBricks

    ballCollideWithWindow

    movePad

    lose

    win

###Canvas

**Structure*

    makeNewCanvas

  - **proto**
   
  start

  render
  
  drawObject
  
  drawBall
  
###Pad

**Structure*

    makeNewPad

  - **proto**
  
  changeDirection

###Ball

**Structure*

    makeNewBall

  - **proto**
  
  changeDirectionX

  changeDirectionY

###Brick

**Structure*

    makeNewBrick
    
    resetId




