playlist = {
    "realisations" : [ "4yiW1aP_2Lo", "akbjS32rHg4", "JZem3PIYgAo", "xFc8f39d9UM", "MsOCEyXlfho", "2rUYafnqII8", "wX2JXBYQbmI", "tLL7XkWPZtg", "36EDenQFAjA"]
}

function imgGallery(gallery) {
    const imgNb = gallery.getAttribute('data-img-nb');
    const subDirectory = gallery.getAttribute('data-subdirectory');
    for (i = 1; i <= imgNb; i++) {
        var img = document.createElement("img");
        img.src = "assets/" + subDirectory + i + ".webp";
        img.classList.add("item", "apparition-anim", "zoomopa");
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
        ytbVideo.classList.add("item", "apparition-anim", "zoomopa");
        gallery.appendChild(ytbVideo);
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function isInViewport(elmt) {
    if (elmt.innerHeight > window.innerHeight*.8) {
        return (elmt.getBoundingClientRect().top <= window.innerHeight*.05) && (elmt.getBoundingClientRect().bottom >= window.innerHeight) ? true : false;
    } else {
        return (elmt.getBoundingClientRect().top <= window.innerHeight*.75) && (elmt.getBoundingClientRect().bottom >= window.innerHeight*.25) ? true : false;
    }
}
