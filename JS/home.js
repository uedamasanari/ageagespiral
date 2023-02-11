let nhk;
window.onload =function(){
setTimeout("seni()",5*1000);
axios
    .post('https://api.nhk.or.jp/v2/pg/genre/400/g1/0000/2023-02-17.json?key=npMMRYTXmAkwXKmQctzwDkPFFwsooICW', {
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(function (res) {
        
        const getDate = res.data.list.g1[0].start_time;
        let target =document.getElementById('dataContainer');
        let subDate = getDate.substring(5,10);
        target.innerHTML = subDate ;
           
    for(let i=0; i<res.data.list.g1.length; i++){
        const oya = document.getElementById("oya");
        let block = document.createElement("div");
        block.className = "block";
        oya.appendChild(block);

        let janru = document.createElement("div");
        janru.className = "janru";
        block = document.getElementsByClassName("block")[i];
        block.appendChild(janru);

        let img = document.createElement("img");
        img.src = "./img/NEWSのイラスト素材.png";
        block = document.getElementsByClassName("janru")[i];
        block.appendChild(img);

        let bangumi = document.createElement("div");
        bangumi.className = "bangumi";
        // child.textContent = res.data.list.g1[0].title;
        block = document.getElementsByClassName("block")[i];
        block.appendChild(bangumi);

        let title = document.createElement("h3");
        title.className = "title";
        title.textContent = res.data.list.g1[i].title;
        // title.style = "color:red; font-size:100px;"
        block = document.getElementsByClassName("bangumi")[i];
        block.appendChild(title);

        let time = document.createElement("h3");
        let nowtime = res.data.list.g1[i].start_time;
        let subDate= nowtime.substring(11,16);

        time.className = "times";
        time.textContent = subDate;
        // title.style = "color:red; font-size:100px;"
        block = document.getElementsByClassName("bangumi")[i];
        
        block.appendChild(time);

        //     getDate = res.data.list.g1[0].start_time;
        // let target =document.getElementById('time');
        // let subDate = getDate.substring(12,16);
        // target.innerHTML = subDate ;
    }

    });
}
function seni(){
    location.href = './home.html';
}



// const oya = document.getElementById("a");

// const ele = document.createElement('p');
// ele.id = "p_ko";
// oya.appendChild(ele);


// console.log(oya);