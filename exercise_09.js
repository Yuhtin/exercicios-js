function grades(nota) {
    if (nota >= 38) {
        console.log(`Aprovado com nota: ${Math.round(nota)}!`)
    } else console.log(`Reprovado com nota: ${nota}`)


}

grades(25)
grades(43)