// EXAMPLE

// def is_valid(combination)
  // stack = []
  // for par in combination
    // if par == '('
      // stack.append(par)
    // else if
      // len(stack) == 0 
          // return False   (((Validity Condition1 - not 
                                // ---trying to pop from an empty stack (otherwise ---it means that we found a closing parenthesis ---without an opening one from it))))
    // else
        //stack.pop()
    //return len(stack) == 0  (((Validity Condition2   
                        // stack must be empty at the end (otherwise it means that we have opening parentheses that we didn't close))))

//=======================================================

// def generate(n)
  // def rec(n, diff, comb, combs)
    // if diff < 0 
      // return 
    // else if n == 0
      // if diff == 0
        // combs.appen(''.join(comb))
    // else
      // comb.append('(')
      // rec(n-1, diff+1, comb, combs)
      // comb.pop()
      // comb.append(')')
      // rec(n-1, diff-1, comb, combs)

  // combs = []
  // rec(2*n, 0, [], combs)
  // return combs

//=====================================================

