class Node{
 constructor(data){
  this.data = data;
  this.left = null;
  this.right = null;
 }
}
class Binarytree{
 constructor(){
   this.root = null;
   this.nbre = 0;
 }
 add(val){
  var newnode = new Node(val);
  if(this.root === null){
     this.root = newnode;
     alert("root :" + " " + this.root.data);
  } // fin if root
  else
    this.addnode(this.root,newnode);
 }// fin add method
 addnode(node,newnode){
  if(node.data < newnode.data){
     // on va a droite
    if(node.right === null){
       node.right = newnode;
       alert("venant de :"  + " " + node.data  + "  " + "ajout droite : " + " " + newnode.data);
    }
    else
      this.addnode(node.right,newnode);
  }// fin if droite
  else{
   // on va a gauche
   if(node.left === null){
      node.left = newnode;
      this.nbre++;
      alert("venant de :"  + " " + node.data  + "  " + "ajout gauche : " + " " + newnode.data);
   }
   else
     this.addnode(node.left,newnode);
  } // fin gauche
   alert("left visible node : " + " " + this.nbre);
 }// fin addnode
}
var test = new Binarytree();
    test.add(8);
    test.add(3);
    test.add(10);
    test.add(1);
    test.add(6);
    test.add(14);
    test.add(4);
    test.add(7);
    test.add(13);
