function header() {
	if (document.querySelector('html').scrollTop >= (window.innerHeight * 0.5)) {
		document.querySelector('header').classList.add("top");
		document.querySelector('.landing').classList.remove("visible");
	}
	else {
		document.querySelector('header').classList.remove("top");
		document.querySelector('.landing').classList.add("visible");
	}
}