const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function slowSum(a, b) {
    await sleep(5000);

    return a + b;
}


module.exports = { slowSum }
