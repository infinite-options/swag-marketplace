$(() => {
  $("#header").load("/swag-marketplace/src/new_header.html");
  $(document).click(e => {
    if (e.target.id === "cartHeaderButton") {
      console.log("cart button was hit");
      $.get("http://127.0.0.1:4000/api/v2/templateapi", (data, status) => {
        //I got this get request and sent a request to api ==> it gets back "data" and status.
        console.log(status);
        if (status === "success") {
          //if success
          console.log("Nice. Let's do something");
          console.log(data.result.result);
          array = data.result.result;
          console.log(array.length);
          for (var i = 0; i < array.length; i++) {
            $("#content").append(
              //jquery call for adding element into html
              "<div class='container'> <span style='color: white; text-align:center margin-left: 60px;'>" +
                array[i].SwagCompID +
                ": </span> <span style='color: white;'>" +
                array[i].SwagCompName +
                "</span><br/></div>"
            );
          }
        }
      });
    }
  });
});
