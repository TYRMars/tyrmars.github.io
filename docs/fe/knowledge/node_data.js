
// 链表节点
class Node {
  constructor(value) {
    this.val = value
    this.next = undefined
  }
}

class NodeList {
  constructor(arr) {
    let head = new Node(arr.shift())
    let next = head
    arr.forEach(item => {
      next.next = new Node (item)
      next = next.next
    });

    return head
  }
}

// 交换两个节点的值
const swap = (p,q) => {
  let val = p.val
  p.val = q.val
  q.val = val;
}

// 寻找基准元素的节点
let partion = (begin, end) => {
  let val = begin.val
  let p = begin
  let q = begin.next

  while (q !== end) {
    if (q.val < val) {
      p = p.next
      swap(p,q)
    }
  }

  swap(p, begin);

  return p;
}

function sort (begin, end) {
  if (begin !== end) {
    let part = partion(begin, end);
    sort(begin, part)
    sort(part.next, end)
  }
}

function isCircle (head) {
  let slow = head
  let fast = head.next

  while(1) {
    // 尾巴为 undefined
    if (!fast || fast.next) {
     
      return false
    } else if (fast === slow || fast.next === slow) {
      return true
    } else {
      slow = slow.next
      fast = fast.next.next
    }
  }
}

// https://leetcode-cn.com/problems/add-two-numbers/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
  let p = l1.next
  let q = l2.next
  let num = 0;
  let newValue = 0;
  let initVal = l1.val + l2.val;

  if(initVal >= 10) {
      initVal = initVal - 10;
      newValue = 1
  }

  let head = new ListNode(initVal, undefined);
  let node = head;

  while(p || q || newValue > 0) {
      if(p) {
          num = num + p.val
          p = p.next 
      }
      if(q) {
          num = num + q.val
          q = q.next
      }
      if(newValue > 0) {
          num = num + newValue
          newValue = 0
      }
      if(num >= 10) {
         num = num - 10
         newValue = 1;
      }

      node.next =  new ListNode(num, undefined)
      node = node.next;

      num = 0;
  }

  return head
};