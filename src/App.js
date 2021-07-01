import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Game from './Components/Game';
import Login from './Components/Login';



function App() {
    const [showLogin, setShowLogin] = useState(true);
    const hideLogin = () => {
        setShowLogin(showLogin => !showLogin)
    }



    return (
        <BrowserRouter>
            
            {showLogin && <Login hideLogin={hideLogin} />}
            <Game />
            {/* <Endgame /> */}



        </BrowserRouter>
    );
}

export default App;