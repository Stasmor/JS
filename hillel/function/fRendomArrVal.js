// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
// Наприклад:

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = function(length, characters){
    let resString = '';
    for (let index = 0; index < length; index++) {
        resString+=characters[Math.floor(Math.random()*(characters.length))];     
    }
    return resString;
}

// const key = generateKey(222, characters);
// console.log(key);