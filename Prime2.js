function checkPrime(num){

let count=0;
for(let i=0; i<=num; i++){
  if(num%i===0){
  count++;

}
}
 if(count===1){
   return true;
}
else{
   return false;
}
}