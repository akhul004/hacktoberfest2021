function rotateMatrix() {
    var text = (document.querySelector('textarea').value).trim();
    var div = document.getElementById('output')
    console.log(text);
    if (text !== '') {

        div.innerHTML = ''

        var dictionary = {}

        var matrixArray = [];
        var readMatrix = function () {
            matrixArray = [];
            
            let i=0;
            let row=[];
            let lines=text.split('\n');
          
            for (let i=0 ; i<lines.length; i++){
            
                row = (Array.from (lines[i], x =>  { if (x ==' ') {  return } return x } )).filter(el => el !== undefined)

                matrixArray[i]=row;
               
            }
            return matrixArray

         }
           readMatrix();
           function rotate (){           
           let rows = matrixArray.length;
           let cols = matrixArray[0].length;
           table = new Array;
             for (let j = cols-1; j >= 0; j--) {
               table[j] = Array(rows);
             }
             for (let i = 0; i < rows; i++) {
               for (let j = 0; j < cols; j++) {
                 table[j][i] = matrixArray[rows-i-1][j]; 
                 // table[j][i] = matrixArray[rows][j] , svp!
               }
             }
           
             console.log(table)
             return table;
            }


           table=rotate();
           
            var message = '<table><thead><tr><th>90 degree clockwise<th>Rotation</thead></tr><tbody>'

            for (i in table) {

                message += '<tr><td>' + table[i] + '</tr>'
                console.log(table[i]);
            }

            message += '</tbody></table>'

            div.innerHTML = message

        }

   }
document.querySelector('[type=button]').addEventListener('click', rotateMatrix);

