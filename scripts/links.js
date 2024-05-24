const baseUrl = 'https://danisms.github.io/wdd230/';
const linksUrl = 'https://danisms.github.io/wdd230/data/links.json';

async function getLinkDatas(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.table(data)  // for testing purpose only
        }else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error);
    }
}