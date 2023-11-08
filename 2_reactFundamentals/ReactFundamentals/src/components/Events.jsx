const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Event triggered.")
    };

    const rederingSomething = (x) => {
        if(x) {
            return <h1>Rendering this.</h1>
        }
        else {
            return <h1>Rendering this too.</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click here!</button>
                <button onClick={() => console.log("Clicked!")}>Click here too!</button>
            </div>
            {rederingSomething(true)}
            {rederingSomething(false)}
        </div>
    )
}

export default Events;