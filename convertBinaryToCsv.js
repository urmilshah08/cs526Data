const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.readFileSync('cit-Patents_deg_32_bit_ints.bin', { encoding: 'utf8' }).p