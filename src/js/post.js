
/*   
    resource went off of - https://github.com/mdn/learning-area/blob/master/html/forms/file-examples/file-example.html
    understanding how to get the files -  https://developer.mozilla.org/en-US/docs/Web/API/FileList
    remove child method -https://www.w3schools.com/jsref/met_node_removechild.asp
    target event - https://developer.mozilla.org/en-US/docs/Web/API/Event/target
                -https://stackoverflow.com/questions/5116929/get-clicked-li-from-ul-onclick
    validate form inputs - https://www.w3schools.com/js/js_validation.asp
*/
                    
function updateImageDisplay() {
    preview = document.getElementById('preview');  
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
        //create the big image element
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
        //on hover make image bigger
        list.addEventListener('mouseover', function(event){ 
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
                    
function formSubmittion(event){
     let imageURL = [];
     let isNeg= null;
     let curFiles = document.getElementById('postImage').files;
     let compName= document.getElementById('CompanyName').value;
     let prodName= document.getElementById('ProductName').value;
     let prodDes= document.getElementById('ProductDescription').value;
     let sellLoc= document.getElementById('SellerLocation').value;
     let Quantity= document.getElementById('Quantity').value;
     let Price= document.getElementById('Price').value;
     let nego = document.getElementsByName('negotable');
    
    for(i = 0; i < nego.length; i++) { 
        if(nego[i].checked) {
            isNeg = nego[i].value; 
        }
    } 
    if(curFiles.length != 0){
        for(var i = 0; i<curFiles.length; i++){
            imageURL[i] = URL.createObjectURL(curFiles[i]);
        }
    }
    RemoveWhatAlreadyThere();
    if(ValidateSubmitInfo()) {
        let ProductInfo = {ImageFiles:imageURL, Company : compName,Product: prodName,Description: prodDes,
            Location: sellLoc, Quantity:  Quantity, Price: Price, PriceNegotable: isNeg};
        console.log(ProductInfo);
        document.getElementById('CompanyName').value = "";
        document.getElementById('ProductName').value = "";
        document.getElementById('ProductDescription').value = "";
        document.getElementById('SellerLocation').value = "";
        document.getElementById('Quantity').value = "";
        document.getElementById('Price').value = "";
        for(i = 0; i < nego.length; i++) { 
             if(nego[i].checked) {
                nego[i].checked = false;
             }
        }
        text = "Successfully Submitted Form. Product is Posted."
        document.getElementById("SubmitionSuccess").innerHTML = text;
        rightPreview.removeChild(rightPreview.firstChild);
        leftPreview.removeChild(leftPreview.firstChild);
    }   
}

function ValidateSubmitInfo(){
    //check if each field if filled out. 
    let isNeg= null;
    let value = true;
    const curFiles = document.getElementById('postImage').files;
    let compName= document.getElementById('CompanyName').value;
    let prodName= document.getElementById('ProductName').value;
    let prodDes= document.getElementById('ProductDescription').value;
    let sellLoc= document.getElementById('SellerLocation').value;
    let Quantity= document.getElementById('Quantity').value;
    let Price= document.getElementById('Price').value;
    let nego = document.getElementsByName('negotable');
    for(i = 0; i < nego.length; i++) {       
        if(nego[i].checked) {
            isNeg = nego[i].value; 
        }
     } 
    if(compName == ""){
    text = "Must Specify Company Name. "
    document.getElementById("ErrorCompName").innerHTML = text;
    value =  false;
    }
    if(prodName == ""){
    text = "Must Specify Product Name. "
    document.getElementById("ErrorProdName").innerHTML = text;
    value = false;
    }
    if(prodDes == ""){
    text = "Must Specify Product Description. "
    document.getElementById("ErrorProdDes").innerHTML = text;
    value = false;
    }
    if(sellLoc == ""){
    text = "Must Specify Location. "
    document.getElementById("ErrorSellLoc").innerHTML = text;
    value = false;
    }
    if(Quantity == ""){
    text = "Must Specify Quantity "
    document.getElementById("ErrorQuan").innerHTML = text;
    value = false;
    }
    if(Price == ""){
    text = "Must Specify Price. "
    document.getElementById("ErrorPrice").innerHTML = text;
    value = false;
    }
    if(isNeg == null){
    text = "Must Specify if Price is Negotable "
    document.getElementById("ErrorPriceNeg").innerHTML = text;
    value = false;
    }
    if(curFiles.length  == 0){
    text = "Must Upload at Least one Image. "
    document.getElementById("ErrorNoPic").innerHTML = text;
    value = false;
    }
    return value;
}

function RemoveWhatAlreadyThere(){
    if(ErrorCompName.firstChild) {
        ErrorCompName.removeChild(ErrorCompName.firstChild);
     }
    if( ErrorProdName.firstChild) {
        ErrorProdName.removeChild(ErrorProdName.firstChild);
    }
    if( ErrorProdDes.firstChild) {
        ErrorProdDes.removeChild(ErrorProdDes.firstChild);
    }
    if( ErrorSellLoc.firstChild) {
        ErrorSellLoc.removeChild(ErrorSellLoc.firstChild);
    }
    if( ErrorQuan.firstChild) {
        ErrorQuan.removeChild(ErrorQuan.firstChild);
    }
    if( ErrorPrice.firstChild) {
        ErrorPrice.removeChild(ErrorPrice.firstChild);
    }
    if( ErrorPriceNeg.firstChild) {
        ErrorPriceNeg.removeChild(ErrorPriceNeg.firstChild);
    }
    if( ErrorNoPic.firstChild) {
        ErrorNoPic.removeChild(ErrorNoPic.firstChild);
    }
}