const secretVal = secrets.secret;
const inputVal = input.test;

module.exports = async function () {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(`secret: ${secretVal}\n\ninput:${inputVal}`);
            resolve(JSON.stringify({"input":inputVal, "secret":secretVal}));
        } catch (err) {
            reject(err);
        }
    });
}