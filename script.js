const inventors = {
  james_gosling: {
    name: 'James Gosling', lang: 'Java',
    img: 'https://www.coolkidfacts.com/wp-content/uploads/2023/09/James-Gosling.jpg',
    bio: 'James Gosling led the team that created Java at Sun Microsystems.',
    born: '1955', origin: 'Canada'
  },
  guido_van_rossum: {
    name: 'Guido van Rossum', lang: 'Python',
    img: 'https://www.frenchweb.fr/wp-content/uploads/2023/08/guido-van-rossum.png',
    bio: 'Guido van Rossum created Python with an emphasis on readability.',
    born: '1956', origin: 'Netherlands'
  },
  dennis_ritchie: {
    name: 'Dennis Ritchie', lang: 'C',
    img: 'https://tse3.mm.bing.net/th/id/OIP.ekb6Ws-rnrU3Ev36t0PcxgHaKS',
    bio: 'Dennis Ritchie designed the C programming language.',
    born: '1941', origin: 'USA'
  },
  bjarne_stroustrup: {
    name: 'Bjarne Stroustrup', lang: 'C++',
    img: 'https://cacm.acm.org/wp-content/uploads/2025/01/012125.BLOG_.Bjarne-Stroustrup-350.jpg',
    bio: 'Bjarne Stroustrup created C++.',
    born: '1950', origin: 'Denmark'
  },
  brendan_eich: {
    name: 'Brendan Eich', lang: 'JavaScript',
    img: 'https://www.masaischool.com/blog/content/images/wordpress/2022/04/Brendan-Eich.png',
    bio: 'Brendan Eich created JavaScript.',
    born: '1961', origin: 'USA'
  },
  rasmus_lerdorf: {
    name: 'Rasmus Lerdorf', lang: 'PHP',
    img: 'https://tse3.mm.bing.net/th/id/OIP.jcEpg1S_HYQdHHT-mSSe3gHaHb',
    bio: 'Rasmus Lerdorf created PHP.',
    born: '1968', origin: 'Greenland/Denmark'
  },
  yukihiro_matsumoto: {
    name: 'Yukihiro Matsumoto', lang: 'Ruby',
    img: 'https://tse4.mm.bing.net/th/id/OIP.YUldvYIiBqgyX98se5zO0AHaHJ?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    bio: 'Yukihiro Matsumoto created Ruby.',
    born: '1965', origin: 'Japan'
  },
  anders_hejlsberg: {
    name: 'Anders Hejlsberg', lang: 'C#',
    img: 'https://tse1.mm.bing.net/th/id/OIP.ceTNc7ZK4IKzy93Vjpv01gHaE4?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
    bio: 'Anders Hejlsberg created C#.',
    born: '1960', origin: 'Denmark'
  },
  grace_hopper: {
    name: 'Grace Hopper', lang: 'COBOL',
    img: 'https://images.squarespace-cdn.com/content/v1/5f19d0798b32c705735ce878/1595547396387-UTFZWYGY8BZQ122I3910/grace-hopper-hopper-militarypportrait.jpeg',
    bio: 'Grace Hopper helped develop COBOL.',
    born: '1906', origin: 'USA'
  },
  john_mccarthy: {
    name: 'John McCarthy', lang: 'Lisp',
    img: 'https://onlinelibrary.wiley.com/cms/asset/0f768dba-2a97-482c-bfa4-50f73806a131/aaaibf01327-gra-0001-m.jpg',
    bio: 'John McCarthy invented Lisp.',
    born: '1927', origin: 'USA'
  }
};

const select = document.getElementById('inventor');
const portraitImg = document.getElementById('portraitImg');
const nameEl = document.getElementById('name');
const langEl = document.getElementById('lang');
const bioEl = document.getElementById('bio');
const bornEl = document.getElementById('born');
const originEl = document.getElementById('origin');
const portrait = document.getElementById('portrait');

function showInventor(key){
  const data = inventors[key];

  portraitImg.src = data.img;
  nameEl.textContent = data.name;
  langEl.textContent = data.lang;
  bioEl.textContent = data.bio;
  bornEl.textContent = 'Born: ' + data.born;
  originEl.textContent = 'Origin: ' + data.origin;

  if(key === 'james_gosling'){
    portrait.style.borderRadius = '10px';
    portraitImg.style.borderRadius = '10px';
    portrait.style.border = '3px solid #2563eb';
  } else {
    portrait.style.borderRadius = '50%';
    portraitImg.style.borderRadius = '50%';
    portrait.style.border = '3px solid #e2e8f0';
  }
}

showInventor(select.value);
select.addEventListener('change', e => showInventor(e.target.value));
