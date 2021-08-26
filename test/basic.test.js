const assert = require("assert");
const { MyPromise } = require("../src/adapter")

async function test1() {
  const p = new MyPromise(res => res(7))
  const result = await p
  assert.equal(result, 7)
}

async function test2() {
  const p = new MyPromise(res => res(7))
  const p2 = p.then(v => v * 2)
  const result = await p2
  assert.equal(result, 14)
}

async function test3() {
  const errorMsg = "this is an error message"
  const p = new MyPromise((resolve, reject) => reject(errorMsg))
  try {
    await p
  } catch (err) {
    assert.equal(err, errorMsg)
  }
}

async function test4() {
  let pResolve
  const p1 = new MyPromise(res => { pResolve = res })
  const p2 = p1.then(v => v * 2)
  const p3 = p1.then(v => v * 3)

  pResolve(13)
  const p1Result = await p1
  const p2Result = await p2
  const p3Result = await p3
  assert.equal(p1Result, 13)
  assert.equal(p2Result, 26)
  assert.equal(p3Result, 39)
}

async function test5() {
  let pReject
  const p1 = new MyPromise((res, rej) => { pReject = rej })
  const p2 = p1.then(null, () => "I recovered!")
  const p3 = p1.then(null, () => { throw "another error!" })

  pReject("something went wrong")

  try {
    await p1
  } catch (err) {
    assert.equal(err, "something went wrong")
  }

  const p2Result = await p2
  assert.equal(p2Result, "I recovered!")

  try {
    await p3
  } catch (err) {
    assert.equal(err, "another error!")
  }
}

(async function runTests() {
  const tests = [test1, test2, test3, test4, test5]
  console.log(`running ${tests.length} basic tests...\n`)

  for (let i = 1; i <= tests.length; i++) {
    await tests[i - 1]()
    console.log(`passed test${i}`)
  }

  console.log("\n=============>> All basic tests were successful!!!\n\n\n\n")
})()




