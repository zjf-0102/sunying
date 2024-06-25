let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "bgm.mp3");
     x.setAttribute("preload", "preload");
     x.setAttribute("autoplay",'autoplay');

// 打字效果
let i =0
let str = '嘿嘿嘿！小孙同学！<怎么会有人喝完酒这么可爱啊，哈哈哈哈哈，跟个小朋友一样，哈哈哈哈哈！<说点正经的，我这人本来不太会聊天的，有时候只是想逗你开心一下，却弄巧成拙没少惹你生气，感谢小孙同学每次都原谅我，嘿嘿嘿。从刚认识到现在，已经四个多月了呀，我们聊了好多好多，遇到开心的事情会想和你分享，遇到误会你也会很耐心地跟我沟通，有人还傻傻的看不出来我喜欢你！<我每次去找你，你都问我来干嘛，来玩儿啥，但其实我只是想见你呀，只要是陪着你，干啥都行，嘿嘿嘿！<孙颖，在我心里，你是很重要很重要的那个人，我喜欢你，可以做我女朋友吗？'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },100);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 3000);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
