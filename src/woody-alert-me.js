document.querySelector("body").innerHTML += `
<div id="am-myAlertBackground" class="am-hidden am-alert-bg">
    <div class="am-alert-overlay"></div>
    <div id="am-myAlertBox" class="am-hidden am-alert-box am-animate-bounce-in">
    <button id="am-closeButton" type="button" class="am-close-btn am-hidden">
    <svg aria-am-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    </svg>
    </button>
        <div id="am-iconImg" class="am-hidden am-icon-img"></div>
        
        <h2 id="am-alertTitle" class="am-alert-title am-hidden"></h2>
        <div class="am-img-container">
          <img id="am-alertImg" class="am-hidden">
        </div>
        <p id="am-alertMessage" class="am-alert-message am-hidden"></p>
         
        <div id="am-htmlBody"></div>
        <div class="am-btn-container">
            <button id="am-confirmButton" type="button" class="am-confirm-btn">OK</button>
            <button id="am-cancelButton" type="button" class="am-cancel-btn">Cancel</button>
        </div>
    </div>
</div>

`;

var alertBox = document.getElementById("am-myAlertBox");
var alertBackground = document.getElementById("am-myAlertBackground");
var titleSpan = document.getElementById("am-alertTitle");
var messageSpan = document.getElementById("am-alertMessage");
var confirmButton = document.getElementById("am-confirmButton");
var cancelButton = document.getElementById("am-cancelButton");
var closeButton = document.getElementById("am-closeButton");
var iconImg = document.getElementById("am-iconImg");
var html = document.getElementById("am-htmlBody");
var alertImg = document.getElementById("am-alertImg");

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
  if (options.title) {
    titleSpan.innerText = options.title;
    titleSpan.style.display = "block";
  } else {
    titleSpan.style.display = "none";
    titleSpan.innerText = "";
  }

  if (options.text) {
    messageSpan.innerText = options.text;
    messageSpan.style.display = "block";
  } else {
    messageSpan.style.display = "none";
    messageSpan.innerText = "";
  }

  iconImg.style.display = "none";
  // Remove all existing icon classes
  iconImg.classList.remove(
    "am-success-icon",
    "am-error-icon",
    "am-info-icon",
    "am-loading-icon",
    "am-question-icon"
  );

  //options has icon
  if (options.icon) {
    if (options.icon === "success") {
      iconImg.classList.add("am-success-icon");
    } else if (options.icon === "error") {
      iconImg.classList.add("am-error-icon");
    } else if (options.icon === "info") {
      iconImg.classList.add("am-info-icon");
    } else if (options.icon === "loading") {
      iconImg.classList.add("am-loading-icon");
    } else if (options.icon === "question") {
      iconImg.classList.add("am-question-icon");
    }
    iconImg.style.display = "block";
  }

  //if showCancelButton true , show cancel button
  if (options.showCancelButton) {
    cancelButton.style.display = "inline-block";
    cancelButton.innerHTML = options.cancelButtonText || "Cancel";
  } else {
    cancelButton.style.display = "none";
  }

  //if showCloseButton false , hide close button
  if (options.showCloseButton == false) {
    closeButton.style.display = "none";
  } else {
    closeButton.style.display = "inline-block"; //show by default
  }

  //confirmButton inner text
  confirmButton.innerHTML = options.confirmButtonText || "OK";

  //hide confirm button
  if (options.showConfirmButton == false) {
    confirmButton.style.display = "none";
  } else {
    confirmButton.style.display = "inline-block";
  }

  //for confirm button bg color
  confirmButton.style.backgroundColor = options.confirmButtonColor || "#3b82f6"; // Default color

  // Add confirm button hover 
  confirmButton.addEventListener('mouseover', function() {
    confirmButton.style.backgroundColor = darkenColor(options.confirmButtonColor || "#3b82f6",25);
    confirmButton.style.transform = 'scale(0.97)';
  });

  // Add confirm button mouseout event
  confirmButton.addEventListener('mouseout', function() {
    confirmButton.style.backgroundColor =options.confirmButtonColor || "#3b82f6";
    confirmButton.style.transform = 'scale(1)';
  });
  
  //for cancel button bg color
  cancelButton.style.backgroundColor = options.cancelButtonColor || "#ffffff"; // Default color

  // Add cancel button hover 
  cancelButton.addEventListener('mouseover', function() {
    cancelButton.style.backgroundColor = darkenColor(options.cancelButtonColor || "#ffffff",20);
    cancelButton.style.transform = 'scale(0.97)';

  });

  // Add cancel button mouseout event
  cancelButton.addEventListener('mouseout', function() {
    cancelButton.style.backgroundColor =options.cancelButtonColor || "#ffffff";
    cancelButton.style.transform = 'scale(1)';
  });

  //show alert bg and alert box
  alertBackground.style.display = "flex";
  alertBox.style.display = "block";

  //for confirm button click
  confirmButton.addEventListener("click", function () {
    alertBox.classList.remove("am-animate-bounce-in");
    void alertBox.offsetWidth; // Trigger reflow to restart the animation
    alertBox.classList.add("am-animate-bounce-in");

    alertBox.style.display = "none";
    alertBackground.style.display = "none";
    confirmButton.blur();

    options.onConfirm && options.onConfirm();
  });

  //for cancel button click
  cancelButton.addEventListener("click", function () {
    alertBox.classList.remove("am-animate-bounce-in");
    void alertBox.offsetWidth; // Trigger reflow to restart the animation
    alertBox.classList.add("am-animate-bounce-in");

    alertBox.style.display = "none";
    alertBackground.style.display = "none";
    cancelButton.blur();

    options.onCancel && options.onCancel();
  });

  //for close button click
  closeButton.addEventListener("click", function () {
    alertBox.classList.remove("am-animate-bounce-in");
    void alertBox.offsetWidth; // Trigger reflow to restart the animation
    alertBox.classList.add("am-animate-bounce-in");

    alertBox.style.display = "none";
    alertBackground.style.display = "none";
  });

  //for html option
  if (options.html) {
    html.innerHTML = options.html;
  } else {
    html.innerHTML = "";
  }

  //for alert box text color and bgColor
  if (options.color) {
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
    alertImg.height = options.imageHeight || auto;
    alertImg.alt = options.imageAlt || "alert-me img";
  } else {
    alertImg.style.display = "none";
  }
}

function darkenColor(color, amount) {
  // Convert HEX to RGB
  const rgb = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  const [, r, g, b] = rgb.map(value => parseInt(value, 16));

  // Darken RGB values
  const darkenedR = Math.max(0, r - amount);
  const darkenedG = Math.max(0, g - amount);
  const darkenedB = Math.max(0, b - amount);

  // Convert darkened RGB back to HEX
  return `#${(darkenedR * 65536 + darkenedG * 256 + darkenedB).toString(16).padStart(6, '0')}`;
}

window.alertMe = alertMe;
