document.addEventListener('DOMContentLoaded', ()=>{
    const card = document.getElementById('flip-xard');

    card.addEventListener('click', ()=>{
        card.classList.toogle('flipped');
    })
})