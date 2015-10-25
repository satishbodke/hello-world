describe('Promises', function () {
	it('should execute call back functions', function (done) {
		var pro = new Promise(function (resolve, rejected) {
			resolve(1);
			rejected('oh no!!');
		});

		pro.then(function (data) {
			expect(data).toBe(1);
			done();
		});

	});

	it('should fail when rejected...', function (done) {
		var pro = new Promise(function (resolve, rejected) {
			rejected(Error('oh no!!'));
		});

		pro.then(function () {
			// success
		}, function (error) {
			expect(error.message).toBe('oh no!!');
			done();
		});
	});

	it('sould have static reject', function (done) {
		var promise = Promise.reject(Error('its error'));
		promise.catch(function (error) {
			expect(error.message).toBe('its error');
			done();
		});
	})
})