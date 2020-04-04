$(document).ready(() => {
  $("#h_sell").click(() => {
    // click on the Sell button
    $(".sell_tab").show("slow");
  });
  // click outside the sell tab when sell tab is visible
  $(document).mouseup(e => {
    var sell_tab = $(".sell_tab");
    if (
      sell_tab.is(":visible") &&
      !sell_tab.is(e.target) &&
      sell_tab.has(e.target).length === 0
    ) {
      console.log("hiding...");
      sell_tab.hide("slow");
      $('.sell_tab input[type="text"]').val("");
    }
  });
});
