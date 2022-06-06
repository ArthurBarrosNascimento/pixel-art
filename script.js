// criando HTML
const body = document.querySelector('body');
const title = document.createElement('h1'); // titulo
title.setAttribute('id', 'title');
title.innerText = 'Paleta de Cores';
body.appendChild(title);

// Paleta de Cores
function paletteColor() {
  const divColorPalette = document.createElement('div');
  divColorPalette.setAttribute('id', 'color-palette');
  body.appendChild(divColorPalette);
  const colorPalette = document.querySelector('#color-palette');
  for (let i = 0; i < 4; i += 1) {
    const divColor = document.createElement('div');
    divColor.setAttribute('class', 'color');
    colorPalette.appendChild(divColor);
  }
  const addIdColor = document.querySelector('#color-palette').children;
  addIdColor[0].setAttribute('id', 'black');
  addIdColor[1].setAttribute('id', 'red');
  addIdColor[2].setAttribute('id', 'blue');
  addIdColor[3].setAttribute('id', 'green');

  const corSelecionada = document.querySelector('#black');
  corSelecionada.classList.add('selected');
}
paletteColor();
// btn para limpar pixel-board
function btnClearPixelBoard() {
  const btn = document.createElement('button');
  btn.innerText = 'Limpar';
  btn.setAttribute('id', 'clear-board');
  body.appendChild(btn);
  btn.addEventListener('click', () => {
    console.log('clicado');
    const recuperaPixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < recuperaPixel.length; i += 1) {
      recuperaPixel[i].style.backgroundColor = 'white';
    }
  });
}
btnClearPixelBoard();
// pixel board
function boardPixel() {
  const pixelBoard = document.createElement('div');
  pixelBoard.setAttribute('id', 'pixel-board');
  body.appendChild(pixelBoard);

  const divPixelBoard = document.querySelector('#pixel-board');
  for (let i = 1; i <= 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixel');
    divPixelBoard.appendChild(pixel);
  }
}
boardPixel();

function selectedCores() {
  const recuperaCor = document.querySelectorAll('.color');
  for (let i = 0; i < recuperaCor.length; i += 1) {
    recuperaCor[i].addEventListener('click', () => {
      const recuperaSelect = document.querySelector('.selected');
      recuperaSelect.classList.remove('selected');
      recuperaCor[i].classList.add('selected');
      // const corSelected = getComputedStyle(recuperaCor[i]);
      // const bgColor = corSelected.getPropertyValue('background-color');
      // console.log(bgColor);
    });
  }
}
selectedCores();
// pintando o pixel
function pitarPixel() {
  const recuperaPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < recuperaPixel.length; i += 1) {
    recuperaPixel[i].addEventListener('click', () => {
      console.log('clicado');
      const recuperaSelected = document.querySelector('.selected');
      const backGroundColor = window.getComputedStyle(recuperaSelected).backgroundColor;
      console.log(backGroundColor);
      recuperaPixel[i].style.backgroundColor = backGroundColor;
    });
  }
}
pitarPixel();
