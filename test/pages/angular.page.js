import Base from './base.page'

const { element, by } = require('protractor')
class AngularPage extends Base {
  constructor () {
    super()
    this.todoListText = element(by.model('todoList.todoText'))
    this.valueBtn = element(by.css('[value="add"]'))
    this.todoList = element.all(by.repeater('todo in todoList.todos'))
    this.completedAmount = element.all(by.css('.done-true'))
  }

  async navigateToWebsite () {
    await super.open()
  }
}
export default new AngularPage()
