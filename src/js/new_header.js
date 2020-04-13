var colors = {
  "Not specified": "Not specified",
  Brown: "Brown",
  Clear: "Clear",
  Pink: "Pink",
  Violet: "Violet",
  Red: "Red",
  Black: "Black",
  Ivory: "Ivory",
  Gold: "Gold",
  Beige: "Beige",
  Orange: "Orange",
  Yellow: "Yellow",
  White: "White",
  Multicolor: "Multicolor",
  Silver: "Silver",
  Aqua: "Aqua",
  Green: "Green",
  Blue: "Blue",
  Grey: "Grey",
  Other: "Other"
};
var items = {
  Backpack: "Backpack & Totebag",
  Clothing: "Clothing",
  Sportswear: "Sportswear",
  Lanyards: "Lanyards & nametag",
  Keychains: "Keychain",
  Memorabilia: "Memorabilia",
  Notebooks: "Notebooks & notepads",
  PhoneAccessories: "Phone Accessories",
  Pens: "Pens",
  CoffeMugs: "Coffe Mugs",
  WatterBottle: "WatterBottle",
  Giftcards: "Gift cards",
  Other: "Other"
};
var size_object = ["backpack", "shirt"];

Object.entries(colors).forEach(element => {
  $(".itemColor").append(
    `<option value=${element[0].toLowerCase()}>${element[1]}</option>`
  );
});

Object.values(items).forEach(element => {
  $("#item_category").append(`<a class=dropdown-item>${element}</a>`);
});

$(() => {
  $(document).click(e => {
    var sell_tab = $(".sell_tab");
    if (sell_tab.is(":hidden")) {
      if (e.target.id == "h_sell") {
        sell_tab.show("800");
        currentSlide(slideIndex);
      } else if (e.target.id === "searchHeaderButton") {
        window.location.href = "/swag-marketplace/src/search.html";
      }
    } else if (sell_tab.is(":visible")) {
      if (!$(e.target).closest(".sell_tab").length) {
        sell_tab.hide("800");
      }
    }
  });
  var itemChosen = $(".itemCategory").find("a");
  itemChosen.click(e => {
    let item = e.currentTarget.innerHTML;
    $(".itemChosen > p").html(item);
    for (element of size_object) {
      if (item.toLowerCase().includes(element.toLowerCase())) {
        $("#itemDemension").show();
        break;
      } else {
        $("#itemDemension").hide();
      }
    }
  });
  var dimensionButton = $(".dimension button");
  dimensionButton.click(e => {
    let button_clicked = e.currentTarget.innerHTML; // should do something with this data
    dimensionButton.css("color", "grey");
    $(e.target).css("color", "black");
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
