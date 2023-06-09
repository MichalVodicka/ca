const rules = {}

for (let i = 0; i<256 ;i++){
    const rule = (i>>>0).toString(2).padStart(8,0)
    rules[i] = Object.assign({}, [...rule].map(Number).reverse())
}

const ruleFac = (ruleset) => (a, b, c) => rules[ruleset][(a << 2) + (b << 1) + (c << 0)]

export default ruleFac
