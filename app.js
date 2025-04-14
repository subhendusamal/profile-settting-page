

  function enableForm() {
    // Enable all inputs in the form
    const form = document.getElementById('cont-form');
    const inputs = form.querySelectorAll('input');
    
    inputs.forEach(input => {
      input.removeAttribute('readonly');
      input.removeAttribute('disabled');
    });
  }

  function triggerFileInput() {
    const fileInput = document.getElementById('fileInput');
    if (!fileInput.disabled) {
      fileInput.click();
    }
  }

  function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('preview').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }



  


  // When user selects new image, preview it and flag as changed
function previewImage(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
          document.getElementById("preview").src = e.target.result;
          newImageSelected = true;
      };
      reader.readAsDataURL(file);
  }
}

// Save button handler
document.querySelector(".change-btn").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission

  if (newImageSelected) {
      const newImgSrc = document.getElementById("preview").src;
      const headerImg = document.querySelector(".user img");
      headerImg.src = newImgSrc;
      newImageSelected = false; // reset flag
  }

  // Re-disable form inputs
  const form = document.getElementById("cont-form");
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
      input.setAttribute("readonly", true);
      if (input.type === "file") {
          input.setAttribute("disabled", true);
      }
  });
});

// Enable editing inputs
function enableForm() {
  const form = document.getElementById("cont-form");
  const inputs = form.querySelectorAll("input");
  inputs.forEach((input) => {
      input.removeAttribute("readonly");
      input.removeAttribute("disabled");
  });
}

// Trigger file input when image is clicked
function triggerFileInput() {
  const fileInput = document.getElementById("fileInput");
  if (!fileInput.disabled) {
      fileInput.click();
  }
}


  