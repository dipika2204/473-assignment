var oneparameter = function (input, fname) {
    var num = document.getElementById(input).value;
    var temp = [];
    temp = num.split(",");
    var a;
    for (a = 0; a < temp.length; a++) {
        temp[a] = parseInt(temp[a], 10);
    }
    switch (fname) {
        case 'exercise1':
            document.getElementById("add_output1").innerHTML = exercise1(temp).toString();
            break;
        case 'exercise2':
            document.getElementById("add_output2").innerHTML = exercise2(temp);
            break;
        case 'exercise3':
            document.getElementById("add_output3").innerHTML = exercise3(temp).toString();
            break;
        case 'exercise4':
            document.getElementById("add_output4").innerHTML = exercise4(temp).toString();
            break;
        case 'max':
            document.getElementById("add_output8").innerHTML = max(temp);
            break;
        case 'oneeven':
            document.getElementById("add_output9").innerHTML = oneeven(temp);
            break;
        case 'alleven':
            document.getElementById("add_output10").innerHTML = alleven(temp);
            break;
        default:
            alert("Wrong input");
    }

};

var twoparameter = function (input1, input2, fname) {
    var num = document.getElementById(input1).value;
    var num1 = document.getElementById(input2).value;
    var temp = [];
    temp = num.split(",");
    switch (fname) {
        case 'arrayContains':
            document.getElementById("add_output5").innerHTML = arrayContains(temp, num1).toString();
            break;
        case 'arrayContainsTwo':
            document.getElementById("add_output6").innerHTML = arrayContainsTwo(temp, num1).toString();
            break;
        default:
            alert("Wrong input");
    }

};

//1st question
var exercise1 = function (num) {
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    return sum / num.length;
};

//2nd question
var exercise2 = function (num) {
    num.sort(function (a, b) { return a - b; });
    var len = num.length;
    return num[len - 1];
};

//3rd question
var exercise3 = function (num) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            return true;
        }
    }
    return false;
};

//4th question
var exercise4 = function (num) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            return false;

        }
    }
    return true;
};


//5th question
//in
var arrayContains = function (str1, str2) {
    for (var i = 0; i < 6; i++) {
        if (str1[i] == str2) {
            return true;

        }
    }
    return false;
};

//6th question
var arrayContainsTwo = function (str8, str9) {
    var count = 0;
    for (var i = 0; i < 6; i++) {
        if (str8[i] == str9) {
            count++;
        }
    }
    if (count >= 2) {
        return true;
    }
    else {
        return false;

    }
};

//improvise
var arrayContainsNTimes = function (str3, str4, count) {
    var num = document.getElementById(str3).value;
    var num1 = document.getElementById(str4).value;
    var count1 = document.getElementById(count).value;
    var temp = [];
    temp = num.split(",");
    var count2 = 0;
    for (var i = 0; i < 6; i++) {
        if (temp[i] == num1) {
            count2++;
        }
    }
    if (count1 == count2) {
        document.getElementById("add_output7").innerHTML = ('True');
    }
    else {
        document.getElementById("add_output7").innerHTML = ('False');
    }

};



//underscore:
//max
//var numbers = [10, 5, 100, 2, 1000];
var max = function (num) {
    return _.max(num);
};
//even
var oneeven = function (num1) {
    var even = _.some(num1, function (num) { return num % 2 === 0; });
    return even;
};

//all even
var alleven = function (num1) {
    var all_even = _.every(num1, function (num) { return num % 2 === 0; });
    return all_even;
};