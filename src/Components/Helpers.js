  
export const Patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
































//  export const  calculateWinner = (squares) => {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]

//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
            
//         }
//     }
//     return null;
// }

// export const Ties = (squares) => {
//     let count = 0;

//     squares.forEach(function(lines) {
//         if (lines !== null) {
//             count++
//         }
//     })
//     if (count === 9) {
//         return true
//     } else {
//         return false
//     }
// }

