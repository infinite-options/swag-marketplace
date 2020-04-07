$(document).ready(() => {
  $(document).click(e => {
    var sell_tab = $(".sell_tab");
    if (sell_tab.is(":hidden") && e.target.id == "h_sell") {
      sell_tab.show("slow");
    } else if (
      sell_tab.is(":visible") &&
      !$(e.target).closest(".sell_tab").length
    ) {
      sell_tab.hide("slow");
    }
  });
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("thumbnail");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
