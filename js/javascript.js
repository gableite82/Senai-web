
function salvarCadastro() {
    var nomeProprietario = document.getElementById('nomeProprietario').value;
    var numeroApartamento = document.getElementById('numeroApartamento').value;
    var blocoApartamento = document.getElementById('blocoApartamento').value;
    var placaVeiculo = document.getElementById('placaVeiculo').value;
    var modeloVeiculo = document.getElementById('modeloVeiculo').value;
    var vagaVeiculo = document.getElementById('vagaVeiculo').value;

    console.log("Nome do Proprietário:", nomeProprietario);
    console.log("Número do Apartamento:", numeroApartamento);
    console.log("Bloco do Apartamento:", blocoApartamento);
    console.log("Placa do Veículo:", placaVeiculo);
    console.log("Modelo do Veículo:", modeloVeiculo);
    console.log("Número da Vaga de Estacionamento:", vagaVeiculo);

    alert("Cadastro realizado com sucesso!");
}