function petSelector(){
    if (document.getElementById('ratigueya').checked){
        alert('Seleccionaste a Ratigueya')
    } else if(document.getElementById('capipepo').checked){
        alert('Seleccionaste a Capipepo')
    }
    else if (document.getElementById('hipodoge').checked){
        alert('Seleccionaste a Hipodoge')
    } else {
        alert('No puedes iniciar sin un Mokepon')
    }
}
function startGame(){
    let petSelectorBtn = document.getElementById('pet-selector-btn')
    petSelectorBtn.addEventListener('click', petSelector)
}


window.addEventListener('load', startGame)