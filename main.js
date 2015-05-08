function order_items(numColumns, targetSelector, callback){
	var maxPerColumn = Math.ceil(jQuery('div.sandwichFoodItem').length/numColumns),
			numFull = jQuery('div.sandwichFoodItem').length % numColumns,
			i, j, baseNum, prevItem = false;
	
	//if the mod came up empty we dont need to worry about an offset
	if (numFull == 0) numFull = numColumns;
	
	for (i=1; i<=maxPerColumn; i++){
		for (j=0;j<numColumns;j++){
			//hold this back from duplicating in empty columns
			if (i < maxPerColumn || j < numFull){
				if (j > numFull) baseNum = i+(j*maxPerColumn) - (j-numFull);
				else baseNum = i+(j*maxPerColumn);
				//now, rearrange them
				if (prevItem == false)jQuery('.indMenuContainer').prepend(jQuery('div#foodItem'+baseNum));
				else jQuery(prevItem).after(jQuery('div#foodItem'+baseNum));
				
				prevItem = 'div#foodItem'+baseNum;
			}
		}
	}
	
	if (typeof callback == "function") callback();
}