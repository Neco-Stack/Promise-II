function sayHello(name: string, callback: (message:string) => void) {
    const greeting = `Hallo, ${name}!`;
    callback(greeting);    
}
function greetingCallback(message: string){
    console.log(message);
}
sayHello("necati", greetingCallback);
sayHello("Mario", greetingCallback);
sayHello("Samantha", greetingCallback);