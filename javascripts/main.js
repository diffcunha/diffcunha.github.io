$(document).ready(function() {
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
    type: 'image' // this is default type
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
    type: 'image' // this is default type
  });
});