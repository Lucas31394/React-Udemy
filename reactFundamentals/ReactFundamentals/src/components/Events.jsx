const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Event triggered.")
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click here!</button>
            </div>
        </div>
    )
}

export default Events;