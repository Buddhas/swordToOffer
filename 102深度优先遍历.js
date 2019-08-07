class Dictionary {
  constructor() {
    this.items = {};
  }
  get(key) {
    return this.has(key) ? this.items[key] : undefined;
  }
  set(key, value) {
    this.items[key] = value;
  }
  has(key) {
    return key in this.items;
  }
}

class Graph {
  constructor() {
    this.vertices = []; // 节点集合
    this.adjList = new Dictionary();
  }
  // 添加顶点
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }
  // 添加边
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }
  // 初始化节点颜色
  initializeColor() {
    var color = {};
    for (var i = 0; i < this.vertices.length; i++) {
      color[this.vertices[i]] = "white";
    }
    return color;
  }
  // 深度优先遍历
  dfs(v, callback) {
    let color = this.initializeColor();
    this.dfsVisit(v, color, callback);
  }
  dfsVisit(v, color, callback) {
    if (callback) {
      callback(v);
    }
    let nodes = this.adjList.get(v);
    color[v] = "black";
    for (let i = 0; i < nodes.length; i++) {
      let w = nodes[i];
      if (color[w] == "white") {
        this.dfsVisit(w, color, callback);
      }
    }
  }
  // 广度优先遍历
  bfs(v, callback) {
    var color = initializeColor(),
      queue = new Queue();

    queue.enqueue(v); // 入队了就设置为黑色
    color[v] = "black";

    while (!queue.isEmpty()) {
      var u = queue.dequeue(), // 出队重复第一步
      neighbors = adjList.get(u);

      for (var i = 0; i < neighbors.length; i++) {
        // 将所有相邻顶点入队
        var w = neighbors[i];
        if (color[w] === "white") {
          queue.enqueue(w);
          color[w] = "black"; // 入队了就设置为黑色
        }
      }
      if (callback) {
        callback(u); // 入队完了相邻顶点，就访问该顶点
      }
    }
  }
}

var vertices = [];
var adjList = new Dictionary();

var graph = new Graph();

var myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (var i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

let bfsList = [];
graph.dfs(graph.vertices[0], function(u) {
  bfsList.push(u);
});

console.log(bfsList);
