var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal-write");
var close = document.querySelector(".modal-btn-close");
var firstname = popup.querySelector("[name=firstname]");
var email = popup.querySelector("[name=email]");
var content = popup.querySelector("[name=content]");
var form = popup.querySelector("form");

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	firstname.focus();
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
	if (!firstname.value || !email.value || !content.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});
