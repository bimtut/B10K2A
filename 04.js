let data = [
    ['a', 'c', 'b', 'e', 'd'],
    ['g','e','f']
]
    
let datalain = [
    ['g','h','i','j'],
    ['a','c','b','e','d'],
    ['g','e','f']
]

function sort_array(arr) {
    //urutkan array sedikit - banyak
    for (let i = 0; i < arr.length; i++) {
        let lowestIndex = i
        let watch = arr[i]
        let inputwatch = watch.length
         
        for (let j = i; j < arr.length; j++) {
            if (arr[j].length < inputwatch) {
                watch =  arr[j]
                lowestIndex = j
            }
        }
        arr[lowestIndex] = arr[i]
        arr[i] = watch
    }
    //urutkan isi masing2 isi array
    for (let k = 0; k < arr.length; k++) {
        let insideArr = arr[k]
        for (let l = 0; l < insideArr.length; l++) {
            let lowestIndex = l, insideWatch = insideArr[l]
            for (let m = l; m < insideArr.length; m++) {
                if (insideArr[m] < insideWatch) {
                    lowestIndex = m
                    insideWatch = insideArr[m]
                }
            }
            insideArr[lowestIndex] = insideArr[l]
            insideArr[l] = insideWatch
        } 
    }
    console.log(arr)
}

//test case
sort_array(data)

sort_array(datalain)
