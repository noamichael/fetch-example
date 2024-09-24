
// Define the main function. This is where the code execution will start
// It's async because we're going to use the await keyword to wait for the response
async function main() {
    const myStudyId = 1

    // Get the study by query paramter
    const response = await fetch(`http://localhost:8080/studies?studyId=${myStudyId}`)
    const studyFoundByQueryParam = await response.json()

    console.log(`Study found by query parameter: ${JSON.stringify(studyFoundByQueryParam)}`)

    // Get the study by route parameter
    const responseByParam = await fetch(`http://localhost:8080/studies/${myStudyId}`)
    const studyFoundByRouteParam = await responseByParam.json()

    console.log(`Study found by route parameter: ${JSON.stringify(studyFoundByRouteParam)}`)
}

main()