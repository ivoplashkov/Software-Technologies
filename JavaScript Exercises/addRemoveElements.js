<<<<<<< HEAD
function solution(arr) {
    let result = [];
    for (let input of arr) {
        [command, index] = input.split(' ');
        if (command === "add") {
            result.push(index);
        } else {
            if (index) {
                result.splice(index, 1);
            }
        }
    }
    result.forEach(x => console.log(x));
=======
function solution(arr) {
    let result = [];
    for (let input of arr) {
        [command, index] = input.split(' ');
        if (command === "add") {
            result.push(index);
        } else {
            if (index) {
                result.splice(index, 1);
            }
        }
    }
    result.forEach(x => console.log(x));
>>>>>>> 21e3532725d0ffd15c66fc893bd2a16ae6c50371
}