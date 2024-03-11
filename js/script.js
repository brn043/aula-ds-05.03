function sidebar(){
    let menu = document.querySelector('#menu-mobile');
    if(menu.classList.contains('.disable')){
        menu.classList.remove('.disable');
        menu.classList.add('.enable');
        console.log('menu ativado');
    }else{
        menu.classList.remove('.enable');
        menu.classList.add('.disable');
        console.log('menu desativado')
    }
    
}