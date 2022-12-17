    var placarA = 0
    var placarB = 0

function jogar(){
    var mao1 = document.getElementById('mao_jogador')
    var mao2 = document.getElementById('mao_oponente')
    var figuraA = 0
    var figuraB = 0
    var number_mao1 = Math.floor(10*Math.random())
        if(number_mao1 == 0 || number_mao1 == 1|| number_mao1 == 2 || number_mao1 == 3)
        {
            mao1.src = "/images/papel1.png"
            figuraA = "papel"
        } else if(number_mao1 == 4 || number_mao1 == 5 || number_mao1 == 6)
        {
            mao1.src = "/images/pedra1.png"
            figuraA = "pedra"
        } else
        {
            mao1.src = "/images/tesoura1.png"
            figuraA = "tesoura"
        }

    var number_mao2 = Math.floor(10* Math.random())
    if(number_mao2 == 0 || number_mao2 == 1|| number_mao2 == 2 || number_mao2 == 3)
        {
            mao2.src = "/images/papel2.png"
            figuraB = "papel"
        } else if(number_mao2 == 4 || number_mao2 == 5 || number_mao2 == 6)
        {
            mao2.src = "/images/pedra2.png"
            figuraB = "pedra"
        } else
        {
            mao2.src = "/images/tesoura2.png"
            figuraB = "tesoura"
        }
    
    var placar1 = document.getElementById('placarVoce')
    var placar2 = document.getElementById('placarOponente')
    

    if(figuraA == "papel" && figuraB == "pedra"){
        placarA ++
    } else if(figuraA == "papel" && figuraB == "tesoura"){
        placarB ++
    } else if (figuraA == "pedra" && figuraB == "papel"){
        placarB ++
    } else if (figuraA == "pedra" && figuraB == "tesoura"){
        placarA ++
    } else if(figuraA == "tesoura" && figuraB == "papel"){
        placarA ++
    } else if (figuraA == "tesoura" && figuraB == "pedra"){
        placarB ++
    } else{
        
    }

    placar1.innerHTML = placarA
    placar2.innerHTML = placarB

    


}