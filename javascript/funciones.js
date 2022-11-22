let userAttack
let enemyAttack
let userLife = 3
let enemyLife = 3

function startGame(){
    let petSelectorBtn = document.getElementById('pet-selector-btn')
    petSelectorBtn.addEventListener('click', userPetSelector)

    let fireBtn = document.getElementById('fire-btn')
    fireBtn.addEventListener('click', fireAttack)
    let waterBtn = document.getElementById('water-btn')
    waterBtn.addEventListener('click', waterAttack)
    let groundBtn = document.getElementById('ground-btn')
    groundBtn.addEventListener('click', groundAttack)
}
window.addEventListener('load', startGame)

function aleatorio(min, max){
    return Math.floor(Math.random()*((max - min) + 1) + min)
}

function userPetSelector(){
let inputRatigueya = document.getElementById
('ratigueya')
let inputCapipepo = document.getElementById('capipepo')
let inputHipodoge = document.getElementById('hipodoge')
let spanUserPetName = document.getElementById('user-pet__name')

    if (inputRatigueya.checked){
        spanUserPetName.innerHTML = 'Ratigueya'
    } else if(inputCapipepo.checked){
        spanUserPetName.innerHTML = 'Capipepo'
    }
    else if (inputHipodoge.checked){
        spanUserPetName.innerHTML = 'Hipodoge'
    } else {
        alert('No puedes iniciar sin un Mokepon')
    }
    enemyPetSelector()
}

function enemyPetSelector(){
let randomEnemyPet = aleatorio(1,3)
let spanEnemyPetName = document.getElementById('enemy-pet__name')
    if (randomEnemyPet == 1){
        spanEnemyPetName.innerHTML = 'Ratigueya'
    } else if (randomEnemyPet == 2){
        spanEnemyPetName.innerHTML = 'Capipepo'
    } else if (randomEnemyPet == 3){
        spanEnemyPetName.innerHTML = 'Hipodoge'
    }
}

function fireAttack(){
    userAttack = 'Fuego'
    enemyAttackSelector()
    results()
}

function waterAttack(){
    userAttack = 'Agua'
    enemyAttackSelector()
    results()
}

function groundAttack(){
    userAttack = 'Tierra'
    enemyAttackSelector()
    results()
}

function enemyAttackSelector(){
    let randomAttack = aleatorio(1,3)
    if (randomAttack == 1){
        enemyAttack = 'Fuego'
    } else if (randomAttack == 2){
        enemyAttack = 'Agua'
    } else if (randomAttack == 3){
        enemyAttack = 'Tierra'
    }
}

function results(){ 
    let spanUserLife = document.getElementById('user-pet__life')
    let spanEnemyLife = document.getElementById('enemy-pet__life')
    if(userAttack == 'Agua' && enemyAttack == 'Fuego' || userAttack == 'Tierra' && enemyAttack == 'Agua' || userAttack == 'Fuego' && enemyAttack == 'Tierra'){
        newMessage('Ganaste!!')
        enemyLife--
        spanEnemyLife.innerHTML = enemyLife
    } else if (userAttack == enemyAttack){
        newMessage('Es un empate')
    } else {
        newMessage('El enemigo ha ganado!!')
        userLife--
        spanUserLife.innerHTML = userLife
    }
    petStats()
}

function petStats(){
    if (userLife == 0){
        endGame('Gana la mascota enemiga')
    } else if(enemyLife == 0){
        endGame('Enemigo derrotado!')
    }
}

function newMessage(final){
    let messageSection = document.getElementById('messages')
    let paragraph = document.createElement('p')
    paragraph.innerHTML = 'Tu mascota atacó con ' + userAttack + ' y la mascota enemiga atacó con ' + enemyAttack + '. ' + final

    messageSection.appendChild(paragraph)
}

function endGame(finalResult){
    let messageSection = document.getElementById('messages')
    let paragraph = document.createElement('p')
    paragraph.innerHTML = finalResult

    messageSection.appendChild(paragraph)
}


