function FindContinuousSequence(sum)
{
    // write code here
    var start = 1,
        end = 2;
    var sumTemp = 0;
    var array = [1,2];
    var ans = [];
    if (sum < 3) return [];
    while (start <= Math.ceil(sum / 2)) {
        sumTemp = (start + end) * (end - start + 1) / 2;
        if(sumTemp == sum) {
            ans.push(array.concat());
            array.shift();
            start++;
            end++;
            array.push(end);
        }else if(sumTemp > sum) {
            array.shift();        
            start++;
        } else {
            end++;
            array.push(end);
        }
    }
    return ans;
}