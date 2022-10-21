const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonAddTime = document.querySelector('.add-time')
const buttonSubTime = document.querySelector('.sub-time')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffe-shop')
const buttonFireplace = document.querySelector('.fireplace')

const buttonLight = document.querySelector('.light-mode')
const buttonDark = document.querySelector('.dark-mode')

const buttonVolume = document.querySelector('.volume')
const buttonVolume2 = document.querySelector('.volume2')
const buttonVolume3 = document.querySelector('.volume3')
const buttonVolume4 = document.querySelector('.volume4')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

const body = document.querySelector('body')
const time = document.querySelector('.time')
const controls = document.querySelector('.controls')
const mode = document.querySelectorAll('.mode')



export {
  buttonPlay,
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

  buttonVolume,
  buttonVolume2,
  buttonVolume3,
  buttonVolume4,

  body,
  time,
  controls,
  mode
}