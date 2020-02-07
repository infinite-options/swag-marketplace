var input ;
var preview ;
window.onload = function (){
     input = document.querySelector('.imageInput');
     preview = document.getElementById('preview');
                    
    // input.style.opacity = 0;
                    
    input.addEventListener('change', updateImageDisplay);
}

                    
function updateImageDisplay() {
   
    while(preview.firstChild) {
         preview.removeChild(preview.firstChild);
    }
                    
    file = input.files[0];
    if(file.length === 0) {
        var para = document.createElement('p');
        para.textContent = 'No files currently selected for upload';
        preview.appendChild(para);
    } else {
        if(validFileType(file)) {
            var image = document.createElement('img');
            image.src = window.URL.createObjectURL(file);
                        
            preview.appendChild(image);
                    
        } else {
            para.textContent = 'File name ' + file.name + ': Not a valid file type. Update your selection.';
            preview.appendChild(para);
        }
    }
}
                    
var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
]
                    
function validFileType(file) {
    for(var i = 0; i < fileTypes.length; i++) {
        if(file.type === fileTypes[i]) {
            return true;
        }
    }
                    
    return false;
}
                    
function returnFileSize(number) {
    if(number < 1024) {
        return number + 'bytes';
    } else if(number > 1024 && number < 1048576) {
        return (number/1024).toFixed(1) + 'KB';
    } else if(number > 1048576) {
        return (number/1048576).toFixed(1) + 'MB';
    }
}