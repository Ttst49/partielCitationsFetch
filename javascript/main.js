const username = document.getElementById("username").value
const password = document.getElementById("password").value


async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
    });
    return response.json();
}

function connect(){
    postData("https://partiel.thibautstachnick.com/api/login_check", { username,password }).then((data) => {
        console.log(data);
    });
}