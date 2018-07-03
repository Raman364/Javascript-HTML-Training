function rest(...args)
{
   return args.reduce((a,b)=>{
        return a+b;
    });
}

console.log(rest(9,8,5));