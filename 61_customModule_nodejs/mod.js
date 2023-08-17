function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

module.exports = {
    avg: average,
    auth: "Supriyo",
    help: "Take an array and return average of sum of elements."
}