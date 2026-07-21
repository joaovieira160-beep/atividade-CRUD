
//PARTE 1

let alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Vitor", notas: [7, 9, 10] },
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
        return "Aprovado"
    }
    else if( resultado>= 4 && resultado < 6){
        return "Recuperaçao"
    }else if(resultado < 4 && resultado >= 0){
        return "Reprovado"
    }else{
        return "Notas nao encontradas"
    }
    
}

console.log(situacao(resultado))

//PARTE 2 

function cadastro(){
    let nome = prompt("Qual nome do aluno?:");

    if(buscarAluno(nome)){
        alert("Aluno ja cadastrado");
        return
    }

    alunos.push({nome : nome , notas : []})
    alert("Aluno cadastrado com sucesso")
}


console.log(alunos)

function listarAlunos(){
    if(alunos.length ===0){
        console.log("Nenhum aluno cadastrado");
        return
    }

    let texto = "Lista dos alunos cadastrados\n\n";

    for(let i = 0 ; i < alunos.length;i++){
        texto += "-" + alunos[i].nome + "\n" 
    }

        alert(texto)

}

function removerAluno(){
    let nome = prompt("Digite o nome do aluno que deseja retirar: ")

    let alunoEncontrado = buscarAluno(nome)

        if(!alunoEncontrado){
            alert("Aluno nao cadastrado")
            return
        }

    let posicao = alunos.indexOf(alunoEncontrado);

    alunos.splice(posicao,1)

    alert("Aluno removido com sucesso")
}

//PARTE 3

function lancarNota(){
    let nome = prompt("Qual o nome do aluno que deseja lançar a nota?:")
    let alunoEncontrado = buscarAluno(nome);

    if(!alunoEncontrado){
        alert("Aluno nao encontrado")
        return
    }

    let nota = Number(prompt("Digite a nota para adicionar:"))

    if(nota < 0 || nota > 10 || isNaN(nota)){
        alert("Valor invalido!")
        return
    }

    alunoEncontrado.notas.push(nota)

    alert(`A nota ${nota} foi adicionada com sucesso para o aluno ${alunoEncontrado.nome}.`)
}


function verBoletim(){
     let nome = prompt("Qual aluno deseja ver o boletim?:")
     let alunoEncontrado = buscarAluno(nome);
    

     if(alunoEncontrado == undefined){
         alert("Aluno nao encontrado")
         return
     }
      let media = calcularMedia(alunoEncontrado);
      let status = situacao(media)
    return alert("Nome: " + alunoEncontrado.nome + "\nMedia: " + media.toFixed(2) + "\nSituaçao: " + status )
    }


    //PARTE 4

    function totalAlunos(){
        alert ("total de alunos: "+alunos.length)
    }


    function verMediaGeral(){

        if(alunos.length === 0){
            alert("nenhum aluno encontrado")
            return 
        }

        let somaMedias = 0

        for (let i= 0; i< alunos.length;i++){
            somaMedias += calcularMedia(alunos[i])
        }

        const mediaGeral= somaMedias / alunos.length 
        alert("a media geral da turma é: "+ mediaGeral.toFixed(2))
    }


    function listarAprovados(){
        let texto = "";
        let encontrou = false;

        for (let i= 0; i< alunos.length;i++){
            let media = calcularMedia(alunos[i])

            if(situacao(media) === "Aprovado"){
              texto += `Nome : ${alunos[i].nome} | Media: ${media.toFixed(2)} \n`
                encontrou = true;
                
            }
        }
        if (!encontrou){
            texto = "Ainda nao à aprovados"
            
        }
        alert(texto)
    }
