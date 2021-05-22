//GALERIA DE FOTOS
let tempo = 4000, //tempo de rotação
    currentImageIndex = 0, //imagem inicial (começa pelo índice 0)
    imagens = document.querySelectorAll("#capa img"), //selecionando todas as imagens que serão rotacionadas
    max = imagens.length; //máximo de imagens que serão utilizadas

    function rotacionar() {
        imagens[currentImageIndex].classList.remove("selected") //4º remove a classe "selected" depois que a imagem é exibida, para adicionar à outra imagem. Dessa forma, só 1 imagem terá essa classe por vez.

        currentImageIndex++ //2º adicionando +1 pra que a classe selected vá passando para cada imagem de cada vez

        if(currentImageIndex >= max){ //3º condição para que o contador pare quando atingir o número máximo de imgs
            currentImageIndex = 0
        }

        imagens[currentImageIndex].classList.add("selected") //1º adicionando a classe selected à primeira imagem
    }

    function inicio() {
        setInterval(() => {
            rotacionar() //chama a função acima
        }, tempo) //setinterval executará a função a cada tempo definido na variável tempo (5s)
    }

    window.addEventListener("load", inicio) //a função inicio será executada quando a janela for carregada


// FUNÇÃO VALIDA CPF --------------------------------------------------------------------------
$("#cpf").focusout(function () {
    fMascCPF(this)
    if (validaCpf(obj.value)) {
        console.log("CPF OK")
    } else {
        console.log("CPF com Problema")
        alert("Digite um CPF válido.")
        return;
    }
});

// VALIDA CPF ---------------------------------------------------------------------------------------------
function validaCpf(valCPF) {
    var strCPF = valCPF.replaceAll('.', '').replaceAll('-', '');
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}



//MÁSCARA CPF ---------------------------------------------------------------------------------
 $("#cpf").keydown(function () {
    fMascCPF(this)
});

function fMascCPF(objeto) {
    obj = objeto
    obj.value = mCPF(obj.value)
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}



// Formatando e validando CNPJ --------------------
function formataCNPJ(cnpj) {
    const cnpjAlvo = cnpj //valor final que será passado na função
    const cnpjDigitado = cnpj.value // valor definido pelo usuario
    let cnpjNovo; // função que vai receber o cpfDigitado e fazer sua formatação

    // \d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}\

    cnpjNovo = cnpjDigitado.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        function (regex, arg1, arg2, arg3, arg4, arg5) {
            return arg1 + '.' + arg2 + '.' + arg3 + '/' + arg4 + '-' + arg5;
        })
    cnpjAlvo.value = cnpjNovo;
}

// Alertando se CNPJ não é válido
function validaCnpj() {
    //elemento js que retorna falso se o input corresponde ao seu pattern
    if (document.cad.cnpj.validity.patternMismatch) {
        document.getElementById("cnpjTxt").innerHTML = "<font color='red';>CNPJ inválido. Exemplo válido: 11.222.333/0001-22</font>";

    } else {
        document.getElementById("cnpjTxt").innerHTML = "<font color=' #092147  '; text-shadow: '20px 20px  #092147  ';>CNPJ válido";
    }
    return false;
};


