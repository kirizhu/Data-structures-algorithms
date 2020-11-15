/**
 * Graphs

 Graph properties:

    Directed !== Undirected
    Weighted !== Unweighted
    Cyclic   !== Acyclic
  
    Ex DAG is a Directed Acyclic Graph which is very common in Blockchain technology

  A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph. 

  Graphs are used to solve many real-life problems. Graphs are used to represent networks. The networks may include paths in a city or telephone network or circuit network. Graphs are also used in social networks like linkedIn, Facebook. For example, in Facebook, each person is represented with a vertex(or node). Each node is a structure and contains information like person id, name, gender, locale etc

* Edge List containing 4 items

  Only shows a connection

  const graph =  [[0,2],[2,3],[2,1],[1,3]]

* Adjacency Matrix containing 4 items
  
  const graph =  [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
  ]
  
  Objects can also be used instead of arrays

  const graphObj =  {
    0:[0,0,1,0],
    1:[0,0,1,1],
    2:[1,1,0,1],
    3:[0,1,1,0]
    }

  Adjacency Matrix is a 2D array of size V x V where V is the number of vertices in a graph. Let the 2D array be graph[][], a slot graph[i][j] = 1 indicates that there is an edge from vertex i to vertex j. Adjacency matrix for undirected graph is always symmetric. 

* Adjacency List containing 4 items

  The index of the array is the value of the actual graph node. Objects can also be used instead of arrays

  const graph =  [[2],[2,3],[0,1,3],[1,3],[1,2]]  
  
  Objects can also be used instead of arrays

  const graphObj =  { 
    0:[2],
    1:[2,3],
    2:[0,1,3],
    3:[1,3],
    4:[1,2]
  }

  An array of lists is used. The size of the array is equal to the number of vertices. Let the array be an array[]. An entry array[i] represents the list of vertices adjacent to the ith vertex. This representation can also be used to represent a weighted graph. The weights of edges can be represented as lists of pairs. Following is the adjacency list representation of the above graph.

 */
