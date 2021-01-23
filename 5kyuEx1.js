



function pigIt(str){
	
 	result = str.split(" ");
	for(i = 0; i < result.length; i++)
	{
		if(!/[.!?\\-]/g.test(result[i])) {
		result[i] = result[i].substr(1) + result[i].substr(0,1)
		result[i] = result[i].concat('ay')
}
	}
	result = result.join(" ");
	return result;
}
