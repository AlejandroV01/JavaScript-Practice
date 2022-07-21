var singleNumber = function(nums) {
 const ht = {}
 for(const num of nums){
    ht[num] = ht[num] + 1 || 1
 }
return(Object.keys(ht).find(key => ht[key] === 1))
 
};

singleNumber([4,1,2,1,2])