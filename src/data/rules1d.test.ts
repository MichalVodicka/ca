import { expect, test } from 'vitest'
import  rulefac  from './rules1d'

test('adds 1 + 2 to equal 3', () => {
    expect(rulefac(34)(false,false,true)).toBe(3)
})
