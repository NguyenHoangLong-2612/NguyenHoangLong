
// Chức năng đăng ký
const formRegister = document.querySelector("#register-form")
const inputUsername = formRegister.querySelector("#username")
const inputEmail = formRegister.querySelector("#email")
const inputPassword = formRegister.querySelector("#password")

formRegister.addEventListener("submit", handleRegisterSubmit);
function handleRegisterSubmit (event) {
    // Chặn sự kiện mặc định
    event.preventDefault(); 

    const username = inputUsername.value
    const email = inputEmail.value
    const password = inputPassword.value

    if (username.length < 10) {
        alert("user lơn hơn 10 kí tự")
        return;
    }

    if (email.length < 10) {
        alert("Lối email rồi thằng em")
        return;
    }
    if (password.length < 10) {
        alert("Lối password rồi thằng em")
        return
    }

    const user = {
        username: username, 
        email: email, 
        password: password
    }

    // Lấy về danh sách người đăng ký
    let listUser = JSON.parse(localStorage.getItem("list-user"));

    if (listUser == null) {
        console.log("list-user chưa tồn tại");
        // Tạo ra danh sách user trong website
        listUser = [user]; 
    } else {
        console.log("list-user đã tồn tại");
        // Thêm user mới đăng ký vào trong local-storage
        listUser.push(user); 
    }

    // Lưu thông tin vào local-storage
    localStorage.setItem("list-user", JSON.stringify(listUser)); 
    formRegister.reset();
}