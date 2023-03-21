const translate  = require("./piglatin.js");

describe("translate function", () => {
    describe('with words starting with vowels', () => {
        test("translates apple to appleway", () => {
            expect(translate('apple')).toEqual('appleway');
          });
        
          test('translate else to elseway', ()=>{
            expect(translate('else')).toEqual('elseway');
          });
        
    })
  describe('with words starting with consonant', ()=>{
    test('translate giraffe to iraffegay', ()=>{
        expect(translate('giraffe')).toEqual('iraffegay');
  });
});
});
