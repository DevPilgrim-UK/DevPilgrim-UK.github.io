function drawTrees() {
	//draw trees
	for (i = 0; i < trees_x.length; i++) {
		stroke(75, 65, 55);
		fill(80, 70, 60);
		rect(trees_x[i], floorPos_y - treeHeight, 40, 100);

		//Tree top
		stroke(67, 77, 67);
		fill(70, 80, 70);
		ellipse(trees_x[i] + 20, floorPos_y - 47 - treeHeight, 40, 35);
		ellipse(trees_x[i] + 20, floorPos_y - 27 - treeHeight, 80, 50);
		ellipse(trees_x[i] + 20, floorPos_y - 7 - treeHeight, 100, 50);
		ellipse(trees_x[i] + 20, floorPos_y + 13 - treeHeight, 130, 50);
		noStroke();
	};
}