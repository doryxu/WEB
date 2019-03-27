var i = 0; // Start point
  var images = [];
  var time = 2000;

  // Image List
  images[0] = 'paul0.jpg';
  images[1] = 'paul1.jpg';
  images[2] = 'paul2.jpg';

  // Change Image
  function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
      i++;
    } else {
      i = 0;
    }

    setTimeout("changeImg()", time);
  }

  window.onload = changeImg;