var btn = document.getElementById("btn");
var qrcode = document.getElementById("qrcode");

var ck = (btn.onclick = function () {
  var url = document.getElementById("url").value;
  var size = document.getElementById("size").value;
  clearUI();

  if (url === "") {
    alert("Enter url");
  } else {
   

    

    showspinner();
    
    setTimeout(() => {
      var qrc = new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff",
      });
      setTimeout(()=>{
        const saveurl = document.getElementById("qrcode").querySelector('img').src;
        savebtn(saveurl);
    }, 50)
    hidespinner();

    }, 1000);
  }

  // var q = document.getElementById("qrcode").innerHTML = qrcode;
});

// if (ck) {
//     qrcode.getAttributeNode[0].remove();
// }

const showspinner = () => {
  document.getElementById("spinner").style.display = "block";
};

const hidespinner = () => {
  document.getElementById("spinner").style.display = "none";
};

const clearUI = () => {
  qrcode.innerHTML = "";
};

const savebtn = (url) => {
    const btn = document.createElement("a");
    btn.id= "save-link"
    btn.classList = "bg-red-500 hover:bg-red-700 text-white px-4 py-2 m-6 rounded-md flex justify-center"
    btn.href = url
    btn.download = "qrcode"
    btn.innerHTML = "Download QR-Code"
    document.getElementById("qrcode").appendChild(btn);
  };


hidespinner();
