function composeRanges2(nums: number[]): string[] {
    let start = nums[0];
    let ans:string[] = [];
    for(let i = 1; i < nums.length; i++){
        if(nums[i-1] + 1 != nums[i]){
            ans.push(start + "->" + nums[i-1])
            start = nums[i];
        }
    }

    let last = nums[nums.length -1];
    if(start == last)
        ans.push(start + "")
    else
        ans.push(start +"->" + nums[nums.length - 1]);
    return ans;
}

function composeRanges(nums: number[]): string[] {
    if(nums.length < 1){
        return [];
    }

    const ranges:any[] = [{start: nums[0], end: nums[1]}];

    for(let i = 1; i < nums.length; i++){
        if(ranges[ranges.length -1].end + 1 == nums[i]){
            ranges[ranges.length -1].end = nums[i];
        }else{
            ranges.push({start: nums[i], end: nums[i]})
        }
    }

    for(let i = 0; i < ranges.length; i++){
        if(ranges[i].start !== ranges[i].end){
            ranges[i] = `${ranges[i].start}->${ranges[i].end}`;
        }else{
            ranges[i] = ranges[i].start.toString();
        }
    }

    return ranges;

}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));