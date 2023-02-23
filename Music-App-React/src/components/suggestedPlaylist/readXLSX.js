
let allData

const readXlsxFile = require('read-excel-file/node')

// File path.
readXlsxFile('menu.xlsx').then((rows) => {
    allData = rows
    console.log(rows)
    // `rows` is an array of rows
    // each row being an array of cells.
})

export default allData;