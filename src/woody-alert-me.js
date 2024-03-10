document.querySelector("body").innerHTML += `
<div id="myAlertBackground" class="hidden alert-bg">
    <div class="alert-overlay"></div>
    <div id="myAlertBox" class="hidden alert-box animate-bounce-in">
      <div id="iconImg" class="hidden icon-img"></div>
        <h2 id="alertTitle" class="alert-title"></h2>
        <p id="alertMessage" class="alert-message"></p>
        <div class="btn-container">
            <button id="confirmButton" data-modal-hide="default-modal" type="button" class="confirm-btn">OK</button>
            <button id="cancelButton" data-modal-hide="default-modal" type="button" class="cancel-btn">Cancel</button>
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
  titleSpan.innerText = options.title;
  messageSpan.innerText = options.text;

  //options has icon
  if(options.icon){
    
     // Remove all existing icon classes
     iconImg.classList.remove("success-icon", "error-icon", "info-icon", "loading-icon");

    

    if (options.icon === "success") {
      iconImg.classList.add("success-icon");
      } else if (options.icon === "error") {
        iconImg.classList.add("error-icon");
      } else if (options.icon === "info") {
        iconImg.classList.add("info-icon");
      }else if (options.icon === "loading") {
        iconImg.classList.add("loading-icon");
      }
      iconImg.style.display = 'block';
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
  confirmButton.style.backgroundColor = options.confirmButtonColor || "#222222"; // Default color

  //for cancel button bg color
  cancelButton.style.backgroundColor = options.cancelButtonColor || "#d33"; // Default color

  //show alert bg and alert box
  alertBackground.style.display = "flex";
  alertBox.style.display = "block";

  confirmButton.addEventListener("click", function () {
    alertBox.classList.remove("animate-bounce-in");
    void alertBox.offsetWidth; // Trigger reflow to restart the animation
    alertBox.classList.add("animate-bounce-in");

    alertBox.style.display = "none";
    alertBackground.style.display = "none";
    options.onConfirm && options.onConfirm();
  });

  cancelButton.addEventListener("click", function () {
    alertBox.style.display = "none";
    alertBackground.style.display = "none";
    options.onCancel && options.onCancel();
  });
}

export default alertMe;

