function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
    soma += notas[c]
    }

    media = soma / notas.length;

    return media;

}

let media;

function aprovacao( notas ) {

    let media = calcularMedia( notas );

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return "Média: " + media + " - Resultado: " + condicao;
}