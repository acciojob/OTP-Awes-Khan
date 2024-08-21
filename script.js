//your JS code here. If required.
document.querySelectorAll('.code').forEach((input) => {
    input.addEventListener('focus', function() {
        this.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        this.classList.remove('focused');
    });
});
