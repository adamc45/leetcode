class ListNode {
  public next: ListNode | null;
  constructor(public val: number, next: ListNode | null = null) {
    this.val = val || 0;
    this.next = next
  }
}

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null, carry = false) => {
  // initialize node we are returning
  let node = null
  if (l1 || l2) {
    // Assign both current values to whatever the value is or 0 if there is no value
    const l1Value = l1?.val || 0;
    const l2Value = l2?.val || 0;
    // Grab the next pair of nodes that will be iterated together
    const l1NextNode = l1?.next || null;
    const l2NextNode = l2?.next || null;
    // If there is a carry value, then the 2 nodes add up to 10 or more and need to have
    // the next value in the list increased to whatever it's value is +1 (the carry)
    let totalValue = l1Value + l2Value;
    if (carry) {
      totalValue++;
    }
    node = new ListNode(totalValue % 10);
    node.next = addTwoNumbers(l1NextNode, l2NextNode, totalValue >= 10);
  } else if (carry) {
    node = new ListNode(1);
    node.next = null;
  }
  return node;
}

const l1aArg = new ListNode(2,
  new ListNode(7,
    new ListNode(6,
      new ListNode(4)
    )
  )
);
const l2bArg = new ListNode(9);
addTwoNumbers(l1a_Arg, l2b_Arg)
// 9 + 2 => 11 => 1 carry 1
// 7 + 1 => 8
// 6 + 0 => 6
// 4 + 0 => 4

const l1cArg = new ListNode(2,
  new ListNode(4,
    new ListNode(3)
  )
)
const l2dArg = new ListNode(5,
  new ListNode(6,
    new ListNode(4)
  )
)
addTwoNumbers(l1c_Arg, l2d_Arg)
// 2 + 5 => 7
// 4 + 6 => 10 => 0 carry 1
// 3 + 4 + 1 (carry) => 8