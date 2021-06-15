window.onload = getmyold;

function getmyold() {
    let birth = [2002, 11, 27];
    let check = 1;
    let today = new Date();
    let myold = document.getElementById("myold");
    if (today.getMonth() + 1 > birth[1] ||
        (today.getMonth() + 1 == birth[1] && today.getDate() >= birth[2])) {
        check = 0;
    }
    console.log(today.getMonth()+1, today.getDate());
    myold.textContent = `${today.getFullYear() - birth[0] - check}`;
}