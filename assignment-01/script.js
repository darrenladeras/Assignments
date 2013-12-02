// mainWrapper
var dbs = document.body.style;

	// Body tag centered
	dbs.margin = "0 auto";
	dbs.clear = "both";
	dbs.width = "800px";

	//Created Tags
	var banner = document.createElement("banner"),
		left = document.createElement("left"),
		right = document.createElement("right");

		// Set Attributes/ID's
		banner.setAttribute("id","banner");
		left.id = "left";
		right.id = "right";

	// Add text inside the Body Tags
	var bannertext = document.createTextNode("Banner")
	var lefttext = document.createTextNode("left")
	var righttext = document.createTextNode("right")

	var db = document.body;

		db.appendChild(banner);
		db.appendChild(left);
		db.appendChild(right);

		document.getElementById("banner").appendChild(bannertext)
		document.getElementById("left").appendChild(lefttext)
		document.getElementById("right").appendChild(righttext)

	//Get Element by Id
	var banner = document.getElementById("banner"),
		left = document.getElementById("left"),
		right = document.getElementById("right");

		var bs = banner.style
		var ls = left.style
		var rs = right.style

		bs.color = "black";
		bs.height = "150px";
		bs.display = "block";
		bs.marginBottom = "10px";
		bs.backgroundColor = "green";

		ls.width = "200px";
		ls.color = "black";
		ls.height = "300px";
		ls.display = "block";
		ls.cssFloat = "left";
		ls.backgroundColor = "yellow";

		rs.width = "590px";
		rs.color = "white";
		rs.height = "300px";
		rs.display = "block";
		rs.marginLeft = "210px";
		rs.backgroundColor = "blue";


