// function recurse() {
//     // function code
//     recurse();
//     // function code
// }

// recurse();


// function recurse(number){
//     if (number<=5){
        
//         console.log(number)
        
//     recurse(number+1)
// }
// }
// recurse(1);



function display(n){
    if (n==0){
        return 1;

    }else{
        return(n*display(n-1))
    }
}
console.log(display(0));
