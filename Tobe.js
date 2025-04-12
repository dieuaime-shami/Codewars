function expect(val){
  return{
    toBe:function(){
      if(val===expect){
        return true;
      }else{
        throw new Error("Not Equal");
      }
    },
    notToBe:function(){
      if(val!==expect){
        return true;
      }else{
        throw new Error("Equal");
      }
    },
  };
}
let outPut=()=>expect(6);
console.log(outPut);