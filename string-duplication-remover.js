let stringDuplicateRemover = (input) => {
	let output = ''
	let state = input[0]
	let count = 0
	for(let i = 1; i < input.length; i++){
		count ++;
		if(state != input[i]){
			output += (count==1 ? '' : count) + state
			state = input[i]
			count = 0
		}
	}
	count++
	output += (count==1 ? '' : count) + state

	return output
}

const output = stringDuplicateRemover('AAABBCDDEFFA')
console.log(output)
