function helloWorld(user) {
  console.log("hello", user);
}

/** @name helloWorld2
 *  @param user user we are saying hello to 
 *  @returns nothing, it just says hello
 */
const helloWorld2 = (user) => {
    console.log('hello', user, 'from helloWorld2');
};

const users = [
    'Jacob',
    'Megan',
    'Nick',
    'Lindsey',
    'Mickey',
    'Donald'
];

/* block comment
   here is something else
 */

//  for (let i = 0; i < users.length; i++) { // write something here
//     helloWorld(users[i]);
// }

// let i = 0;
// while (i < users.length) {
//     helloWorld2(users[i]);
//     i++;
// }

// for (let user of users) {
//     helloWorld(user);
// }

users.forEach(
    (user) => {
        helloWorld2(user);
    }
);

