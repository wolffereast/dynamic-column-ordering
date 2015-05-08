function order_items(numColumns, targetSelector, callback){
	//no targets
	if (!jQuery(targetSelector).length) return false;
	//numColums is invalid
	if (!jQuery.isNumeric(numColumns) || numColumns < 1) return false;
	//instantiate vars
	var maxPerColumn = Math.ceil(jQuery(targetSelector).length/numColumns),
			numColumns = numColumns - 1,
			numFull = jQuery(targetSelector).length % numColumns,
			targetParent = jQuery(targetSelector).parent(),
			i, j, baseNum, prevItem = false;
	
	//check if the ids have been assigned
	if (!jQuery(targetSelector + '.dynamicColumnOrder1').length){
		//no ids? add them here
		jQuery(targetSelector).each(function(index, element) {
      jQuery(this).addClass('dynamicColumnOrder' + (index + 1));
    });
	}
	
	//if the mod came up empty we dont need to worry about an offset
	if (numFull == 0) numFull = numColumns;
	
	for (i=1; i<=maxPerColumn; i++){
		for (j=0;j<numColumns;j++){
			//hold this back from duplicating in empty columns
			if (i < maxPerColumn || j < numFull){
				if (j > numFull) baseNum = i + (j * maxPerColumn) - (j-numFull);
				else baseNum = i+(j*maxPerColumn);
				//now, rearrange them
				if (prevItem == false)jQuery(targetParent).prepend(jQuery('.dynamicColumnOrder'+baseNum));
				else jQuery(prevItem).after(jQuery('.dynamicColumnOrder'+baseNum));
				
				prevItem = '.dynamicColumnOrder'+baseNum;
			}
		}
	}
	
	if (typeof callback == "function") callback();
}