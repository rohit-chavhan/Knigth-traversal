/*
what is a graph ?
graph = nodes + edges

graph is just a collection of nodes and edges
edges is just a connection between a pair of nodes

for example =>
    {a} => {b}

we can say that a and b are nodes and that arrow is a edge

what are Types of graph ?
we have 2 types of graph one is directed graph and undirected graph.

{a} => {c}    {a}=={b}
^             ||
||            {c}
{c}

what does this above code want to explain?
we can see that one code has arrows and other do not have, one with arrow is one directional and other is 2 way directional.

what does this means in simple way?
we can travel from a to c, but once we are in c we cannot travel back to a.
That is not the case for undirected graph we can go back to b to a, 2way.

{b} <== {a} ==> {c} 

what are neighbour nodes ?
if we are at a node we have a and c nodes as neighbour node.
Any node which is accessible through edge is a neighbour node
if we are at c node then we do not have any neighbour node here, becuase we cannot travel back to a.
we have to obey the direction of edges.

we cannot use diagrams in a code editor to work with graphs, what can we use ?
{b} <== {a} ==> {c} ==> {d}

{
    a: [b, c],
    b: [],
    c: [d],
    d: []
}

we use adjacency list for example in an object for every node we will have it as key and its value will be array and inside it would have it all its neighbours.

what are the 2 types on which we can traverse the graph?
bfs and dfs which we learned in tree data structure.

how we would perform bfs on graph?

{f} <== {d} <== {b} <== {a} ==> {c}
==> {e} 

we start with our root as {a}

[ QUEUE ] current print
a           
bc          a       a
dc          b       ab
ed          c       abc
fe          d       abcd
            e       abcde
            f       abcdef

above is the implementation of how things will work.
Basically once we pop from que we add the neighbours in the queue.

in bfs we use queue data structure.   

what is queue explain ?
in queue we have First-In, First-Out (FIFO), 
for example in dmart

customers are standing in queue for checkout [cahier: a <== b <== c]
once customer a and b get their checkout then c will get his turn.

if new customer want to checkout he has to stand in queue and he will get after previous customers get their orders.



*/
