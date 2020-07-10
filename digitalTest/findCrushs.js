const listaDeCrush = [
    "Tom Cruise",
    "Carlos Daniel",
    "Zezinho",
    "AlePer",
    "Zezão"
]

const somaCrush = (n1, n2) => n1 + n2

const encontraCrush = nome =>{
    try{
        validacao(nome)
        const crushEncontrado = listaDeCrush.find(crush => crush === nome)
        return crushEncontrado ? crushEncontrado : "Crush não encontrado :("
    }catch(erro){
        return erro
    }
}

const validacao = nome  =>{
    if(!nome) throw "Campo nome está vazio"
    if(typeof nome !== 'string') throw 'Não pode ser número'
}

module.exports={
    somaCrush,
    encontraCrush
}