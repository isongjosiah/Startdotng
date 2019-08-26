// a Javascript program that consoles a chess board
let board = ""
for(countlr = 0; countlr < 8; countlr ++){
    for(counttb = 0; counttb < 8; counttb++){
        sum = countlr + counttb
        if(sum % 2 == 0){
            board = board + ""
        }else{
            board = board + "#"
        }
      
    }
    board += "\n" ;

    
}

console.log(board)
