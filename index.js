const game = { 
    players: ["",""],
    board: [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ],
    winner: null
}
let turn = 0
let NumPlayers = 0

const introNav = document.getElementById("introNav")

const mainNav = document.getElementById("mainNav")
mainNav.style.visibility = "hidden"

const p1Name = document.getElementById("player1")
p1Name.style.visibility = "hidden"
const p2Name = document.getElementById("player2")
p2Name.style.visibility = "hidden"

const p1NameSelect = document.getElementById('p1')
const p2NameSelect = document.getElementById('p2')


let onePlayerGame = document.getElementById('1p')
onePlayerGame.addEventListener('click', function(){
    NumPlayers = 1
    game.players[1] = "Computer"
    document.getElementById("player2").innerHTML = game.players[1]
    document.getElementById("player2").style.visibility = "visible"
    mainNav.style.visibility = "visible"
    document.getElementById('p2').style.visibility = "hidden"
    introNav.style.visibility = "hidden"
})

let twoPlayerGame = document.getElementById('2p')
twoPlayerGame.addEventListener('click', function(){
    NumPlayers = 2
    mainNav.style.visibility = "visible"
    introNav.style.visibility = "hidden"
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

if(turn === 0 && game.board[0][0] === null && game.winner === null){
    const cell1 = document.getElementById("c1")
    cell1.addEventListener('click', function(){
            game.board[0][0] = 'X'
            document.getElementById('c1').innerHTML = game.board[0][0]
            turn++
    })

    const cell2 = document.getElementById("c2")
    cell2.addEventListener('click', function(){
            game.board[0][1] = 'X'
            document.getElementById('c2').innerHTML = game.board[0][1]
            turn++
    })

    const cell3 = document.getElementById("c3")
    cell3.addEventListener('click', function(){
            game.board[0][2] = 'X'
            document.getElementById('c3').innerHTML = game.board[0][2]
            turn++
    })

    const cell4 = document.getElementById("c4")
    cell4.addEventListener('click', function(){
            game.board[1][0] = 'X'
            document.getElementById('c4').innerHTML = game.board[1][0]
            turn++
    })

    const cell5 = document.getElementById("c5")
    cell5.addEventListener('click', function(){
            game.board[1][1] = 'X'
            document.getElementById('c5').innerHTML = game.board[1][1]
            turn++
    })

    const cell6 = document.getElementById("c6")
    cell6.addEventListener('click', function(){
            game.board[1][2] = 'X'
            document.getElementById('c6').innerHTML = game.board[1][2]
            turn++
    })

    const cell7 = document.getElementById("c7")
    cell7.addEventListener('click', function(){
            game.board[2][0] = 'X'
            document.getElementById('c7').innerHTML = game.board[2][0]
            turn++
    })

    const cell8 = document.getElementById("c8")
    cell8.addEventListener('click', function(){
            game.board[2][1] = 'X'
            document.getElementById('c8').innerHTML = game.board[2][1]
            turn++
    })

    const cell9 = document.getElementById("c9")
    cell9.addEventListener('click', function(){
            game.board[2][2] = 'X'
            document.getElementById('c9').innerHTML = game.board[2][2]
            turn++
    })
}
else if(turn === 1 && game.board[0][0] === null && game.winner === null){
    const cell1 = document.getElementById("c1")
    cell1.addEventListener('click', function(){
            game.board[0][0] = 'O'
            document.getElementById('c1').innerHTML = game.board[0][0]
            turn++
    })

    const cell2 = document.getElementById("c2")
    cell2.addEventListener('click', function(){
            game.board[0][1] = 'O'
            document.getElementById('c2').innerHTML = game.board[0][1]
            turn++
    })

    const cell3 = document.getElementById("c3")
    cell3.addEventListener('click', function(){
            game.board[0][2] = 'O'
            document.getElementById('c3').innerHTML = game.board[0][2]
            turn++
    })

    const cell4 = document.getElementById("c4")
    cell4.addEventListener('click', function(){
            game.board[1][0] = 'O'
            document.getElementById('c4').innerHTML = game.board[1][0]
            turn++
    })

    const cell5 = document.getElementById("c5")
    cell5.addEventListener('click', function(){
            game.board[1][1] = 'O'
            document.getElementById('c5').innerHTML = game.board[1][1]
            turn++
    })

    const cell6 = document.getElementById("c6")
    cell6.addEventListener('click', function(){
            game.board[1][2] = 'O'
            document.getElementById('c6').innerHTML = game.board[1][2]
            turn++
    })

    const cell7 = document.getElementById("c7")
    cell7.addEventListener('click', function(){
            game.board[2][0] = 'O'
            document.getElementById('c7').innerHTML = game.board[2][0]
            turn++
    })

    const cell8 = document.getElementById("c8")
    cell8.addEventListener('click', function(){
            game.board[2][1] = 'O'
            document.getElementById('c8').innerHTML = game.board[2][1]
            turn++
    })

    const cell9 = document.getElementById("c9")
    cell9.addEventListener('click', function(){
            game.board[2][2] = 'O'
            document.getElementById('c9').innerHTML = game.board[2][2]
            turn++
    })
}
