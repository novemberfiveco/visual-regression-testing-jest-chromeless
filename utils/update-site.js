const fs = require('fs')

fs.rename('./dist', './docs', err => {
  if (err) throw err
})
