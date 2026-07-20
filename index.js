const prompt = require('prompt-sync')()

let alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "vitor", notas: [7, 9, 10] },
    { nome: "lucas", notas: [4, 5, 7] }
]

function buscarAluno(nomeBusca){
    for (let i= 0; i< alunos.length;i++){
            if(alunos[i].nome.toLowerCase() === nomeBusca.toLowerCase()){
                return alunos[i]

            }
    }
    return undefined
}

let resultado = 0

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

resultado = calcularMedia(alunos[1])


console.log(calcularMedia(alunos[1]))



function situacao(resultado){

    if( resultado>=6 ){
        return "aprovado"
    }
    else if( resultado>= 4 && resultado < 6){
        return "recuperaçao"
    }else if(resultado < 4 && resultado >= 0){
        return "reprovado"
    }else{
        return "notas nao encontradas"
    }
    
}

console.log(situacao(resultado))

//PARTE 2 

function cadastro(){
    let nome = prompt("qual nome do aluno?:");

    if(buscarAluno(nome)){
        alert("aluno ja cadastrado");
        return
    }

    alunos.push({nome : nome , notas : []})
    alert("aluno cadastrado com sucesso")
}


console.log(alunos)

function listarAlunos(){
    if(alunos.length ===0){
        console.log("nenhum aluno cadastrado");
        return
    }

    let texto = "lista dos alunos cadastrados\n\n";

    for(let i = 0 ; i < alunos.length;i++){
        texto += "-" + alunos[i].nome + "\n" 
    }

        alert(texto)

}

function removerAluno(){
    let nome = prompt("digite o nome do aluno que deseja retirar: ")

    let alunoEncontrado = buscarAluno(nome)

        if(!alunoEncontrado){
            alert("aluno nao cadastrado")
            return
        }

    let posicao = alunos.indexOf(alunoEncontrado);

    alunos.splice(posicao,1)

    alert("aluno removido com sucesso")
}