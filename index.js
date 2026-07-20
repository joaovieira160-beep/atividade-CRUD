

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

function calcularMedia(alunosnome){

        if(alunosnome.notas.length === 0){
            return 0
        }

    let resultado = 0
    for(let i=0; i< alunosnome.notas.length;i++){
                resultado += alunosnome.notas[i]

        
    }
    return resultado / alunosnome.notas.length;
}


console.log(calcularMedia(alunos[1]))
