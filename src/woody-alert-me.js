document.querySelector("body").innerHTML += `
<div id="myAlertBackground" class="hidden alert-bg">
    <div class="alert-overlay"></div>
    <div id="myAlertBox" class="hidden alert-box animate-bounce-in">
      
        <div id="iconImg" class="hidden icon-img"></div>
       
        <h2 id="alertTitle" class="alert-title hidden"></h2>
        <p id="alertMessage" class="alert-message hidden"></p>
        <div class="img-container">
          <img id="alertImg" class="hidden">
        </div> 
        <div id="htmlBody"></div>
        <div class="btn-container">
            <button id="confirmButton" type="button" class="confirm-btn">OK</button>
            <button id="cancelButton" type="button" class="cancel-btn">Cancel</button>
        </div>
    </div>
</div>

`;

var alertBox = document.getElementById("myAlertBox");
var alertBackground = document.getElementById("myAlertBackground");
var titleSpan = document.getElementById("alertTitle");
var messageSpan = document.getElementById("alertMessage");
var confirmButton = document.getElementById("confirmButton");
var cancelButton = document.getElementById("cancelButton");
var iconImg = document.getElementById("iconImg");
var html = document.getElementById("htmlBody");
var alertImg = document.getElementById("alertImg");

function alertMe(titleOrOptions, message) {
  if (typeof titleOrOptions === "string") {
    // If the first argument is a string, assume it's the title
    var options = {
      title: titleOrOptions,
      text: message,
    };
    fireAlert(options);
  } else {
    // If the first argument is an object, assume it's the options object
    fireAlert(titleOrOptions);
  }
}

function fireAlert(options) {
  // for alert title 
  if(options.title){
    titleSpan.innerText = options.title;
    titleSpan.style.display = "block";
  }else {
    titleSpan.style.display = "none";
    titleSpan.innerText = "";
  }

  if(options.text){
    messageSpan.innerText = options.text;
    messageSpan.style.display = "block";
  }else {
    messageSpan.style.display = "none";
    messageSpan.innerText = "";
  }

  iconImg.style.display = "none";
  // Remove all existing icon classes
  iconImg.classList.remove(
    "success-icon",
    "error-icon",
    "info-icon",
    "loading-icon"
  );

  //options has icon
  if (options.icon) {
    if (options.icon === "success") {
      iconImg.classList.add("success-icon");
    } else if (options.icon === "error") {
      iconImg.classList.add("error-icon");
    } else if (options.icon === "info") {
      iconImg.classList.add("info-icon");
    } else if (options.icon === "loading") {
      iconImg.classList.add("loading-icon");
    }
    iconImg.style.display = "block";
  }

  //if showCancelButton true , show cancel button
  if (options.showCancelButton) {
    cancelButton.style.display = "inline-block";
    cancelButton.innerText = options.cancelButtonText || "Cancel";
  } else {
    cancelButton.style.display = "none";
  }

  //confirmButton inner text
  confirmButton.innerText = options.confirmButtonText || "OK";

  //for confirm button bg color
  confirmButton.style.backgroundColor = options.confirmButtonColor || "#3b82f6"; // Default color

  //for cancel button bg color
  cancelButton.style.backgroundColor = options.cancelButtonColor || "#ffffff"; // Default color

  //show alert bg and alert box
  alertBackground.style.display = "flex";
  alertBox.style.display = "block";

  //for confirm button click
  confirmButton.addEventListener("click", function () {
    alertBox.classList.remove("animate-bounce-in");
    void alertBox.offsetWidth; // Trigger reflow to restart the animation
    alertBox.classList.add("animate-bounce-in");

    alertBox.style.display = "none";
    alertBackground.style.display = "none";
    options.onConfirm && options.onConfirm();
  });

  //for cancel button click
  cancelButton.addEventListener("click", function () {
    alertBox.classList.remove("animate-bounce-in");
    void alertBox.offsetWidth; // Trigger reflow to restart the animation
    alertBox.classList.add("animate-bounce-in");

    alertBox.style.display = "none";
    alertBackground.style.display = "none";
    options.onCancel && options.onCancel();
  });

  //for html option
  if (options.html) {
    html.innerHTML = options.html;
  }else {
    html.innerHTML = "";
  }

  //for alert box text color and bgColor
  if(options.color){
    alertBox.style.color = options.color;
    titleSpan.style.color = options.color;
    messageSpan.style.color = options.color;
  }
  
  alertBox.style.backgroundColor = options.bgColor || "#ffffff"; // Default bg color

  //for image
  if (options.imageUrl) {
    alertImg.style.display = "block";
    alertImg.src = options.imageUrl;
    alertImg.width = options.imageWidth || 300;
    // alertImg.height = options.imageHeight || 600;
    alertImg.alt = options.imageAlt || "alert-me img";
  }else {
    alertImg.style.display = "none";
  }


}

window.alertMe = alertMe;
