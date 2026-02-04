let btn = document.getElementById("btn1");
console.log(btn, "button");

btn.addEventListener("click", function () {
  alert("Enter Your Full Details");
});

let btn1 = document.getElementById("btnchoose");
console.log(btn1, "button");

btn1.addEventListener("click", function () {
  alert("Choose Here : B.com, BSc, Bzc, Mlt");
});

let svs = document.getElementById("btn1"); 
svs.style.backgroundColor = 'red';

let hn = document.getElementById("second"); 
hn.style.color = 'white';



function showForm() {
    let form = document.getElementById("applyForm");

    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}



function validateForm() {
  let course = document.getElementById("course").value.trim();

  let name = document.getElementById("name").value.trim();


  let email = document.getElementById("email").value.trim();

  let mobile = document.getElementById("mobile").value.trim();



  if (name === "") {
    alert("Please enter your name");
    return;
  }

  if (course === "") {
    alert("Course should not be empty");
    return;
  }



  if (email === "") {
    alert("Please enter email including @");
    return;
  }



  if (mobile === "") {
    alert("Please enter mobile number");
    return;
  } else if (mobile.length !== 10) {
    alert("Please enter 10 digits mobile number");
    return;
  }

  

  alert("Form submitted successfully ");
  
  document.getElementById("applyForm").style.display = "none";
}
