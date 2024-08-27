function solve(matrix){
    let numberOfPairs = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(i + 1 < matrix.length){
                if(matrix[i][j] === matrix[i + 1][j]){
                    numberOfPairs++;
                }
            }

            if(j + 1 < matrix[i].length){
                if(matrix[i][j] === matrix[i][j + 1]){
                    numberOfPairs++;
                }
            } 
        }
    }

    return numberOfPairs;
}

solve([
	[2,3,4,7,0],
	[4,0,5,3,4],
    [2,3,5,4,2],
    [9,8,7,5,4],
]);