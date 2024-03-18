import fs from 'fs'
import { utilService } from './services/util.service.js'

downloadCountryFlags()

function downloadCountryFlags() {
    const countries = getCountries()
    console.log('Countries:', countries.map(c => c.name))
    downloadFlags(countries)
        .then(() => {
            console.log('Your flags are ready')
        })
}

function getCountries() {
    let countries = utilService.readJsonFile('data/countries.json')
    countries.sort((countryA, countryB) => countryB.population - countryA.population)
    const topCountries = countries.slice(0, 5)
    return topCountries
}

function downloadFlags(countries) {
    const prms = countries.map(country => {
        const downloadDir = 'flags'
        if (!fs.existsSync(downloadDir)) {
            fs.mkdirSync(downloadDir)
        }
        return utilService.download(
            country.flags.svg,
            `flags/${country.name.common}.svg`
        )
    })
    return Promise.all(prms)
}