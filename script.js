playlist = {
    "realisations" : [ "4yiW1aP_2Lo", "tLL7XkWPZtg", "JZem3PIYgAo", "A4cs8PNlGM8", "36EDenQFAjA", "rUqKkG3qsc0" ]
}

function imgGallery(gallery) {
    const imgNb = gallery.getAttribute('data-img-nb');
    const subDirectory = gallery.getAttribute('data-subdirectory');
    for (i = 1; i <= imgNb; i++) {
        var img = document.createElement("img");
        img.src = "assets/" + subDirectory + i + ".jpg";
        img.classList = "item";
        img.loading = "lazy";
        gallery.appendChild(img);
    }
}

function ytbGallery(gallery) {
    const vid = playlist[gallery.getAttribute('data-playlist')];
    for (i = 0; i < vid.length; i++) {
        var ytbVideo = document.createElement("iframe");
        ytbVideo.src = "https://www.youtube-nocookie.com/embed/" + vid[i];
        ytbVideo.frameborder = "0";
        ytbVideo.allowfullscreen = "true";
        ytbVideo.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        ytbVideo.classList = "item";
        gallery.appendChild(ytbVideo);
    }
}