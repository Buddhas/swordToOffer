
function createAsyncWorker(capacity) {
    let executorFn = []
    const executor = (fn) => {
        executorFn.push(fn)
        return new Promise((resolve, reject) => {
            const getRunPromise = () => executorFn.slice(0, capacity).map((fn, index) => {
                return fn().then((res) => {
                    return { index, result: res }
                }, (res) => {
                    return { index, result: res }
                })
            })
            function runFun(resolve, reject) {
                Promise.race(getRunPromise()).then((res) => {
                    executorFn.splice(res.index, 1)
                    new Promise((newResolve, newReject) => {
                        runFun(newResolve, newReject)
                    })
                    resolve(res.result)
                }, ((res) => {
                    executorFn.splice(res.index, 1)
                    new Promise((newResolve, newReject) => {
                        runFun(newResolve, newReject)
                    })
                    reject(res.result)
                }))
            }
            executorFn.length >= capacity ? null : runFun(resolve, reject)
        })
    }
    return executor
}
function testCreateAsyncWorker(createParallelTaskExecutorImpl) {
    const assert = require('assert');
    const executor = createParallelTaskExecutorImpl(2);
    const runTask = (id, delay, expectedDelay, fail) => {
        const start = Date.now();
        const check = (rejected) => (v) => {
            assert.strictEqual(rejected, fail, `promise status of task ${id} should be ${fail}, received ${rejected}`);
            const realDelay = Date.now() - start;
            assert.strictEqual(
                Math.round(realDelay / 100) * 100,
                expectedDelay,
                `delay of task ${id} should be ${expectedDelay}, received ${realDelay}`,
            );
            assert.strictEqual(
                v,
                delay,
                `${rejected ? 'error of rejected' : 'result of resolved'} task ${id} should be ${delay}, received ${v}`,
            );
        };
        executor(
            () =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (fail) {
                            reject(delay);
                        } else {
                            resolve(delay);
                        }
                        console.log(delay)
                    }, delay);
                }),
        )
            .then(check(false), check(true))
            .catch((e) => {
                console.error(e);
            });
    };
    runTask(1, 100, 100, false);
    runTask(2, 200, 200, true);
    runTask(3, 300, 400, false);
    runTask(4, 400, 600, true);
    runTask(5, 100, 500, false);
    runTask(6, 200, 700, true);
    runTask(7, 100, 700, false);
    runTask(8, 200, 900, false);
}

try {
    testCreateAsyncWorker(createAsyncWorker);
} catch (error) {
    console.error(error);
}