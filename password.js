const password = "passwordtest123";

if(password.length > 9){
    let hasNumber = false;
    let hasLetter = false;

    const nums = [0,1,2,3,4,5,6,7,8,9]
    for(let i = 0; i < password.length; i++){
        if(nums.includes(number(password[i]))){
            hasNumber = true;
        }
    }

    if(hasLetter && hasNumber){
        console.log('success')
    } else {
        console.log('failure')
    }
}


