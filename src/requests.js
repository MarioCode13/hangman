const getPuzzle = async (wordCount = 1) => {
    const response = await fetch(
        `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
    )
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch country')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=3da24c0438d0eb')

    if (response.status === 200) {
        const data = await response.json() //parse
        return data
    } else {
        throw new Error('Unable to retrieve location from IP')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

export { getPuzzle as default }
