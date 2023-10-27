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

function addItem() {
    var title = document.getElementById("itemTitle").value;
    var desc = document.getElementById("descItem").value;
    var image = document.getElementById("imageItem").value;
    var price = document.getElementById("priceItem").value;
    var status = document.getElementById("statusItem").value;
    var userItem = document.getElementById("forUserItem").value;
    if (title == "" || info == "" || image == "" || price == "" || status == "" || userItem == "") {
        window.alert("Please fill out all the information")
    } else {
        let info = {title: title, desc: desc, image: image, price: price, status: status, userItem: userItem}
        let p = fetch('add/item', {
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

function getUsers() {
    let url = 'http://localhost/get/users';
    fetch(url).then((response) => {
    return response.json();
    }).catch( (error) => {
    console.log(error);
    });
}