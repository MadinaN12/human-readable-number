module.exports = function toReadable (number) {
    var word = {
        1:"one", 
        2:"two", 
        3:"three", 
        4:"four", 
        5:"five",
        6:"six", 
        7:"seven", 
        8:"eight", 
        9:"nine", 
        11:"eleven", 
        12:"twelve", 
        13:"thirteen", 
        14:"fourteen", 
        15:"fifteen", 
        16:"sixteen", 
        17:"seventeen", 
        18:"eighteen", 
        19:"nineteen", 
        10:"ten", 
        20:"twenty", 
        30:"thirty", 
        40:"forty", 
        50:"fifty", 
        60:"sixty", 
        70:"seventy", 
        80:"eighty", 
        90:"ninety" 
    }; 
      
    var n = String(number); 
    var len = n.length;
    if (len === 1 && n === '0') return 'zero'; 
    
    var d = 3 - (len % 3);
    
    if (d == 2) { n = '00' + n; }
    if (d == 1) { n = '0' + n; }
    
    var ans = [];
    var units = n[2];
    var tens = n[1];
    var dec = tens + units;
    var compDec = tens + '0';
    var hundreds = n[0];
    
    var i = 0;
    
    if (hundreds !== '0') { ans[i++] = word[hundreds]; ans[i++] = 'hundred'; }
    
    if (tens !== '0') {
    if (dec in word) { ans[i++] = word[dec]; return ans.join(' '); }
    
    if (compDec in word) { ans[i++] = word[compDec]; }
    }
    
    if (units !== '0' && units in word) { ans[i++] = word[units]; }

    return ans.join(' ');
}
