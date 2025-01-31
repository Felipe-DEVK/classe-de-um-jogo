 class Hero {
    constructor(nome, idade, classe, ataque){
        this.nome = nome
        this.idade = idade
        this.classe = classe
        this.ataque = ataque
    }

    toString(){
        console.log(`o ${this.classe} atacou usando ${this.ataque}`)
    }
 }

 let mago = new Hero ("Felipe" , "29", "Mago", "Magia")

 let guerreiro = new Hero("Marcus", "25", "Guerreiro", "Espada")

 let monge = new Hero("Leonardo", "30", "Monge", "Artes Marciais")

 let ninja = new Hero("Carol", "30", "Ninja", "Shuriken")

 mago.toString()
 guerreiro.toString()
 monge.toString()
 ninja.toString()
