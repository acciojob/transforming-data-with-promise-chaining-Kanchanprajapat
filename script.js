//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
            const inputValue = parseInt(document.getElementById('ip').value);

            const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

            delay(2000, inputValue)
                .then(result => {
                    document.getElementById('output').textContent = `Result: ${result}`;
                    return delay(2000, result);
                })
                .then(result => {
                    document.getElementById('output').textContent = `Result: ${result}`;
                    return delay(1000, result * 2);
                })
                .then(result => {
                    document.getElementById('output').textContent = `Result: ${result}`;
                    return delay(1000, result - 3);
                })
                .then(result => {
                    document.getElementById('output').textContent = `Result: ${result}`;
                    return delay(1000, result / 2);
                })
                .then(result => {
                    document.getElementById('output').textContent = `Result: ${result}`;
                    return delay(1000, result + 10);
                })
                .then(finalResult => {
                    document.getElementById('output').textContent = `Final Result: ${finalResult}`;
                })
                .catch(error => {
                    document.getElementById('output').textContent = `Error: ${error}`;
                });
        });