import { browser } from 'protractor'

export default class Base {
  constructor () {
    this.baseUrl = 'https://angularjs.org'
    this.title = 'AngularJS — Superheroic JavaScript MVW Framework'
  }

  async open () {
    await browser.get(this.baseUrl)
    await browser.sleep(2000)
    expect(await browser.getTitle()).toBe(this.title)
  }
}
