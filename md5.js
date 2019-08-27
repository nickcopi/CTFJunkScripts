cat index.js
const md5 = require('md5');

let chars = [];
for(i = 0;i<256;i++){
        chars.push(String.fromCharCode(i));
}

const key = 'CD04302CBBD2E0EB259F53FAC7C57EE2'.toLowerCase();

let getHash = (m,i)=>{
        if(i <= 0) return m;
        return getHash(md5(m),i-1);
}
chars.forEach(m=>{
        //chars.forEach(n=>{
                //chars.forEach(o=>{
                        hash = getHash(m,10).toLowerCase();
                        //console.log(hash);
                        if(hash === key){
                                console.log(m+n+o);
                                process.exit();
                        }
                //});
        //});
});
