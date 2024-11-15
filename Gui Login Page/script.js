document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // You can add your login logic here, like sending a request to a server to authenticate the user
    console.log('Username:', username);
    console.log('Password:', password);
    // For demonstration purposes, let's just alert the values
    alert('Username: ' + username + '\nPassword: ' + password);
  });
  