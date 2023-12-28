const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// move left
document.getElementById("arrow_left")
	.addEventListener("click", function() {
		if (i = 0) {
			i = slidesLength - 1;
		}
		else {
			i--;
		}
		console.log(arrow_left);
		slideImage();
	});

// move right
document.getElementById("arrow_right")
    .addEventListener("click", function () {
		if (i == slidesLength - 1) {
			i = 0;
		}
		else {
			i++;
		}
    console.log(arrow_right)
	slideImage();
	});

const slidesLength = slides.length;
let i = 0;
function dots() {
	const dots = document.querySelector('.dots');
	for (let i = 0; i < slidesLength; i++) {
	const dot = document.createElement('span');
	dot.classList.add('dot');
	dots.appendChild(dot);

	if (i == 0) {
		dots.children[i].classList.add('dot_selected')
	}
	}
}
dots();

/*pinpoint the selected dot */
function pinPoint() {
	const dot = document.getElementsByClassName('dot');
	for (let i = 0; i < dot.length; i++) {
		dot[i].classList.remove('dot_selected');
	}
	dot[i].classList.add('dot_selected');

}

const imgElmt = document.querySelector('#banner > img')
const elmtName = document.querySelector('#banner > p')
function slideImage() {
	imgElmt.src = './assets/images/slideshow/'; //select next img needed in the path
	elmtName.innerHTML = slides[i].tagLine; // slides[i] undefined when using left arrow
	pinPoint();
}