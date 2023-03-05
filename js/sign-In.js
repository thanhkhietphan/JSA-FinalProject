let btnSignIn = document.getElementById("btnSignIn")

btnSignIn.addEventListener("click", () => {
    let email = document.getElementById("email-sign").value
    let pwd = document.getElementById("pwd-sign").value

    let getLocalStorage = localStorage.getItem('data');
    if (getLocalStorage === null || getLocalStorage.length === undefined) {
        alert("Tài khoản không tồn tại")
    } else {
        let isValueEmail = validateEmail(email);
        let isValuePwd = validatePwd(pwd)
        if (isValueEmail && isValuePwd) {
            alert('Đăng nhập thành công')
            setTimeout(window.location = "../index.html", 1000)
        } else {
            alert("Tài khoản không tồn tại")
        }
    }

    function validateEmail(email) {
        let getLocalStorage = localStorage.getItem('data');
        let datas = JSON.parse(getLocalStorage);
        for (let data of datas) {
            if (email === data.email.trim()) {
                return true;
            }
        }
        return false;
    }

    function validatePwd(pwd) {
        let getLocalStorage = localStorage.getItem('data');
        let datas = JSON.parse(getLocalStorage);
        for (let data of datas) {
            if (pwd === data.pwd.trim()) {
                return true;
            }
        }
        return false;
    }
})