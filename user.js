const BASE_URL = 'http://localhost:8000'
//1. load user ทั้งหมดออกมาจาก api
//2. นำuser ที่โหลดมาแสดงผลใส่เข้าไปใน html 

window.onload = async () => {
    await loadData();
}

const loadData = async () => {
    console.log('loaded');
    //1. load user ทั้งหมดออกมาจาก api
    const response = await axios.get('http://localhost:8000/users');
    console.log(response.data);

    //2.
    const userDOM = document.getElementById('user');
    let htmlData = '<div>'
    for (let i = 0; i < response.data.length; i++){
        let user = response.data[i];
        htmlData += `<div>
        ${user.id} ${user.firstname} ${user.lastname}
        <a href ='index.html?id=${user.id}'><button>Edit</button>
        <button class='delete' data-id='${user.id}')">Delete</button>"
        </div>`
    }

    htmlData += '</div>'
    userDOM.innerHTML = htmlData 

    //3. ,บ user
    const deleteDOMs = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteDOMs.length; i++){
        deleteDOMs[i].addEventListener('click',async (event) =>{
            const id = event.target.dataset.id;
            try{
                await axois.delete(`${BASE_URL}/users/${id}`);
                loadData(); //recursive function = เรียกใช้ฟังก์ชันตัวเอง
            } catch{
                console.log('error',error);
            }
        });
    }
}

