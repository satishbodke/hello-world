"use strict";

exports class student {
	constructor(name) {
		this._name = name;
	}

	get name() {
		return this_name;
	}

	doWork() {
		return `$(this.name) is working!`;
	}
};