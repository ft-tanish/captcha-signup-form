import { useState, useEffect } from 'react'

const useCaptcha = () => {

    const [captcha, setCaptcha] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");
    const [captchaValid, setCaptchaValid] = useState(false);

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const operators = ["+", "-", "*", "/"];
        const operator = operators[Math.floor(Math.random() * operators.length)];
        let num1, num2, result;
        switch (operator) {
            case "+":
                num1 = Math.floor(Math.random() * 10);
                num2 = Math.floor(Math.random() * 10);
                result = num1 + num2;
                setCaptcha(`${num1} + ${num2}`);
                break;
            case "-":
                num1 = Math.floor(Math.random() * 10);
                num2 = Math.floor(Math.random() * 10);
                result = num1 - num2;
                setCaptcha(`${num1} - ${num2}`);
                break;
            case "*":
                num1 = Math.floor(Math.random() * 5) + 1;
                num2 = Math.floor(Math.random() * 5) + 1;
                result = num1 * num2;
                setCaptcha(`${num1} * ${num2}`);
                break;
            case "/":
                result = Math.floor(Math.random() * 5) + 1;
                num2 = Math.floor(Math.random() * 5) + 1;
                num1 = result * num2;
                setCaptcha(`${num1} / ${num2}`);
                break;
            default:
                result = 0;
                break;
        }
        return result;
    };

    const handleCaptchaInput = (event) => {
        setCaptchaInput(event.target.value);
        if (eval(captcha) === parseInt(event.target.value)) {
            setCaptchaValid(true);
        } else {
            setCaptchaValid(false);
        }
    };

    return [captcha, setCaptcha, captchaInput, setCaptchaInput, captchaValid, setCaptchaValid, handleCaptchaInput, generateCaptcha];
}

export default useCaptcha