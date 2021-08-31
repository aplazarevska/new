function repeatMessage(message, repeatCount) {
    // make sure message is a string
    if (typeof(message) != "string") {
        throw ("message is not a string")
    };
    // make sure repeatCount is a number
    // if (typeof(repeatCount) != "number") {
    //     throw("repeatCount is not a number")
    // };
    if (isNaN(repeatCount)) {
        throw "repeatCount is not a number";
    }
    // try {
        
    // } catch {

    // }
    
    let messageToShow = "";
    for (let index = 0; index < repeatCount; index++) {
        messageToShow += message;
    }
    return messageToShow;
}

// console.log(repeatMessage("ana was here", 3));
console.log(repeatMessage("hello", 1));

module.exports = {
    repeatMessage
}

