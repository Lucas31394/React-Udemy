const TemplateExpressions = () => {
    const name = "Lucas"
    const data = {
        age: 29,
        job: "Developer"
    }

    return (
        <div>
            <h2>Olá {name}, tudo bem?</h2>
            <h2>Sua idade é {data.age} e você atua como {data.job}</h2>
        </div>
    )
}

export default TemplateExpressions;