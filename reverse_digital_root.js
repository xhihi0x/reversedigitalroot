/*global alert*/
/*jslint plusplus: true */
/*jshint -W041 */
/*jshint undef:true */
/*jushint unused:true*/
/*jshint loopfunc:true*/



/*
 * Digital Root
 *
 * @param n = number
 * @return a number, the digital root.
 */

function digitalRoot(n) {
    return n - 9 * Math.floor((n - 1) / 9);
}


/*
 *  Finds combinations from a Set [a,b,c]
 *  adapted from: http://blogs.msmvps.com/kathleen/2013/12/31/algorithm-find-all-unique-combinations-in-a-list/
 */
function combi(S){
    
    var ret = [];
    
    // The final number of sets will be 2^n, in this case 2^(n-1)
    var setCount = parseInt(Math.pow(2,S.length));
    
    //Start @ 1 to avoid empty set
    for (var mask =1; mask < setCount; mask++){
        var nestedList = [];
        
        for (var j = 0; j < S.length; j++){
            //each position in the list maps to a bit here.
            var pos = 1<<j;
            if ((mask & pos) == pos)
                nestedList[nestedList.length] = S[j];
        }
        
        ret[ret.length] = nestedList;
    }
    return ret;
}


//* Prints "a \n b \n c" from a set of sets. [[a,b], [b]]
function printCombi(S){
    var s = "";
    for (var i = 0; i < S.length; i++)
        s = s + S[i] + "\n \n";
    return s;
}





/*
 * Reverse Digital Root of a Set  ! Works!
 * 
 * this function goes thru the entire range and takes digital root to find the reverse digital root.
 * @param S = [a,b] | Set of all positive integers from a to b
 * @param dr +int | Target Digital Root
 */
function reverseDigitalRootByRange(S, dr) {
    
    //s to string, and n is a number counter
    var base, digiroot = 0, s = "", n = S[0]; //number counter
    //find the lowest number that adds to the digital root within the base
    for (i = 0; i < 9; i++) {
        digiroot = digitalRoot(n);
        if (digiroot === dr)
            base = n;
        n++;
    }
    
   
    s = s + "\n" + base;
    n = base;
    //base is correct, now add multiples of 9 until base is > than b in [a,b].
    
    var i = 0;
    while (n < S[1]){
        n = base + 9 * i; //from the base adding multiples of 9 (iterating upward the variable multiplying 9).
        
        if (n > S[S.length-1])  //stop if already over that range.
            break;
        
        s = s + "\n" + n; //include it in the string s
        i++;
    }
    
    if (base == undefined){  //how to test if s is null
        return "No reverse digital roots in that given range";

    }
    else{
        return "\n" + s;
    }
}  


/*
 *  Given a set of numbers like [1, 12, 13] and a dr, finds out which of that set made the target digital root.
 */
function reverseDigitalRoot(S, dr){
    var bullseye,i, s = "";
    
    //find all numbers that make that digital root.
    for (i = 0; i < S.length; i++)
        if (digitalRoot(S[i]) == dr){
            bullseye = S[i];
            
            s = s + " \n" + bullseye;

        }
    
    if (s == "")
        return "No matches.";
    
    return s;
}


/*
 *Takes a set of sets, like [[a,b],[b,c]] and makes it usable for reverseDigitalRoot() by making it like [ab, bc].
 * ds stands for "decent set"
 */
function ds(S){
    
    var i,j,DecentSet=[];

    for (i = 0; i < S.length; i++){
            var x = 0;

        
            for (j = 0; j < S[i].length;j++){

                x = x*10;
                x = x + S[i][j];
            }
            DecentSet[DecentSet.length] = x;


    }
    
    return DecentSet;
}

//untested really
function printSet(S){
    var i,s="";
    for (i=0; i < S.length; i++)
        s = s + S[i] + "\n \n ";
    return s;
}

/*
 * Tests functions
 * Tests Digital Root and Reverse Digital Root
 */

function test() {
//    this.d = 54321;
//    alert(this.d);
//    alert("digital root " + digitalRoot(this.d));
//    var dr = digitalRoot(this.d);
    
    //reverse digital root by range
//    alert("reverse digital root by range :" + reverseDigitalRootByRange([54000, 54322], dr));
    
//    alert("reverse digital root by range : " + reverseDigitalRootByRange([0,1],dr));
    
//    alert("reverse digital root by range : " + reverseDigitalRootByRange([0,1],124124));
    
    var onethrufour = combi([1,2,3,4]);

    alert("combi: of 1 - 4: {" + printCombi(onethrufour));
//    combi has the first one be an empty set.

//    
//    alert(digitalRoot(01));
//    
//    alert(reverseDigitalRoot([01, 12,13, 11, 10, 100],1));
//    alert(reverseDigitalRoot([0,1], 3));
//    alert("ds is " + ds(combi([1,2,3,4])));
//    alert("Set of ds is " + printSet(ds(combi([1,2,3,4]))));
    
    alert("reverse digital root " + reverseDigitalRoot(ds(combi([1,2,3,4])),1));
    alert(digitalRoot(1));
    alert(digitalRoot(1234));
    //what I need to do is if it is undefined, call 
}


