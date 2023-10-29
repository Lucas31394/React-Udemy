const Challenge = () => {
    const randomNumbers = () => {
        return Math.floor(Math.random() * (10 - 1 + 1))
    }

    let firstNumber = randomNumbers();
    let secondNumber = randomNumbers();

    const sum = () => {
        console.log("Your first number is " + firstNumber)
        console.log("Your second number is " + secondNumber)
        console.log("The result of the sum is: " + (firstNumber + secondNumber))
    }

    return (
        <div>
            <h1>Your numbers are {firstNumber} and {secondNumber}</h1>
            <button onClick={sum}>Click here to log the sum of those numbers!</button>
        </div>
    )
}

export default Challenge