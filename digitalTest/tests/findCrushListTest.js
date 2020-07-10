const should = require ('should')
const findCrushs = require('../findCrushs')

describe('find crushs', () =>{
    it('soma crushs', () =>{
        findCrushs.somaCrush(2,3).should.be.equal(5)
    })
    it("deve somar dois numeros e retornar o resultado correto da soma", () =>{
        findCrushs.somaCrush(10,20).should.be.equal(30)
    })  
    it('Passar um nome e deve retornar mensagem de pessoa não encontrada', ()=>{
        findCrushs.encontraCrush('Joselito Marques').should.be.equal('Crush não encontrado :(')
    })
    it('retorna a mensagem de que nome é obrigatório', () => {
        findCrushs.encontraCrush().should.be.equal("Campo nome está vazio")
    })
    it('tipo inválido', () => {
        findCrushs.encontraCrush({}).should.be.equal("Não pode ser número")
    })
    it('Deve retornar um nome da lista', () => {
        findCrushs.encontraCrush("AlePer").should.be.equal("AlePer")
    })
})