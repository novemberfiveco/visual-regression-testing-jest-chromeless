/* eslint-env jest */
import { Chromeless } from 'chromeless'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import * as fs from 'fs'
import request from 'request'

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

const download = uri =>
  new Promise((resolve, reject) => {
    request(
      {
        url: uri,
        method: 'GET',
        encoding: null,
      },
      (error, response, body) => {
        if (!error && response.statusCode === 200) {
          resolve(body)
        } else {
          reject(error)
        }
      },
    )
  })

export const getFile = path => (path.startsWith('https://')
  ? download(path)
  : Promise.resolve(fs.readFileSync(path))
)

