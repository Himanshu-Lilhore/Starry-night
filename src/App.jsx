import { useEffect } from 'react';
import './App.css'

export default  function App() {

  useEffect(() => {
    let cardContainer = document.querySelector('#farthest');
    let cardContainer2 = document.querySelector('#mid');
    let cardContainer3 = document.querySelector('#closest');

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let xcovered = 0
    let ycovered = 0
    let lastMouseX = 99
    let lastMouseY = 99


    window.addEventListener('resize', function () {
      windowHeight = window.innerHeight;
      windowWidth = window.innerWidth;
    });


    document.addEventListener('mousemove', function (event) {
      let mouseX = event.clientX;
      let mouseY = event.clientY;

      lastMouseX = mouseX
      lastMouseY = mouseY

      xcovered = mouseX / windowWidth
      ycovered = mouseY / windowHeight

      let translateStr = `translate(${xcovered * -3}%, ${ycovered * -3}%)`
      let translateStr2 = `translate(${xcovered * -6}%, ${ycovered * -6}%)`
      let translateStr3 = `translate(${xcovered * -15}%, ${ycovered * -15}%)`

      cardContainer.style.transform = translateStr
      cardContainer2.style.transform = translateStr2
      cardContainer3.style.transform = translateStr3

      animateTranslate(cardContainer, translateStr)
      animateTranslate(cardContainer2, translateStr2)
      animateTranslate(cardContainer3, translateStr3)
    });


    function animateTranslate(container, translateee) {
      container.animate({
        transform: translateee
      }, { duration: 500, fill: 'forwards' })
    }
  }, []);


  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundImage: `url('blurry-gradient.png')`,
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        filter: `blur(1px)`,
      }}></div>

      <div id='farthestest' style={{
        position: 'absolute',
        backgroundImage: `url('farthestest.svg')`,
        width: '120vw',
        height: '120vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.6,
        filter: `blur(6px)`,
        transform: `translate(-10%)`
      }}></div>

      <div id='farthest' style={{
        position: 'absolute',
        backgroundImage: `url('farthest.svg')`,
        width: '120vw',
        height: '120vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.7,
        filter: `blur(5px)`,
        transform: `translate(-10%)`
      }}></div>

      <div id='mid' style={{
        position: 'absolute',
        backgroundImage: `url('mid.svg')`,
        width: '120vw',
        height: '120vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.8,
        filter: `blur(3px)`,
        transform: `translate(-10%)`
      }}></div>

      <div id='closest' style={{
        position: 'absolute',
        backgroundImage: `url('closest.svg')`,
        width: '120vw',
        height: '120vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 1,
        transform: `translate(-10%)`
      }}></div>

    </>
  )
}

