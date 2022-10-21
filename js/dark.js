import {
  body,
  time,
  controls,
  mode
} from "./elements.js"

export default function() {
  function fBody() {
    body.classList.add('body-dark')
  }

  function fTime() {
    time.classList.add('time-dark')
  }

  function fControls() {
    controls.classList.add('controls-dark')
  }

  function fMode() {
    for (let i = 0; i < mode.length; i++) {
      mode[i].classList.add('mode-dark')
    }
  }
  
  return {
  fBody,
  fTime,
  fControls,
  fMode
  }
}