//EX 1.
function arrLength(arr){
    let length = 0
    for(let i = 0; ; i++){
       if(arr[i] !== undefined){
           length++;
       }else{
           return length;
       }
    }
}
// բայց եթե arrayի մի էլեմենտի արժեքը լինի undefined էտ պարագայում սխալ կտա։ Ստորև լուծման դեպքում բոլոր դեպքերում էլ ճիշտ length-ը կտա։

function arrLength(arr){
    return arr.push();
}

//EX. 2
function sumOfArrayElem(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
//EX. 3
function powOf3(n){
    while(n > 1 ){
        n /= 3;
    }
    return n === 1 ? true : false;
}
function returnPowersOf3(a, b){
    let result = ``;
    for(let i = a; i <= b; i++){
        if(powOf3(i)){
            result += ` ${i} `
        }
    }
    return result;
}
//EX 4
function dashesBetweenEvens(num){
    if (num == undefined){
        return 0;
    }
    let str = String(num);
    let result = `${str[0]}`;
    for(let i = 1; i < str.length; i++){
        if(result[result.length - 1] % 2 || str[i] % 2){
            result += `${str[i]}`
        }else{
            result += `-${str[i]}`
        }
    }
    return result;
}


//EX. 5
function isPrime(n){
    if(n <= 1){
        return false;
    }
    for(let i = Math.floor(n / 2); i > 1; i --){
        if(!(n % i)){
            return false;
        }
    }
    return true;
}
function getNstPrimeNumber(n){
    let count = 0;
    for(let i = 2; ; i++){
        if(isPrime(i)){
            count++;
        }
        if(count === n){
            return i;
        }
    }
}
