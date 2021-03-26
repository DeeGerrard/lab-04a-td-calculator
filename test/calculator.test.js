// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add } from '../calculator.js';
import { subtract } from '../calculator.js';
import { multiply } from '../calculator.js';
import { divide } from '../calculator.js';
import { toNumber } from '../calculator.js';

const test = QUnit.test;

test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 11;
    const y = 2;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtraction function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 11;
    const y = 2;
    const expected = 9;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiply function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 11;
    const y = 2;
    const expected = 22;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('divide function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 11;
    const y = 2;
    const expected = 5.5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('0 Divided 0 function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 0;
    const y = 0;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('toNumber', (expect) => {

    const expected = 7;
    const input = document.createElement('input');
    input.value = expected;

    const actual = toNumber(input);
   
    expect.equal(actual, expected);
}); 
test('Empty string returns 0', (expect) => {

    const expected = 0;
    const input = document.createElement('input');
    input.value = '';

    const actual = toNumber(input);
   
    expect.equal(actual, expected);
}); 
