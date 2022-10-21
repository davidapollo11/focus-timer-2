import {
  buttonVolume,
  buttonVolume2,
  buttonVolume3,
  buttonVolume4
} from "./elements.js"

export default function() {
  const forest = new Audio('../sounds/Floresta.wav')
  const rain = new Audio('../sounds/Chuva.wav')
  const coffe = new Audio('../sounds/Cafeteria.wav')
  const fireplace = new Audio('../sounds/Lareira.wav')

  function pauseSounds() {
    forest.pause()
    rain.pause()
    coffe.pause()
    fireplace.pause()
  }

  function forestSound() {
    pauseSounds()
    forest.play()
    forest.loop = true

    forest.volume = buttonVolume.value / 100
  }

  function rainSound() {
    pauseSounds()
    rain.play()
    rain.loop = true

    rain.volume = buttonVolume2.value / 100
  }

  function coffeSound() {
    pauseSounds()
    coffe.play()
    coffe.loop = true

    coffe.volume = buttonVolume3.value / 100
  }

  function fireplaceSound() {
    pauseSounds()
    fireplace.play()
    fireplace.loop = true

    fireplace.volume = buttonVolume4.value / 100
  }

  return {
    forestSound,
    rainSound,
    coffeSound,
    fireplaceSound,
    pauseSounds
  }
}