// rules: number -> array of 8 rule states
//  1: {
//   "0": 1,
//   "1": 0,
//   "2": 0,
//   "3": 0,
//   "4": 0,
//   "5": 0,
//   "6": 0,
//   "7": 0
// }

const rules: Record<number, Record<number, number>> = {}

type IRule = [string, string, string, string, string, string, string, string]

// i = rule number
for (let i = 1; i < 256; i++) {
    // a rule is converted to 8 binary states
    const rule = [...(i.toString(2).padStart(8, '0'))] as IRule
    rules[i] = Object.assign({}, rule.map(Number).reverse())
}

const ruleFac = (ruleset: number) => (a: boolean, b: boolean, c: boolean): number =>
    rules[ruleset][(Number(a) << 2) + (Number(b) << 1) + (Number(c) << 0)]

export default ruleFac
