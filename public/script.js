// Add JavaScript code to hide the error message after 3 seconds
setTimeout(function () {
    var errorMessageElement = document.getElementById('errorMessage');
    if (errorMessageElement) {
        errorMessageElement.style.display = 'none';
    }
}, 3000); // 3000 milliseconds = 3 seconds
setTimeout(function () {
    var logoutMessageElement = document.getElementById('logoutMessage');
    if (logoutMessageElement) {
        logoutMessageElement.style.display = 'none';
    }
}, 3000);