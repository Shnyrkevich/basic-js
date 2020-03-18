class VigenereCipheringMachine {
    constructor(isMachine){
        this.machine = (isMachine === false);
    }

    encrypt( message, key) {
        if(!message || !key){
            throw new Error();
        }

        let exitStr = "";
        let key1 = "";

        message = message.toUpperCase();
        key = key.toUpperCase();

        for(let i = 0, j = 0; i < message.length; i++){
            if( alphabet.indexOf(message[i]) == -1){
                key1 += message[i];
            } else {
                if(j >= key.length) {
                    j = 0;
                }
                key1 += key[j];
                j++;
            }
        }
        for(let i = 0; i < message.length; i++){
            let position =  alphabet.indexOf(key1[i]) + alphabet.indexOf(message[i]);
            if(alphabet.indexOf(message[i]) == -1){
                exitStr += message[i];
            } else if( position <= 25 ){
                exitStr += alphabet[position];
            } else {
                exitStr += alphabet[position-26];
            }
        }

        if (this.machine) {
            return exitStr.split('').reverse().join('');
            
        } else {
            return exitStr;
        }
    }

    decrypt( enctyptedMessage, key) {
        if(!enctyptedMessage || !key){
            throw new Error();
        }

        let exitStr = "";
        let key1 = "";

        enctyptedMessage = enctyptedMessage.toUpperCase();
        key = key.toUpperCase();

        for(let i = 0, j = 0; i < enctyptedMessage.length; i++){
            if( alphabet.indexOf(enctyptedMessage[i]) == -1){
                key1 += enctyptedMessage[i];
            } else {
                if(j >= key.length) {
                    j = 0;
                }
                key1 += key[j];
                j++;
            }

        }

        for(let i = 0; i < enctyptedMessage.length; i++){
            let position = alphabet.indexOf(enctyptedMessage[i]) - alphabet.indexOf(key1[i]);
            if(alphabet.indexOf(enctyptedMessage[i]) == -1){
                exitStr += enctyptedMessage[i];
            } else if(position < 0){
                exitStr += alphabet[position +26];
            } else {
                exitStr += alphabet[position];
            }
        }
        if (this.machine) {
            return exitStr.split('').reverse().join('');
            
        } else {
            return exitStr;
        }
    }
}

module.exports = VigenereCipheringMachine;

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";