import fs from 'fs'

sumFromFile('data/nums.txt')
    .then(sum => console.log('sum:', sum))
    .catch(err => console.log('Cannot sum', err))

function sumFromFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, content) => {
            if (err) return reject(err)
            const lines = content.split('\n')
            const sum = lines.reduce((sum, num) => sum + parseInt(num), 0)
            resolve(sum)
        })
    })
}