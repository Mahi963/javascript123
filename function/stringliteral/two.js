let size=[77,88,44,22]
function size_plus(size){
    return size + 1;
}   
let new_size = size.map(size_plus)
console.log(new_size)