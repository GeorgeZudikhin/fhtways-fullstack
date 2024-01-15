import React, { useState } from 'react';
import logo from './assets/Logo.jpg';
import fhtwlogo from  './assets/fhtw_logo.svg.png';
import adiobook from  './assets/audiobook.PNG';
import aplus from  './assets/aplus.PNG';
import aminus from  './assets/aminus.PNG';
import bnw from  './assets/black&white.PNG';
import farbe from  './assets/farbe.PNG';
import znormal from  './assets/znormal.PNG';
import zplus from  './assets/zplus.PNG';
import returnz from  './assets/return.PNG';
import sprache from  './assets/sprache.PNG';
import Moodle from  './assets/icons/moodle.png';
import Cis from  './assets/icons/cis.png';
import Linkedin from  './assets/icons/linkedin.png';
import Email from  './assets/icons/mail.png';
import { Link } from 'react-router-dom';

function App2(){
  const [contrastMode, setContrastMode] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Initial font size of 16px
  const [isParagraphLarge, setIsParagraphLarge] = useState(false);
  const [lineHeight, setLineHeight] = useState(1.5); // Initial line height
  const [reset] = useState(1.5); // Initial line height
  const [fontSizeCounter, setFontSizeCounter] = useState(0);
  const [lineHeightCounter, setLineHeightCounter] = useState(0);

//Contrast
  const toggleContrast = () => {
    setContrastMode(!contrastMode);
    if (!contrastMode) {
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
  
      // Change text color to white for all elements with class 'contrastable-text'
      const contrastableTextElements = document.querySelectorAll('.contrastable-text');
      contrastableTextElements.forEach(element => {
        element.style.color = '#ffffff';
      });
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
  
      // Reset text color for all elements with class 'contrastable-text'
      const contrastableTextElements = document.querySelectorAll('.contrastable-text');
      contrastableTextElements.forEach(element => {
        element.style.color = ''; // Reset to default or your desired color
      });
    }
  };
  const resetContrast = () => {
    setContrastMode(false);
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
    // Reset text color for all elements with class 'contrastable-text'
    const contrastableTextElements = document.querySelectorAll('.contrastable-text');
    contrastableTextElements.forEach(element => {
        element.style.color = ''; // Reset to default or your desired color
    });
  };

//Font
  const increaseFontSize = () => {
    if (fontSizeCounter < 5) {
      setFontSize(fontSize => fontSize + 4);
      setFontSizeCounter(counter => counter + 1);
    }
  };
  
  const decreaseFontSize = () => {
    if (fontSizeCounter > 0) {
      setFontSize(fontSize => fontSize - 4);
      setFontSizeCounter(counter => counter - 1);
    }
  };
  
  const resetFontSize = () => {
    setFontSize(16);
    setFontSizeCounter(0);
  };
//LineHeight
const increaseLineHeight = () => {
  if (lineHeightCounter < 5) {
      setLineHeight(lineHeight=>lineHeight + 0.2);
      setLineHeightCounter(counter => counter + 1);
    }
  
};

const resetLineHeight = () => {
  if (lineHeightCounter > 0) {
    setLineHeight(lineHeight=>lineHeight - 0.2);
    setLineHeightCounter(counter => counter - 1);
  }
};
//Reset
  const resetAll = () => {
    setFontSize(16);
    setFontSizeCounter(0);
    setLineHeight(1.5);
    setContrastMode(false);
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
    const contrastableTextElements = document.querySelectorAll('.contrastable-text');
    contrastableTextElements.forEach(element => {
        element.style.color = ''; // Reset to default or your desired color
      });
    };
  return (
                <div className={`App2 ${contrastMode ? 'contrast-mode' : ''}`} style={{ fontSize: `${fontSize}px`, lineHeight: lineHeight }}>             
                <div className="top-right-buttons">             

                <a href="#" onClick={() => { /* Action for Button 1 */ }}>
                    <img className="top-image-button" src={adiobook} alt="Button 1" />
                </a>
                
                <a href="#" onClick={increaseFontSize}><img className="top-image-button" src={aplus} alt="Button 2" /></a>
                <a href="#" onClick={decreaseFontSize}><img className="top-image-button" src={aminus} alt="Button 3" /></a>

                <a href="#" onClick={toggleContrast}><img className="top-image-button" src={bnw} alt="Button 4" /></a>
                <a href="#" onClick={resetContrast}><img className="top-image-button" src={farbe} alt="Button 5" /></a>
               
                <a href="#" onClick={increaseLineHeight}><img className="top-image-button" src={zplus} alt="Button 6" /></a>
                <a href="#" onClick={resetLineHeight}><img className="top-image-button" src={znormal} alt="Button 7" /></a>
               
                <a href="#" onClick={resetAll}><img className="top-image-button" src={returnz} alt="Button 8" /></a>
                <a href="#" onClick={() => { /* Action for Button 1 */ }}>
                    <img className="top-image-button" src={sprache} alt="Button 1" />
                </a>
       
   </div>
   <div className={'logo-container'}>
   <img className={'project-logo'} src={logo} alt="Project Logo" style={{ maxWidth: '100%', height: 'auto' }} />   

      <a href="" target="_blank" rel="noopener noreferrer">
          <div className={'logo-container'}>
          <img className={'school-logo'} src={fhtwlogo} alt="FHTW Logo" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </a>
   </div>
   <div className="content-container" style={{ textAlign: 'center' }}>
                <h1 style={{ color: '#0a65c0' }}>Pathfinding for All - Enter Your Route and Explore FHTW</h1>
                </div>
                <p className="contrastable-text"  style={{ fontSize: isParagraphLarge ? '24px' : 'inherit'}}>
                        Mit FHTWays </p>
                <div className={'button-container'}>
                        <Link to="/">
                            <button>neu suchen!</button>
                        </Link>
                     </div>
        </div>
        
    );
}
export default App2;
