const textArea = document.querySelector ('.text-area');
const mensagem = document.querySelector ('.mensagem');

function btnEncriptar(){
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
    textArea.value=""
}

function btnDesencriptar(){
    const textoEncriptado = descriptografar(textArea.value);
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
    textArea.value=""
}

function btnCopiar() {
    let textoCopiado = mensagem;
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("O texto copiado é: " + textoCopiado.value);
}

function criptografar(stringEncriptada) {
    let matrizCrip = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCrip.length; i++) {
        if (stringEncriptada.includes(matrizCrip[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCrip[i][0], matrizCrip[i][1]);
        }
        
    }
    return stringEncriptada;
}

function descriptografar(stringDesencriptada) {
    let matrizCrip = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCrip.length; i++) {
        if (stringDesencriptada.includes(matrizCrip[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCrip[i][1], matrizCrip[i][0]);
        }
        
    }
    return stringDesencriptada;
}
