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

import './App.css';

function App() {
    return (
        <div className="App">
             <div className="top-right-buttons">
                <a href="#" onClick={() => { /* Action for Button 1 */ }}>
                    <img className="top-image-button" src={adiobook} alt="Button 1" />
                </a>
                <a href="#" onClick={() => { /* Action for Button 1 */ }}>
                    <img className="top-image-button" src={aplus} alt="Button 1" />
                </a>
                <a href="#" onClick={() => { /* Action for Button 1 */ }}>
                    <img className="top-image-button" src={aminus} alt="Button 1" />
                </a>
                <a href="#" onClick={() => { /* Action for Button 1 */ }}>
                    <img className="top-image-button" src={bnw} alt="Button 1" />
                </a>
                <a href="#" onClick={() => { /* Action for Button 1 */ }}>
                    <img className="top-image-button" src={farbe} alt="Button 1" />
                </a>
                <a href="#" onClick={() => { /* Action for Button 1 */ }}>
                    <img className="top-image-button" src={znormal} alt="Button 1" />
                </a>
                <a href="#" onClick={() => { /* Action for Button 1 */ }}>
                    <img className="top-image-button" src={zplus} alt="Button 1" />
                </a>
                <a href="#" onClick={() => { /* Action for Button 1 */ }}>
                    <img className="top-image-button" src={returnz} alt="Button 1" />
                </a>
                <a href="#" onClick={() => { /* Action for Button 1 */ }}>
                    <img className="top-image-button" src={sprache} alt="Button 1" />
                </a>
                
            </div>
            <div className={'logo-container'}>
                <img  className={'school-logo'} src={fhtwlogo}/>
                <img className={'project-logo'} src={logo}/>
            </div>
            
            
           
            <div>
            <div className="content-container" style={{ textAlign: 'center' }}>
                <h1 style={{ color: '#0a65c0' }}>Pathfinding for All - Enter Your Route and Explore FHTW</h1>
                </div>
                <div className="content-container">             
                    <p>Mit FHTWays können Sie durch die FHTW navigieren! Geben Sie Ihren Startpunkt und Ihr Ziel in das vorgesehene Format ein:
                    [Gebäude][Stockwerk]'Punkt'[Raum]. Beispiel: F4.24 für Gebäude F, 4. Stockwerk, Raum 24. Klicken Sie auf den
                    "Los"-Button oder drücken Sie die Enter-Taste, um Ihre Routenanfrage zu starten und folgen Sie den detaillierten
                    Wegbeschreibungen!</p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', columnGap: '10px', marginBottom: '5px' }}>
                        <p style={{ fontWeight: 'bolder', margin: '0', fontSize: '16px' }}>Start</p>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-5px' }}>
                            <div className={'search-bar'} style={{ width: '100%' }}>
                                <input
                                    type="text"
                                    placeholder="Geben Sie Ihren Startpunkt an..."
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </div>
                        <div style={{ width: '20px' }}></div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', columnGap: '10px', marginBottom: '5px' }}>
                        <p style={{ fontWeight: 'bold', margin: '0', fontSize: '16px' }}>Ziel</p>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '-5px' }}>
                            <div className={'search-bar'} style={{ width: '100%' }}>
                                <input
                                    type="text"
                                    placeholder="Geben Sie Ihr Ziel an..."
                                    style={{ width: '100%' }}
                                />
                            </div>
                        </div>
                        <div style={{ width: '20px' }}></div>
                    </div>
                </div>

                     <div className={'button-container'}>
                         <button>Los!</button>
                     </div>
                    <p> *mit den Buchstaben "M", "W" oder “D” im [Zimmer] können Sie direkt zu den nächstliegenden Herren-, Damen-, Diverstoiletten navigieren</p>
                    <p> *für den Eingang ins Gebäude verwenden Sie einfach die Buchstabe des jeweiligen Gebäudes, z.B. F für das Gebäude </p>
                </div>
            </div>
            <nav className={'footer-nav'} style={{ textAlign: 'center' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                 <li>Startseite</li>
                 <li>Impressum</li>
                 
                 <li>Kontakt</li>
                 <li>Über uns</li>
             </ul>
    <p style={{ fontSize: '15px', color: 'white', fontWeight: 'bold' }}>© Copyright 2023 - FHTWays</p>
</nav>
        </div>
    );
}
export default App;

