class SummaryPage {

    clickEditButton() {
        cy.get('button[data-action="click->confirm#editAction"]').click();
    }

    clickConfirmButton() {
        cy.get('button[data-action="confirm#confirmAction"]').click();
    }
}
export default SummaryPage