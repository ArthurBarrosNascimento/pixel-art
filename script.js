function criarColuna(tamanho) {
    const linha = document.querySelector('#pixel-board');
    for (let index = 1; index <= tamanho; index += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        linha.appendChild(pixel);
        pixel.addEventListener('click', function(){
            let select = document.querySelector('.selected').style.backgroundColor;
            pixel.style.backgroundColor = select;
        })
    }
}

criarColuna(25);

let recuperaColor = document.querySelectorAll('.color');
for (let i = 0; i < recuperaColor.length; i += 1) {
    recuperaColor[i].addEventListener('click', function(){
        let recuperaSelect = document.querySelector('.selected');

        recuperaSelect.classList.remove('selected');

        recuperaColor[i].classList.add('selected');
    });
}