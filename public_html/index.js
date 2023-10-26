function addUser() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    if (username == "" || password == "") {
        window.alert("Please enter your username and password")
    } else {
        let info = {username: username, password: password};
        let p = fetch('add/user', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: { 'Content-Type': 'application/json'}
        });
        p.then((response) => {
            return response.text();
        }).catch((err) => {
            console.log(err);
        });
    }
}