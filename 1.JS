let a = [() =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) {
                reject(delay);
            } else {
                resolve(delay);
            }
        }, delay);
    }), () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) {
                reject(delay);
            } else {
                resolve(delay);
            }
        }, delay);
    })]
console.log(a)