function showSweetAlert() {
    Swal.fire({
        title: 'Hello!',
        text: 'This is a SweetAlert with Bootstrap 5!',
        icon: 'success',
        confirmButtonColor: '#007bff',
    });
}

// Standart
function StandartSweetAlert() {
    Swal.fire("SweetAlert2 is working!");
}

// Pertanyaan
function TheInternet() {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
    });
}

// Oppss
function Oops() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
}

// konfirmasi
function saveTheChanges() {
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }
    });
}

// Apakah Kamu Yakin ?
function  areYouSure() {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
}

// Image
function image(){
    Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "../../assets/images/ayam penyet.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
}

// Timer
function timer(){
    let timerInterval;
Swal.fire({
  title: "Auto close alert!",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {

  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
}

// ajax Request
function ajaxRequest(){
    Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: async (login) => {
          try {
            const githubUrl = `
              https://api.github.com/users/${login}
            `;
            const response = await fetch(githubUrl);
            if (!response.ok) {
              return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
            }
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`
              Request failed: ${error}
            `);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          });
        }
      });
}

// Mixin
function mixin(){
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: "Signed in successfully"
  });
}

// Input User
function inputUser(){
  (async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Input your credentials',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Email">' +
        '<input id="swal-input2" class="swal2-input" type="password" placeholder="Password">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ];
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      willOpen: () => {
        // You can customize attributes for each input field here if needed
        document.getElementById('swal-input1').setAttribute('autocomplete', 'off');
        document.getElementById('swal-input2').setAttribute('autocomplete', 'off');
      }
    });
  
    if (formValues) {
      const [email, password] = formValues;
      Swal.fire(`Entered email: ${email}\nEntered password: ${password}`);
    }
  })();

}

function select(){
  (async () => {
    const { value: fruit } = await Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: {
        Fruits: {
          apples: "Apples",
          bananas: "Bananas",
          grapes: "Grapes",
          oranges: "Oranges"
        },
        Vegetables: {
          potato: "Potato",
          broccoli: "Broccoli",
          carrot: "Carrot"
        },
        icecream: "Ice cream"
      },
      inputPlaceholder: "Select a fruit",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === "oranges") {
            resolve();
          } else {
            resolve("You need to select oranges :)");
          }
        });
      }
    });
    if (fruit) {
      Swal.fire(`You selected: ${fruit}`);
    }
  })();
}