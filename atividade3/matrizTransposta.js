function transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

function printMatrix(matrix, label) {
    console.log(label + ":");
    matrix.forEach(row => console.log(row.join(' ')));
}

function main() {
    let matrix = [];
    let numRows = parseInt(prompt("Quantas linhas na matriz?"));
    let numCols = parseInt(prompt("Quantas colunas na matriz?"));

    console.log("Insira os elementos da matriz linha por linha:");
    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 0; j < numCols; j++) {
            row.push(parseInt(prompt(`Insira o elemento da posição ${i+1},${j+1}:`)));
        }
        matrix.push(row);
    }

    printMatrix(matrix, "Matriz original");

    let transposedMatrix = transposeMatrix(matrix);
    printMatrix(transposedMatrix, "Matriz transposta");
}

main();