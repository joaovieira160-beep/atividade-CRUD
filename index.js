

let alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "vitor", notas: [7, 9, 10] },
    { nome: "lucas", notas: [4, 5, 7] }
]

function buscarAluno(nomeBusca){
    for (let i= 0; i<= alunos.length;i++){
            if(alunos[i].nome.toLowerCase() === nomeBusca.toLowerCase()){
                return alunos[i]

            }
    }
    return undefined
}

console.log(buscarAluno("ana"))

