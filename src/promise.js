const wait = () => new Promise(function (res, rej) {
    setTimeout(() => {
        console.log('finished ' + (new Date()).getUTCSeconds())
        res()
    }, 1000)
});

let cancel = () => {}
//
// loop3:
// for (let i = 0; i < 50,i++){
//     break loop3;
// }

myConditionalBlock: {
    break myConditionalBlock

    setTimeout(()=>{break myConditionalBlock})
    const m = Array(12).fill(undefined)
    m.reduce((acc, cur) => {
        return acc.then(() => {
            return wait();
        })
    }, Promise.resolve(123));
}
