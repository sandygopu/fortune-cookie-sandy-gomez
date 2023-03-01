import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import CardPhrases from './components/CardPhrases'
import phrases from './data/phrases.json'




function App() {

  const bgImages = [ "url(/public/fondo1.jpg)", "url(/public/fondo2.jpg)", "url(/public/fondo3.jpg)", "url(/public/fondo4.jpg)"]

  const [index, setIndex] = useState( 0 )
  const [indexBgImage, setIndexBgImage] = useState( 0 )

  const changePhrases = () => {
    setIndex(Math.floor(Math.random() * (phrases.length)))
  }

  const changeBgImages = () => {
    setIndexBgImage(Math.floor(Math.random() * (bgImages.length)))
  }

  const changeFortune = () => {
    changeBgImages();
    changePhrases();
  }

  console.log(phrases[0])
  return (
    <div className="App" style={ { backgroundImage: bgImages[indexBgImage]} }>

      <h1>GALLETAS DE LA FORTUNAS</h1>
      <CardPhrases
      phrasesData = { phrases[index] }
      />
      <button onClick={ changeFortune }>Ver otro</button>
      {/* <Button/> */}
    </div>
  )
}

export default App
