const test = require("ava")
const assert = require("assert")
const { MyPromise } = require("../src/adapter")

test("MyPromise resolves with 7", async t => {
  const p = new MyPromise(res => res(7))
  const result = await p

  t.is(result, 7);
});

test("MyPromise's `then` returns a MyPromise that resolves to 14", async t => {
  const p = new MyPromise(res => res(7))
  const p2 = p.then(v => v * 2)
  const result = await p2

  t.is(result, 14);
});

test("MyPromise rejects with the given error message", async t => {
  const expectedErrorMsg = "this is the expected error message"
  const p = new MyPromise((resolve, reject) => reject(new Error(expectedErrorMsg)))

  const error = await t.throwsAsync(p);

  t.is(error.message, expectedErrorMsg);
});

test("MyPromise's `then` registers multiple success handlers", async t => {
  let pResolve
  const p1 = new MyPromise(res => { pResolve = res })
  const p2 = p1.then(v => v * 2)
  const p3 = p1.then(v => v * 3)

  pResolve(13)
  const p1Result = await p1
  const p2Result = await p2
  const p3Result = await p3

  t.is(p1Result, 13);
  t.is(p2Result, 26);
  t.is(p3Result, 39);
});

test("MyPromise's onReject handlers can resolve and reject", async t => {
  let pReject
  const p1 = new MyPromise((res, rej) => { pReject = rej })
  const p2 = p1.then(null, () => "I recovered!")
  const p3 = p1.then(null, () => { throw new Error("another error!") })

  pReject("something went wrong")

  const p2Result = await p2
  t.is(p2Result, "I recovered!")

  const error = await t.throwsAsync(p3);
  t.is(error.message, "another error!");
});

