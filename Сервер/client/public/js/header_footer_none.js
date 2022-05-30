const url = new URL(document.location);
let footer = document.querySelector('footer');
// const urlH = new URL(document.location);
// let headertext = document.querySelector('.headnone');
// let head = document.querySelector('.header');

console.log(headertext);


function fnone(url, footer) {
	if (url.pathname === "/login" || url.pathname === '/registration')
		return footer.style.display = 'none';
}

// function hnone(urlH, headertext) {
// 	if (urlH.pathname === "/")
// 		return headertext.style.display = 'block';
// }


// function head_line_bg(url, head){
// 	if (url.pathname === "/")
// 		return head.style.backgroundImage = 'url(../images/fon-header1.jpg)';
// }

fnone(url, footer);

// hnone(urlH, headertext);

// head_line_bg(url, head);