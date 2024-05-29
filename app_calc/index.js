document.addEventListener("DOMContentLoaded", () => {
    const appDiv = document.getElementById('app');
    fetch('src/views/index.html')
        .then(response => response.text())
        .then(data => {
            appDiv.innerHTML = data;
            attachFormSubmitHandler();
        });

    function attachFormSubmitHandler() {
        const form = document.getElementById('calc-form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const num1 = document.getElementById('num1').value;
            const num2 = document.getElementById('num2').value;
            const operation = document.getElementById('operation').value;

            if (isNaN(num1) || isNaN(num2)) {
                alert('Valores devem ser numéricos.');
                window.location.href = 'index.html';  // Redirecionar para a página inicial em caso de erro
            } else {
                const resultado = calcular(num1, num2, operation);
                fetch('src/views/resultado.html')
                    .then(response => response.text())
                    .then(data => {
                        appDiv.innerHTML = data;
                        document.getElementById('result').textContent = resultado;
                    });
            }
        });
    }
});
