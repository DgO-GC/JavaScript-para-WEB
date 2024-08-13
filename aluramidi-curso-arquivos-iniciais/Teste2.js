/* 1) Desenvolvendo interatividade com JavaScript e HTML
Imagine que você está trabalhando no projeto de um instrumento musical digital, similar ao Alura Midi, onde ao clicar nos botões, sons diferentes são reproduzidos. Sua tarefa é utilizar HTML e JavaScript para criar a interatividade desses botões:

Inicie com o botão que representa o som "Pom";
Utilize a tag button no HTML e adicione a funcionalidade de reprodução de som usando JavaScript.
Para fazer essas ações, você precisa vincular o som específico (que já está disponível em um arquivo de áudio) ao clique deste botão.
*/

// Codigo HTML

/*<button id="tecla_pom" class="tecla_pom">Pom</button>

<audio src="caminho_para_seu_arquivo_de_som_pom.mp3" id="som_tecla_pom"></audio>
*/

//Codigo js
document.querySelector("#tecla_pom").onclick = function() {
    document.querySelector("#som_tecla_pom").play();
};

// =============================================================================================================

/* 
2) Resolvendo erros de nulo no JavaScript
Verifique a localização da tag <script> no seu arquivo HTML. Ela deve estar colocada ao final do corpo do documento, logo antes do fechamento da tag </body>;
Mova a tag <script> para essa nova localização. Isso garantirá que o JavaScript só será executado após todos os elementos da página terem sido carregados;
Salve as alterações e recarregue a página no navegador. Verifique se o erro de nulo foi resolvido.
Código HTML:
<body>
    <!-- Conteúdo do body -->
    <!-- ... -->
    
    <script src="main.js"></script>
</body>
*/


// =============================================================================================================

/*
3) Adicionando funcionalidade de áudio ao botão
Você está desenvolvendo um aplicativo web de instrumentos musicais e precisa criar uma interface que permita aos usuários tocar sons diferentes ao clicar em botões específicos. Já existe um botão com a classe tecla_pom e uma função tocaSomPom() que reproduz o som. Seu desafio é vincular a função tocaSomPom() ao evento de clique do botão tecla_pom sem usar o atributo onclick no HTML, mantendo as boas práticas de JavaScript.
*/
const botaoPom = document.querySelector('.tecla_pom')
javascript
//Copy code
botaoPom.addEventListener('click', tocaSomPom);


// =============================================================================================================

/*
4) Criando uma função para tocar sons
Agora, você identificou um segundo problema: os sons estão sendo automaticamente reproduzidos ao carregar a página, o que é bloqueado por padrão pelos navegadores por razões de experiência do usuário (algumas pessoas não gostam de ser surpreendidas por sons). Para resolver isso, você precisa modificar o arquivo JavaScript para que o som só seja reproduzido quando um botão específico for clicado. Crie uma função chamada tocaSomPom, que será responsável por reproduzir o som apenas quando invocada, e assegure que ela seja chamada corretamente quando o botão apropriado for clicado.
*/

function tocaSomPom() {
    // Código para tocar o som
}

document.querySelector('#botaoPom').addEventListener('click', tocaSomPom);