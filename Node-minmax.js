function MinMax(node){
	if (node == null){
		return None;
	}
	var max = node.value;
	var min = node.value;

	while (node != null){

	if (node.value > max){
		max = node.value;
	}

	if (node.value < min){
		min = node.value;
	}
	console.log(node.value);
    }

    return [min,max]

}