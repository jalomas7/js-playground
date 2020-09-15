import {sort} from './sort';

const people = ['john', 'jacob', 'jingleheimer', 'smith'];

export const pickSomebody = n => {
    if(n < 0 || n > people.length) {
        throw new Error('somebody messed up');
    }

    return people[n];
};

export const pickRando = () => {
    return people[Math.floor(Math.random() * people.length)];
};

export const pickJohnOrJacob = () => {
    if(Math.random() > 0.5) {
        return people[0];
    }

    return people[1];
}

export const sortedTeam = () => {
    return sort(people);
};