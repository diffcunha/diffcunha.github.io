function show(selector) {
  $(selector).show();
}
function hide(selector) {
  $(selector).hide();
}

$(document).ready(function() {
  $('#nestible-shots').magnificPopup({
    items: [{
      src: 'images/nestible/nestible1.png'
    }, {
      src: 'images/nestible/nestible2.png'
    }, {
      src: 'images/nestible/nestible3.png'
    }, {
      src: 'images/nestible/nestible4.png'
    }, {
      src: 'images/nestible/nestible5.png'
    }, {
      src: 'images/nestible/nestible6.png'
    }, {
      src: 'images/nestible/nestible7.png'
    }, {
      src: 'images/nestible/nestible8.png'
    }],
    gallery: {
      enabled: true,
      navigateByImgClick: true
    },
    type: 'image'
  });
  $('#entrepsim-shots').magnificPopup({
    items: [{
      src: 'images/entrepsim/entrepsim1.png'
    }, {
      src: 'images/entrepsim/entrepsim2.png'
    }, {
      src: 'images/entrepsim/entrepsim3.png'
    }, {
      src: 'images/entrepsim/entrepsim4.png'
    }, {
      src: 'images/entrepsim/entrepsim5.png'
    }, {
      src: 'images/entrepsim/entrepsim6.png'
    }, {
      src: 'images/entrepsim/entrepsim7.png'
    }, {
      src: 'images/entrepsim/entrepsim8.png'
    }],
    gallery: {
      enabled: true,
      navigateByImgClick: true
    },
    type: 'image'
  });
  $('#guinness-shots').magnificPopup({
    items: [{
      src: 'images/guinness/guinness1.png'
    }, {
      src: 'images/guinness/guinness2.png'
    }, {
      src: 'images/guinness/guinness3.png'
    }, {
      src: 'images/guinness/guinness4.png'
    }, {
      src: 'images/guinness/guinness5.png'
    }, {
      src: 'images/guinness/guinness6.png'
    }, {
      src: 'images/guinness/guinness7.png'
    }, {
      src: 'images/guinness/guinness8.png'
    }],
    gallery: {
      enabled: true,
      navigateByImgClick: true
    },
    type: 'image'
  });
  $('#base-shots').magnificPopup({
    items: [{
      src: 'images/base/base1.png'
    }, {
      src: 'images/base/base2.png'
    }, {
      src: 'images/base/base3.png'
    }, {
      src: 'images/base/base4.png'
    }, {
      src: 'images/base/base5.png'
    }],
    gallery: {
      enabled: true,
      navigateByImgClick: true
    },
    type: 'image'
  });
});