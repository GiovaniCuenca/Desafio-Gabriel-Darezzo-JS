
function inputName() {
    var nome = String(document.getElementById('inputName').value);
    return nome;
}

function showName() {
    var nomecaractere = inputName().length;
    window.alert(`O nome completo é : ${inputName()}, e a quantidade de caracteres é: ${nomecaractere}`);
}

function acenderLampada() {
    
}
