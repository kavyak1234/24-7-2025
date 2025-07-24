const numbers = [12,45,22,34,78,11,9,56];
const result =[];
for (let i = 0;i < numbers.length; i++) {
    if (numbers[i] > 30) {
        result.push(numbers[i] *2);
    }
}
console.log(result);