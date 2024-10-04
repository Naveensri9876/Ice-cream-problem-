const m=prompt("enter the value of m");
const n=prompt("enter the value of n");
let sum=0
let flag=0
if(m>n)
{
    flag=1
}
for(let i=m;i<=n;i++)
{
    let pro=i*i*i
    sum=sum+pro
}
if(flag==0)
{
    console.log(sum);
}
else{
    console.log(0);
}