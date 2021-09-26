function hexagon(arg) {
    var len = (arg*2)-1,
        str = "",
        a = arg-1,
        c = 0,
        temp = a;
    for (let i = 1; i <= len; i++) {
        var b = 0;
        str = str + '\n';
        if (temp < len) {
            a+=1;
            temp = a;
        } else {
            a-=1;
            c+=1;
        }
        for (let j = 0; j < len*2; j++) {
            if (j >= (temp < len ? arg-i : c) && b < a) {
                str = str + "* ";
                b+=1;
            } else {
                if(b*2 > j) {
                    break;
                }
                str = str + " ";
            }
        }
    }
    console.log(str);
}


// Output:
// hexagon(5)

//     * * * * * 
//    * * * * * * 
//   * * * * * * * 
//  * * * * * * * * 
// * * * * * * * * * 
//  * * * * * * * * 
//   * * * * * * * 
//    * * * * * * 
//     * * * * * 