var st = new Set();

st.add('qw')
st.add('er')
st.add('qw')
st.add(12)

console.log('size SAT = '+st.size)
console.log(st )

st.forEach(function (val1,val2) {
    console.log('in val1: '+val1+' in val2: '+val2)

})