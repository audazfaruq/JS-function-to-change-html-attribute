function user() {
    document.getElementById('user').setAttribute('class', 'admin');
    document.getElementById("h1").innerHTML = "Admin Login";
    document.getElementById("btn").innerHTML = "User";
}

function admin() {
    document.getElementById('user').setAttribute('class', 'user');
    document.getElementById("h1").innerHTML = "User Login";
    document.getElementById("btn").innerHTML = "Admin";
}