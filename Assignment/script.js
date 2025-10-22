//problem 1
let arr =[]
for(let i=1;i<=10;i++){
    let row=[]
    for(let j=1;j<=10;j++){
        row.push(i*j);
    }
    arr.push(row)
}
console.log(arr)

//problem 2
let arr=[]

for(let i=0;i<8;i++){
let row=[]
for(let j=0;j<8;j++){
    if((i+j)%2===0){
        row.push('B')
    }else{
        row.push('W')
    }
}
arr.push(row)
}
console.log(arr);

//problem 3
let sum="";
for(let i=0;i<=4;i++){
    sum+="*";
    console.log(sum);
}


let row = 5;
for (let i = 0; i <= 4; i++) {
    let stars = "";
    for (let j = 0; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}