const url = new URL(document.location);
let footer = document.querySelector('footer');

function sanya(url, footer) {
	if (url.pathname === "/login" || url.pathname === '/registration')
		return footer.style.display = 'none';
}

sanya(url, footer);