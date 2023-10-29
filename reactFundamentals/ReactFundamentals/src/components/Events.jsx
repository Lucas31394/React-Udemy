const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Event triggered.")
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click here!</button>
                <button onClick={() => console.log("Clicked!")}>Click here too!</button>
            </div>
        </div>
    )
}

export default Events;