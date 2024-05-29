function calcular(num1, num2, operation) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let resultado;

    switch (operation) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            if (n2 !== 0) {
                resultado = n1 / n2;
            } else {
                resultado = 'Erro: divisão por zero.';
            }
            break;
        default:
            resultado = 'Operação inválida';
    }

    return resultado;
}
