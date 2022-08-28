document.querySelector("form").addEventListener("submit",loginFunction);

async function loginFunction(){
    event.preventDefault();
    // console.log("clicked");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    // console.log(username,password);
    let result = await fetch(" http://localhost:3000/posts");
    let data = await result.json();
    // console.log(data);
    let signal = false;
    data.forEach(elem => {
        if(elem.username === username && elem.password === password){
            signal = true;
        }
    });
    if(signal){
        alert("SUCCESSFULLY LOGGED IN");
        // window.location.href = "";
    }else{
        alert("WRONG CREADENTIALS , TRY AGAIN");
    }
}