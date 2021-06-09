const expect = require("chai").expect
const LIS = require("./LIS")
const MCS = require("./MCS")
const LCS = require("./LCS")
const lookup = require("./dict-lookup")

describe('LIS()', () => {
    it('should return the length of the longest increasing subsequence', () => {
        let array = [5, 7, 4, -3, 9, 1, 10, 4, 5, 8, 9, 3]
        let lis = LIS(array)
        expect(lis).to.be.equal(6)
    })
})

describe('MCS()', () => {
    it('should return the sum of the maximum contiguous subsequence', () => {
        let S = [5, 15, -30, 10, -5, 40, 10, -20]
        let mcs = MCS(S)
        expect(mcs).to.be.equal(55)
    })
})

describe('LCS()', () => {
    it('should return the length of the longest common subsequence', () => {
        let X = ['B', 'C', 'D', 'B', 'C', 'D', 'A']
        let Y = ['A', 'B', 'E', 'C', 'B', 'A', 'B']
        let lcs = LCS(X, Y)
        expect(lcs).to.be.equal(4)
    })
})

describe("dictionary lookup", () => {
    it('should return true if the string can be reconstructed', function () {
        const str = "Pebbling checkerboard. We are given checkerboard which has rows and columns, and has integer written each square."
        const withSpaces = /[^A-Za-z ]/gi
        const withoutSpaces = /[^A-Za-z]/gi
        const modified = str.replace(withoutSpaces, '').toLowerCase()
        const dict = new Set(str.replace(withSpaces, '').toLowerCase().split(' '))

        let result = lookup(modified, dict)
        expect(result[0]).to.be.true
    });
})