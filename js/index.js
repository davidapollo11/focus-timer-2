import Sounds from "./sounds.js"
import { buttonPlay,
buttonPause,
buttonStop,
buttonSet,
buttonAddTime,
buttonSubTime,
buttonForest,
buttonRain,
buttonCoffe,
buttonFireplace,
buttonLight,
buttonDark,
minutesDisplay,
secondsDisplay,
buttonVolume
} from "./elements.js"
import Dark from "./dark.js"
import Light from "./light.js"

let initialMinutes = minutesDisplay.textContent
let minutes = Number(minutesDisplay.textContent)
let currentSeconds = 0
let currentMinutes

let countdownTime

const sound = Sounds()
const dark = Dark()
const light = Light()


function updateDisplay(minutes, seconds) {
  if (minutes < 0) {
    minutes = 0
  }
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function addTime() {
  currentMinutes = Number(minutes) + 5
  let verification = Number(minutesDisplay.textContent)

  if (verification !== minutes) {
    currentMinutes = currentMinutes - 1
  }

  minutes = currentMinutes
}

function subTime() {
  if(currentMinutes <= 0) {
    return
  }
  
  currentMinutes = Number(minutes) - 5
  let verification = Number(minutesDisplay.textContent)

  if (verification !== minutes) {
    currentMinutes = currentMinutes - 1
  }

  minutes = currentMinutes
}

function resetControls() {
  buttonStop.classList.add('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  buttonSet.classList.remove('hide')
}

function resetSelect() {
  buttonForest.removeAttribute('id', 'select')
  buttonRain.removeAttribute('id', 'select')
  buttonCoffe.removeAttribute('id', 'select')
  buttonFireplace.removeAttribute('id', 'select')
}

function countdown() {
  countdownTime = setTimeout(function() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    let isFinished = seconds <= 0 && minutes <= 0
    
    if (isFinished) {
      updateDisplay(initialMinutes, 0)
      resetControls()
      sound.pauseSounds()
      resetSelect()

      minutes = initialMinutes
      
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, (seconds - 1))
    
    currentSeconds = seconds - 1
    currentMinutes = minutes - 1

    countdown()
  }, 1000) 
}

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonSet.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', function() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')

  clearTimeout(countdownTime)
})

buttonStop.addEventListener('click', function() {
  resetControls()
  clearTimeout(countdownTime)
  updateDisplay(minutes, 0)
})

buttonAddTime.addEventListener('click', function() {
  addTime()
  updateDisplay(currentMinutes, currentSeconds)
})

buttonSubTime.addEventListener('click', function() {
  subTime()
  console.log(currentMinutes, minutes, initialMinutes)
  updateDisplay(currentMinutes, currentSeconds)
})

buttonSet.addEventListener('click', function() {
  let newMinutes = prompt("Quantos minutos?") || 0

  minutes = newMinutes
  updateDisplay(minutes, 0)
})

buttonForest.addEventListener('click', function() {
  resetSelect()
  buttonForest.setAttribute('id', 'select')

  sound.forestSound()
})

buttonRain.addEventListener('click', function() {
  resetSelect()
  buttonRain.setAttribute('id', 'select')

  sound.rainSound()
})

buttonCoffe.addEventListener('click', function() {
  resetSelect()
  buttonCoffe.setAttribute('id', 'select')

  sound.coffeSound()
})

buttonFireplace.addEventListener('click', function() {
  resetSelect()
  buttonFireplace.setAttribute('id', 'select')

  sound.fireplaceSound()
})

buttonLight.addEventListener('click', function() {
  buttonLight.classList.add('hide')
  buttonDark.classList.remove('hide')

  dark.fBody()
  dark.fTime()
  dark.fControls()
  dark.fMode()
})

buttonDark.addEventListener('click', function() {
  buttonLight.classList.remove('hide')
  buttonDark.classList.add('hide')

  light.fBodyR()
  light.fTimeR()
  light.fControlsR()
  light.fModeR()
})