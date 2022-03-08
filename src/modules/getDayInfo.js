const getDayInfo = (selectData) => {

    let data = new Date(selectData);
    let year = data.getFullYear();
    let month = data.getMonth();
    let day = data.getDate();
    let fMonth;

    switch (month) {
        case 0: fMonth="января"; break;
        case 1: fMonth="февраля"; break;
        case 2: fMonth="марта"; break;
        case 3: fMonth="апреля"; break;
        case 4: fMonth="мае"; break;
        case 5: fMonth="июня"; break;
        case 6: fMonth="июля"; break;
        case 7: fMonth="августа"; break;
        case 8: fMonth="сентября"; break;
        case 9: fMonth="октября"; break;
        case 10: fMonth="ноября"; break;
        case 11: fMonth="декабря"; break;
    }
    console.log("Сегодня " + day + " " + fMonth + " " + year + " года");

}

export default getDayInfo