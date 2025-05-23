//Chức năng đăng nhập
const loginForm = document.querySelector("#login-form")
const inputEmail = loginForm.querySelector("#email")
const inputPassword = loginForm.querySelector("#password")

loginForm.addEventListener("submit", checkEmailAndPassword)
function checkEmailAndPassword(event) {
    event.preventDefault(); 
    // 1. Lấy danh sách user đã đăng ký
    let listUser = JSON.parse(localStorage.getItem("list-user"));
    
    if (listUser == null) {
        alert("Người dùng không tồn tại trong hệ thống !!!")
    }

    // 2. Nếu có danh sách user
    let isRegister = false
    for (let index = 0; index < listUser.length; index += 1) {
        if (listUser[index].email === inputEmail.value && 
            listUser[index].password === inputPassword.value
        ) {
            isRegister = true
            // Ngừng vòng lặp ngay lập tức
            break; 
        }
    }

    if (isRegister) {
        // nếu isRegister là true
        location.href = "index.html"
    } else {
        // nếu isRegister là false
        alert("Email or Password không đúng !!!")
    }
}