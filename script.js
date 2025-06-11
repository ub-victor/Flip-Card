document.addEventListener('DOMContentLoaded', ()=>{
    const card = document.getElementById('flip-card');

    card.addEventListener('click', ()=>{
        card.classList.toogle('flipped');
    })
})