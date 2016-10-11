function printTri(depth){
    let TriArray = [[1]];
    for (var row=1;row<depth;row++){
        TriArray.push([]);
        let ansectorRow = TriArray[row-1];
        for(var col=0;col<row + 1;col++){
            TriArray[row].push([0]);
            var rightValue = col-1 > -1 ? ansectorRow[col-1]: 0 ;
            var leftValue = col < ansectorRow.length ? ansectorRow[col] : 0;
            TriArray[row][col] =+ rightValue + leftValue;
        }
    }
    return TriArray;
}
console.log(printTri(5));
