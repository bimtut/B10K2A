let biodata = `{
        "name": "Bima Ketut Ramuna Putra",
        "address": "Jalan Yos Sudarso 142 Tulungagung, Jawa Timur", 
        "hobbies": ["berenang", "ngoding", "baca", "game"],
        "is_married": false,
        "school": {
            "highSchool": "SMA Boyolangu",
            "university": "Telkom University"
        },
        "skills": [
            {"teaching": "aktif sebagai pengajar les privat sejak masih kuliah dan memiliki perhatian cukup besar pada dunia pendidikan"},
            {"programming": "sempat mengikuti bootcamp sebagai web developer namun belum berhasil menguasai skill yang betul-betul diinginkan. Saat ini masih terus ingin mengembangkan skill di bidang programming"},
            {"persistent": "terus berusaha hingga berhasil mencapai target yang diinginkan"}
        ]



    }`
    
function parseData(input) {
let data = JSON.parse(input)
return data
}

console.log(parseData(biodata))
