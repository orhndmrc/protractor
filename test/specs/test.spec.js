import AngularPage from '../pages/angular.page'
const { by } = require('protractor')

describe('angularjs homepage todo list', function () {
  beforeEach(async () => {
    await AngularPage.navigateToWebsite()
  })
  it('should add a todo', async function () {
    await AngularPage.todoListText.sendKeys('write first protractor test')
    await AngularPage.valueBtn.click()
    const todoList = AngularPage.todoList
    expect(await todoList.count()).toEqual(3)
    expect(await todoList.get(2).getText()).toEqual('write first protractor test')

    // You wrote your first test, cross it off the list
    await todoList.get(2).element(by.css('input')).click()
    const completedAmount = AngularPage.completedAmount
    expect(await completedAmount.count()).toEqual(2)
  })

  it('should add a todo', async function () {
    const x = 5
    expect(x + 4).toBe(9)
  })
})
