
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

//PARTE 5 / OS MENUS

function submenuCadastro(){
    do {
    opcao = Number( prompt("===submenu de Cadastro===\n1-cadastrar aluno\n2-Listar alunos\n3-Remover alunos\n0-voltar ") );

    switch (opcao) {
        case 1: cadastro();
         break;
       
        case 2: listarAlunos();
        break; 

        case 3: removerAluno();
        break;
        
        case 0: menuPrincipal()
        break;

        default:
             alert("Opcao invalida!");  
    }
} while (opcao !== 0);
}


function submenuNotas(){
    do {
    opcao = Number( prompt("===submenu de Notas===\n1-Lançar nota\n2-ver boletins\n0-voltar") );

    switch (opcao) {
        case 1: lancarNota();
         break;
       
        case 2: verBoletim();
        break; 
        
        case 0: menuPrincipal()
        break;

        default:
             alert("Opcao invalida!");  
    }
} while (opcao !== 0);
}

function submenuRelatorios(){
    do {
    opcao = Number( prompt("===submenu de Relatorios===\n1-Total de alunos\n2-Media geral da turma\n3-Listar aprovados\n0-voltar") );

    switch (opcao) {
        case 1: totalAlunos();
         break;
       
        case 2: verMediaGeral();
        break; 
        
        case 3: listarAprovados();
        break;

        case 0: menuPrincipal()
        break;

        default:
             alert("Opcao invalida!");  
    }
} while (opcao !== 0);
}

function menuPrincipal(){
    do {
    opcao = Number( prompt("===Menu Principal===\n1-cadastros\n2-Notas\n3-Relatorios\n0-Sair ") );

    switch (opcao) {
        case 1: submenuCadastro();
         break;
       
        case 2: submenuNotas();
        break; 
        
        case 3: submenuRelatorios();
        break;

        case 0: alert("programa encerrado")
        break;

        default:
             alert("Opcao invalida!");  
    }
} while (opcao !== 0);
}

menuPrincipal();
