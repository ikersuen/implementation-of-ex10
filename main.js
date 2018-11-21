function createMultiplyTable(start, end){
	return inputValidation(start, end)?doMultiplicationTable(start, end):null
}

function inputValidation(start, end){
	return (start > end || start > 1000 || start < 1 || end > 1000 || end < 1)?false:true
}

function doMultiplicationTable(start, end){
	var requiredText = '';
	for (var i = start; i <= end; i++) {
			for(var j = start; j <= i; j++) {
				requiredText += j + '*' + i + '=' + MultiplyTwoValue(i,j) + howManySpaceToAlign(elementLengthDifferent(lengthOfOneMulitplyElement(j, end), lengthOfOneMulitplyElement(i,j)));
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
	return 2 + element_start.toString().length + element_end.toString().length + MultiplyTwoValue(element_start, element_end).toString().length;

}

function MultiplyTwoValue(first, second){
	return first * second;
}

module.exports = {createMultiplyTable, inputValidation};
