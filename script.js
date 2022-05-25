function criarColuna() {
    const linha = document.getElementById('pixel-board');
    for (let index = 1; index <= 25; index += 1) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        linha.appendChild(pixel);
    }
}

criarColuna();

const black = document.getElementById('black').onclick;