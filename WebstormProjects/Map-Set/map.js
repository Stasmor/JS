var mp = new Map();

mp.set('q','й')
mp.set('w',22)                             //rewrite w=12
mp.set('e',{a:21,b:'srtr'}).set('r',100500).set('w',12).set('s',222)


alert(mp.get('q')+'+'+mp.get('w')+'+'+mp.get('e'))
console.log(mp)

console.log('mp length '+mp.size)

for (const el of mp) {
    console.log(el);
}
console.log('end')
// mp[Symbol.iterator]();