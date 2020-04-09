$(() => {
  $(document).click(e => {
    var sell_tab = $(".sell_tab");
    if (sell_tab.is(":hidden") && e.target.id == "h_sell") {
      sell_tab.show("800");
      currentSlide(slideIndex);
      $("#h_sell").css("background-color", "blue");
    } else if (
      sell_tab.is(":visible") &&
      !$(e.target).closest(".sell_tab").length
    ) {
      sell_tab.hide("800");
    } else if (sell_tab.is(":visible")) {
      var itemCategory = $("#itemCategory");
      if (itemCategory.val() === "backpack") {
        $("#itemDemension").css("display", "block");
      } else {
        $("#itemDemension").css("display", "none");
      }
    } else if (e.target.id == "searchHeaderButton") {
      window.location.href = "/swag-marketplace/src/search.html";
    }
  });
});

var slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(slides);
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
