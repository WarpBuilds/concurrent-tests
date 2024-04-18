function sum(a, b) {
    return a + b;
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

module.exports = { sum, sleep }
