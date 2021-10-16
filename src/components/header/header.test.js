const header = require("./header")
// @ponicode
describe("showMessage", () => {
    let inst

    beforeEach(() => {
        inst = new header.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.showMessage("Ran out of iterations")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.showMessage("Error selecting from database")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.showMessage("<error_message>%s</error_message>")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.showMessage("\n\nThe first error message:\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.showMessage("Could not find a submission object for message from xqueue")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.showMessage(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
