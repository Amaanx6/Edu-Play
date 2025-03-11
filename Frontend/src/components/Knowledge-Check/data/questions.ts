export const questions = {
    easy: [
      {
        question: "What is the maximum number of children a node can have in a binary tree?",
        options: ["1", "2", "3", "Unlimited"],
        correct: 1,
        explanation: "In a binary tree, each node can have at most 2 children - a left child and a right child."
      },
      {
        question: "Which traversal method visits the root node first?",
        options: ["In-order", "Pre-order", "Post-order", "Level-order"],
        correct: 1,
        explanation: "Pre-order traversal visits the root node first, then the left subtree, and finally the right subtree."
      },
      {
        question: "What is a leaf node in a binary tree?",
        options: ["A node with only one child", "A node with no children", "The root node", "A node with two children"],
        correct: 1,
        explanation: "A leaf node is a node that has no children (no left or right child)."
      },
      {
        question: "Which data structure is used for Level-Order Traversal?",
        options: ["Stack", "Queue", "Linked List", "Hash Table"],
        correct: 1,
        explanation: "Level-order traversal uses a Queue to visit nodes level by level, from left to right."
      },
      {
        question: "What is the minimum number of nodes in a binary tree of height 2?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "A binary tree of height 2 needs at least 3 nodes: a root and at least one node at level 1 and one at level 2."
      },
      {
        question: "What is the relationship between nodes at the same level?",
        options: ["Parent-child", "Siblings", "Ancestors", "Descendants"],
        correct: 1,
        explanation: "Nodes at the same level in a binary tree are called siblings, regardless of whether they share the same parent."
      },
      {
        question: "Which of these is NOT a type of binary tree?",
        options: ["Complete", "Circular", "Full", "Perfect"],
        correct: 1,
        explanation: "A 'Circular' binary tree is not a valid type. The main types are Complete, Full, Perfect, and Balanced binary trees."
      },
      {
        question: "What is the maximum number of nodes at level 3 of a binary tree?",
        options: ["4", "8", "16", "32"],
        correct: 1,
        explanation: "At level 3 (considering root at level 0), the maximum number of nodes is 2³ = 8 nodes."
      },
      {
        question: "In a binary tree, a node with one child must have it as a...",
        options: ["Left child only", "Right child only", "Either left or right", "Both left and right"],
        correct: 2,
        explanation: "In a binary tree, a node with one child can have it as either a left child or a right child."
      },
      {
        question: "What is the height of an empty binary tree?",
        options: ["0", "-1", "1", "undefined"],
        correct: 1,
        explanation: "The height of an empty binary tree is -1, as there are no nodes to traverse."
      }
    ],
    medium: [
      {
        question: "What is the height of a tree with a single node?",
        options: ["0", "1", "2", "None of the above"],
        correct: 0,
        explanation: "A tree with a single node has a height of 0 as there are no edges to traverse."
      },
      {
        question: "In a binary tree, at which level can the first incomplete level occur?",
        options: ["First level", "Last level only", "Any level", "Second level"],
        correct: 2,
        explanation: "In a binary tree, an incomplete level can occur at any level except in a perfect binary tree."
      },
      {
        question: "What is the time complexity of inserting a node in a binary tree?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correct: 2,
        explanation: "In a binary tree (not BST), insertion can take O(n) time as we might need to traverse all nodes to find the insertion point."
      },
      {
        question: "Which traversal would print the nodes in ascending order in a BST?",
        options: ["Pre-order", "In-order", "Post-order", "Level-order"],
        correct: 1,
        explanation: "In-order traversal of a BST visits nodes in ascending order (left-root-right)."
      },
      {
        question: "What is the minimum height of a binary tree with 7 nodes?",
        options: ["2", "3", "4", "5"],
        correct: 0,
        explanation: "The minimum height is 2, achieved when the tree is as compact as possible."
      },
      {
        question: "What determines if a binary tree is height-balanced?",
        options: ["Equal nodes in left and right", "Height difference ≤ 1", "Same number of levels", "Complete levels"],
        correct: 1,
        explanation: "A binary tree is height-balanced if the height difference between left and right subtrees is at most 1 for every node."
      },
      {
        question: "Which property must a complete binary tree satisfy?",
        options: ["All levels full", "Last level filled left to right", "All nodes have 2 children", "Equal height subtrees"],
        correct: 1,
        explanation: "In a complete binary tree, all levels except possibly the last are completely filled, and nodes in the last level are filled from left to right."
      },
      {
        question: "What is the maximum width possible in a binary tree of height 3?",
        options: ["4", "8", "16", "32"],
        correct: 1,
        explanation: "The maximum width occurs at the last level (h=3), which can have up to 2³ = 8 nodes."
      },
      {
        question: "In a full binary tree, what is the relationship between leaf nodes and internal nodes?",
        options: ["Equal", "Leaves = Internal + 1", "Internal = Leaves + 1", "No relationship"],
        correct: 1,
        explanation: "In a full binary tree, the number of leaf nodes is always one more than the number of internal nodes."
      },
      {
        question: "What is the space complexity of recursive tree traversal?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correct: 1,
        explanation: "The space complexity is O(log n) for balanced trees due to the recursion stack, but can be O(n) for skewed trees."
      }
    ],
    hard: [
      {
        question: "In a complete binary tree, what is the index of the left child of a node at index 'i' in a 1-based array representation?",
        options: ["2i", "2i + 1", "i/2", "i - 1"],
        correct: 0,
        explanation: "In a 1-based array representation of a complete binary tree, the left child of node at index i is at index 2i."
      },
      {
        question: "What is the maximum number of nodes in a binary tree of height h?",
        options: ["2^h", "2^(h+1)", "2^(h+1) - 1", "2^h - 1"],
        correct: 2,
        explanation: "A binary tree of height h can have at most 2^(h+1) - 1 nodes, where all levels are completely filled."
      },
      {
        question: "In an AVL tree, what is the maximum possible difference between the heights of left and right subtrees?",
        options: ["0", "1", "2", "3"],
        correct: 1,
        explanation: "In an AVL tree, the balance factor (difference in heights) must be -1, 0, or 1 for every node."
      },
      {
        question: "What is the minimum number of nodes in an AVL tree of height h?",
        options: ["Fib(h)", "Fib(h+1)", "Fib(h+2)", "Fib(h+3)"],
        correct: 2,
        explanation: "The minimum number of nodes in an AVL tree of height h is Fib(h+2) - 1, where Fib is the Fibonacci sequence."
      },
      {
        question: "In a binary tree with n nodes, what is the relationship between the number of null links and actual links?",
        options: ["Equal", "Null = Actual + 1", "Null = Actual + 2", "Null = 2n"],
        correct: 2,
        explanation: "In a binary tree with n nodes, the number of null links is always n + 1 more than the number of actual links."
      },
      {
        question: "What is the time complexity of finding the lowest common ancestor in a binary tree?",
        options: ["O(1)", "O(log n)", "O(n)", "O(h)"],
        correct: 2,
        explanation: "Finding the lowest common ancestor in a binary tree takes O(n) time as we might need to traverse all nodes."
      },
      {
        question: "In a Red-Black tree, what is the maximum possible height in terms of the minimum possible height h?",
        options: ["h", "2h", "2h + 1", "3h"],
        correct: 1,
        explanation: "In a Red-Black tree, the maximum height is at most 2 times the minimum height (which is log n)."
      },
      {
        question: "What is the space complexity of Morris Traversal?",
        options: ["O(1)", "O(log n)", "O(n)", "O(h)"],
        correct: 0,
        explanation: "Morris Traversal achieves tree traversal using O(1) extra space by modifying and restoring the tree structure."
      },
      {
        question: "In a binary tree, how many different unlabeled tree structures are possible with n nodes?",
        options: ["n!", "2^n", "Catalan(n)", "n^2"],
        correct: 2,
        explanation: "The number of different unlabeled binary tree structures with n nodes is given by the nth Catalan number."
      },
      {
        question: "What is the worst-case time complexity of building a binary tree from given inorder and preorder traversals?",
        options: ["O(n)", "O(n log n)", "O(n²)", "O(2^n)"],
        correct: 0,
        explanation: "Building a binary tree from inorder and preorder traversals can be done in O(n) time using a hash map for inorder indices."
      }
    ]
  };