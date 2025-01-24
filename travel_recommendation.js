const jsonFile = './travel_recommendation.json'
fetch(jsonFile)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })