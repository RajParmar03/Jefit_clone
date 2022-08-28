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
                name:"raju parmarheye",
                username,
                email,
                password,
                mobile : 6546511135,
                description : "raju parmar ka jalwa."
            }
            let result = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
                method : "POST",
                body : JSON.stringify(signupObject),
                headers : {
                    "Content-Type" : "application/json",
                },
            });
            let data = await result.json();
            console.log(data);
        }else{
            alert("please enter password again.")
        }
    }catch{
        console.log("error ocuured in signupFunction");
        console.log(signupObject);
    }
}