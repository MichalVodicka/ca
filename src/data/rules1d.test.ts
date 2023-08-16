import { describe, expect, it } from 'vitest'
import  rulefac  from './rules1d'




describe(`rule 34`, () => {
    let ruleNum = 34
    let rule = rulefac(ruleNum)
    it('should resolve 111 as 0', () => {
        expect(rule(true,true,true)).toBe(false)
    })
    it('should resolve 110 as 0', () => {
        expect(rule(true,true,false)).toBe(false)
    })
    it('should resolve 101 as 0', () => {
        expect(rule(true,false,true)).toBe(true)
    })
    it('should resolve 100 as 1', () => {
        expect(rule(true,false,false)).toBe(false)
    })
    it('should resolve 011 as 1', () => {
        expect(rule(false,true,true)).toBe(false)
    })
    it('should resolve 010 as 1', () => {
        expect(rule(false,true,false)).toBe(false)
    })
    it('should resolve 001 as 1', () => {
        expect(rule(false,false,true)).toBe(true)
    })
    it('should resolve 000 as 0', () => {
        expect(rule(false,false,false)).toBe(false)
    })
})


describe(`rule 30`, () => {
    let ruleNum = 30
    let rule = rulefac(ruleNum)

    it('should resolve 111 as 0', () => {
        expect(rule(true,true,true)).toBe(false)
    })
    it('should resolve 110 as 0', () => {
        expect(rule(true,true,true)).toBe(false)
    })
    it('should resolve 101 as 0', () => {
        expect(rule(true,true,true)).toBe(false)
    })
    it('should resolve 100 as 1', () => {
        expect(rule(true,true,true)).toBe(false)
    })
    it('should resolve 011 as 1', () => {
        expect(rule(true,true,true)).toBe(false)
    })
    it('should resolve 010 as 1', () => {
        expect(rule(true,true,true)).toBe(false)
    })
    it('should resolve 001 as 1', () => {
        expect(rule(true,true,true)).toBe(false)
    })
    it('should resolve 000 as 0', () => {
        expect(rule(true,true,true)).toBe(false)
    })
})
