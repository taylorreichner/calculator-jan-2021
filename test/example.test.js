// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getSum } from '../utils.js';
import { getSubtract } from '../utils.js';
import { getMultiply } from '../utils.js';
import { getDevide } from '../utils.js'

const test = QUnit.test;


    test('it should return 4 when 2 and 2 is added', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(2,2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
    
test ('it should return 5 when 10 is subtrated by 5', (expect) => {

    const expected = 5;
    const actual = getSubtract(10,5);
    expect.equal(actual, expected);
});

test ('it should return 20 when 2 is multiplied by 10', (expect) => {

    const expected = 20;
    const actual = getMultiply(2,10);
    expect.equal(actual, expected);

});

test ('its should return 5 when 10 is devided by 2', (expect) => {

    const expected = 5;
    const actual = getDevide(10,2);
    expect.equal(actual, expected);
});