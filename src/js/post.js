
/*   
    resource went off of - https://github.com/mdn/learning-area/blob/master/html/forms/file-examples/file-example.html
    understanding how to get the files -  https://developer.mozilla.org/en-US/docs/Web/API/FileList
    remove child method -https://www.w3schools.com/jsref/met_node_removechild.asp
    target event - https://developer.mozilla.org/en-US/docs/Web/API/Event/target
                -https://stackoverflow.com/questions/5116929/get-clicked-li-from-ul-onclick
*/

// var input ;
// var preview ;
// window.onload = function (){
//     //capture the element that holds the input of the files
//     //querySelector finds the first element matching the class. 
//     //  input = document.querySelector('.imageInput');
//      //capture the element where the picture will be placed. 
//     //  preview = document.getElementById('preview');
                    
//     //when there is a change on the input the callback function is executed. Put it on the 
//     //input of the html instead.           
//     // input.addEventListener('change', updateImageDisplay);
// }


                    
function updateImageDisplay() {
    //makes the input option disapear when images is uploaded. 
    //input.style.opacity = 0;
    // document.getElementById('postImage').style.opacity = 0
    preview = document.getElementById('preview');
    // imagePreview = document.getElementById('imagePreview');
    //removes what is already in preview.
    while(preview.firstChild) {
         preview.removeChild(preview.firstChild);
    }
    while(rightPreview.firstChild) {
        rightPreview.removeChild(rightPreview.firstChild);
    }
    while(leftPreview.firstChild) {
        leftPreview.removeChild(leftPreview.firstChild);
    }
//     while(imagePreview.firstChild) {
//         imagePreview.removeChild(imagePreview.firstChild);
//    }
    //capture the files in input.            
     const curFiles = document.getElementById('postImage').files;
    //if not files slescted sent a message.
    if(curFiles.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No files currently selected for upload';
        preview.appendChild(para);
    } else if(curFiles.length >5){
        num = curFiles.length;
        const para = document.createElement('p');
        para.textContent = 'Too many files selected. Max 5 files.';
        preview.appendChild(para);
    }else {
        //create an ordered list element in the DOM 
        const list = document.createElement('ol');
        //put it in preview. 
        leftPreview.appendChild(list);
         var bigImage = document.createElement('img');
         bigImage.src = URL.createObjectURL(curFiles[0]);
        rightPreview.appendChild(bigImage);
         for(const file of curFiles) {
            const listItem = document.createElement('li');
            const para = document.createElement('p');
  
            if(validFileType(file)) {
              var image = document.createElement('img');
              image.src = URL.createObjectURL(file);
  
              listItem.appendChild(image);
              
            } else {
              para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
              listItem.appendChild(para);
            }
  
            list.appendChild(listItem);
          }


          list.addEventListener('mouseover', function(event){ 
            // console.log(event.target) ;
            if(event.target.src != undefined){
                if(rightPreview.firstChild) {
                    rightPreview.removeChild(rightPreview.firstChild);
                }
                var imageR = document.createElement('img');
                imageR.src = event.target.src;
                rightPreview.appendChild(imageR); 
            }
             
          });
    }
}
                    
var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
];
                    
function validFileType(file) {
    for(var i = 0; i < fileTypes.length; i++) {
        if(file.type === fileTypes[i]) {
            return true;
        }
    }
                    
    return false;
}
                    
