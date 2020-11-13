let a = ['sued', 'ubeyt', 'gesu', 'cane'];
let url = "marco.com"
console.log(a);
a.forEach(element => {
    console.log(String(url + element))
});
let b = [1, 2, 3, 4, 5]
b.push(...a);
console.log(b);