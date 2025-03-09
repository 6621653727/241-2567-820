const validateData = (userData) => {
    let errors = []
    if (!userData.firstname) {
        errors.push('กรุณากรอกชื่อ');
    }
    if (!userData.lastname) {
        errors.push('กรุณากรอกนามสกุล');
    }
    if (!userData.age) {
        errors.push('กรุณากรอกอายุ');
    }
    if (!userData.gender) {  // แก้ไข: เพิ่ม { เพื่อให้เงื่อนไขถูกต้อง
        errors.push('กรุณาเลือกเพศ');
    }
    if (!userData.description) {
        errors.push('กรุณากรอกข้อมูลตัวเอง');
    }
    if (!userData.interests) {
        errors.push('กรุณาเลือกความสนใจ');
    }
    return errors;
};

const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name="firstname"]')
    let lastnameDOM = document.querySelector('input[name="lastname"]')
    let genderDOM = document.querySelector('input[name="gender"]:checked') || {}
    let ageDOM = document.querySelector('input[name="age"]');
    let interestDOMs = document.querySelectorAll('input[name="interest"]:checked') || {}
    let descriptionDOM = document.querySelector('textarea[name="description"]')

    let messageDOM = document.getElementById('message');
    try {
        let interest = ''
        for (let i = 0; i < interestDOMs.length; i++) {
            interest += interestDOMs[i].value
            if (i < interestDOMs.length - 1) {
                interest += ','
            }
        }
        let userData = {
            firstname: firstNameDOM.value,
            lastname: lastnameDOM.value,
            age: ageDOM.value,
            gender: genderDOM.value,
            description: descriptionDOM.value,
            interests: interest
        };

        console.log('submitData', userData);
        //nst errors = validateData(userData);
        //if (errors.length > 0) {
           // throw {
               // message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
               // errors: errors
        //}
        //const result = await continue.query('INSERT INTO users SET ?', user);
     

        const response = await axios.post('http://localhost:8000/users', userData);
        console.log('response', response.data);
            messageDOM.innerText = 'บันทึกข้อมูลเรียบร้อย'
            messageDOM.className = 'message success'
    } catch (error) {
        console.log('error message', error.message)
        console.log('error', error.errors)
        if (error.response) {
            console.log(error.response)
            error.message = error.response.data.message
            error.errors = error.response.data.errors
        }
        let htmlData = '<div>'
        htmlData += `<div>${error.message}</div>` // แก้ไข: เปลี่ยนวิธีการใช้ Template Literal
        htmlData += '<ul>'
        for (let i = 0; i < error.errors.length; i++) {
            htmlData += `<li>${error.errors[i]}</li>` // แก้ไข: ใช้ <li> อย่างถูกต้อง
        }
        htmlData += '</ul>'
        htmlData += '</div>'

        messageDOM.innerHTML = htmlData // แก้ไข: เปลี่ยนจาก innerText เป็น innerHTML เพื่อให้แสดงผลเป็น HTML
        messageDOM.className = 'message danger'
    }
};
