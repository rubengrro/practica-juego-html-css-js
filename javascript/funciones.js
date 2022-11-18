
function petSelector(){
    let inputRatigueya = document.getElementById
    ('ratigueya')
    let inputCapipepo = document.getElementById('capipepo')
    let inputHipodoge = document.getElementById('hipodoge')
    let spanPetUserName = document.getElementById('pet-user__name')

    if (inputRatigueya.checked){
        spanPetUserName.innerHTML = 'Ratigueya'
    } else if(inputCapipepo.checked){
        spanPetUserName.innerHTML = 'Capipepo'
    }
    else if (inputHipodoge.checked){
        spanPetUserName.innerHTML = 'Hipodoge'
    } else {
        alert('No puedes iniciar sin un Mokepon')
    }
}

function startGame(){
    let petSelectorBtn = document.getElementById('pet-selector-btn')
    petSelectorBtn.addEventListener('click', petSelector)
}


window.addEventListener('load', startGame)