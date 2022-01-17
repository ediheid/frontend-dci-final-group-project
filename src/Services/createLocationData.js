
export const createLocation = async (hookData, setHookData, event) => {
    const locationData = {
        ...hookData
    }

    const settings = {
        method: "POST",
        body: JSON.stringify(locationData),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch("http://localhost:3001/location", settings)
        .then(response => {
            console.log(response)
            if (response.ok) {
                return response.json()
            } else {
                switch (response.status) {
                    case 400:
                        return response.json().then(err => {
                            throw new Error(err.message)
                        })
                    default:
                        throw new Error("Internal server Error!")
                }
            }
        })
        .then(data => {
            console.log(data)

            setHookData({
                propertyType: [],
                spaceType: "",
                address: "",
                maxCapacity: 0,
                amenities: [],
                essentialAmenities: [],
                title: "",
                description: "",
                regionalDescription: "",
                houseRules: "",
                price: 0,
                cancellation: "",
                created: data.created
            }
            )

            console.log("EVENT", event)
            // event.reset();
            console.log("created location?", hookData)
        })
        .catch(err => {
            console.log(err)
        })
}