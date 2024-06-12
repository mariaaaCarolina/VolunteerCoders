
var nome = localStorage.getItem('nome')
document.querySelector('#responsavel').value = nome


document.addEventListener("DOMContentLoaded", function () {
    const btnCadastrarProblema = document.querySelector('.btn-cadastrar-problema');

    btnCadastrarProblema.addEventListener('click', function () {
        const titulo = document.getElementById("titulo").value;
        const descricao = document.getElementById("descricao").value;
        const segmento = document.getElementById("causas-da-ong").value;
        const responsavel = document.getElementById("responsavel").value;
        const telefone = document.getElementById("telefone").value;


        if (!titulo || !descricao || !segmento || !responsavel || !telefone) {
            Swal.fire({
                icon: 'warning',
                title: 'Campos vazios',
                text: 'Por favor, preencha todos os campos antes de prosseguir.'
            });
            return;
        }

        const novoProblema = { titulo, descricao, segmento, responsavel, telefone };
        const problemas = JSON.parse(localStorage.getItem('problemas')) || [];
        problemas.push(novoProblema);
        localStorage.setItem('problemas', JSON.stringify(problemas));
        // problemas.splice(0, 1);
        // problemas.splice(2, 1);
        // problemas.splice(3, 1);
       

        localStorage.setItem('problemas', JSON.stringify(problemas));

        const swalConfig = {
            title: 'Insira sua senha de login para confirmar sua identidade:',
            input: 'password', // Define o tipo de entrada como senha
            inputAttributes: {
                // Adiciona classes personalizadas ao campo de senha
                class: 'swal2-input minha-classe-personalizada'
            },
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        };

        var senha = 's'

        Swal.fire(swalConfig).then((result) => {
            if (result.isConfirmed) {
                var senhaInserida = result.value;

                if (senhaInserida === senha) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Problema cadastrado com sucesso!',
                        text: 'Os dados sensíveis de ONG e estudante são privados.'
                    }).then(() => {
                        window.location.href = 'telaInicialONG.html';
                    });
                }}
        
        
    });
});
})
document
        .getElementById("imagem")
        .addEventListener("change", function (event) {
          const file = event.target.files[0];
          const reader = new FileReader();

          reader.onload = function (event) {
            const imageData = event.target.result;
            localStorage.setItem("imagemBase64", imageData);

            const imagemPreview = document.getElementById("imagem-preview");
            imagemPreview.src = imageData;
            imagemPreview.style.display = "block";

            document.getElementById("imagem").style.display = "none";
          };

          reader.readAsDataURL(file);
        });

      document
        .querySelector(".btn-trocar-imagem")
        .addEventListener("click", function () {
          document.getElementById("imagem").style.display = "block";

          const imagemPreview = document.getElementById("imagem-preview");
          imagemPreview.src = "#";
          imagemPreview.style.display = "none";
          document.getElementById("imagem").value = "";

          localStorage.removeItem("imagemBase64");
        });

      document
        .getElementById("btn-cadastrar")
        .addEventListener("click", function (event) {
          event.preventDefault(); // Impede o envio do formulário pelo método padrão
          const titulo = document.querySelector("#titulo").value;
          const causa = document.querySelector("#causas-da-ong").value;
          const telefone = document.querySelector("#telefone").value;
          const responsavel = document.querySelector("#responsavel").value;
          const descricao = document.querySelector("#descricao").value;

          if (!titulo || !causa || !telefone || !responsavel || !descricao) {
            Swal.fire({
              icon: "error",
              title: "Erro",
              text: "Preencha todos os campos.",
            });
            return;
          }

          const problema = {
            titulo: titulo,
            causa: causa,
            telefone: telefone,
            responsavel: responsavel,
            descricao: descricao,
          };

          const url =
            "https://664d0a0cede9a2b556527d60.mockapi.io/api/v1/problema";

          // Envia os dados para a API usando fetch
          fetch(url, {
            method: "POST", // Define o método como POST
            headers: {
              "Content-Type": "application/json", // Define o cabeçalho como JSON
            },
            body: JSON.stringify(problema), // Converte o objeto problema para uma string JSON
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
              // Aqui você pode adicionar código para exibir uma mensagem de sucesso ao usuário
            })
            .catch((error) => {
              console.error("Error:", error);
              // Aqui você pode adicionar código para exibir uma mensagem de erro ao usuário
            });
        });

      function cancelar(event) {
        event.preventDefault();

        Swal.fire({
          icon: "warning",
          title: "Atenção!",
          text: "Quer mesmo cancelar o cadastro de problema e voltar para a tela inicial?",
          showCancelButton: true,
          confirmButtonText: "Sim",
          cancelButtonText: "Não",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "telaInicialONG.html";
          }
        });
      }