const moveRandom = () => {
  const btn = document.getElementById('noBtn')
  const screenWidth = window.screen.availWidth - 100
  const screenHeight = window.screen.availHeight - 140
  const topVal = Math.floor(Math.random() * (screenHeight + 1))
  const leftVal = Math.floor(Math.random() * (screenWidth + 1))
  btn.style.top = `${topVal}px`
  btn.style.left = `${leftVal}px`
}

const yesClick = () => {
  const startQuestionBlock = document.getElementById('startQuestion')
  const firstQuestionBlock = document.getElementById('firstQuestion')
  const mainTestBlock = document.getElementById('mainTest')

  startQuestionBlock.style.opacity = 0
  setTimeout(() => {
    startQuestionBlock.style.display = 'none'
    mainTestBlock.style.display = 'flex'
  }, 500)
  setTimeout(() => {
    mainTestBlock.style.opacity = 1
    firstQuestionBlock.style.opacity = 1
  }, 600)
  
  mainTest
}

let questionNumber = 1
let percentage = 0

const next = () => {
  const nextButton = document.getElementById('nextBtn')
  nextButton.style.display = 'block'
  setTimeout(() => {
    nextButton.style.opacity = 0
  }, 10) 
  const progressBar = document.getElementById('filler')
  let isCorrect = true
  let questionBlock = null
  let nextQuestionBlock = null
  let checkedAnswer = null

  switch (questionNumber) {
    case (1):
      questionBlock = document.getElementById('firstQuestion')
      nextQuestionBlock = document.getElementById('secondQuestion')
      checkedAnswer = document.querySelector('input[name="firstAnswer"]:checked').value
      if (checkedAnswer !== 'Нася') {
        isCorrect = false
      } else {
        percentage += 25 
        questionBlock.style.opacity = 0
        setTimeout(() => {
          questionBlock.style.display = 'none'
          nextQuestionBlock.style.display = 'flex'
          setTimeout(() => {
            nextQuestionBlock.style.opacity = 1
          }, 10) 
        }, 300)
      }
      break
    case (2):
      questionBlock = document.getElementById('secondQuestion')
      nextQuestionBlock = document.getElementById('thirdQuestion')
      checkedAnswer = document.querySelector('input[name="secondAnswer"]:checked').value
      if (checkedAnswer !== 'Так') {
        isCorrect = false
      } else {
        percentage += 25 
        questionBlock.style.opacity = 0
        setTimeout(() => {
          questionBlock.style.display = 'none'
          nextQuestionBlock.style.display = 'flex'
          setTimeout(() => {
            nextQuestionBlock.style.opacity = 1
          }, 10) 
        }, 300)
      }
      break
    case (3):
      questionBlock = document.getElementById('thirdQuestion')
      nextQuestionBlock = document.getElementById('fourthQuestion')
      checkedAnswer = document.querySelector('input[name="thirdAnswer"]:checked').value
      if (checkedAnswer !== 'Так') {
        isCorrect = false
      } else {
        percentage += 25 
        questionBlock.style.opacity = 0
        setTimeout(() => {
          questionBlock.style.display = 'none'
          nextQuestionBlock.style.display = 'flex'
          setTimeout(() => {
            nextQuestionBlock.style.opacity = 1
          }, 10) 
        }, 300)
      }
      break
    case (4):
      questionBlock = document.getElementById('fourthQuestion')
      // nextQuestionBlock = document.getElementById('win')
      checkedAnswer = document.querySelector('input[name="fourthAnswer"]:checked').value
      if (checkedAnswer !== 'Так') {
        isCorrect = false
      } else {
        percentage += 25 
        questionBlock.style.opacity = 0
        setTimeout(() => {
          questionBlock.className += ' hidden'
          // nextQuestionBlock.style.display = 'flex'
          setTimeout(() => {
            // nextQuestionBlock.style.opacity = 1
          }, 10) 
        }, 300)
      }
      break
  }

  questionBlock.style.marginBottom = '0px'

  if (!isCorrect) {
    const mainTestBlock = document.getElementById('mainTest')
    const looseScreen = document.getElementById('loose')
    mainTestBlock.style.opacity = 0
    setTimeout(() => {
      mainTestBlock.style.display = 'none'
      looseScreen.style.display = 'flex'
      setTimeout(() => {
        looseScreen.style.opacity = 1
      }, 10)
    }, 300)
  } else {
    progressBar.style.width = `${percentage}%`
  }

  if (questionNumber++ === 4 && isCorrect) {
    setTimeout(() => {
      const mainTestBlock = document.getElementById('mainTest')
      const winScreen = document.getElementById('win')
      mainTestBlock.style.opacity = 0
      setTimeout(() => {
        mainTestBlock.style.display = 'none'
        winScreen.style.display = 'flex'
        setTimeout(() => {
          winScreen.style.opacity = 1
        }, 10)
      }, 300)
    }, 300)
  }

  // questionNumber++
}

const showNextButton = () => {
  if (questionNumber > 4) return

  let questionBlock = null

  switch (questionNumber) {
    case (1):
      questionBlock = document.getElementById('firstQuestion')
      questionBlock.style.marginBottom = '0px'
    case (2):
      questionBlock = document.getElementById('secondQuestion')
      questionBlock.style.marginBottom = '0px'
    case (3):
      questionBlock = document.getElementById('thirdQuestion')
      questionBlock.style.marginBottom = '0px'
    case (4):
      questionBlock = document.getElementById('fourthQuestion')
      questionBlock.style.marginBottom = '0px'
  }

  const nextButton = document.getElementById('nextBtn')
  if (questionNumber === 4) nextButton.innerText = 'Завершити тест'
  
  nextButton.style.display = 'block'
  setTimeout(() => {
    nextButton.style.opacity = 1
  }, 10) 
}