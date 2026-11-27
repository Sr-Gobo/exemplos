function calculo(valor, porcentagem){
    return valor*(porcentagem/100);
}
function desconto(valor, porcentagem){
    return valor-calculo(valor, porcentagem);
}