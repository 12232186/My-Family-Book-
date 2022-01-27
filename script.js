var images = ["https://as2.ftcdn.net/jpg/01/15/47/87/500_F_115478791_GG0yIcVA8Mhe6MAXEvgcfyL7JtuVfYvm.jpg", "https://img1.cgtrader.com/items/2253684/eb7f9d7c8f/large/cartoon-cute-father-man-3d-model-3d-model-obj-fbx-ma.jpg", "https://previews.123rf.com/images/yupiramos/yupiramos1712/yupiramos171207137/91230755-young-girl-kid-character-standing-cartoon-vector-illustration.jpg", "https://www.teahub.io/photos/full/19-197976_high-resolution-lovley-illustraion-of-family-love-16801050.jpg"];
var names = ["Mom", "Dad", "Me", "Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}

