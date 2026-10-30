function MediaNotas(nota1,nota2,nota3){
    media = (nota1+nota2+nota3)/3

    if (media >= 7){
        return "aprovado"
    }
    else{
        return "reprovado"
    }
}

console.log(MediaNotas(5,7,7))