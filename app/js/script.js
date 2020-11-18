let navTitle = document.querySelectorAll(".nav__wrapper");
let navList = document.querySelectorAll(".nav__list-wrapper");

function showList(){
    this.parentNode.children[1].classList.toggle("nav__block");
    this.parentNode.children[0].classList.toggle("nav__title--arrow")
}
    
for(var i = 0; i < navTitle.length; i++) {
    navTitle[i].children[0].addEventListener("click", showList);
}

let navBtn = document.querySelector('.header__burger');
let navigation = document.querySelector('.header__nav-list');
navBtn.addEventListener('click', function() {
    navigation.classList.toggle('header__nav-visible');
})

let anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
	anchor.addEventListener('click', function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}