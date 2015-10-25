describe("maps", function () {
	it("should build simple map object", function () {
		var m = new Map();
		m.set("key", "value");
		expect(m.length).toBe(1);
	});
})