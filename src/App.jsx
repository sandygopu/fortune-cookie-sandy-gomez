import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import CardPhrases from './components/CardPhrases'
import phrases from './data/phrases.json'




function App() {

  const bgImages = [ "url(/fondo1.jpg)", "url(/fondo2.jpg)", "url(/fondo3.jpg)", "url(/fondo4.jpg)"]

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
    <div style={ { backgroundImage: bgImages[indexBgImage]} }>
      <a className='projects' href="https://portfolio-sandy-gomez.netlify.app/" target={"_blank"}>More Projects</a>
    <div className="App" >
      
      <h1 className='tittle'>GALLETAS DE LA FORTUNA</h1>
      <CardPhrases
      phrasesData = { phrases[index] }
      />
      <button onClick={ changeFortune }>Ver otro</button>
      {/* <Button/> */}
    </div>
    </div>
  )
}

export default App
