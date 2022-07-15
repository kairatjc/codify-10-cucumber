class AddRemovePage {
  async open() {
    await browser.url("/add_remove_elements/");
  }

  async clickAddButton() {
    await browser.$(".example > button:nth-child(1)").click();
  }

  async checkButtonAppeared() {
    const deleteButton = await browser.$(".added-manually");
    expect(deleteButton).toBeDisplayed();
  }
}

module.exports = new AddRemovePage();
