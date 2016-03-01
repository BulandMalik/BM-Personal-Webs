describe("Stack", function() {
	var stack;

	beforeEach(function() {
	    stack = new INTEGRALLIS.structures.Stack();
	});

	describe("a new stack", function() {

		it("should be empty", function() {
			expect(stack.isEmpty()).toBeTruthy();
		});

		it("should no longer be empty after a push", function() {
			stack.push("anything");
			expect(stack.isEmpty()).toBeFalsy();
		});

	});

	describe("a stack with one item", function() {

		beforeEach(function() {
			stack.push("foo");
		});

		it("should not be empty", function() {
			expect(stack.isEmpty()).toBeFalsy();
		});

		it("should become empty after a pop", function() {
			stack.pop();
			expect(stack.isEmpty()).toBeTruthy();
		});

		it("should return the only element after a pop", function() {
			var element = stack.pop();
			expect(element).toEqual("foo");
		});
	});

	describe("a stack with multiple elements", function() {

		beforeEach(function() {
			data = ['a', 'b', 'c'];
			var howMany = data.length;

			for(var i = 0; i < howMany; i++) {
				stack.push(data[i]);
			}
		});

		it("should report it's size to be the number of elements added", function() {
			expect(stack.size()).toBe(data.length);
		});

		it("should add to the top when an element is pushed", function() {
			stack.push('bar');
			expect(stack.peek()).toEqual('bar');
		});

		it("should return the top item when sent peek", function() {
			expect(stack.peek()).toEqual('c');
		});

		it("should NOT remove the top item when sent peek", function() {
			var size = stack.size();
			stack.peek();
			expect(stack.size()).toEqual(size);
		});

		it("should return the top item when sent pop", function() {
			expect(stack.pop()).toEqual('c');
		});

		it("should remove the top item when sent pop", function() {
			stack.pop();
			expect(stack.peek()).toNotEqual('c');
		});

	});
});