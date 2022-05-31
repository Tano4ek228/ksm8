const url = new URL(document.location);
let footer = document.querySelector('footer');


function fnone(url, footer) {
	if (url.pathname === "/login" || url.pathname === '/registration')
		return footer.style.display = 'none';
}

function fapNone(url, footer){
	if(url.pathname === "/admin_panel")
	return footer.style.display = 'none';
}

function fapZNone(url, footer){
	if(url.pathname === "/lookapplications")
	return footer.style.display = 'none';
}

fnone(url, footer);

fapNone(url, footer);

fapZNone(url, footer);