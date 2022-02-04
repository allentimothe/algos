// Given a binary tree root, check if it's symmetric arround its center (a mirror of itself)

// def tree_sum(root)
  // if root is None
    // return 0
  // else
    // left = tree_sum(root.left)
    // right = tree_sum(root.right)
    // return root.val + left + right

// =======================================
// RECURSION

// def are_symmetric(root1, root2)

  // are_symmetric(root1.left, root2.right)
  // are_symmetric(root1.right, root2.left)

//=====================================

// def are_symmetric(root1, root2) 
  // if root1 is None and root2 is None
    // return True
  // else if ((root1 is None) != (root2 is None)) or root1.val != root2.val
    // return False
  // else
    // return are_symmetrci(root1.left, root2.right)
      // and are_symmetric(root1.right, root2.left)

// def is_symmetric(root)
  // if root is None
    //return True
  // return are_symmetric(root.left, root.right)