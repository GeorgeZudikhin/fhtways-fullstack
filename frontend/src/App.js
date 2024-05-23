import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import Logo from './assets/logos/fhtways_logo.jpg';
import fhtwlogo from './assets/logos/fhtw_logo.png';
import aplus from './assets/accessibility/aplus.PNG';
import aminus from './assets/accessibility/aminus.PNG';
import bnw from './assets/accessibility/black&white.PNG';
import farbe from './assets/accessibility/farbe.PNG';
import znormal from './assets/accessibility/znormal.PNG';
import zplus from './assets/accessibility/zplus.PNG';
import returnz from './assets/accessibility/reset.PNG';
import sprache from './assets/accessibility/sprache.PNG';

import './App.css';
import App2 from './App2.js';
import AdminPanel from './components/AdminPanel.jsx';


function MainApp() {
  const navigate = useNavigate();
  const [contrastMode, setContrastMode] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Initial font size of 16px
  const [isParagraphLarge] = useState(false);
  const [lineHeight, setLineHeight] = useState(1.5); // Initial line height
  const [reset] = useState(1.5); // Initial line height
  const [fontSizeCounter, setFontSizeCounter] = useState(0);
  const [lineHeightCounter, setLineHeightCounter] = useState(0);
  const [startNode, setStartNode] = useState('');
  const [endNode, setEndNode] = useState('');
  const [isValidInput, setIsValidInput] = useState(false);

  const validNodes = ['F4', 'AUFZUG', 'TOILETTE', 'F4.27', 'F4.26', 'F4.25', 'F4.24', 'F4.23', 'F4.22', 'F4.20', 'F4.08', 'F4.07', 'F4.06', 'F4.05', 'F4.04', 'F4.03', 'F4.02', 'F4.01'];

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

//LineHeight
  const increaseLineHeight = () => {
    if (lineHeightCounter < 5) {
        setLineHeight(lineHeight=>lineHeight + 0.2);
        setLineHeightCounter(counter => counter + 1);
    }
  };  
  const resetLineHeight = () => {
    if (lineHeightCounter > 0) {
      setLineHeight(lineHeight => lineHeight - 0.2);
      setLineHeightCounter(counter => counter - 1);
  }
 };
  
  useEffect(() => {
    const handleKeyPress = (event) => {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            return;
        }

        switch(event.key) {
            case '+':
                increaseFontSize(); // increases the font size
                break;
            case '-':
                decreaseFontSize(); // resets the font size
                break;
            case 'c':
                toggleContrast(); // changes the contrast
                break;
            case 'd':
                resetContrast(); // resets the contrast
                break;
            case 'z':
                increaseLineHeight(); // increases the line spacing
                break;
            case 't':
                resetLineHeight(); // resets the line spacing
                break;
            case 'r':
                resetAll(); // resets everything
                break;
            default:
                break;
        }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
        window.removeEventListener('keydown', handleKeyPress);
    };
}, [fontSize,lineHeight]); 

    const handleFindPath = async () => {
        console.log("start: ", startNode);
        console.log("end: ", endNode);

        try {
            const response = await fetch('http://localhost:8000/fhtways/find-path/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ startNode, endNode }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            navigate('/app2', { state: { startNode, endNode, pathDescription: data.path } }); 

          } catch (error) {
            console.error('Error fetching path data:', error);
        }       
  };

 // Focus management: Set initial focus to the start input field
 useEffect(() => {
  const startInput = document.getElementById('startInput');
  if (startInput) {
    startInput.focus();
  }
}, []);


 //input
  const handleStartNodeChange = (e) => {
    const input = e.target.value.trim().toUpperCase();
    setStartNode(input);
    validateInput(input, endNode);
  };

  const handleEndNodeChange = (e) => {
    const input = e.target.value.trim().toUpperCase();
    setEndNode(input);
    validateInput(startNode, input);
  };

  const [errorMessage, setErrorMessage] = useState('');

 
  const validateInput = (start, end) => {
    const isValidFormat = /^(AUFZUG|TOILETTE|[A-Z]\d+(\.\d+)?)$/i.test(start) && /^(AUFZUG|TOILETTE|[A-Z]\d+(\.\d+)?)$/i.test(end);
    const isValid = validNodes.includes(start) && validNodes.includes(end) && isValidFormat;
  
    setIsValidInput(isValid);
  
    // Set error message for invalid format
    if (start.trim() === '' || end.trim() === '') {
      setErrorMessage('Bitte geben Sie sowohl die Anfangs- als auch die Endraumnummer ein.');
    } else if (!isValidFormat) {
      setErrorMessage('Ungültiges Eingabeformat! Bitte geben Sie die Zimmernummer im richtigen Format ein.');
    } else if (!isValid) {
      setErrorMessage(`Ungültige Eingabe! Bitte geben Sie gültige Zimmernummern ein. Zulässige Zimmernummern sind: ${validNodes.join(', ')}`);
    } else {
      setErrorMessage(''); // Clear error message if input is valid
    }
  };

//Reset
  const resetAll = () => {
    setIsValidInput(true); // Reset input validity when resetting
    setStartNode('');
    setEndNode('');
    setFontSize(16);
    setFontSizeCounter(0);
    setLineHeight(1.5);
    setContrastMode(false);
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
     // Clear the input fields
    const startInput = document.getElementById('startInput');
    const endInput = document.getElementById('endInput');
    if (startInput && endInput) {
      startInput.value = '';
      endInput.value = '';
    }
    const contrastableTextElements = document.querySelectorAll('.contrastable-text');
    contrastableTextElements.forEach(element => {
        element.style.color = ''; // Reset to default or your desired color
    });
  };
    return (
            <div className={`App ${contrastMode ? 'contrast-mode' : ''}`} style={{ fontSize: `${fontSize}px`, lineHeight: lineHeight }}>                    
                    
                <div className="top-right-buttons">             
                <a href="#" onClick={increaseFontSize}>
                  <img className="top-image-button" src={aplus} alt="Button Schrift größer" title="Vergrößert die Schrift'+'" />
                </a>
                <a href="#" onClick={decreaseFontSize}>
                  <img className="top-image-button" src={aminus} alt="Button Schrift kleiner" title="Verkleinert die Schrift'-'" />
                </a>
                <a href="#" onClick={toggleContrast}>
                  <img className="top-image-button" src={bnw} alt="Button für Kontrast" title="Ändert den Kontrast'c'" />
                </a>
                <a href="#" onClick={resetContrast}>
                  <img className="top-image-button" src={farbe} alt="Button für Kontrast zurücksetzen" title="Setzt den Kontrast zurück'd'" />
                </a>
                <a href="#" onClick={increaseLineHeight}>
                  <img className="top-image-button" src={zplus} alt="Button für Zeileanbstand größer" title="Erhöht den Zeilenabstand'z'" />
                </a>
                <a href="#" onClick={resetLineHeight}>
                  <img className="top-image-button" src={znormal} alt="Button für Zeilenabstand kleiner" title="Setzt den Zeilenabstand zurück't'" />
                </a>
                <a href="#" onClick={resetAll}>
                  <img className="top-image-button" src={returnz} alt="Button für alles zurücksetzen" title="Setzt alles zurück'r'" />
                </a>
                <a href="#" onClick={() => { /* Aktion für Button 1 */ }}>
                  <img className="top-image-button" src={sprache} alt="Button für Sprache ändern" title="Sprache ändern" />
                </a>

                
            </div>
            <div className={'logo-container'}>
                
            <img className={'project-logo'} src={Logo} alt="Project Logo" />

                <a href="" target="_blank" rel="noopener noreferrer">
                <div className={'logo-container'}>
                    <img className={'school-logo'} src={fhtwlogo} alt="FHTW Logo" />
                </div>
                </a>
            </div>
            
            <div>
                <div className="content-container" style={{ textAlign: 'center', fontSize: `${fontSize}px` }}>
                <h1 style={{ color: '#0a65c0' }}>Pathfinding for All - Enter Your Route and Explore FHTW</h1>
                </div>
                
                <div className="content-container"style={{ fontSize: `${fontSize}px` }}>        
                <p className="contrastable-text"  style={{ fontSize: isParagraphLarge ? '24px' : 'inherit'}}>
                        Mit FHTWays können Sie durch die FHTW navigieren! Geben Sie Ihren Startpunkt und Ihr Ziel in das vorgesehene Format ein:
                    [Gebäude][Stockwerk]'Punkt'[Raum]. Beispiel: F4.24 für Gebäude F, 4. Stockwerk, Raum 24. Klicken Sie auf den
                    "Los"-Button oder drücken Sie die Enter-Taste, um Ihre Routenanfrage zu starten und folgen Sie den detaillierten
                    Wegbeschreibungen!</p>
                    
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', columnGap: '10px', marginBottom: '5px' }}>
                    <p className="contrastable-text" style={{ fontWeight: 'bolder', margin: '0', fontSize: '32px' }}>Start</p>
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                      <div className={'search-bar-start'} style={{ width: '100%', marginBottom: '10px' }}>
                            <input
                                id="startInput"
                                type="text"
                                value={startNode}
                                pattern="[A-Z]\d+(\.\d+)?"
                                placeholder="Geben Sie Ihren Startpunkt an..."
                                style={{ width: '100%', backgroundColor: startNode ? '#cfe3fa' : '#ffffff'}}
                                onChange={handleStartNodeChange}
      
                            />
                            </div>
                        </div>
                        <div style={{ width: '20px' }}></div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', columnGap: '10px',  marginBottom: '5px' }}>
                          <p className="contrastable-text" style={{ fontWeight: 'bold', margin: '0', fontSize: '32px' }}>Ziel</p>
                          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-5px' }}>
                            <div className={'search-bar-end'} style={{ width: '100%', marginBottom: '10px' }}>
                            <input
                                id="endInput"
                                type="text"
                                value={endNode}
                                pattern="[A-Z]\d+(\.\d+)?"
                                placeholder="Geben Sie Ihren Endpunkt an..."
                                style={{ width: '100%', backgroundColor: endNode ? '#cfe3fa' : '#ffffff'}}
                                onChange={handleEndNodeChange}
                            />
                            </div>
                        </div>
                        <div style={{ width: '20px' }}></div>
                        </div>
                </div>
                <div className={'button-container'}>
                  <button 
                      disabled={!isValidInput} 
                      onClick={isValidInput ? handleFindPath : () => alert(errorMessage)} 
                      style={{
                          backgroundColor: isValidInput ? '#0a65c0' : '#CCCCCC', 
                          cursor: isValidInput ? 'pointer' : 'not-allowed'
                      }}>                           
                      Los!
                  </button>
                </div>
                    {!isValidInput && (
                        <p  style={{ color: 'red', fontSize: '20px', textAlign: 'center' }}>
                        {errorMessage}
                      </p>
                    )}
                    <p className="contrastable-text" style={{ fontSize: isParagraphLarge ? '24px' : 'inherit'}}> *mit "TOILETTE" und "AUFZUG" können Sie direkt zu den nächstliegenden Herren-, Damen-, Diverstoiletten bzw. Aufzügen navigieren</p>
                    <p className="contrastable-text" style={{ fontSize: isParagraphLarge ? '24px' : 'inherit'}}> *für den Eingang ins Gebäude bzw. in den Stockwerk verwenden Sie einfach die Buchstabe des jeweiligen Gebäudes bzw. Stockwerkes, z.B. F4 für den Stockwerk</p>
                    <p className="contrastable-text" style={{ fontSize: isParagraphLarge ? '24px' : 'inherit'}}>Barrierefreiheit-Tastenkombinationen: '+' Vergrößert die Schrift.   '-' Verkleinert die Schrift.   'c' Ändert den Kontrast.   'd' Setzt den Kontrast zurück.   'z' Erhöht den Zeilenabstand.   't' Setzt den Zeilenabstand zurück.   'r' Setzt alles zurück.</p>
                    

                </div>
            </div>
          
        </div>
    );
  }

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainApp />} />
                <Route path="/app2" element={<App2 />} />
                <Route path="/admin" element={<AdminPanel />} />
            </Routes>
        </Router>
    );
}
export default App;
