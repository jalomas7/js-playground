const giveMeFive = () => 5;

const giveMeFiveFootballGuy = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const didTheyTrip = Math.random() > 0.5;
        if(didTheyTrip) {
            resolve(5);
        } else {
            reject('He got tackled!');
        }
    }, 5000);
  });
};

const main = async () => {
  try {
    console.log(await giveMeFiveFootballGuy());
  } catch (e) {
    console.log(e);
  }
};

main();
