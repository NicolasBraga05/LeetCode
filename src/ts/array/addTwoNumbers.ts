function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let dummyHead = new ListNode(0);
	let current = dummyHead;
	let carry = 0;

	while (l1 !== null || l2 !== null || carry > 0) {
		const val1 = l1 ? l1.val : 0;
		const val2 = l2 ? l2.val : 0;

		const sum = val1 + val2 + carry;
		carry = Math.floor(sum / 10);
		const digit = sum % 10;

		current.next = new ListNode(digit);
		current = current.next;

		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
	}

	return dummyHead.next;
}
