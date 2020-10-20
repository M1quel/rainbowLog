function rainbowLog(string) {
    let colors = ["\x1b[31m", "\x1b[32m", "\x1b[33m", "\x1b[34m", "\x1b[35m", "\x1b[36m"]
    let output = "";
    for (let i = 0; i < string.length; i++) {
        let letter = string[i]
        if (letter == " ") {
            output += "\x1b[0m" + letter;
        }
        else{
            output += colors[i % colors.length] + letter;
        }
    }
    console.log(output + "\x1b[0m")
};
module.exports = rainbowLog;
