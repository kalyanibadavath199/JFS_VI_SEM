const inventors = {
  james_gosling: {
    name: 'James Gosling', lang: 'Java',
    img: 'https://www.coolkidfacts.com/wp-content/uploads/2023/09/James-Gosling.jpg',
    bio: 'Creator of Java',
    born: '1955', origin: 'Canada'
  },
  guido_van_rossum: {
    name: 'Guido van Rossum', lang: 'Python',
    img: 'https://www.frenchweb.fr/wp-content/uploads/2023/08/guido-van-rossum.png',
    bio: 'Creator of Python',
    born: '1956', origin: 'Netherlands'
  },
  dennis_ritchie: {
    name: 'Dennis Ritchie', lang: 'C',
    img: 'https://tse3.mm.bing.net/th/id/OIP.ekb6Ws-rnrU3Ev36t0PcxgHaKS',
    bio: 'Creator of C',
    born: '1941', origin: 'USA'
  },
  bjarne_stroustrup: {
    name: 'Bjarne Stroustrup', lang: 'C++',
    img: 'https://cacm.acm.org/wp-content/uploads/2025/01/012125.BLOG_.Bjarne-Stroustrup-350.jpg',
    bio: 'Creator of C++',
    born: '1950', origin: 'Denmark'
  },
  brendan_eich: {
    name: 'Brendan Eich', lang: 'JavaScript',
    img: 'https://www.masaischool.com/blog/content/images/wordpress/2022/04/Brendan-Eich.png',
    bio: 'Creator of JavaScript',
    born: '1961', origin: 'USA'
  },
  rasmus_lerdorf: {
    name: 'Rasmus Lerdorf', lang: 'PHP',
    img: 'https://tse3.mm.bing.net/th/id/OIP.jcEpg1S_HYQdHHT-mSSe3gHaHb',
    bio: 'Creator of PHP',
    born: '1968', origin: 'Denmark'
  },
  yukihiro_matsumoto: {
    name: 'Yukihiro Matsumoto', lang: 'Ruby',
    img: 'https://th.bing.com/th/id/R.85e51124c4b1fa0c5376a3e5a0720327',
    bio: 'Creator of Ruby',
    born: '1965', origin: 'Japan'
  },
  anders_hejlsberg: {
    name: 'Anders Hejlsberg', lang: 'C#',
    img: 'https://th.bing.com/th/id/R.71e4cd73b64ae082b3cbddd58e9bf4d6',
    bio: 'Creator of C#',
    born: '1960', origin: 'Denmark'
  },
  grace_hopper: {
    name: 'Grace Hopper', lang: 'COBOL',
    img: 'https://images.squarespace-cdn.com/content/v1/5f19d0798b32c705735ce878/1595547396387-UTFZWYGY8BZQ122I3910/grace-hopper-hopper-militarypportrait.jpeg',
    bio: 'COBOL Pioneer',
    born: '1906', origin: 'USA'
  },
  john_mccarthy: {
    name: 'John McCarthy', lang: 'Lisp',
    img: 'https://onlinelibrary.wiley.com/cms/asset/0f768dba-2a97-482c-bfa4-50f73806a131/aaaibf01327-gra-0001-m.jpg',
    bio: 'Creator of Lisp',
    born: '1927', origin: 'USA'
  }
};

const select = document.getElementById('inventor');
const portraitImg = document.getElementById('portraitImg');
const portrait = document.getElementById('portrait');

function showInventor(key){
  const d = inventors[key];

  portraitImg.src = d.img;
  name.textContent = d.name;
  lang.textContent = d.lang;
  bio.textContent = d.bio;
  born.textContent = "Born: " + d.born;
  origin.textContent = "Origin: " + d.origin;

  // ✅ James Gosling Square Only
  if(key === "james_gosling"){
    portrait.style.borderRadius = "10px";
    portraitImg.style.borderRadius = "10px";
    portrait.style.border = "3px solid #2563eb";
  } else {
    portrait.style.borderRadius = "50%";
    portraitImg.style.borderRadius = "50%";
    portrait.style.border = "3px solid #e2e8f0";
  }
}

// default
showInventor("james_gosling");

select.addEventListener("change", e => {
  showInventor(e.target.value);
});
