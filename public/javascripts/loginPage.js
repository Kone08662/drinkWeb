document.getElementById('loginForm').addEventListener('submit', (event) => {
    //阻擋表單
    event.preventDefault();

    // 錯誤訊息
    const errMsgEmail = document.querySelector('.errMsgEmail');
    const errMsgPassword = document.querySelector('.errMsgPassword');

    //取得元素
    const form = event.target;
    const email = form.querySelector('[name="email"]').value;
    const password = form.querySelector('[name="password"]').value;

    // 清空錯誤信息
    errMsgEmail.textContent = '';
    errMsgPassword.textContent = '';

    // 驗證 email 和 password 格式
    if (!checkEmail(email)) {

        // 更新錯誤信息
        errMsgEmail.textContent = '請輸入正確的E-mail格式';

    } else if (!checkPassword(password)) {

        // 更新錯誤信息
        errMsgPassword.textContent = '密碼應包含4~12位英數字';

    } else {

        form.submit();//送出表單

    }
});



const checkEmail = email => {//檢查信箱
    // 檢查是否為空
    if (!email.trim()) {
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const checkPassword = password => {//檢查密碼
    // 檢查是否為空
    if (!password.trim()) {
        return false;
    }

    const passwordRegex = /^[a-zA-Z0-9]{4,12}$/;
    return passwordRegex.test(password);
};


