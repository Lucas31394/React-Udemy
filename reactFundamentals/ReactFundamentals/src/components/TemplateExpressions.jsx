const TemplateExpressions = () => {
    const name = "Lucas"
    const data = {
        age: 29,
        job: "Software Developer"
    }

    return (
        <div>
            <h2>Hello {name}!</h2>
            <h2>Your age is {data.age} and you work as {data.job}</h2>
        </div>
    )
}

export default TemplateExpressions;