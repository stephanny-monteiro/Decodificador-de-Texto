document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.querySelector(".text-area");
    const mensagem = document.querySelector(".mensagem");
    const btnCopiar = document.querySelector(".btn-copiar");

    // As "chaves" de criptografia que utilizaremos são:
    // A letra "e" é convertida para "enter"
    // A letra "i" é convertida para "imes"
    // A letra "a" é convertida para "ai"
    // A letra "o" é convertida para "ober"
    // A letra "u" é convertida para "ufat"

    function btnEncriptar() {
        const textoEncriptado = encriptar(textArea.value);
        mensagem.value = textoEncriptado;
        textArea.value = "";
    }

    function encriptar(stringEncriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for (let i = 0; i < matrizCodigo.length; i++) {
            if (stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        return stringEncriptada;
    }

    function btnDesencriptar() {
        const textoDesencriptado = desencriptar(textArea.value);
        mensagem.value = textoDesencriptado;
        textArea.value = "";
    }

    function desencriptar(stringDesencriptada) {
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for (let i = 0; i < matrizCodigo.length; i++) {
            if (stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
        return stringDesencriptada;
    }

    window.copiarBtn = () => {
        const texto = mensagem.value; 
        if (texto) {

            const tempInput = document.createElement("input");
            tempInput.value = texto;
            document.body.appendChild(tempInput);

            tempInput.select();
            document.execCommand("copy");

            document.body.removeChild(tempInput);

            alert("Texto copiado para a área de transferência!");
        } else {
            alert("Não há texto para copiar.");
        }
    };

    document.querySelector(".btn-encriptar").addEventListener("click", btnEncriptar);
    document.querySelector(".btn-desencriptar").addEventListener("click", btnDesencriptar);
    btnCopiar.addEventListener("click", copiarBtn);
});
