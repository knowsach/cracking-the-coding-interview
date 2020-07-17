// check if one string is permutation of other

str1 = 'abcall';
str2 = 'cblal';


function checkPermutation(str1, str2) {

    str1Array = [...str1];
    str2Array = [...str2];
    isPermutation = true;

    str1Array.forEach(el => {
        if (!str2Array.includes(el)) {
            isPermutation = false;
        }
    })

    str2Array.forEach(el =>{
        if(!str1Array.includes(el)){
            isPermutation = false;
        }
    })
    
    return isPermutation;
}

console.log(checkPermutation(str1, str2));