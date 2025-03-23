const user = {
    id: 101,
    name: "Eve",
    email: "eve@example.com",
    role: "admin",
};

function UserData(obj) {
    const key = prompt("찾고 싶은 key를 입력하세요.");

    if (key in obj) {
        console.log(obj[key]);
    } else {
        console.log("키 없음");
    }
}

UserData(user);
