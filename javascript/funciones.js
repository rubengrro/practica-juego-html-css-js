let userAttack

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
    alert(userAttack)
}

function waterAttack(){
    userAttack = 'Agua'
    alert(userAttack)
}

function groundAttack(){
    userAttack = 'Tierra'
    alert(userAttack)
}

