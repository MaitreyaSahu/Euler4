$(document).ready(function() {
   $('#result').hide();

   $('#btnRun').click(function () {
        var numberOfDigit = +$('#inputdigits').val();
        console.log(numberOfDigit);
        var res = getMaxPalindrom(numberOfDigit);
        console.table(res);
        $('#spanNum1').text(res[0]);
        $('#spanNum2').text(res[1]);
        $('#spanResult').text(res[2]);

        countAnimation();
    });
});

function countAnimation(){
$('#result').show();
    $('#spanResult').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('#spanNum1').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('#spanNum2').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}

    


 function isPalindrom(num) {
        var rem = 0;
        var rev = 0;
        var temp = num;
        do {
            rem = temp % 10;
            rev = rev * 10 + rem;
            temp = Math.floor(temp / 10);
        } while (temp);
        return rev == num ? true : false;
}

function getMaxPalindrom(digits){
    var max = 0;
    var num1 = 0;
    var num2 = 0;
    var count = 0;

    var numberOfDigit = 0;
    var minLimit = 10 ** (digits - 1);
    var maxLimit = (10 ** digits) - 1;

    for (var i = minLimit; i <= maxLimit; i++) {
        for (var j = i; j <= maxLimit; j++) {
            count++;
            var temp = i * j;
            if (temp >= max && isPalindrom(temp)) {            
                    //console.log(`${i} X ${j} = ${i * j}`);
                    max = temp;
                    num1 = i;
                    num2 = j;
            }
        }
    }

    console.log(`${num1} X ${num2} = $max}`);
    return [num1, num2, max]
  }
