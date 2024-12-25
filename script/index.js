/* 
    !!!: Day la file JS tong 

    Trong truong hop muon them script thi tao them file JS moi.
*/
document.onreadystatechange = function() {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
    setTimeout(() => {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }, 500)
};