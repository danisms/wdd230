const baseUrl = 'https://danisms.github.io/wdd230/';
const linksUrl = 'https://danisms.github.io/wdd230/data/links.json';

async function getLinkDatas(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.table(data)  // for testing purpose only
            displayLinks(data);
        }else {
            throw Error(await response.text())
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayLinks(weeks) {
    // get element
    const ul = document.querySelector('#link-list');

    // create elements and set values
    weeks.weeks.forEach(week => {
        // create elements
        const li = document.createElement('li');
        const ancor = document.createElement('a');
        
        // get values
        let weekName = week.week;
        // set attributes
        ancor.setAttribute('class', 'week');
        ancor.innerHTML = `${weekName}: `;
        // add acore to list
        li.appendChild(ancor);

        // get and add the links in the week
        let links = week.links;
        links.forEach(link => {
            const a = document.createElement('a');
            // get values
            let url = link.url;
            let title = link.title;
            // set attributes
            a.setAttribute('href', url);
            if (links[links.length - 1] == link) {
                a.innerHTML = ` ${title}`;
            }else {
                a.innerHTML = ` ${title} |`;
            }

            // add a to list
            li.appendChild(a);
        })
        // add list to underlist
        ul.appendChild(li);
    });

}

getLinkDatas(linksUrl);