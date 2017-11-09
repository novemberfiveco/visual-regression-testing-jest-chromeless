/* eslint-env jest */
import { setup, teardown, getFile } from '../jest/test.utils'

let chromeless = null

beforeAll(() => { chromeless = setup() })
afterAll(async () => { await teardown(chromeless) })

test('+++ home renders correctly (visual)', async () => {
  const screenshotPath = await chromeless.goto(global.config.baseUrl).wait('.content').screenshot()
  const screenshot = await getFile(screenshotPath)
  const customDiffConfig = {
    composeLeftToRight: true,
  }
  expect(screenshot).toMatchImageSnapshot({ customDiffConfig })
})

test('+++ home renders correctly', async () => {
  const html = await chromeless
    .goto(global.config.baseUrl)
    .wait('.content')
    .evaluate(() => document.querySelector('.content').innerHTML)
  expect(html).toMatchSnapshot()
})
