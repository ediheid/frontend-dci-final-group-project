
export const createLocation = async (hookData) => {


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
                return response
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
        })
        .catch(err => {
            console.log(err)
        })
}