describe('objects', function () {
	it('should uses mixins on target objects', function () {
		var shark = {
			bite: function (target) {
				target.hurted = true;
			}
		}

		var person = {}

		var laser = {
			pewpew: function (target) {
				target.exploded = true;
			}
		}
		Object.assign(shark, laser);
		shark.pewpew(person);

		expect(person.exploded).toBe(true);
	});
})