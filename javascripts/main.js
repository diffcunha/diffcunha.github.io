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
    }],
    gallery: {
      enabled: true,
      navigateByImgClick: true
    },
    type: 'image' // this is default type
  });
});