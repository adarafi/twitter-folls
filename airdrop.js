const fetch = require('node-fetch');
const randomstring = require('randomstring');
const readline = require("readline-sync");
const delay = require("delay")
const fs = require("fs-extra")
const cheerio = require('cheerio')
const { URLSearchParams } = require("url")


const getlink = (gatel) => new Promise((resolve, reject) => {
    fetch('https://toolkity.com/twitter/free-twitter-followers/', { 
		method: 'GET', 
		header: {
			'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
			'Accept-Encoding': 'gzip, deflate, br',
			'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
			'Cookie': `__gads=ID=f6a99b6cab6eac33-22c30ecba5cf0007:T=1641325958:RT=1641325958:S=ALNI_Mbud4woxBe4F3Db2wGi45zmR_rh4A`,
			'Sec-Fetch-Mode': 'navigate',
			'Sec-Fetch-Site': 'same-origin',
			'Upgrade-Insecure-Requests': 1,
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0',
		}
		})
    .then(res => res.text())
    .then(text => {
        const $ = cheerio.load(text);
        const src = $("#twitterFollowersApp > div:nth-child(1) > div > div > div.card-body > form > div:nth-child(3) > a").text()
        resolve(src);
    })
    .catch(err => reject(err));
});

const farming = (token) => new Promise((resolve, reject) => {
	const bodys = {
		code: token
	}
	
    fetch('https://toolkity.com/twitter/free-twitter-followers/', { 
		method: 'POST',
		body: JSON.stringify(bodys),	
		header: {
			'Accept': 'application/json, text/plain, */*',
            'Accept-Encoding': 'gzip, deflate, br',
			'Accept-Language': 'id,en-US;q=0.7,en;q=0.3',
			'Content-Type': 'application/json',
			'Host': 'toolkity.com',
			'Origin': 'https://toolkity.com',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:95.0) Gecko/20100101 Firefox/95.0',
		}		
	})
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});



(async () => {
	for (var i = 0; i < 100000000; i++){
		try {
			const gatel = await getlink
			console.log(gatel)
			await delay (5000);
			const token = readline.question('input token: ')
			const play = await farming (token)
			console.log(play)
    } catch (e) {
        console.log(e)
		await delay (5000);
 }
}
})()