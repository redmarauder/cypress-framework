Cypress.Commands.add('iframe', (iframeSelector, elSelector) => {
    return cy
        .get(`${iframeSelector || ''}`, { timeout: 10000 })
        .should($iframe => {
            expect($iframe.contents().find(elSelector || 'body')).to.exist
        })
        .then($iframe => {
            return cy.wrap($iframe.contents().find('body'))
        })
})

Cypress.Commands.add('getLastEmailAsJson', email => {
    function requestEmail() {
        return cy
            .request({
                method: 'GET',
                url: 'https://preview.putsbox.com/p/providenci_lowe/last.json',
                headers: {
                    'content-type': 'application/json',
                },
                qs: {
                    email,
                },
                json: true,
            })
            .then(({ body }) => {
                if (body) {
                    return body;
                }
                // If body is null, it means that no email was fetched for this address.
                // We call requestEmail recursively until an email is fetched.
                // We also wait for 300ms between each call to avoid spamming our server with requests
                cy.wait(300);

                return requestEmail();
            });
    }
    return requestEmail();
});
