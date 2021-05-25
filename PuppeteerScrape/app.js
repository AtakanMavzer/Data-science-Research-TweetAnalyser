
const puppeteer = require('puppeteer');
const ar = [];
let index = 0;
(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://twitter.com/elonmusk');
    await page.setViewport({
        width: 1200,
        height: 800
    });
    await page.waitFor(2000);
    let resText = []

    let res = [], time = [], timeText = [], idx = [], retweet=[],likes=[],comments=[];
    for (let i = 0; i < 2; i++) {
        let js = await autoScroll(page).then(console.log(i));
        for (let z = 0; z < js[0].length; z++) {
            res.push(js[0][z]);
            time.push(js[1][z]);
            timeText.push(js[2][z]);
            retweet.push(js[3][z]);
            likes.push(js[4][z]);
            comments.push(js[5][z]);
        }

    }

    res = res.filter((x, i, a) => {
        if (a.indexOf(x) === i) { idx.push(i); }
        return res[i];
    });
    //console.log("filter ", res);
    finalJ = {};
    for (let a = 0; a < idx.length; a++) {
        finalJ[`${a}`] =
        {
            "tweet": res[idx[a]],
            "time": time[idx[a]],
            "timeText": timeText[idx[a]],
            "retweet": retweet[idx[a]],
            "likes":likes[idx[a]],
            "comments":comments[idx[a]]
        }
    }
    console.log(finalJ);
    await browser.close();
})();

async function autoScroll(page) {
    let results = await page.$$eval('article div[lang]', (tweets) => tweets.map((tweet) => tweet.textContent));
    let time = await page.$$eval('article  time', (tweets) => tweets.map((tweet) => tweet.getAttribute('datetime').substring(0, 4)));
    let timeText = await page.$$eval('article  time[datetime]', (tweets) => tweets.map((tweet) => tweet.textContent));
    let retweet = await page.$$eval('article div[data-testid="retweet"]', (tweets) => tweets.map((tweet) => tweet.textContent));
    let likes = await page.$$eval('article div[data-testid="like"]', (tweets) => tweets.map((tweet) => tweet.textContent));
    let comments = await page.$$eval('article div[data-testid="reply"]', (tweets) => tweets.map((tweet) => tweet.textContent));

    await page.evaluate(async () => {
        await new Promise((resolve, reject, page) => {
            var totalHeight = 0;
            var distance = 200;
            var timer = setInterval((page) => {

                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                console.log("th ", totalHeight);
                if (totalHeight % 5000 == 0) {
                    window.scrollBy(0, -2500);
                }
                if ((totalHeight > 3000)) {
                    //|| totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve(page);
                }
            }, 200);
        })
    });
    resJ = {}

    /* results.forEach(element => {
         console.log(" whateva ", element);
     })*/
    for (i = 0; i < results.length; i++) {
        a = {
            "tweet": results[i],
            "date": time[i],
            "timeText": timeText[i],
            "retweet": retweet[i],
            "likes":likes[i],
            "comments":comments[i]

        }
        resJ[`tweet_${index}`] = a
        index++;

    }
    //console.log(resJ);
    ar.push(results);


    return [results, time, timeText,retweet,likes,comments];

    //return resJ;
}
