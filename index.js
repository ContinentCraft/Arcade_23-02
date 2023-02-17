const game = { 
    players: ['',''],
    board: [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ],
    winner: null
}
let turn = 0
let numPlayers = 0

const introNav = document.getElementById("introNav")

const mainNav = document.getElementById("mainNav")
mainNav.style.visibility = "hidden"

const p1Name = document.getElementById("player1")
p1Name.style.visibility = "hidden"
const p2Name = document.getElementById("player2")
p2Name.style.visibility = "hidden"

const p1NameSelect = document.getElementById('p1')
const p2NameSelect = document.getElementById('p2')

const Board = document.getElementsByClassName('board')

let onePlayerGame = document.getElementById('1p')
onePlayerGame.addEventListener('click', function(){
    numPlayers = 1
    game.players[1] = "Computer"
    p2NameSelect.value = "Computer"
    document.getElementById("player2").innerHTML = game.players[1]
    document.getElementById("player2").style.visibility = "visible"
    mainNav.style.visibility = "visible"
    document.getElementById('p2').style.visibility = "hidden"
    introNav.style.visibility = "hidden"
    p1Name.style.background = "lightgreen"
    p2Name.style.background = "none"
})

let twoPlayerGame = document.getElementById('2p')
twoPlayerGame.addEventListener('click', function(){
    numPlayers = 2
    mainNav.style.visibility = "visible"
    introNav.style.visibility = "hidden"
    p1Name.style.background = "lightgreen"
    p2Name.style.background = "none"
})

function chooseNameP1(){
    game.players[0] = p1NameSelect.value
    p1Name.innerHTML = game.players[0]
    p1Name.style.visibility = "visible"
    p1NameSelect.style.visibility = "hidden"
}
function chooseNameP2(){
    game.players[1] = p2NameSelect.value
    p2Name.innerHTML = game.players[1]
    p2Name.style.visibility = "visible"
    p2NameSelect.style.visibility = "hidden"
}

p1NameSelect.addEventListener('keypress', function(evt){
    if(evt.key === "Enter"){
        chooseNameP1()
    }
})

p2NameSelect.addEventListener('keypress', function(evt){
    if(evt.key === "Enter"){
        chooseNameP2()
    }
})

const cell1 = document.getElementById("c1")
const cell2 = document.getElementById("c2")
const cell3 = document.getElementById("c3")
const cell4 = document.getElementById("c4")
const cell5 = document.getElementById("c5")
const cell6 = document.getElementById("c6")
const cell7 = document.getElementById("c7")
const cell8 = document.getElementById("c8")
const cell9 = document.getElementById("c9")

function switchTurn(){
    if(game.winner === null){
        turn++
        if(turn > 1){turn = 0}
        if(turn === 0){
            p1Name.style.background = "lightgreen"
            p2Name.style.background = "none"
        }else if(turn === 1){
            p1Name.style.background = "none"
            p2Name.style.background = "lightgreen"
        }
    }
}


for(let i=0; i<Board.length; i++){
    Board[i].addEventListener('click', function(evt){
    if(game.winner === null){
        if(evt.target.matches('#c1') && turn === 0 && game.board[0][0] === null && numPlayers !== 0 && game.winner === null){
            game.board[0][0] = 'X'
            cell1.innerHTML = game.board[0][0]
            switchTurn()   
            if(numPlayers === 1){
                setTimeout(function ai(){
                    let randNum1 = Math.floor(Math.random()*game.board.length)
                    let randNum2 = Math.floor(Math.random()*game.board[randNum1].length)
                    if(game.board[randNum1][randNum2] === null){
                        game.board[randNum1][randNum2] = 'O'
                        if(randNum1 === 0 && randNum2 === 0 && game.winner === null){
                            cell1.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 1 && game.winner === null){
                            cell2.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 2 && game.winner === null){
                            cell3.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 0 && game.winner === null){
                            cell4.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 1 && game.winner === null){
                            cell5.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 2 && game.winner === null){
                            cell6.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 0 && game.winner === null){
                            cell7.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 1 && game.winner === null){
                            cell8.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 2 && game.winner === null){
                            cell9.innerHTML = 'O'
                            switchTurn()  
                        }
                        declareWinner()
                    }else{
                        if(game.winner === null){
                            ai()
                        }
                    }
                },500)
            }
        }else if(evt.target.matches('#c2') && turn === 0 && game.board[0][1] === null && numPlayers !== 0 && game.winner === null){
            game.board[0][1] = 'X'
            cell2.innerHTML = game.board[0][1]
            switchTurn()
            if(numPlayers === 1){
                setTimeout(function ai(){
                    let randNum1 = Math.floor(Math.random()*game.board.length)
                    let randNum2 = Math.floor(Math.random()*game.board[randNum1].length)
                    if(game.board[randNum1][randNum2] === null){
                        game.board[randNum1][randNum2] = 'O'
                        if(randNum1 === 0 && randNum2 === 0 && game.winner === null){
                            cell1.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 1 && game.winner === null){
                            cell2.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 2 && game.winner === null){
                            cell3.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 0 && game.winner === null){
                            cell4.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 1 && game.winner === null){
                            cell5.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 2 && game.winner === null){
                            cell6.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 0 && game.winner === null){
                            cell7.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 1 && game.winner === null){
                            cell8.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 2 && game.winner === null){
                            cell9.innerHTML = 'O'
                            switchTurn()  
                        }
                        declareWinner()
                    }else{
                        if(game.winner === null){
                            ai()
                        }
                    }
                },500)
            }
        }else if(evt.target.matches('#c3') && turn === 0 && game.board[0][2] === null && numPlayers !== 0 && game.winner === null){
            game.board[0][2] = 'X'
            cell3.innerHTML = game.board[0][2]
            switchTurn()
            if(numPlayers === 1){
                setTimeout(function ai(){
                    let randNum1 = Math.floor(Math.random()*game.board.length)
                    let randNum2 = Math.floor(Math.random()*game.board[randNum1].length)
                    if(game.board[randNum1][randNum2] === null){
                        game.board[randNum1][randNum2] = 'O'
                        if(randNum1 === 0 && randNum2 === 0 && game.winner === null){
                            cell1.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 1 && game.winner === null){
                            cell2.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 2 && game.winner === null){
                            cell3.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 0 && game.winner === null){
                            cell4.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 1 && game.winner === null){
                            cell5.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 2 && game.winner === null){
                            cell6.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 0 && game.winner === null){
                            cell7.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 1 && game.winner === null){
                            cell8.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 2 && game.winner === null){
                            cell9.innerHTML = 'O'
                            switchTurn()  
                        }
                        declareWinner()
                    }else{
                        if(game.winner === null){
                            ai()
                        }
                    }
                },500)
            }
        }else if(evt.target.matches('#c4') && turn === 0 && game.board[1][0] === null && numPlayers !== 0 && game.winner === null){
            game.board[1][0] = 'X'
            cell4.innerHTML = game.board[1][0]
            switchTurn()
            if(numPlayers === 1){
                setTimeout(function ai(){
                    let randNum1 = Math.floor(Math.random()*game.board.length)
                    let randNum2 = Math.floor(Math.random()*game.board[randNum1].length)
                    if(game.board[randNum1][randNum2] === null){
                        game.board[randNum1][randNum2] = 'O'
                        if(randNum1 === 0 && randNum2 === 0 && game.winner === null){
                            cell1.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 1 && game.winner === null){
                            cell2.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 2 && game.winner === null){
                            cell3.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 0 && game.winner === null){
                            cell4.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 1 && game.winner === null){
                            cell5.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 2 && game.winner === null){
                            cell6.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 0 && game.winner === null){
                            cell7.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 1 && game.winner === null){
                            cell8.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 2 && game.winner === null){
                            cell9.innerHTML = 'O'
                            switchTurn()  
                        }
                        declareWinner()
                    }else{
                        if(game.winner === null){
                            ai()
                        }
                    }
                },500)
            }
        }else if(evt.target.matches('#c5') && turn === 0 && game.board[1][1] === null && numPlayers !== 0 && game.winner === null){
            game.board[1][1] = 'X'
            cell5.innerHTML = game.board[1][1]
            switchTurn()
            if(numPlayers === 1){
                setTimeout(function ai(){
                    let randNum1 = Math.floor(Math.random()*game.board.length)
                    let randNum2 = Math.floor(Math.random()*game.board[randNum1].length)
                    if(game.board[randNum1][randNum2] === null){
                        game.board[randNum1][randNum2] = 'O'
                        if(randNum1 === 0 && randNum2 === 0 && game.winner === null){
                            cell1.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 1 && game.winner === null){
                            cell2.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 2 && game.winner === null){
                            cell3.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 0 && game.winner === null){
                            cell4.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 1 && game.winner === null){
                            cell5.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 2 && game.winner === null){
                            cell6.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 0 && game.winner === null){
                            cell7.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 1 && game.winner === null){
                            cell8.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 2 && game.winner === null){
                            cell9.innerHTML = 'O'
                            switchTurn()  
                        }
                        declareWinner()
                    }else{
                        if(game.winner === null){
                            ai()
                        }
                    }
                },500)
            }
        }else if(evt.target.matches('#c6') && turn === 0 && game.board[1][2] === null && numPlayers !== 0 && game.winner === null){
            game.board[1][2] = 'X'
            cell6.innerHTML = game.board[1][2]
            switchTurn()
            if(numPlayers === 1){
                setTimeout(function ai(){
                    let randNum1 = Math.floor(Math.random()*game.board.length)
                    let randNum2 = Math.floor(Math.random()*game.board[randNum1].length)
                    if(game.board[randNum1][randNum2] === null){
                        game.board[randNum1][randNum2] = 'O'
                        if(randNum1 === 0 && randNum2 === 0 && game.winner === null){
                            cell1.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 1 && game.winner === null){
                            cell2.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 2 && game.winner === null){
                            cell3.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 0 && game.winner === null){
                            cell4.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 1 && game.winner === null){
                            cell5.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 2 && game.winner === null){
                            cell6.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 0 && game.winner === null){
                            cell7.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 1 && game.winner === null){
                            cell8.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 2 && game.winner === null){
                            cell9.innerHTML = 'O'
                            switchTurn()  
                        }
                        declareWinner()
                    }else{
                        if(game.winner === null){
                            ai()
                        }
                    }
                },500)
            }
        }else if(evt.target.matches('#c7') && turn === 0 && game.board[2][0] === null && numPlayers !== 0 && game.winner === null){
            game.board[2][0] = 'X'
            cell7.innerHTML = game.board[2][0]
            switchTurn()
            if(numPlayers === 1){
                setTimeout(function ai(){
                    let randNum1 = Math.floor(Math.random()*game.board.length)
                    let randNum2 = Math.floor(Math.random()*game.board[randNum1].length)
                    if(game.board[randNum1][randNum2] === null){
                        game.board[randNum1][randNum2] = 'O'
                        if(randNum1 === 0 && randNum2 === 0 && game.winner === null){
                            cell1.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 1 && game.winner === null){
                            cell2.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 2 && game.winner === null){
                            cell3.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 0 && game.winner === null){
                            cell4.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 1 && game.winner === null){
                            cell5.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 2 && game.winner === null){
                            cell6.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 0 && game.winner === null){
                            cell7.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 1 && game.winner === null){
                            cell8.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 2 && game.winner === null){
                            cell9.innerHTML = 'O'
                            switchTurn()  
                        }
                        declareWinner()
                    }else{
                        if(game.winner === null){
                            ai()
                        }
                    }
                },500)
            }
        }else if(evt.target.matches('#c8') && turn === 0 && game.board[2][1] === null && numPlayers !== 0 && game.winner === null){
            game.board[2][1] = 'X'
            cell8.innerHTML = game.board[2][1]
            switchTurn()
            if(numPlayers === 1){
                setTimeout(function ai(){
                    let randNum1 = Math.floor(Math.random()*game.board.length)
                    let randNum2 = Math.floor(Math.random()*game.board[randNum1].length)
                    if(game.board[randNum1][randNum2] === null){
                        game.board[randNum1][randNum2] = 'O'
                        if(randNum1 === 0 && randNum2 === 0 && game.winner === null){
                            cell1.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 1 && game.winner === null){
                            cell2.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 2 && game.winner === null){
                            cell3.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 0 && game.winner === null){
                            cell4.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 1 && game.winner === null){
                            cell5.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 2 && game.winner === null){
                            cell6.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 0 && game.winner === null){
                            cell7.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 1 && game.winner === null){
                            cell8.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 2 && game.winner === null){
                            cell9.innerHTML = 'O'
                            switchTurn()  
                        }
                        declareWinner()
                    }else{
                        if(game.winner === null){
                            ai()
                        }
                    }
                },500)
            }
        }else if(evt.target.matches('#c9') && turn === 0 && game.board[2][2] === null && numPlayers !== 0 && game.winner === null){
            game.board[2][2] = 'X'
            cell9.innerHTML = game.board[2][2]
            switchTurn()
            if(numPlayers === 1){
                setTimeout(function ai(){
                    let randNum1 = Math.floor(Math.random()*game.board.length)
                    let randNum2 = Math.floor(Math.random()*game.board[randNum1].length)
                    if(game.board[randNum1][randNum2] === null){
                        game.board[randNum1][randNum2] = 'O'
                        if(randNum1 === 0 && randNum2 === 0 && game.winner === null){
                            cell1.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 1 && game.winner === null){
                            cell2.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 0 && randNum2 === 2 && game.winner === null){
                            cell3.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 0 && game.winner === null){
                            cell4.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 1 && game.winner === null){
                            cell5.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 1 && randNum2 === 2 && game.winner === null){
                            cell6.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 0 && game.winner === null){
                            cell7.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 1 && game.winner === null){
                            cell8.innerHTML = 'O'
                            switchTurn()  
                        }
                        if(randNum1 === 2 && randNum2 === 2 && game.winner === null){
                            cell9.innerHTML = 'O'
                            switchTurn()  
                        }
                        declareWinner()
                    }else{
                        if(game.winner === null){
                            ai()
                        }
                    }
                },500)
            }
        }
        
        else if(evt.target.matches('#c1') && turn === 1 && game.board[0][0] === null && numPlayers !== 0 && game.winner === null){
            game.board[0][0] = 'O'
            cell1.innerHTML = game.board[0][0]
            switchTurn()   
        }else if(evt.target.matches('#c2') && turn === 1 && game.board[0][1] === null && numPlayers !== 0 && game.winner === null){
            game.board[0][1] = 'O'
            cell2.innerHTML = game.board[0][1]
            switchTurn()
        }else if(evt.target.matches('#c3') && turn === 1 && game.board[0][2] === null && numPlayers !== 0 && game.winner === null){
            game.board[0][2] = 'O'
            cell3.innerHTML = game.board[0][2]
            switchTurn()
        }else if(evt.target.matches('#c4') && turn === 1 && game.board[1][0] === null && numPlayers !== 0 && game.winner === null){
            game.board[1][0] = 'O'
            cell4.innerHTML = game.board[1][0]
            switchTurn()
        }else if(evt.target.matches('#c5') && turn === 1 && game.board[1][1] === null && numPlayers !== 0 && game.winner === null){
            game.board[1][1] = 'O'
            cell5.innerHTML = game.board[1][1]
            switchTurn()
        }else if(evt.target.matches('#c6') && turn === 1 && game.board[1][2] === null && numPlayers !== 0 && game.winner === null){
            game.board[1][2] = 'O'
            cell6.innerHTML = game.board[1][2]
            switchTurn()
        }else if(evt.target.matches('#c7') && turn === 1 && game.board[2][0] === null && numPlayers !== 0 && game.winner === null){
            game.board[2][0] = 'O'
            cell7.innerHTML = game.board[2][0]
            switchTurn()
        }else if(evt.target.matches('#c8') && turn === 1 && game.board[2][1] === null && numPlayers !== 0 && game.winner === null){
            game.board[2][1] = 'O'
            cell8.innerHTML = game.board[2][1]
            switchTurn()
        }else if(evt.target.matches('#c9') && turn === 1 && game.board[2][2] === null && numPlayers !== 0 && game.winner === null){
            game.board[2][2] = 'O'
            cell9.innerHTML = game.board[2][2]
            switchTurn()
        }

        function declareWinner(){
            const winner = document.getElementById('winner')
            if((game.board[0][0] === 'X' && game.board[0][1] === 'X' && game.board[0][2] === 'X') ||
            (game.board[1][0] === 'X' && game.board[1][1] === 'X' && game.board[1][2] === 'X') ||
            (game.board[2][0] === 'X' && game.board[2][1] === 'X' && game.board[2][2] === 'X') ||
            (game.board[0][0] === 'X' && game.board[1][0] === 'X' && game.board[2][0] === 'X') ||
            (game.board[0][1] === 'X' && game.board[1][1] === 'X' && game.board[2][1] === 'X') ||
            (game.board[0][2] === 'X' && game.board[1][2] === 'X' && game.board[2][2] === 'X') ||
            (game.board[0][0] === 'X' && game.board[1][1] === 'X' && game.board[2][2] === 'X') || 
            (game.board[2][0] === 'X' && game.board[1][1] === 'X' && game.board[0][2] === 'X') ){
                game.winner = game.players[0]
                winner.innerHTML = `${p1NameSelect.value} WINS!`
            }else if((game.board[0][0] === 'O' && game.board[0][1] === 'O' && game.board[0][2] === 'O') ||
            (game.board[1][0] === 'O' && game.board[1][1] === 'O' && game.board[1][2] === 'O') ||
            (game.board[2][0] === 'O' && game.board[2][1] === 'O' && game.board[2][2] === 'O') ||
            (game.board[0][0] === 'O' && game.board[1][0] === 'O' && game.board[2][0] === 'O') ||
            (game.board[0][1] === 'O' && game.board[1][1] === 'O' && game.board[2][1] === 'O') ||
            (game.board[0][2] === 'O' && game.board[1][2] === 'O' && game.board[2][2] === 'O') ||
            (game.board[0][0] === 'O' && game.board[1][1] === 'O' && game.board[2][2] === 'O') || 
            (game.board[2][0] === 'O' && game.board[1][1] === 'O' && game.board[0][2] === 'O') ){
                game.winner = game.players[1]
                winner.innerHTML = `${p2NameSelect.value} WINS!`
            }else if(game.board[0][0] !== null && game.board[0][1] !== null && game.board[0][2] !== null && 
                game.board[1][0] !== null && game.board[1][1] !== null && game.board[1][2] !== null && 
                game.board[2][0] !== null && game.board[2][1] !== null && game.board[2][2] !== null ){
                winner.innerHTML = 'DRAW!'
            }
        }
        declareWinner()
    }
    })
}

const reset = document.getElementById('reset')
reset.addEventListener('click', function(){
    game.board = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ]
    game.winner = null
    winner.innerHTML = ''

    turn = 0
    p1Name.style.background = "lightgreen"
    p2Name.style.background = "none"

    cell1.innerHTML = ''
    cell2.innerHTML = ''
    cell3.innerHTML = ''
    cell4.innerHTML = ''
    cell5.innerHTML = ''
    cell6.innerHTML = ''
    cell7.innerHTML = ''
    cell8.innerHTML = ''
    cell9.innerHTML = ''
})
