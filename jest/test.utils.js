/* eslint-env jest */
import { Chromeless } from 'chromeless'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import * as fs from 'fs'

export const setup = () => {
  jest.setTimeout(10000)
  expect.extend({ toMatchImageSnapshot })
  return new Chromeless(global.config.chromeless)
}

export const teardown = async chromeless => {
  try {
    await chromeless.end()
  } catch (err) {
    console.log(err)
  }
}

export const getFile = path => fs.readFileSync(path)
