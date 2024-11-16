// Uso básico de const e let
const PI = 3.14;
let contador = 0;

function exemploEscopo() {
    const mensagem = "Olá";
    let x = 10;
    
    if (true) {
        const mensagem = "Oi"; // Nova constante, não afeta a externa
        let x = 20; // Nova variável, não afeta a externa
        console.log(mensagem, x); // Oi 20
    }
    
    console.log(mensagem, x); // Olá 10
    
    // Incrementando o contador
    contador++;
}

exemploEscopo();
console.log(contador); // 1
// console.log(mensagem); // Erro: mensagem não está definida aqui