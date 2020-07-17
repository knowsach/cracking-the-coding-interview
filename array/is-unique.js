// determine whether string has all unique characters

let str = 'my mstrisng'

function isUnique(str) {

    let unique = true;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] == str[j])    //if matches
                unique = false;
        }
    }

    console.log('unique:', unique);
}

isUnique(str);