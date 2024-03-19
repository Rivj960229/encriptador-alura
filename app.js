let areaTexto = document.getElementById("textarea");
let textoEncriptado = document.getElementById("texto-encriptado");
const btnEncriptar = document.getElementById("encriptar");
const btnDesEncriptar = document.getElementById("desencriptar");
const btnCopiar = document.getElementById("copiar");
const textos = document.getElementById("textos");

btnEncriptar.addEventListener("click", () => {
  if (areaTexto.value !== '') {
    textoEncriptado.innerText = encriptar(areaTexto.value);
    textos.style.display = "none";
    btnCopiar.style.display = 'block';
    textoEncriptado.style.display = 'block';
  } else {
    textos.style.display = 'flex';
    textoEncriptado.innerText = '';
    textoEncriptado.style.display = 'none';
    btnCopiar.style.display = 'none'
  }
});

btnDesEncriptar.addEventListener('click', ()=>{
  if (areaTexto.value !== '') {
    textoEncriptado.innerText = desencriptar(areaTexto.value);
    textos.style.display = "none";
    btnCopiar.style.display = 'block';
    textoEncriptado.style.display = 'block';
  } else {
    textos.style.display = 'flex';
    textoEncriptado.innerText = '';
    textoEncriptado.style.display = 'none';
    btnCopiar.style.display = 'none'
  }
})

const btnLimpiar = document.getElementById("limpiar");

btnLimpiar.addEventListener("click", () => {
  areaTexto.value = ''; // Limpiar el área de texto
  textoEncriptado.innerText = ''; // Limpiar el texto encriptado
  textos.style.display = 'flex'; // Mostrar el contenedor de texto inicial
  btnCopiar.style.display = 'none'; // Ocultar el botón de copiar
  textoEncriptado.style.display = 'none'; // Ocultar el texto encriptado
});


btnCopiar.addEventListener('click', ()=>{
  navigator.clipboard.writeText(textoEncriptado.textContent)
})

const diccionarioEncriptado = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
}

function encriptar(texto){
  let textoEncriptado = '';
  for(let i = 0; i<texto.length; i++){
    const letra = texto[i];
    if(letra in diccionarioEncriptado){
      textoEncriptado += diccionarioEncriptado[letra]
    } else {
      textoEncriptado += letra;
    }
  }
  return textoEncriptado;
}

function desencriptar(texto){
  let palabra = '';
  if(texto !== ''){
    palabra += texto.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u')
  }
  return palabra
}
