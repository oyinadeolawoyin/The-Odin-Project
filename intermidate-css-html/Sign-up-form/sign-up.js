let submit = document.querySelector("#submit");
let form = document.getElementById("myForm");
submit.addEventListener("click", ()=> {
    const input = document.querySelector(".password");
    const passwordComfirm = document.querySelector(".comfirm")
    password.setCustomValidity("");

    if(input.value !== passwordComfirm.value) {
        password.setCustomValidity("*Password do not match");
        password.reportValidity();
    }
    else if(input.value === "" || passwordComfirm === "") {
        password.setCustomValidity("Please fill out in the fields.");
        password.reportValidity();
    }
    else {
        alert("Form submit sucessfully")
        form.submit()

        setTimeout(()=> {
            form.reset();
        })
    }
});