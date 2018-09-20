var tiles = document.querySelectorAll(".thumbnail");
for (var i = 0; i < tiles.length; i++) {
	tiles[i].addEventListener("click", function () {
		console.log("you clicked the tile");
		var clickedcolor = this.style.background;
		if (clickedcolor === "rgb(255, 165, 0)") {
			console.log("came through");
			this.style.background = "black";
		}



	});
}