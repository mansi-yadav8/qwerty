let b=["abc","xyz","abcde","qwert"]
c=b.filter((ele)=>ele.length===5).toString()
console.log(c)

let a=["car","bike","cycle"]
d=a.slice(1,3).join(" and ")
console.log(d)

let w=[30,40,50]
let q=[2,3,4]
e=q.concat(w)
r=q.concat(q)
console.log(e)
console.log(r)

let t="Hi Im Mansi"
let y=t.split(" ").slice(0,2).join(" & ")
console.log(y)