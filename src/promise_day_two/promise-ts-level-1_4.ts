const exercise1 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        const isSuccessful = true; 
        isSuccessful ? resolve("Exercise 1 done") : reject("Exercise 1 failed.")
    }, 2000);
})
const exercise2 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        const isSuccessful = true;
        isSuccessful ? resolve("Exercise 2 is done") : reject("Exercise 2 failed")
    },3000) 
})
const exercise3 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        const isSuccessful = true; 
        isSuccessful ? resolve("Exercise 3 is done") : reject("Exercise 3 failed")
    }, 4000)
})
const statusElement = document.getElementById('status');

exercise1
    .then(result => {
        if (statusElement) {
            const newLine = document.createElement('br');
            const textNode = document.createTextNode(result);
            statusElement.appendChild(newLine);
            statusElement.appendChild(textNode)
        }
    })
    .catch(error => console.error("Exercise 1 failed", error))
    
exercise2
    .then(result => {
        if (statusElement) {
            const newLine = document.createElement('br');
            const textNode = document.createTextNode(result);
            statusElement.appendChild(newLine);
            statusElement.appendChild(textNode)
        }
    })
    .catch(error => console.error("Exercise 1 failed", error))
exercise3
    .then(result => {
        if (statusElement) {
            const newLine = document.createElement('br');
            const textNode = document.createTextNode(result);
            statusElement.appendChild(newLine);
            statusElement.appendChild(textNode)
        }
    })
    .catch(error => console.error("Exercise 3 has failed", error))
