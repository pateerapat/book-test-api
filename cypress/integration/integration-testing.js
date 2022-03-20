describe('Backend Integration Testing', () => {
    it('should successfully registered account', () => {
        cy.request('POST', 'https://read-like-a-book-api.herokuapp.com/user/register', {
            id: "integration-testing",
            password: "passforintegrate",
            name: "Integration",
            lastname: "Testing",
            user_address: "Working with Integration Testing",
            email: "randomly_generated_002@gmail.com",
            user_point: "0",
            role: "user",
        }).then((response) => {
            expect(response.body.success).to.equal(true);
        });
    });
    it('should successfully logged in', () => {
        cy.request('POST', 'https://read-like-a-book-api.herokuapp.com/user/login', {
            id: "integration-testing",
            password: "passforintegrate",
        }).then((response) => {
            expect(response.body.success).to.equal(true);
        });
    });
    it('should unregistered testing user', () => {
        cy.request('POST', 'https://read-like-a-book-api.herokuapp.com/user/unregister', {
            id: "integration-testing",
        }).then((response) => {
            expect(response.body.success).to.equal(true);
        });
    });
    it('should response all books', () => {
        cy.request('GET', 'https://read-like-a-book-api.herokuapp.com/book/get/all')
        .then((response) => {
            expect(response.body.success).to.equal(true);
        });
    });
    it('should successfully inserted book', () => {
        cy.request('POST', 'https://read-like-a-book-api.herokuapp.com/book/insert', {
            id: "integration-testing",
            name: "Integration Testing",
            price: 100,
            publisher: "Integration Testing",
            story: "Integration Testing",
            synopsis: "Integration Testing",
            cover_img: "Integration Testing",
            author: ["Integrator"],
        }).then((response) => {
            expect(response.body.success).to.equal(true);
        });
    });
    it('should successfully deleted book', () => {
        cy.request('POST', 'https://read-like-a-book-api.herokuapp.com/book/delete', {
            id: "integration-testing",
        }).then((response) => {
            expect(response.body.success).to.equal(true);
        });
    });
    it('should response all rewards', () => {
        cy.request('GET', 'https://read-like-a-book-api.herokuapp.com/reward/get/all')
        .then((response) => {
            expect(response.body.success).to.equal(true);
        });
    });
    it('should successfully inserted rewards', () => {
        cy.request('POST', 'https://read-like-a-book-api.herokuapp.com/reward/insert', {
            id: "integration-testing",
            name: "Integration Testing",
            price: "100",
            cover_img: "integration-testing",
            in_stock: 1,
        }).then((response) => {
            expect(response.body.success).to.equal(true);
        });
    });
    it('should successfully deleted rewards', () => {
        cy.request('POST', 'https://read-like-a-book-api.herokuapp.com/reward/delete', {
            id: "integration-testing",
        }).then((response) => {
            expect(response.body.success).to.equal(true);
        });
    });
});
