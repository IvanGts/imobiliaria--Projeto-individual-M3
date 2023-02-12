<div>
 <h1 align="center">Projeto - Estão servidos?</h1>
 <h4 align="center">Projeto realizado sob treinamento da Reslília</h4>
 <p align="center">Desenvolvido uma simulação de API com rotas para ser acessadas por métodos.</p>
 </div>

<div align="center" display="flex" padding="10px">
 <h3 align="center">Tecnologias usadas</h3>
 <img width="150px" align="center" src="https://miro.medium.com/max/930/0*MNVJq_8e0SJoqZb5.jpg">
 <img width="100px" align="center" src="https://png.pngtree.com/png-vector/20190412/ourmid/pngtree-json-file-document-icon-png-image_932187.jpg">
</div>

<div align="center" display="flex" justify-content="center" flex-direction="column">
  <h2 align="center">Documentação</h2>
  <h3 align="center">Métodos para acessar as rotas do arquivo JSON</h3>
 <p>O acesso ao arquivo JSON requer a instalação do json-server. Para instalar basta ultizar o comando: npm install -g json-server, em seguida ainda no terminal, acessar a pasta em que o arquivo JSON se encontra, exemplo: cd pastadoarquivo-json. Após toda instalação, ainda na pasta do arquivo, execute o comando: npx json-server --watch db.json(db.json seria o nome do arquivo json), assegure-se de que o nome do arquivo esteja correto para a execução correta.</p>
  
 
  <p align="center">Para acessar as rotas do arquivo JSON pelo <b>Insomnia</b> e fazer alterações no arquivo, siga as instruções abaixo:</p>
  <section>
      <p>Primeiramente para utilizar o <b>Insomnia</b>, acesse https://insomnia.rest/, clique em: Get Start For Free e clique em: Download; em seguida será encaminhado a pagina de download, clique em: Download Insomnia For Windows e execute para instalar.</p> <br> <br>
   <p>Após a instalção, com o <b>Insomnia</b> aberto, clique em: Create e em seguida Request Collection, para criar um novo documento consumir o arquvio JSON. Clique em: New HTTP Request e cole o link do localhost no input localizado no topo. O link do localhost foi disponibilizado no terminal após a execução do arquivo JSON. <br> Para mudar para um dos métodos abaixo clique na seta de seleção ao lado esquerdo do input e clique em Send para executar o método.</p>
      <div>
         <p text-size="22px">GET</p>
         <p>Visualiza os dados da rota passada no link do local host. Caso queira visualizar um dado em especifico, inclua o id que deseja no link do local host.</p>
      </div>
      <div>
         <p text-size="22px">POST</p>
         <p>Adiciona dados de acordo com a rota passada no link do local host</p>
      </div>
      <div>
         <p text-size="22px">PUT</p>
         <p>Altera dados de acordo com a rota ID passado no link do localhost. Use o mesmo padrão para criar novos dados.</p>
      </div>
      <div>
         <p text-size="22px">DELETE</p>
         <p>Deleta dados de acordo com a rota e o ID passado no link do localhost. </p>
      </div>
   <div>
      <p><b>Como espeficiar o ID no link do local host:</b></p>
      <img src="./assets/img/insomnia.png">
    
   </div>
 
  
   </section>
   <br>
   <br>
   <div display: "flex" flex-direction: "column" padding:"10px">
     <p text-size="30px"><b>Rotas disponíveis:</b></p>
        <p>Raiz:</p>
        <p>http://localhost:3000/</p>
        <p>Clientes:</p>
        <p>http://localhost:3000/clientes</p>
        <p>Funcionários:</p>
        <p>http://localhost:3000/funcionarios</p>
        <p>Casas:</p>
        <p>http://localhost:3000/casas</p>
        <p>Apartamentos:</p>
        <p>http://localhost:3000/apartamentos</p>
               
  </div>
</div>
  
