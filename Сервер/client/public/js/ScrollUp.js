var up = document.getElementsByClassName("up");
window.onscroll = function () {
	scrolfunction();
};
function scrolfunction() {
	if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
		// if (document.body.scrollTop > 2300 || document.documentElement.scrollTop > 2300) {
		// 	return (
		// 		up[0].style.display = "block",
		// 		up[0].style.color = "white"
		// 	);

		// }
		// else {
		// 	return (
		// 		up[0].style.display = "block",
		// 		up[0].style.color = "#2b2d30"
		// 	);
		// }

		return (
			up[0].style.display = "block"
		);

	}
	else {
		return (up[0].style.display = "none");
	}
}

function clickup() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}