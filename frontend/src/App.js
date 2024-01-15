import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom'; 
import Logo from './assets/Logo.jpg';
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


import './App.css';
import App2 from './App2.js';


function MainApp() {
<<<<<<< Updated upstream
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const navigate = useNavigate();
    
    const [contrastMode, setContrastMode] = useState(false);
    const [fontSize, setFontSize] = useState(16); // Initial font size of 16px
    const [isParagraphLarge, setIsParagraphLarge] = useState(false);
    const [lineHeight, setLineHeight] = useState(1.5); // Initial line height
    const [reset] = useState(1.5); // Initial line height
    const toggleContrast = () => {
=======
  const [contrastMode, setContrastMode] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Initial font size of 16px
  const [isParagraphLarge, setIsParagraphLarge] = useState(false);
  const [lineHeight, setLineHeight] = useState(1.5); // Initial line height
  const [reset] = useState(1.5); // Initial line height
  const [fontSizeCounter, setFontSizeCounter] = useState(0);
  const [lineHeightCounter, setLineHeightCounter] = useState(0);
  const [startNode, setStartNode] = useState('');
  const [endNode, setEndNode] = useState('');
  const [isValidInput, setIsValidInput] = useState(true); // New state for input validity

  const validNodes = ['F4', 'Aufzug', 'Toilette', 'F4.27', 'F4.26', 'F4.25', 'F4.24', 'F4.23', 'F4.22', 'F4.20', 'F4.08', 'F4.07', 'F4.06', 'F4.05', 'F4.04', 'F4.03', 'F4.02', 'F4.01'];

//Contrast
  const toggleContrast = () => {
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

    const resetContrast = () => {
        setContrastMode(false);
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
    };

    const increaseFontSize = () => {
        setFontSize(fontSize + 4); // Schriftgröße um 4 Pixel erhöhen
        setIsParagraphLarge(true); // Setze den Zustand für den vergrößerten Absatz auf true
    };

    const resetFontSize = () => {
        setFontSize(16); // Schriftgröße auf 16 Pixel zurücksetzen
        setIsParagraphLarge(false); // Setze den Zustand für den vergrößerten Absatz auf false
    };
    const increaseLineHeight = () => {
        setLineHeight(lineHeight + 0.2); // Zeilenabstand um 0.2 erhöhen
    };

    const resetLineHeight = () => {
        setLineHeight(1.5); // Zeilenabstand zurücksetzen
    };

    const resetAll = () => {
        setFontSize(16);
        setLineHeight(1.5);
        setContrastMode(false);
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
    };

    const handleFindPath = async () => {
        console.log("start: ", start);
        console.log("end: ", end);

        try {
            const response = await fetch('http://localhost:8000/fhtways/find-path/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ start, end }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            navigate('/app2', { state: { pathDescription: data.path } });
    
        } catch (error) {
            console.error('Error fetching path data:', error);
        }
    };

=======
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
    const isValidFormat = /^[A-Z]\d+(\.\d+)?$/i.test(start) && /^[A-Z]\d+(\.\d+)?$/i.test(end);
    const isValid = validNodes.includes(start) && validNodes.includes(end) && isValidFormat;
  
    setIsValidInput(isValid);
  
    // Set error message for invalid format
    if (start.trim() === '' || end.trim() === '') {
      setErrorMessage('Please enter both start and end room numbers.');
    } else if (!isValidFormat) {
      setErrorMessage('Invalid input format! Please enter the room number in the correct format.');
    } else if (!isValid) {
      setErrorMessage(`Invalid input! Please enter valid room numbers. Acceptable room numbers are: ${validNodes.join(', ')}`);
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
>>>>>>> Stashed changes
    return (
            <div className={`App ${contrastMode ? 'contrast-mode' : ''}`} style={{ fontSize: `${fontSize}px`, lineHeight: lineHeight }}>                    
                    
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
<<<<<<< Updated upstream
                    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', columnGap: '10px', marginBottom: '5px' }}>
                        <p style={{ fontWeight: 'bolder', margin: '0', fontSize: '32px' }}>Start</p>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-5px' }}>
                            <div className={'search-bar'} style={{ width: '100%' }}>
                                <input
                                    type="text"
                                    placeholder="Geben Sie Ihren Startpunkt an..."
                                    value={start}
                                    onChange={(e) => setStart(e.target.value)}
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </div>
                        <div style={{ width: '20px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', columnGap: '10px', marginBottom: '5px' }}>
                        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '32px'}}>Ziel</p>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-5px' }}>
                            <div className={'search-bar'} style={{ width: '100%' }}>
                                <input
                                    type="text"
                                    placeholder="Geben Sie Ihr Ziel an..."
                                    value={end}
                                    onChange={(e) => setEnd(e.target.value)}
                                    style={{ width: '100%' }}
                                />
=======
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', columnGap: '10px', marginBottom: '5px' }}>
                    <p className="contrastable-text" style={{ fontWeight: 'bolder', margin: '0', fontSize: '32px' }}>Start</p>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-5px' }}>
                      <div className={'search-bar'} style={{ width: '100%', marginBottom: '10px' }}>
                            <input
                                id="startInput"
                                type="text"
                                pattern="[A-Z]\d+(\.\d+)?"
                                placeholder="Geben Sie Ihren Startpunkt an..."
                                style={{ width: '100%' }}
                                onChange={handleStartNodeChange}
      
                            />
                            </div>
                        </div>
                        <div style={{ width: '20px' }}></div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', columnGap: '10px', marginBottom: '5px' }}>
                          <p className="contrastable-text" style={{ fontWeight: 'bold', margin: '0', fontSize: '32px' }}>Ziel</p>
                          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-5px' }}>
                            <div className={'search-bar'} style={{ width: '100%', marginBottom: '10px' }}>
                            <input
                                
                                type="text"
                                pattern="[A-Z]\d+(\.\d+)?"
                                placeholder="Geben Sie Ihr Ziel an..."
                                style={{ width: '100%' }}
                                onChange={handleEndNodeChange}
                            />
>>>>>>> Stashed changes
                            </div>
                        </div>
                        <div style={{ width: '20px' }}></div>
                        </div>
                </div>

<<<<<<< Updated upstream
                     <div className={'button-container'}>
                        <button onClick={handleFindPath}>Los!</button>
                     </div>
                    <p style={{ fontSize: isParagraphLarge ? '24px' : 'inherit'}}> *mit den Buchstaben "M", "W" oder “D” im [Zimmer] können Sie direkt zu den nächstliegenden Herren-, Damen-, Diverstoiletten navigieren</p>
                    <p style={{ fontSize: isParagraphLarge ? '24px' : 'inherit'}}> *für den Eingang ins Gebäude verwenden Sie einfach die Buchstabe des jeweiligen Gebäudes, z.B. F für das Gebäude </p>
=======
                    <div className={'button-container'}>
                        <Link to="/app2">
                        <button disabled={!isValidInput} onClick={() => isValidInput || alert(errorMessage)}>                            Los!
                        </button>
                        </Link>
                    </div>
                    {!isValidInput && (
                        <p  style={{ color: 'red', fontSize: '20px', textAlign: 'center' }}>
                        {errorMessage}
                      </p>
                    )}
                    <p className="contrastable-text" style={{ fontSize: isParagraphLarge ? '24px' : 'inherit'}}> *mit den Buchstaben "M", "W" oder “D” im [Zimmer] können Sie direkt zu den nächstliegenden Herren-, Damen-, Diverstoiletten navigieren</p>
                    <p className="contrastable-text" style={{ fontSize: isParagraphLarge ? '24px' : 'inherit'}}> *für den Eingang ins Gebäude verwenden Sie einfach die Buchstabe des jeweiligen Gebäudes, z.B. F für das Gebäude </p>
>>>>>>> Stashed changes
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
            </Routes>
        </Router>
    );
}

export default App;
