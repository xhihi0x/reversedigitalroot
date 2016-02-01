/*global alert, $, digitalRoot, reverseDigitalRootByRange, reverseDigitalRoot, ds, combi, replace*/
/*jslint plusplus: true */


function invalidInput(){
    alert("invalid input! please type a positive integer");
    return;
}


/*
 * The Control Tower
 * Calls functions and parser
 * val = which function to call
 * data = the data to pass
 */
function do_things(func){
    
    switch (func){
        case "DR":  //digital root

            var input = parseInput("digital_root_input");
            
        $("#digital_root_output").html(digitalRoot(input)+"");
            break; 
            
        case "RDR":  //reverse digital root (combination)
            var S = parseSet(parseInput("set_combi")).map(Number);
            var dr = parseInput("target_dr_combi");
            S = ds(combi(S)); //parsed combination of  S
            $("#rdr_output").html(reverseDigitalRoot(S,dr));
            $("#rdr_toggle").addClass("hidden");


            break;
        
        case "RDRR": //reverse digital root by range
            var range0 = parseInput("range0");  
            var range1 = parseInput("range1");
            dr = parseInput("target_dr_by_range"); //target_dr_by_range
            var range = [range0,range1];
            var rdrr = reverseDigitalRootByRange(range,dr);
            $("#rdrr_toggle").addClass("hidden");
            $("#reverse_output_by_range").html(reverseDigitalRootByRange(range,dr));  
            break;
        
        case "999RDR":
            var set = [1,2,3,4,5,6,7,8,9];
            dr = parseInput("target_dr_999");
            $("#reverse_output_999").html(reverseDigitalRoot(ds(combi(set)), dr ));
            break;
        
    }
    
    return;
    
}


/*
 * To parse input into Integers, selects by id
 */
function parseInput(html_selector) {
    "use strict";

    var raw_input = $("#" + html_selector).val(), i, len;

    //special parse for set combination.
    if (html_selector == "set_combi"){
        return raw_input;
    }

    for (i = 0, len = raw_input.length; i < len; i++) {
        if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].indexOf(raw_input.charAt(i)) < 0) {
            alert("invalid input! please type a positive integer");
            return;
        }
    }

    if (len === 0){
        alert("no input detected");
        return;
    }

    //if target digital root, which should be a small integer.
    if ($("#" + html_selector).hasClass("target_dr"))
        if ((len > 1)){
            alert("Digital roots are single digit integers by definition");
            return;}       
    

    
    
    //now that input is checked, convert to integer
    var input = parseInt(raw_input, 10);

    return input;
}


/*
 * parses the set.
 */
function parseSet(raw_input){

    
    //check if input is all right
    
     for (var i = 0, len = raw_input.length; i < len; i++) {


         if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",","," "].indexOf(raw_input.charAt(i)) < 0) {
            alert("invalid input/format! Example: 0,1,2,3 ");
            return;
        }
         
         
         
         
         
         if (raw_input.charAt(i) == " ")
             raw_input.indexOf(i);
        
    }
    
    
    var S = [];
    
    
    var j,input = raw_input.split(",");

  
    input = input.filter(Number);
    
    
    //show
    $("#setused").html(input + "");
    $("#setusedp").removeClass("hidden");
    

    return input;
    

}


