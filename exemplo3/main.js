function media(n1,n2,n3){
    return (n1+n2+n3)/3;
};
function situacao(m){
    if(m>=6&&m<=10){
        return 'Aprovado!';
    }
    else if(m>=4&&m<6){
        return 'Recuperação';
    }
    else if(m>0&&m<4){
        return 'Reprovado!'
    }
    else{
        return 'Valor inválido!';
    }
}