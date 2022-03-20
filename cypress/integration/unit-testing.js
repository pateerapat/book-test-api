const { validateEmail,
    validatePassword,
    validateUser
} = require("../../functions/functions");

describe('Backend Unit Testing', () => {
    it('should successfully validated Email', () => {
        expect(validateEmail("randomly_generated_002@gmail.com")).to.equal(true);
    });
    it('should successfully validated Email', () => {
        expect(validateEmail("randomly_generated_002@hotmail.com")).to.equal(true);
    });
    it('should successfully validated Email', () => {
        expect(validateEmail("randomly_generated_002@outlook.com")).to.equal(true);
    });
    it('should failed to validated Email', () => {
        expect(validateEmail("randomly_generated_002outlook.com")).to.equal(false);
    });
    it('should failed to validated Email', () => {
        expect(validateEmail("randomly_generated_002@outlook")).to.equal(false);
    });
    it('should failed to validated Email', () => {
        expect(validateEmail("@outlook.com")).to.equal(false);
    });
    it('should failed to validated Email', () => {
        expect(validateEmail("randomly_generated")).to.equal(false);
    });
    it('should successfully validated Password', () => {
        expect(validatePassword("randomly_generated_002")).to.equal(true);
    });
    it('should successfully validated Password', () => {
        expect(validatePassword("randomly_g")).to.equal(true);
    });
    it('should failed to validated Password', () => {
        expect(validatePassword("random")).to.equal(false);
    });
    it('should failed to validated Password', () => {
        expect(validatePassword("rand")).to.equal(false);
    });
    it('should successfully validated User', () => {
        expect(validateUser("randomly_generated_002")).to.equal(true);
    });
    it('should successfully validated User', () => {
        expect(validateUser("randomly_g")).to.equal(true);
    });
    it('should failed to validated User', () => {
        expect(validateUser("r")).to.equal(false);
    });
    it('should failed to validated User', () => {
        expect(validateUser("ran")).to.equal(false);
    });
});
