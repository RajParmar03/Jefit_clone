document.querySelector("form").addEventListener("submit",loginFunction);

async function loginFunction(){
    event.preventDefault();
    // console.log("clicked");
    let form = document.querySelector("form");
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    let result = fetch(" http://localhost:3000/posts")
}