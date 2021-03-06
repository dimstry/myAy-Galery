const container = document.querySelector('.container');
const my_img = document.querySelector('.my_img');
const thumbnail = document.querySelector('.thumbnail');
const thumbs = document.querySelectorAll('.thumb');


container.addEventListener("click", function(e) {
  //cek anu di click class na thumb lain
  if (e.target.className  == 'thumb') {
    // ambil src na 
    // ganti src na
    my_img.src = e.target.src;
    my_img.classList.add('fade');
    setTimeout(function() {
      my_img.classList.remove('fade');
    }, 500);
    thumbs.forEach(function(thumb) {
      // jika ada class active
      if(thumb.classList.contains('active')){
        // remove class nya
        thumb.classList.remove('active');
      }else {
        // jika tidak ada tambahkan class active di img yg di click
        e.target.classList.add('active');
      }
    });
  }
});
