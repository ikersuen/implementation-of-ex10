function createMultiplyTable(start, end){
	var result;
	if(inputValidation(start, end)){
		return doMultiplicationTable(start, end);
	}else{
		return null;
	}
}

function inputValidation(start, end){
	if(start > end || start > 1000 || start < 1 || end > 1000 || end < 1){
			return false;
	}else{
		return true;
	}
}

function doMultiplicationTable(start, end){
	var requiredText = '';
	for (var i = start; i <= end; i++) {
			for(var j = start; j <= i; j++) {
				var currentElement = lengthOfOneMulitplyElement(i,j);
				var lastElement = lengthOfOneMulitplyElement(j, end);
				requiredText += j + '*' + i + '=' + MultiplyTwoValue(i,j) + howManySpaceToAlign(elementLengthDifferent(lastElement, currentElement));

			}
			requiredText += "\n"
	}
	return requiredText;
}

function elementLengthDifferent(first, second){
	return (first - second);
}

function howManySpaceToAlign(lengthDifferent){
	var spaceToReturn = '';
	for (var i = 0; i <= lengthDifferent; i++){
		spaceToReturn += ' ';
	}
	return spaceToReturn;
}

function lengthOfOneMulitplyElement(element_start, element_end){
	var basicLength = 2;
	if(element_start < 10){
		basicLength += 1;
	}else if(element_start < 100){
		basicLength += 2;
	}else if(element_start < 1000){
		basicLength += 3;
	}else if(element_start === 1000){
		basicLength += 4;
	}else{
	}

	if(element_end < 10){
		basicLength += 1;
	}else if(element_end < 100){
		basicLength += 2;
	}else if(element_end < 1000){
		basicLength += 3;
	}else if(element_end === 1000){
		basicLength += 4;
	}else{
	}

	basicLength += MultiplyTwoValue(element_start, element_end).toString().length;

	return basicLength;

}

function MultiplyTwoValue(first, second){
	return first * second;
}

console.log(createMultiplyTable(998,1000));

module.exports = createMultiplyTable;
