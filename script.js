const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {

        mario.classList.remove('pulo');
    }, 900);
 
}

const loop = setInterval (() => {
    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(canoPosition <= 95 && marioPosition < 90 && canoPosition > 0){
        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`


        mario.src = 'imagens/Mariomorto.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }
},10);

document.addEventListener('keydown', pulo);