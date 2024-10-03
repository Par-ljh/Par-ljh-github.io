function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // 这里可以添加实际的登录验证逻辑，比如发送请求到服务器进行验证
    if (username === 'admin' && password === 'adminpassword') {
        alert('true');
        window.location.href = 'https://space.bilibili.com/3546587571686054';
    } else {
        alert('用户名或密码错误！');
    }
});

document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const regUsername = document.getElementById('reg-username').value;
    const regPassword = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    // 这里可以添加实际的注册逻辑，比如发送请求到服务器进行注册
    if (regPassword!== confirmPassword) {
        alert('两次输入的密码不一致！');
    } else {
        alert('注册成功！你可以切换到登录页面登录。');
    }
});

// 默认显示登录页面
openTab(event, 'login');