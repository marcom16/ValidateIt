const expect = require('chai').expect
const ValidateIt = require('../lib/ValidateIt').default

describe('#ValidateIt', function () {
  it('Works correctly', function () {
    const dataImg = {size: 150000, type: 'image/png'}
    const dataDoc = {size: 150000, type: 'application/pdf'}

    const arr = [true, true, true, true, true, true, true, true]
    const arrStr = arr.toString()
    const result = [
      ValidateIt("name", "Marco"),
      ValidateIt("fullName", "Marco D'Montilla"),
      ValidateIt("email", "marco.jr1695@gmail.com"),
      ValidateIt("password", "TestPass1234."),
      ValidateIt("phone", "+1 404 555 1234"),
      ValidateIt("zipCode", "30076"),
      ValidateIt("image", dataImg),
      ValidateIt("doc", dataDoc)
    ]
    const resultStr = result.toString()
    expect(resultStr).to.equal(arrStr)
  })
})