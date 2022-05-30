const url = new URL(document.location);
let footer = document.querySelector('footer');
// const urlH = new URL(document.location);
// let headertext = document.querySelector('.headnone');
// let head = document.querySelector('.header');



function fnone(url, footer) {
	if (url.pathname === "/login" || url.pathname === '/registration')
		return footer.style.display = 'none';
}


// function head_line_bg(url, head){
// 	if (url.pathname === "/")
// 		return head.style.backgroundImage = 'url(../images/fon-header1.jpg)';
// }

fnone(url, footer);


// head_line_bg(url, head);