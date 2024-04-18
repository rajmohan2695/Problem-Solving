const getImageBtn = document.getElementById('get-image');
const imageBaseUrl = 'http://picsum.photos/600?t=';
const imagePreview = document.getElementById('image-preview');
const imageId = document.getElementById('input-url');

getImageBtn.onclick = function(){
    showImagePreview();
}

imageId.onkeypress = function(event){
    if(event.keyCode === 13){   //Enter key
        showImagePreview();
    }
}

function showImagePreview(){
    imagePreview.src = imageBaseUrl+imageId.value;
}