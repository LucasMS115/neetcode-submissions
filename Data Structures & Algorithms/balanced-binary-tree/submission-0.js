/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Balance {
  constructor(height, balanced) {
    this.height = height;
    this.balanced = balanced;
  }
}

class Solution {
  isBalanced(root) {
    
    function dfs(node) {
      if (!node) return new Balance(0, true);

      const leftBalance = dfs(node.left),
            rightBalance = dfs(node.right);
      
      const isBalanced = leftBalance.balanced && rightBalance.balanced &&
                         Math.abs(leftBalance.height - rightBalance.height) <= 1;
                         
      const height = Math.max(leftBalance.height, rightBalance.height) + 1;

      return new Balance(height, isBalanced);
    }

    return dfs(root).balanced;
  }
}

// class Solution {
//   isBalanced(root) {
//     function dfs(node) {
//       if (!node) return { height: 0, isBalanced: true };

//       const left = dfs(node.left);
//       if (!left.isBalanced) return { height: -1, isBalanced: false };

//       const right = dfs(node.right);
//       if (!right.isBalanced) return { height: -1, isBalanced: false };

//       const height = Math.max(left.height, right.height) + 1,
//             isBalanced = Math.abs(left.height - right.height) <= 1;

//       return { height, isBalanced };
//     }

//     return dfs(root).isBalanced;
//   }
// }

// class Balance {
//     constructor(leftHeight, rightHeight, hasBalancedChild) {
//         this.height = Math.max(leftHeight, rightHeight) + 1;

//         const diff = Math.sqrt(Math.pow(leftHeight - rightHeight, 2));

//         this.isBalanced = hasBalancedChild && diff <= 1;
//     }
// }

// class Solution {
//     /**
//      * @param {TreeNode} root
//      * @return {boolean}
//      */
//     isBalanced(root) {
//         if (!root) return true;

//         function dfs(node) {
//             if(!node) return new Balance(0, 0, true); 

//             const leftBalance = dfs(node.left),
//                   rightBalance = dfs(node.right),
//                   hasBalancedChild = leftBalance.isBalanced && rightBalance.isBalanced;

//             return new Balance(leftBalance.height, rightBalance.height, hasBalancedChild);
//         }

//         return dfs(root).isBalanced; 
//     }
// }
