const svg_container = document.getElementsByClassName("svg-container")[0];

// resize the divider based on the window width
window.addEventListener("resize", function () {
	let screen_size = window.innerWidth > 0 ? window.innerWidth : screen.width;
	if (screen_size >= 1440) {
		svg_container.setAttribute("src", "images/pattern-divider-desktop.svg");
	} else {
		svg_container.setAttribute("src", "images/pattern-divider-mobile.svg");
	}
});

// function to get random advice from advice slip API
const getAdvice = () => {
	fetch("https://api.adviceslip.com/advice")
		.then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				console.log("Error");
			}
		})
		.then((adviceData) => {
			const advice = document.getElementsByClassName("card-text")[0];
			advice.innerHTML = adviceData.slip.advice;

			const adviceID = document.getElementsByClassName("card-title")[0];
			adviceID.innerHTML = "ADVICE #" + adviceData.slip.id;
		})
		.catch((error) => {
			console.log(error);
		});
};

// generate random advice on click or load event
document.getElementById("getAdvice").addEventListener("click", getAdvice);
window.onload = getAdvice;
