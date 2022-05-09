class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
      return this.elements[this.head];
    }   
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
  }


// create a graph class
class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    // add vertex to the graph
    addVertex(v){
        // initialize the adjacent list with a
        // null array
        this.AdjList.set(v, []);
    }

    // add edge to the graph
    addEdge(v, w){
        // get the list for vertex v and put the
        // vertex w denoting edge between v and w
        this.AdjList.get(v).push(w);
        
        // Since graph is undirected,
        // add an edge from w to v also
        this.AdjList.get(w).push(v);
    }
    // Prints the vertex and adjacency list
    printGraph(){
        // get all the vertices
        let get_keys = this.AdjList.keys();
        
        // iterate over the vertices
        for (let i of get_keys){
            // great the corresponding adjacency list
            // for the vertex
            let get_values = this.AdjList.get(i);
            let conc = "";
        
            // iterate over the adjacency list
            // concatenate the values into a string
            for (let j of get_values)
                    conc += j + " ";
        
            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }

    // function to performs BFS
    bfs(startingNode){
    
        // create a visited object
        let visited = {};
    
        // Create an object for queue
        let q = new Queue();
    
        // add the starting node to the queue
        visited[startingNode] = true;
        q.enqueue(startingNode);
    
        // loop until queue is element
        while (!q.isEmpty()) {
            // get the element from the queue
            let getQueueElement = q.dequeue();
    
            // passing the current vertex to callback function
            console.log(getQueueElement);
    
            // get the adjacent list for current vertex
            let get_List = this.AdjList.get(getQueueElement);
    
            // loop through the list and add the element to the
            // queue if it is not processed yet
            for (let i in get_List) {
                let neigh = get_List[i];
    
                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }

        // Main DFS method
    dfs(startingNode){
        let visited = {};
    
        this.DFSUtil(startingNode, visited);
    }
    
    // Recursive function which process and explore
    // all the adjacent vertex of the vertex with which it is called
    DFSUtil(vert, visited){
        visited[vert] = true;
        console.log(vert);
    
        let get_neighbours = this.AdjList.get(vert);
    
        for (let i in get_neighbours) {
            let get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
    }
}


// Using the above implemented graph class
let g = new Graph(6);
let vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
 
// adding vertices
for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
 
// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
 
// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();



// prints
// BFS
// A B D E C F
console.log("BFS");
g.bfs('A');



// prints
// DFS
// A B C E D F
console.log("DFS");
g.dfs('A');