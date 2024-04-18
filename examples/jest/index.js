const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function slowSum(a, b) {
    await sleep(500);

    return a + b;
}


module.exports = { slowSum }
