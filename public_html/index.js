// Gets called every time the user clicks on "Add Account button"
function addUser() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    // Alert the user if username or password are blank
    if (username == "" || password == "") {
        window.alert("Please enter your username and password")
    } else {
        // updating the input holders for users
        document.getElementById("user").value = "";
        document.getElementById("password").value = "";
        // send to the server using POST method
        let info = {username: username, password: password};
        let p = fetch('add/user', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: { 'Content-Type': 'application/json'}
        });
        p.then((response) => {
            console.log(response);
            return response;
        }).catch((err) => {
            console.log(err);
        });
    }
}

// Gets called every time the user clicks "Add item button" 
function addItem() {
    var title = document.getElementById("itemTitle").value;
    var desc = document.getElementById("descItem").value;
    var image = document.getElementById("imageItem").value;
    var price = document.getElementById("priceItem").value;
    var status = document.getElementById("statusItem").value;
    var userItem = document.getElementById("forUserItem").value;
    // Alert the user if any of the entries is blank
    if (title == "" || desc == "" || image == "" || price == "" || status == "" || userItem == "") {
        window.alert("Please fill out all the information")
    } else {
        let info = {title: title, desc: desc, image: image, price: price, status: status, userItem: userItem}
        // send to the server using POST method
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
