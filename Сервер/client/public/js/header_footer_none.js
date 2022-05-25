const url = new URL(document.location);
let footer = document.querySelector('footer');
let headertext = document.querySelector('.headnone')

function fnone(url, footer) {
	if (url.pathname === "/login" || url.pathname === '/registration')
		return footer.style.display = 'none';
}

function hnone(url, headertext) {
	if (url.pathname === "/")
		return headertext.style.display = 'block';
}

fnone(url, footer);

hnone(url, headertext);