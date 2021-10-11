//maskify the digits of the credit card number and leave the 
//last four digits as they are 
function maskify(cc) {
    if (typeof cc === 'string') {
        console.alert('Not Valid Credit Card Number');
    }
    else {
        cc = String(cc);
    }
    let untilLastFour = cc.substr(0, cc.length - 4)
    let lastFour = cc.substr(cc.length - 4)
    return untilLastFour.replace(/\d/g, '#') + lastFour;
}