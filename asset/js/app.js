$(".img").attr("data-bs-toggle", "modal");
$(".img").attr("data-bs-target", "#staticBackdrop");
function getImgUrl() {
  $.ajax({
    url: "https://pinterest-downloader-download-pinterest-image-video-and-reels.p.rapidapi.com/api/server",
    method: "POST",
    headers: {
      contentType: "application/json",
      "X-RapidAPI-Key": "5c143f64c8mshf4fd357a2ea221cp123facjsn78b677113d6e",
      "X-RapidAPI-Host":
        "pinterest-downloader-download-pinterest-image-video-and-reels.p.rapidapi.com",
    },
    data: {
      id: "https://pin.it/5TZnIsk",
    },
    success: function (response, a) {
      const imageUrl = response.data.image_medium_url;
      console.log(imageUrl);
      console.log(a);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

getImgUrl();
