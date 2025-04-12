function createCounter(init){
  let current= init;
  return{
    increment:function(){
      return ++current;
    },
    decrement:function(){
      return --current;
    },
    reset:function(){
      current=init;
      return current;
    }
  };
}

const count=createCounter(5);
console.log(count.increment());
console.log(count.reset());
console.log(count.decrement());
