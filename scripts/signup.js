document.querySelector("form").addEventListener("submit",signupFunction);
let signupObject;
async function signupFunction(){
    event.preventDefault();
    // console.log("form is submitted.")
    try{
        let form = document.querySelector("form");
        let username  = form.username.value;
        let email = form.email.value;
        let password = form.password.value;
        let confirm = form.con_password.value;
        
        if(password === confirm){
            signupObject = {
                username,
                email,
                password,
            }
            let result = await fetch(`http://localhost:3000/posts`,{
                method : "POST",
                body : JSON.stringify(signupObject),
                headers : {
                    "Content-Type" : "application/json",
                },
            });
            let data = await result.json();
            console.log(data);
            document.getElementById("username").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("con_password").value = "";
            window.location.href = "login.html";
        }else{
            alert("please enter password again.")
        }
    }catch{
        console.log("error ocuured in signupFunction");
        console.log(signupObject);
    }
}