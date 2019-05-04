function cetakGambar(length) {
    if (length % 2 === 1) {
        for (let i = 0; i  < length; i++) {
            let text = ''
            if (i === Math.floor(length/2)) {
                for (let j = 0; j < length; j++) {
                    text += '* '
                }
            } else {
                for (let j = 0; j < length; j++) {
                    if (j === 0 || j === length-1) {
                        text += '* '
                    } else {
                        text += '= '
                    }
                }
            }
            console.log(text)
        }
    } else {
        console.log('perintah tidak dapat dilaksanakan !\nparameter harus angka ganjil')
    }
}
//test case
cetakGambar(6)
