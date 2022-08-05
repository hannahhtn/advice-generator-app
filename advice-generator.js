const svg_container = document.getElementsByClassName("svg-container")[0];

window.addEventListener("resize", function () {
    let screen_size =
			window.innerWidth > 0 ? window.innerWidth : screen.width;
	if (screen_size >= 1440) {
		svg_container.setAttribute("src", "images/pattern-divider-desktop.svg");
	}
    else
    {
        svg_container.setAttribute("src", "images/pattern-divider-mobile.svg");
    }
});
