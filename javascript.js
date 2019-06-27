var topics = ["American Farming", "Mexican Ranching", "Catechism", "Soren Kierkegaard", "Restaurant", "Overwatch","Mexico","Arizona","High School"];
// this button isn't working idk y it's making me mad

$(".btn btn-primary").on("click",function(){
    const ourValue = $(this).val().trim();
    const queryURL = "https://api.giphy.com/v1/gifs/random?api_key=FQMJH5AjTQFOuKEYl9lAX2mdth9ktPZj&q=" + ourValue;
    $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function(response) {
          const imageUrl = response.data.image_original_url;

          const gifImage = $("<img>");

          gifImage.attr("src", imageUrl);
          
          $(#images").prepend(catImage);
      });
   

    

$(".gif").on("click", function() {
    
    const state = $(this).attr("data-state");
    
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });