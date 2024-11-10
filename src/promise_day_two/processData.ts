function processData(
    numbers: number[],
    sortCallback: (arr: number[]) => number[],
    doubleCallback: (arr: number[]) => number[]): Map<number, string>{
        const sortedArray = sortCallback(numbers);
        console.log("Sortiertes Array:", sortedArray);
        const doubledArray = doubleCallback(sortedArray);
        console.log("Verdoppeltes Array:", doubledArray);
        const resultMap = new Map<number, string>();
        for (let i = 0; i< doubledArray.length; i++){
            const num = doubledArray[i];
            const hexValue = num.toString(16).toUpperCase();
            resultMap.set(num, hexValue);
            console.log(`Zahl ${num} in  Hexadezimal: ${hexValue}`);
        }
        return resultMap;
    }
    const numbers = [1,5,3,2,4];
    function sortDescending(arr: number[]): number[] {
        return[...arr].sort((a,b) => b - a)
    }
    function doubleElements(arr: number[]): number[] {
        return arr.map(num => num *2)
    }
const result = processData(numbers, sortDescending, doubleElements); 
console.log("Ergebnis", result);
