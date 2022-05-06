const array1 = ['azxsdfghjkazxfgtfgt'];
const array2 = ['azx', 'sdf', 'ghjk', 'fgt'];

function extrair(string, arr) {
  var encontradas = [];
  for (var i = 0; i < string.length; i++) {
    arr.forEach(function(match) {
      if (string.slice(i).indexOf(match) == 0) encontradas.push(match);
    });
  }
  return encontradas;
}

var array3 = extrair(array1[0], array2);
console.log(array3);