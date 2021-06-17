function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function isPalindrome(value) {
    for(let i = 0 ; i < value.length ; i++) {
        for(let j = 0 ; j < value.length-1 ; j--) {
            if(value[j] === value[i]) {
                return true;
            } else {
                return false;
            } 
        }
    }
}



function getCircumference(radius) {
    return `The circumference is ${radius ** 2} NN.`;
}

function getArea(radius) {
    return  `The area is ${radius * 2} NN.`;
}


module.exports = {
    getFullName,
    isPalindrome,
    getCircumference,
    getArea,
}



