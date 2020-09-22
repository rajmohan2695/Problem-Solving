const getImageBtn = document.getElementById('get-image');
const imageBaseUrl = 'http://picsum.photos/600?t=';
const imagePreview = document.getElementById('image-preview');
const imageId = document.getElementById('input-url');

getImageBtn.onclick = function(){
    imagePreview.src = imageBaseUrl+imageId.value;
}