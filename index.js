const fs = require('fs')

fs.readFile('cit-Patents_10_32_1772975.txt','utf-8', (err,data) => {
  const newData = 'col1,col2\n' + data
  fs.writeFile('part1.txt', newData, 'utf-8', (err) => {
    if (err) throw err
  })
})

fs.readFile('cit-Patents_deg.csv','utf-8', (err,data) => {
  const newData = 'col1,col2\n' + data
  fs.writeFile('part2.txt', newData, 'utf-8', (err) => {
    if (err) throw err
  })
})