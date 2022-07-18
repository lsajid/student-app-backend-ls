const {repeatNTimesWithSpace, capitalizeFirstLetter} = require("./stringUtils");

describe("take a string and a number and repeat string same number of times separated w/ spaces", () => {
    
    it("handles an empty sting", () => {
        expect(repeatNTimesWithSpace('', 0)).toBe('');
        expect(repeatNTimesWithSpace('', 5)).toBe('');
    });

    it("handles a string with 1 or more character", () => {
        expect(repeatNTimesWithSpace('a',1)).toBe('a');
        expect(repeatNTimesWithSpace('a', 3)).toBe('a a a');
        expect(repeatNTimesWithSpace('abc', 3)).toBe('abc abc abc');
    })

})

describe("take a name and capitalize the first letter within name", () => {

    it("handles an empty name", () => {
        expect(capitalizeFirstLetter('')).toBe('');
    })

    it("handles a string with 1 or more characters", () => {
        expect(capitalizeFirstLetter('jordan')).toBe('Jordan');
        expect(capitalizeFirstLetter('green')).toBe('Green');
    })
})