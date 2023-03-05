let btnSignUp = document.getElementById("btnSignUp")

btnSignUp.addEventListener("click", () => {
    let userName = document.getElementById("user").value
    let email = document.getElementById("email").value
    let pwd = document.getElementById("pwd").value

    let obj = {
        userName: userName,
        email: email,
        pwd: pwd
    }

    let arr = new Array()

    let getLocalStorage = localStorage.getItem('data');
    if (getLocalStorage === null || getLocalStorage.length === undefined) {

        arr.push(JSON.stringify(obj));
        localStorage.setItem('data', `[` + arr + `]`);
    } else {
        let isValueName = validateName(userName);
        if (isValueName) {
            alert('Tên đã được nhập!!');
        } else {
            let datas = JSON.parse(getLocalStorage);

            for (let data of datas) {
                arr.push(JSON.stringify(data));
            }
            arr.push(JSON.stringify(obj));
            //console.log(arr);
            localStorage.setItem('data', `[` + arr + `]`);

        }
    }

    function validateName(name) {
        let getLocalStorage = localStorage.getItem('data');
        let datas = JSON.parse(getLocalStorage);
        for (let data of datas) {
            if (name === data.userName.trim()) {
                return true;
            }
        }
        return false;
    }
})

