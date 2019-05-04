function cetakKarakter(row) {
    let kamus = '0123456789abcdefghijklmnopqrstuvwxyz'
    let temp = []
    if (typeof row != 'number') {
        console.log('parameter harus berisi angka !!')
    }
    for (let i = 0; i < row; i++) {
        let penampungan = ''
        for (let j = 0; j < 32; j++) {
            penampungan += kamus[Math.floor(Math.random() * 36)]
        }
        temp.push(penampungan)
    }
    
    for (let k = 0; k < temp.length; k++) {
        for (let l = k; l < temp.length; l++) {
            if (temp[k] === temp[l]) {
                let penampunganDalam = ''
                for (let j = 0; j < 32; j++) {
                    penampunganDalam += kamus[Math.floor(Math.random() * 36)]
                }
                temp[l] = penampunganDalam
            } 
        }
    }

    for (let m = 0; m < temp.length; m++) {
        console.log(temp[m])
    }
}

//test case
cetakKarakter(3)
