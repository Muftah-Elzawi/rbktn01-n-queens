/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // var solution = undefined; //fixme
  var array = []
  var solution = []

  for (var i = 0; i < n; i++) {
    array.push(0)
  }

  // for (var i = 0; i < n; i++) {
  //   array.splice(i , 1,1)
  // }
//[0,0,0,0]
  for (var i = 0; i < n; i++) {
    
    //solution[i]= array.splice(i , 1,1)
    //array[i] = 1
    var x = array.slice()
    x.splice(i , 1,1)
    solution.push(x)
    
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  
  return solution
   
  //return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //  var solutionCount = 0; //fixme
  // var sequance =[]
  // var solution = [1]
  // for (var i = 1; i < n+1; i++) {
  //   sequance.push(i)
  // }
 var total =1;
  for(i = 1; i<=n; i++){
    total = total *i;
   //console.log(total)
  }
  // for (var i = 1; i < sequance.length; i++) {
  //  solution.push(sequance[i] * solution[i-1]) 
  // }
  
  // // for (var i = 0; i < n; i++) {
  // //   if (findNRooksSolution(i)) {
  // //     solutionCount ++
  // //   }
  // // }
  // solutionCount = solution[solution.length-1]
  return total;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var solution = undefined; //fixme
   var array = []

  // var solution = []
  // for (var i = 0; i < n; i++) {
  //   array.push(0)
  // }
var board =new Board({n:n})
  // for(var i = 0 ; i < n ; i++){
  //   if (!board.hasRowConflictAt(i) &&  !hasColConflictAt(i)  &&  !hasMajorDiagonalConflictAt(i)  &&  !hasMinorDiagonalConflictAt(i)){
  //     var x = array.slice()
  //     x.splice(i , 1,1)
  //     solution.push(x)
  //   }
  // }

  //  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  //  return solution;

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

//hasRowConflictAt
//hasColConflictAt
//hasMajorDiagonalConflictAt
//hasMinorDiagonalConflictAt