function sayHello(name: string, callback:(message: string) => void): void {
    const greeting = `Hallo, ${name}!`;
    callback(greeting)
};
function greetingCallback(message: string): void {
    console.log(message);
}
sayHello("necati", greetingCallback);
sayHello("ugur", greetingCallback);
sayHello("Johnnx", greetingCallback);

