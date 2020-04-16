var images = [
  "assets/google-sunnies1.jpg",
  "assets/google-sunnies2.jpg",
  "assets/google-sunnies3.jpg",
  "assets/google-sunnies4.jpg",
  "assets/google-sunnies5.jpg"
];

$(function() {
  $("#header").load("/swag-marketplace/src/new_header.html");
  $("#footer").load("/swag-marketplace/src/new_footer.html");
  for (img of images) {
    $(".itemsContainer").append(`<div class="item" style="padding-top: 40px">
    <div class="col-2">
      <div class="itemImage">
        <a href="buy-post.html"><img src=${img} /></a>
      </div>
    </div>
    <div class="col-10">
      <div class="itemInfo">
        <div class="col-4">
          <div class="row">
            <div class="col-6">
              <p>USD Xxx</p>
            </div>
            <div class="col-6">
              <p>FACEBOOK SWAG</p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-6">
              <p>COFFEE MUGS</p>
            </div>
            <div class="col-6">
              <p>Pier 1</p>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-4">
              <div class="row">
                <div class="col-4 rating">
                  <img src="assets/heart-icon-3340.png" />
                </div>
                <div class="col-4 rating">
                  <img src="assets/bookmarkIcon.png" />
                </div>
                <div
                  class="col-4 rating"
                  style="border-right: 2px solid grey"
                >
                  <img src="assets/shareIcon.png" />
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="row">
                <div class="col-6">
                  <p>SELLER</p>
                </div>
                <div class="col-6" style="text-align: center;">
                  <label>Rating: </label>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-6">
                  <div class="row">
                    <div class="col-6"><p>Location</p></div>
                    <div class="col-6"><p>95087</p></div>
                  </div>
                </div>
                <div class="col-6" style="text-align: center;">
                  <p>Sunnyvale, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);
  }
});
