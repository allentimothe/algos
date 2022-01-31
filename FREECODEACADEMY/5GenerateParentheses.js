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