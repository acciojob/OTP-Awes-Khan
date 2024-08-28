// document.addEventListener('DOMContentLoaded', () => {
//     const inputs = document.querySelectorAll('.code');

//     inputs.forEach((input, index) => {
//         input.addEventListener('focus', () => {
//             input.classList.add('focused');
//         });

//         input.addEventListener('blur', () => {
//             input.classList.remove('focused');
//         });

//         input.addEventListener('input', (e) => {
//             if (input.value.length === 1 && index < inputs.length - 1) {
//                 inputs[index + 1].focus();
//             }
//         });

//         input.addEventListener('keydown', (e) => {
//             if (e.key === 'Backspace' && input.value.length === 0 && index > 0) {
//                 inputs[index - 1].focus();
//             }
//         });
//     });
// });



document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && index > 0) {
                inputs[index - 1].focus();
            }
        });

        input.addEventListener('focus', (e) => {
            e.target.select(); // Highlight input content when focused
        });
    });

    // Move focus to the first input when page loads
    inputs[0].focus();
});

