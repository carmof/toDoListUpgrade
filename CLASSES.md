#Class Structure


This document describes the Class structure used in the "Breaking Bricks" project.

###Game

This class controls the entire system [model]. It is related to the classes Pad, Ball and Brick, where it saves their states. It is also related to the Class Canvas, because it needs to call Canvas to update the view. 

**Structure**

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

This class is responsable to control the [view], is is used by Game.

**Structure**

    makeNewCanvas

  - **proto**
   
  start

  render
  
  drawObject
  
  drawBall
  
###Pad

This class stores the Pad state.

**Structure**

    makeNewPad

  - **proto**
  
  changeDirection

###Ball

This class stores the Ball state.

**Structure**

    makeNewBall

  - **proto**
  
  changeDirectionX

  changeDirectionY

###Brick

This class stores the Bad state.

**Structure**

    makeNewBrick
    
    resetId




