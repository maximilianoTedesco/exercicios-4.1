const a = 5;
const b = 5;
const c = 5;
if (a > b && a > c){
    console.log("A é maior que as outras")
} else if (b > a && b > c){
    console.log("B é maior que as outras")
} else if (c > a && c > b){
    console.log("C é maior que as outras")
} else {
    console.log("Não existe uma const maior!")
}