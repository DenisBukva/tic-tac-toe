import React from 'react';
import '../Style/Navbar.css';



function Navbar({player1Count, player2Count, tieCount}) {

    const player1 = localStorage.getItem('player1');
    const player2 = localStorage.getItem('player2');
    

    return (
        <div className='navbar'>
            <div className='title'>
                <h1>Tic Tac Toe</h1>
            </div>
            <div className='statistic'>
                <h2>{player1}: {player2Count}</h2>
                <h2>{player2}: {player1Count}</h2>
                <h2>Ties: {tieCount} </h2>
            </div>
        </div>
    

    );
}
export default Navbar;