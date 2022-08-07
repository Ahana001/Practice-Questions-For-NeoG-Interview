var readlineSync = require('readline-sync');
var news = readlineSync.question("please describ news here : ");
var source = readlineSync.question("enter source of news here (ex. whatsapp,facebook,telegram) : ");

function checkFakeNews(src) {
    switch (src.toLowerCase()) {
        case "whatsapp": return true;
        case "facebook": return true;
        case "telegram": return true;
        case "fb": return true;
        case "tg": return true;
    }
}
if (checkFakeNews(source)) {
    console.log(`${news} is fake news, Don't believe things on FB and Whatsapp and telegram`);
} else {
    console.log(`${news}, may be right news`);
}