const soustraction = document.getElementById('sous')
const addition = document.getElementById('plus')
const multiplication = document.getElementById('multi')
const division = document.getElementById('div')
const operateur = document.getElementById('operateur')
const operation = document.getElementById('operation')
const operation2 = document.getElementById('operation2')
const premierNombre = document.getElementById('premierNombre')
const deuxiemeNombre = document.getElementById('deuxiemeNombre')
let stockPremierNombre
let stockDeuxiemeNombre
let boutonEntrez2 = document.getElementById('boutonEntrez2')
let boutonEntrez = document.getElementById('boutonEntrez')
let boutonQuitter = document.getElementById('boutonQuitter')
let boutonQuitter2 = document.getElementById('boutonQuitter2')
let boutonQuitter3 = document.getElementById('boutonQuitter3')
const resultat = document.getElementById('resultat')
const texte = document.getElementById('texte')
let calcule

soustraction.addEventListener('click', function(){
    entrerNombre(); 
    boutonEntrez2.addEventListener('click', function(){
        if (deuxiemeNombre.value === "") {            
        }else{            
            stockDeuxiemeNombre = deuxiemeNombre.value
            deuxiemeNombre.value = ""
            operation2.style.display = 'none'
            resultat.style.display = 'flex'
            calcule = eval(stockPremierNombre + '-' + stockDeuxiemeNombre)
            texte.innerText = (stockPremierNombre + ' - ' + stockDeuxiemeNombre + ' = ' + calcule)
        }
    })
})
addition.addEventListener('click', function(){
    entrerNombre();
    boutonEntrez2.addEventListener('click', function(){
        if (deuxiemeNombre.value === "") {            
        }else{            
            stockDeuxiemeNombre = deuxiemeNombre.value
            deuxiemeNombre.value = ""
            operation2.style.display = 'none'
            resultat.style.display = 'flex'
            calcule = eval(stockPremierNombre + '+' + stockDeuxiemeNombre)
            texte.innerText = (stockPremierNombre + ' + ' + stockDeuxiemeNombre + ' = ' + calcule)
        }
    })
})
multiplication.addEventListener('click', function(){
    entrerNombre();
    boutonEntrez2.addEventListener('click', function(){
        if (deuxiemeNombre.value === "") {            
        }else{            
            stockDeuxiemeNombre = deuxiemeNombre.value
            deuxiemeNombre.value = ""
            operation2.style.display = 'none'
            resultat.style.display = 'flex'
            calcule = eval(stockPremierNombre + '*' + stockDeuxiemeNombre)
            texte.innerText = (stockPremierNombre + ' * ' + stockDeuxiemeNombre + ' = ' + calcule)
        }
    })
})
division.addEventListener('click', function(){
    entrerNombre();
    boutonEntrez2.addEventListener('click', function(){
        if (deuxiemeNombre.value === "") {            
        }else{            
            stockDeuxiemeNombre = deuxiemeNombre.value
            deuxiemeNombre.value = ""
            operation2.style.display = 'none'
            resultat.style.display = 'flex'
            calcule = eval(stockPremierNombre + '/' + stockDeuxiemeNombre)
            texte.innerText = (stockPremierNombre + ' / ' + stockDeuxiemeNombre + ' = ' + calcule)
        }
    })
})

function entrerNombre(){
    operation.style.display = 'flex'
    operateur.style.display = 'none'

    boutonEntrez.addEventListener('click', function(){
        if (premierNombre.value === "") {
            
        }else{
            stockPremierNombre = premierNombre.value
            premierNombre.value = ""
            operation.style.display = 'none'
            operation2.style.display = 'flex'
        }  
    })  

    boutonQuitter.addEventListener('click', function(){
        operateur.style.display = 'flex'
        operation.style.display = 'none'
    })
    boutonQuitter2.addEventListener('click', function(){
        operateur.style.display = 'flex'
        operation2.style.display = 'none' 
    })
    
    boutonQuitter3.addEventListener('click', function(){
        operateur.style.display = 'flex'
        resultat.style.display = 'none'
    })
}
