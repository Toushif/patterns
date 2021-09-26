function traingle(arg) {
    var len = (arg*2)-1;
    var str = "";
    for (let i = 0; i < arg; i++) {
        var a = 0;
        str = str + '\n';
        for (let j = 0; j < len; j++) {
            if (j >= Math.ceil(len/2)-i && a <= i) {
                str = str + "* ";
                a+=1;
            } else {
                if(a > i) {
                    break;
                }
                str = str + " ";
            }
        }
    }
    console.log(str);
}

// output:
// traingle(5)

//      * 
//     * * 
//    * * * 
//   * * * * 
//  * * * * * 