import ms from 'ms'
import fs from 'fs'

aboutTime()

function aboutTime() {
    fs.readFile('data/timestamps.txt', 'utf8', (err, contents) => {
        if (err) return console.log("can't read file");
        const timestamps = contents.split('\n')
        timestamps.forEach(timestamp => console.log((ms(+timestamp, { long: true }))))
    })
}