import {
  body,
  time,
  controls,
  mode
} from "./elements.js"
 
export default function() {
  function fBodyR() {
    body.classList.remove('body-dark')
  }

  function fTimeR() {
    time.classList.remove('time-dark')
  }

  function fControlsR() {
    controls.classList.remove('controls-dark')
  }

  function fModeR() {
    for (let i = 0; i < mode.length; i++) {
      mode[i].classList.remove('mode-dark')
    }
  }
  
  return {
  fBodyR,
  fTimeR,
  fControlsR,
  fModeR
  }
}