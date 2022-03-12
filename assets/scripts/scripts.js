// GO TO TOP BUTTON
var btn = $('#btn-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// NAVBAR ON SCROLL
var nav = $('#main-navbar');

$(window).scroll(function() {
  if ($(window).scrollTop() > 70) {
    nav.addClass('sticky-top navbar-dark');
    $("#navbar-logo").attr("src","assets/images/WordPress-logotype-standard-white.png");
  } else {
    nav.removeClass('sticky-top navbar-dark');
    $("#navbar-logo").attr("src","assets/images/WordPress-logotype-standard.png");
  }
});

// SCROLL REVEAL
const sr= ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 100,
  // reset: true
})

//POCETNA SCROLL REVEAL
sr.reveal(`.hero-section, .video-container, .community-right, .companies-left, .community-left`)
sr.reveal(`.hero-image, .info-heading, .info-text`, {delay: 200})
sr.reveal(`.companies-item, .card-wrapper`, {interval: 100})

//PRVI KORACI REVEAL
sr.reveal(`.jumbotron-section, .jumbotron-heading, .jumbotron-text,.questions-header,.questions-text`);
sr.reveal(`.features-heading, .features-left-heading, .features-left-text, .features-item-image, .communication-image, .accordion`);
sr.reveal(`.features-image, .communication-header, .communication-text, .communication-button`);
sr.reveal(`.functionality-header, .functionality-text`);

// POREDJENJE CMS
sr.reveal(`.headline-section`);
sr.reveal(`.heading, .feature-text, .wp-features-image`);
sr.reveal(`.table-sel`);
sr.reveal(`.subheading, .about-wp-text, .rest-heading, .rest-text`);
sr.reveal(`.heading`, {interval:100});
sr.reveal(`.feature-text`, {interval:150});
sr.reveal(`.rest-image`, {interval: 200})

// GALERIJA
sr.reveal(`.teme-hero-section`)
sr.reveal(`.teme-main-section`, {interval:300})

// O TIMU
sr.reveal(`.o-timu-image`)
sr.reveal(`.o-timu-hero-heading, .o-timu-hero-text`, {delay: 200})
sr.reveal(`.team-member-wrapper`, {interval: 100})

// ISTORIJA
sr.reveal(`.istorija-hero-section, .new-wordpress-section`)
sr.reveal(`.about-wordpress-section, .testimonials-heading`, {delay: 200})
sr.reveal(`.first-wp-image, .testimonial-wrapper`, {interval: 300})



//ACCORDION
var accordion = document.getElementsByClassName("accordion");
var i;

for(i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    var accordionPanel = this.nextElementSibling;
    var accordionImg= this.lastChild;
    console.log(accordionImg);
    if (accordionPanel.style.maxHeight) {
      accordionPanel.style.maxHeight = null;
      accordionImg.removeAttribute('src');
      accordionImg.setAttribute('src','assets/images/plus-circle.svg');
    } else {
      accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
      accordionImg.removeAttribute('src');
      accordionImg.setAttribute('src','assets/images/x-circle.svg');
    }
  });
}

//GALERIJA FILTER
$(document).ready(function () {
  var filter = 0;
  GetPhotos(filter);
});
$("#freeThemes").click(function () {
  var filter = 1;
  GetPhotos(filter);
});
$("#paidThemes").click(function () {
  var filter = 2;
  GetPhotos(filter);
});
$("#allThemes").click(function () {
  var filter = 0;
  GetPhotos(filter);
});
function GetPhotos(filter) {
  fetch('assets/json/themes.json')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      var data = document.getElementById("content-themes");
      var card = "";
      $.each(json, function (index, item) {
        if (filter == 1 && item.free == true)
          card += '<div class="col-12 col-lg-4 col-md-6 my-2">' + '<div class="card card-background">' +
            '<img src="' + item.link + '" class="card-img-top" alt="...">' +
            '<div class="card-body">' +
            '<h5 class="card-title font-heading">' + item.name + '</h5>' +
            '<p class="card-text">' + item.desc + '</p>' +
            '</div>' +
            '</div></div>';
        if (filter == 2 && item.free == false)
          card += '<div class="col-12 col-lg-4 col-md-6 my-2">' + '<div class="card">' +
            '<img src="' + item.link + '" class="card-img-top" alt="...">' +
            '<div class="card-body">' +
            '<h5 class="card-title font-heading">' + item.name + '</h5>' +
            '<p class="card-text">' + item.desc + '</p>' +
            '</div>' +
            '</div></div>';
        if (filter == 0)
          card += '<div class="col-12 col-lg-4 col-md-6 my-2">' + '<div class="card">' +
            '<img src="' + item.link + '" class="card-img-top" alt="...">' +
            '<div class="card-body">' +
            '<h5 class="card-title font-heading">' + item.name + '</h5>' +
            '<p class="card-text">' + item.desc + '</p>' +
            '</div>' +
            '</div></div>';
      })
      data.innerHTML = card;
    })
}
