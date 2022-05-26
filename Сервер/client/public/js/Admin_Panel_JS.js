const buts = document.getElementsByClassName('editButt');
const blockShow = document.getElementsByClassName('block_show');

console.log(blockShow);
for (let but of buts) {
	but.addEventListener("click", () => {
		console.log(blockShow[but]);
		// blockShow[0].classList.add('top');
	})
}
