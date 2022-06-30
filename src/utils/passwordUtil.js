function generatePassword(options) {

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";

    let choices = "";

    if (options.uppercase) {
        choices += uppercase;
    }
    if (options.lowercase) {
        choices += lowercase;
    }
    if (options.numbers) {
        choices += numbers;
    }
    if (options.symbols) {
        choices += symbols;
    }
    let password = "";
    for (let i = 0; i < options.length; i++) {
        password += choices[Math.floor(Math.random() * choices.length)];
    }

    console.log(options.length);
    return password;
}

export default generatePassword;

