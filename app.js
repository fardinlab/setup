(function () {
  var SETUP_VIDEO_URL = "https://youtu.be/HrA8e9jCjJs?si=TPNxzhfNAEiFaV-M";
  var navToggle = document.querySelector(".nav-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  var setupVideo = document.getElementById("setupVideo");
  var supportLinks = document.querySelectorAll('a[href="https://wa.me/8801322230857"]');

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("is-open");
      mobileNav.hidden = !isOpen;
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        mobileNav.hidden = true;
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (setupVideo && SETUP_VIDEO_URL) {
    var embedUrl = toYouTubeEmbedUrl(SETUP_VIDEO_URL);

    if (embedUrl) {
      setupVideo.src = embedUrl;
      setupVideo.parentElement.classList.add("has-video");
    }
  }

  supportLinks.forEach(function (link) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });

  function toYouTubeEmbedUrl(url) {
    var match = String(url).match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{6,})/);
    return match ? "https://www.youtube-nocookie.com/embed/" + match[1] + "?rel=0" : "";
  }
})();
