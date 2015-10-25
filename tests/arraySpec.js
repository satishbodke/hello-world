"use strict";

// class company {
// 	setEmployees(...person){
// 		this._employeeList = person;
// 	}
// }

class person {
	constructor(name) {
		this._name = name;
	}

	getName() {
		return this._name.toUpperCase();
	}
}

class specific extends person {
	constructor() {
		super('specific');
	}
}


describe("Arrays", function () {
	it('should return first matching element using find', function () {
		var ary = [1, 5, 10];
		var match = ary.find(item => item > 8);
		expect(match).toBe(10);
	});

	it('should return name from base instance', function () {
		let per = new person("unknown");
		expect(per.getName()).toBe("UNKNOWN");
	});
	
	it('should return name from derived instance', function () {
		let spec = new specific();
		expect(spec.getName()).toBe("SPECIFIC");
	});
})
	
	