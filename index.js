const anoAtual =  2023;
const anoNascimento = parseInt(prompt("Digite o seu ano de nascimento:") );
const nome = prompt("Digite o seu nome:");
const idade = anoAtual-anoNascimento;
document.write(`Ola,seu nome é ${nome} e você tem ${idade} anos.`);