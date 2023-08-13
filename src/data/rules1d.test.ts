import { describe, expect, it } from 'vitest'
import  rulefac  from './rules1d'

let ruleNum:number;

ruleNum = 34

describe(`rule ${ruleNum}}`, () => {
    it('should resolve 111 as 0', () => {
        expect(rulefac(ruleNum)(true,true,true)).toBe(false)
    })
    it('should resolve 110 as ruleNum', () => {
        expect(rulefac(ruleNum)(true,true,false)).toBe(false)
    })
    it('should resolve 101 as 0', () => {
        expect(rulefac(ruleNum)(true,false,true)).toBe(true)
    })
    it('should resolve 100 as 1', () => {
        expect(rulefac(ruleNum)(true,false,false)).toBe(false)
    })
    it('should resolve 011 as 1', () => {
        expect(rulefac(ruleNum)(false,true,true)).toBe(false)
    })
    it('should resolve 010 as 1', () => {
        expect(rulefac(ruleNum)(false,true,false)).toBe(false)
    })
    it('should resolve 001 as 1', () => {
        expect(rulefac(ruleNum)(false,false,true)).toBe(true)
    })
    it('should resolve 000 as 0', () => {
        expect(rulefac(ruleNum)(false,false,false)).toBe(false)
    })
})

ruleNum = 30
describe(`rule ${ruleNum}}`, () => {
    it('should resolve 111 as 0', () => {
        expect(rulefac(ruleNum)(true,true,true)).toBe(false)
    })
    it('should resolve 110 as ruleNum', () => {
        expect(rulefac(ruleNum)(true,true,true)).toBe(false)
    })
    it('should resolve 101 as 0', () => {
        expect(rulefac(ruleNum)(true,true,true)).toBe(false)
    })
    it('should resolve 100 as 1', () => {
        expect(rulefac(ruleNum)(true,true,true)).toBe(false)
    })
    it('should resolve 011 as 1', () => {
        expect(rulefac(ruleNum)(true,true,true)).toBe(false)
    })
    it('should resolve 010 as 1', () => {
        expect(rulefac(ruleNum)(true,true,true)).toBe(false)
    })
    it('should resolve 001 as 1', () => {
        expect(rulefac(ruleNum)(true,true,true)).toBe(false)
    })
    it('should resolve 000 as 0', () => {
        expect(rulefac(ruleNum)(true,true,true)).toBe(false)
    })
})
