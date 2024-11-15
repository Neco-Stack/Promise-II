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

// exercise1
//     .then(result => {
//         if (statusElement) {
//             statusElement.innerHTML += `
//             <br>
//             ${result}
//             `
//         }
//     })
//     .catch(error => console.error("Exercise 1 failed", error))
    
// exercise2
//     .then(result => {
//         if (statusElement) {
//             statusElement.innerHTML += `
//             <br>
//             ${result}
//             `
//         }
//     })
//     .catch(error => console.error("Exercise 1 failed", error))
// exercise3
//     .then(result => {
//         if (statusElement) {
//             statusElement.innerHTML += `
//             <br>
//             ${result}`
//         }
//     })
//     .catch(error => console.error("Exercise 3 has failed", error))
Promise.all([exercise1,exercise2,exercise3])
.then(results => {
    if (statusElement) {
        results.forEach(result => {
            statusElement.innerHTML += `
            <br>
            ${result}
            `;
        })
        statusElement.innerHTML += `
        <br>
        Homework done
        `;
    }
})
.catch(error => console.error("One of the exercises has failed", error));
