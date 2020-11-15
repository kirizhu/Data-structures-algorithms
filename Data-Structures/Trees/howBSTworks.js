/**
  *Like all tree data structure
binary search tree has a root, the top node (just one node), parent node has at most two children nodes, which are called siblings. The edge is the connection between one node and another. The node without children is called leaf.
 
Binary search tree is ordered/sorted data structure, upon insertion, the nodes are placed in an orderly fashion. This inherent order makes searching fast. Unlike an array, the data is stored by reference. As we add to the data structure, we create a new chunk in memory and link to it. In short, inserting, deleting and searching are the all-stars for a binary search tree.

  *Inserting a node
To insert a node to binary search tree, first we create a new node, we check if there is a root in it, if not, the new node becomes the root, if there is a root, we compare the new node with the root, if it’s greater than the root, check to see if there is a node to the right of the root, if not, add the new node as the right property, if there is, move to the right node and repeat these steps. If the new node is less than the root, check to see if there is a node to the left of the root, if not, add the new node as the left property, if there is, move to the left node and repeat these steps.

  * Finding a node
To find a node, we start at the root, check if there is a root, if not, searching is over, if there is a root, check if the value of the new node is the value we are looking for, if not, check to see if the value is greater than or less than the value of the root, to confirm which direction we need to dig in. If it is greater, check to see if there is a node to the right, if not, searching is over, if there is, move to that node and repeat these step. If it is less. check to see if there is a node to the left, if not, searching is over, if there is, move to that node and repeat these steps.

  *Deletion in Binary Search Tree has been divided into 3 cases:
Node to be deleted is leaf. To delete a leaf node, simply remove it from the tree. Since it was a leaf node we deleted it from the tree without making any other changes.

Node to be deleted has only one child. To delete this node, copy the child to the node and delete the child. The node had only one child so we copied its child’s value to it and deleted its child.

Node to be deleted has two children. First, find in-order successor of the node. Now copy contents of the in-order successor to the node and delete the in-order successor. The in-order predecessor can also be used in the same manner.
 */
