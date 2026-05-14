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

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    diameterOfBinaryTree(root) {
        let maxPath = 0;

        function dfs(node) {
            if (!node) return 0;

            const leftPath = dfs(node.left); 
            const rightPath = dfs(node.right);
            maxPath = Math.max(maxPath, leftPath+rightPath+1);

            return 1 + Math.max(leftPath, rightPath); 
        }

        const linearMax = dfs(root);

        return Math.max(linearMax, maxPath)-1;
    }    
}   















//     diameterOfBinaryTree(root) {
//         let dMax = 0;

//         function dfs(node) {
//             if (!node) return 0;

//             const leftHight = dfs(node.left);
//             const rightHight = dfs(node.right);
//             dMax = Math.max(dMax, leftHight + rightHight);

//             return Math.max(leftHight, rightHight) + 1;
//         }

//         dfs(root);

//         return dMax;
//     }
// }

// o diametro é a soma da altura da sub arvore a esquerda + a soma da altura da sub arvore a direita?
// como eu calculo a altura da arvore?
/*
dMax = 4
5 = {0, 0} = D 0
3 = {1, 0} = D 1
4 = {0, 0} = D 0
2 = {2, 1} = D 3
1 = {0, 3} = D 3

O(n) tempo, O(h) espaço. Com n é o num de nos, h altura da arvore
*/