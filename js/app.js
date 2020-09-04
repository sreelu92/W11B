function getImage() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("checking").innerHTML =" ";
            let images = JSON.parse(this.responseText);
            console.log(this.responseText)
            let showImage=document.getElementById("images");
            showImage.setAttribute("src",images.url);
            showImage.classList.add("imageSize");
        }else if(this.readyState!=4) {
            document.getElementById("checking").innerHTML ="LOADING";


        }else {
            document.getElementById("checking").innerHTML ="Something went wrong";

        }
    }
    ajax.open("GET", "https://random.dog/woof.json", true);
    ajax.send();

}
document.getElementById("refresh-page").addEventListener("click", getImage);