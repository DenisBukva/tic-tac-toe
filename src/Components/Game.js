import '../Style/Game.css';
import Navbar from './Navbar';
import { useState, useEffect } from "react";
import Square from './Square';
import { Patterns } from './Helpers';
import Endgame from './Endgame';


function App() {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [player, setPlayer] = useState("O");
    const [result, setResult] = useState({ winner: "none", state: "none" });
    const [message, setMessage] = useState('');
    const [winMsg, setWinMsg] = useState('');
    const [player1Count, setPlayer1Count] = useState(0);
    const [player2Count, setPlayer2Count] = useState(0);
    const [tieCount, setTieCount] = useState(0);
    const [showEndGame, setShowEndGame] = useState(false);

    const player1 = localStorage.getItem('player1');
    const player2 = localStorage.getItem('player2');


    useEffect(() => {
        checkWin();
        checkIfTie();
        if (player === "X") {
            setPlayer("O");
            setMessage(`${player2}`);


        } else {
            setPlayer("X");
            setMessage(` ${player1}`);


        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [board]);



    useEffect(() => {

        if (result.state !== 'none' && player === 'X') {
            setWinMsg(`The ${player2} wins!`);
            setShowEndGame(true);

        } else if (result.state !== 'none' && player === 'O') {
            setWinMsg(`The ${player1} wins!`);
            setShowEndGame(true);

        } if (result.state === 'Tie') {
            setMessage('Game is finish!')
            setWinMsg('DRAW');
            setShowEndGame(true);

        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result])

    const chooseSquare = (square) => {
        setBoard(
            board.map((val, idx) => {
                if (idx === square && val === "") {
                    return player;
                }

                return val;
            })
        );
    };

    const checkWin = () => {
        Patterns.forEach((currPattern) => {
            const firstPlayer = board[currPattern[0]];
            if (firstPlayer === "") return;
            let foundWinningPattern = true;
            currPattern.forEach((idx) => {
                if (board[idx] !== firstPlayer) {
                    foundWinningPattern = false;
                }
            });

            if (foundWinningPattern) {
                setResult({ winner: player === player1 ? player2 : player1, state: 'Won' });
                setPlayer('X');
                if (player === 'X') {
                    setPlayer2Count(prevCount => prevCount + 1);
                } else if (player === 'O') {
                    setPlayer1Count(prevCount => prevCount + 1);
                }
            }


        });
    };

    const checkIfTie = () => {

        let filled = true;
        board.forEach((square) => {
            if (square === "") {
                filled = false;
            }
        });

        if (filled) {
            setResult({ winner: "No One", state: "Tie" });
            setTieCount(prevCount => prevCount + 1);


        }

    };

    const restartGame = () => {
        setBoard(["", "", "", "", "", "", "", "", ""]);
        setPlayer("O");
        setShowEndGame(false);
        setWinMsg('');
    };

    const restartGame0 = () => {
        window.location.reload();
        localStorage.clear();
    };

    return (

        <div>
            <Navbar player1Count={player1Count} player2Count={player2Count} tieCount={tieCount} />
            <h2 className='nextplayer'>Nex player: {message}</h2>
            <h2 className='win'>Win: {winMsg}</h2>
            {showEndGame && <Endgame winMsg={winMsg} restartGame={restartGame} player1={player1} player2={player2} restartGame0={restartGame0} />}


            <div className="App">

                <div className="board">

                    <div className="row">
                        <Square
                            val={board[0]}
                            chooseSquare={() => {
                                chooseSquare(0);
                            }}
                        />
                        <Square
                            val={board[1]}
                            chooseSquare={() => {
                                chooseSquare(1);
                            }}
                        />
                        <Square
                            val={board[2]}
                            chooseSquare={() => {
                                chooseSquare(2);
                            }}
                        />
                    </div>
                    <div className="row">
                        <Square
                            val={board[3]}
                            chooseSquare={() => {
                                chooseSquare(3);
                            }}
                        />
                        <Square
                            val={board[4]}
                            chooseSquare={() => {
                                chooseSquare(4);
                            }}
                        />
                        <Square
                            val={board[5]}
                            chooseSquare={() => {
                                chooseSquare(5);
                            }}
                        />
                    </div>
                    <div className="row">
                        <Square
                            val={board[6]}
                            chooseSquare={() => {
                                chooseSquare(6);
                            }}
                        />
                        <Square
                            val={board[7]}
                            chooseSquare={() => {
                                chooseSquare(7);
                            }}
                        />
                        <Square
                            val={board[8]}
                            chooseSquare={() => {
                                chooseSquare(8);
                            }}
                        />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default App;


































