var multiplyTable = require('../main');

it ('if input start < 1', () => {
	expect(multiplyTable.inputValidation(-1,2)).toBe(false);
});

it ('if input start > 1000', () => {
	expect(multiplyTable.inputValidation(1001,2)).toBe(false);
});

it ('if input end < 1', () => {
	expect(multiplyTable.inputValidation(-3,0)).toBe(false);
});

it ('if input end > 1000', () => {
	expect(multiplyTable.inputValidation(2,1001)).toBe(false);
});

it ('if input start < end', () => {
	expect(multiplyTable.inputValidation(4,2)).toBe(false);
});

it ('for the case of 2, 4', () => {
expect(multiplyTable.createMultiplyTable(2, 4)).toBe("2*2=4 \n2*3=6 3*3=9  \n2*4=8 3*4=12 4*4=16 \n");
});

it ('for the case of 99, 101', () => {
expect(multiplyTable.createMultiplyTable(99, 101)).toBe("99*99=9801  \n99*100=9900 100*100=10000 \n99*101=9999 100*101=10100 101*101=10201 \n");
});

it ('for the case of 998, 1000', () => {
expect(multiplyTable.createMultiplyTable(998, 1000)).toBe("998*998=996004  \n998*999=997002  999*999=998001  \n998*1000=998000 999*1000=999000 1000*1000=1000000 \n");
});
