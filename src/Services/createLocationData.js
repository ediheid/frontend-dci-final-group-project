import axios from 'axios';

export const createLocation = async (hookData, setHookData, event) => {
    let formData = new FormData();

    // TODO delete?
    // const locationData = {
    //     ...hookData
    // }

    formData.append("locationData", JSON.stringify(hookData));
    formData.append("locationImage", hookData.locationImage);

    try {
        const response = await axios({
            method: "post",
            url: "http://localhost:3001/location",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response)
    } catch (error) {
        console.log(error)
    }

    //     const settings = {
    //         method: "POST",
    //         body: formData,
    //         headers: {
    //             "Content-Type": "multipart/form-data"
    //         }
    //     }

    //    fetch("http://localhost:3001/location", settings) 
    //    .then( response => {
    //        console.log(response)
    //        if (response.ok) {
    //            return response.json()
    //        } else {
    //             switch(response.status) {
    //                 case 400: 
    //                     return response.json().then(err => {
    //                         throw new Error(err.message)
    //                     })
    //                 default: 
    //                     throw new Error("Internal server Error!")
    //             }   
    //        }
    //    })
    //    .then( data => {
    //        console.log(data)

    //     setHookData({
    //         propertyType: [],
    //         spaceType: "",
    //         address: "",
    //         maxCapacity: 0,
    //         amenities: [],
    //         essentialAmenities: [],
    //         title: "",
    //         description: "",
    //         regionalDescription: "",
    //         houseRules: "",
    //         price: 0,
    //         cancellation: "",
    //         created: data.created}
    //         )

    //         console.log("EVENT", event)
    //         // event.reset();
    //        console.log("created location?", hookData)
    //    })
    //    .catch( err => {
    //        console.log(err)
    //    })
}