
export const createLocation = async (hookData) => {

    let formData=new FormData();

    const locationData = {
        ...hookData
    }

    console.log(formData)
    console.log(locationData.locationImage)
    formData.append("locationImage",locationData.locationImage);

    console.log(formData)

    formData.append("locationData",JSON.stringify(locationData));



    console.log(formData)
    

    const settings = {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }

    // const settings = {
    //     method: "POST",
    //     body: JSON.stringify(locationData),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }

   fetch("http://localhost:3001/location", settings) 
   .then( response => {
       console.log(response)
       if (response.ok) {
           return response
       } else {
            switch(response.status) {
                case 400: 
                    return response.json().then(err => {
                        throw new Error(err.message)
                    })
                default: 
                    throw new Error("Internal server Error!")
            }   
       }
   })
   .then( data => {
       console.log(data)
   })
   .catch( err => {
       console.log(err)
   })
}