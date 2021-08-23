console.log("person.jsx is running!")

export const isAdult = (age) => ((age >= 18)? "Major" : "Minor");

export const canDrive = (age) => ((age >= 18)? "Legal" : "illegal");

const welcome = name => console.log(`Hello welcome to react ${ name }`)

export default name => console.log(`Study well ${name}`);

export { welcome };