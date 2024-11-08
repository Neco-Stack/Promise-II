const exercise1: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve("Exercise 1 done"), 2000)
});
const exercise2: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve("Exercise 2 done"), 3000)
});
const exercise3: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve("Exercise 3 done"), 4000)
})
const outputElement = document.getElementById("output") as HTMLParagraphElement;

function updateText(result: string) {
    console.log(result);
    if (outputElement) {
        outputElement.textContent = outputElement.textContent + " " + result
    }
}
Promise.all([exercise1, exercise2,exercise3]).then((results) => {
    results.forEach(updateText);
    updateText("homework done")
})
    .catch((error) => {
        console.error("Ein Fehler ist aufgetreten", error)
    });
