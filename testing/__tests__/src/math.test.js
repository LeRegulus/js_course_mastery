
import {add, countOccurence} from '../../src/math';

test('add', () => {
    //given
    const a = 10;
    const b = 2;
    //when
    const result = add(a, b);
    //then
    expect(result).toBe(12);
});

test('countOccurence', () => {
    //given
    const tab = [1,5,3,4,2,5,34,5,3,6,5];
    const number = 5;
    //when
    const result = countOccurence(tab, number);
    //then
    expect(result).toBe(4);
});