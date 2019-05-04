let besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let kecil = 'abcdefghijklmnopqrstuvwxyz'
let numer = '0123456789'
let simbol = '~!@#$%^&*()_+=-`|}{[]:;?/>.<,'

function is_username_valid (data) {
    if (data.length === 8 ) {
        let allRight = true
        for (let i = 0; i < data.length; i++) {
            let flag =  false
            for (let j = 0; j < kecil.length; j++) {
                if (data[i] == kecil[j]) {
                    flag =  true
                    j = kecil.length
                }
            }
            if (flag == false) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

function is_password_valid (data) {
    let big  = 0, small = 0, symbol = 0, num = 0

    if (data.length >= 8) {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < besar.length; j++) {
                if (data[i] === besar[j]) {
                    big = 1
                }
            }
            for (let j = 0; j < kecil.length; j++) {
                if (data[i] === kecil[j]) {
                    small = 1
                }
            }
            for (let j = 0; j < numer.length; j++) {
                if (data[i] === numer[j]) {
                    num = 1
                }
            }
            for (let j = 0; j < simbol.length; j++) {
                if (data[i] === simbol[j]) {
                    symbol = 1
                }
            }
        }
        let total = big + small + symbol + num

        if (total === 4) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
//test case
console.log(is_username_valid('hhhhkhhh'))
console.log(is_password_valid('Bim6k9(jabdja'))
