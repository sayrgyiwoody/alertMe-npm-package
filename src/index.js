var alertBox = document.getElementById("myAlertBox");
var alertBackground = document.getElementById("myAlertBackground");
var titleSpan = document.getElementById("alertTitle");
var messageSpan = document.getElementById("alertMessage");
var confirmButton = document.getElementById("confirmButton");
var cancelButton = document.getElementById("cancelButton");
var iconImg = document.getElementById("iconImg");

export function coolAlert(titleOrOptions, message) {
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
    iconImg.style.display = 'block';

    if (options.icon === "success") {
        iconImg.src = "./icons/success.gif";
      } else if (options.icon === "error") {
        iconImg.src = "./icons/error.gif";
      } else if (options.icon === "info") {
        
        iconImg.src = "./icons/info.gif";
      }
  }
  

  //if showCancelButton true , show cancel button
  if (options.showCancelButton) {
    cancelButton.style.display = "inline-block";
  } else {
    cancelButton.style.display = "none";
    cancelButton.innerText = options.cancelButtonText || "Cancel";
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
    alertBox.classList.remove("animate__bounceIn");
    void alertBox.offsetWidth; // Trigger reflow to restart the animation
    alertBox.classList.add("animate__bounceIn");

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


