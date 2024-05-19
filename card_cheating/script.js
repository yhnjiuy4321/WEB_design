function togglePassword() {
    const creditCardNum = document.getElementById('creditCardNum');
    const eyeIcon = document.getElementById('eyeIcon');

    if (creditCardNum.type === 'password') {
        creditCardNum.type = 'text';
        eyeIcon.src = "imgs/eye-show.svg";
    } else {
        creditCardNum.type = 'password';
        eyeIcon.src = "imgs/eye-hide.svg";
    }
}
