var estoque_baixo = 0
var cadastro = 0
var vinho_antigo = null

// function validacao(){
    
// }

function verificar_estoque(qnt){
    if (qnt < 5){
        estoque_baixo += 1
    }
}

function tipo_vinho(safra){
    if (safra >= 2020 && safra <= 2026){
        alert("Vinho jovem")
    }else if (safra >= 2010 && safra < 2020){
        alert("Vinho amadurecido")
    }else{
        alert("Vinho antigo")
    }
}

function mostrar_dados(){
    console.log(`Foram feitos: ${cadastro} cadastros`)
    console.log(`Quantidade de vinhos com estoque baixo: ${estoque_baixo}`)
    console.log(`Vinho com a safra mais antiga: ${vinho_antigo}`)
}

while (true){
    var vinho = prompt("Digite o nome do vinho: ")
    
    var qnt = prompt("Digite sua quantidade: ")
    verificar_estoque(qnt)

    var safra = prompt("Digite o ano do vinho: ")
    tipo_vinho(safra)

    // utilizei uma lógica parecida com a de Python, porém em vez de None utilizei null
    if (vinho_antigo == null || safra < vinho_antigo){
        vinho_antigo = safra
    }
    
    cadastro += 1
    
    var continuar = prompt("Deseja continuar cadastrando mais vinhos?")
    if (continuar == "não"){
        break
    }
}

mostrar_dados()