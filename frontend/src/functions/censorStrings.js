export default function censorStrings(input) {
    const temp = String(input);
    const censorWords = ["fuck", "shit", "bitch"];
    for (let i=0; i<censorWords.length; i++) {
        if (temp.includes(censorWords[i])) {
            return true;
        }
    }
    return false;

}