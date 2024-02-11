document.querySelector('#container').addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const newImageSrc = '../img/' + randomNumber + '.png';
    const diceImg = document.querySelector('#dice img');
    diceImg.src = newImageSrc;
});