"use strict";

describe("A suite", function () {
  it("contains spec with an expectation", function () {
    expect(true).toBe(true);
  });

  it("simple add function with new LET keyword", function () {
    let add = (x, y) => x + y;

    expect(8).toBe(add(3, 5));
    //console.log(`the message is ${greetings}`);
  });
});

// describe("ECMA 6", function(){
// 	it("simple add function with new LET keyword", function(){
// 		let add = (x,y) => x+y;
//   		expect(8).toBe(add(3,5));
// 	});
// });
