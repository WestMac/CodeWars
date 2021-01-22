function solution(str) {
	
	let result = []
	
		if(str.length === 1){
			result.push(str + '_');
		}
	for(let i = 0; i < str.length-1; i+=2){
		
	if(str.length % 2 === 0){
		result.push(str[i] + str[i+1])
	} else if(str.length % 2 === 1) {
			result.push(str[i] + str[i+1])
			if(i+3 === str.length){
				result.push(str[str.length-1] +'_')
			}
		}
	}
return result;
}
