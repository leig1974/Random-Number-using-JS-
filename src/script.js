let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
    let output = document.getElementById('output');
    let output2 = document.querySelector('output');

    output2.style.display = "block";
    let result;

    output.value = "Your random number is : ";
    result = Math.floor(Math.random() * 9000) + 1000;
    output.value += ` ${result}`;
}
)