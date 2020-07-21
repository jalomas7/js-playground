const myString: string = 'hello';
const myNumber: number = 45;
const myBool: boolean = true;
const myStringArray: string[] = ['hello'];
const myStringArray2: Array<string> = ['hello'];

type MyType = string[];
type SuperString = {
    length: number;
    value: string;
};

const mySuperString: SuperString = {
    length: 5,
    value: 'super'
};

const myVariable: MyType = ['string'];

const howLongisMyString = (string: string): number => {
    return string.length;
}

let someString: string = 'hello';
console.log(howLongisMyString(mySuperString.value));
