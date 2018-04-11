require(['config'],function(){
    // 模块化
    require(['jquery','common'],function($){

             //bannar轮播图
        let focus = document.querySelector('.focus');
        let ul = focus.querySelector('ul');

        ul.appendChild(ul.children[0].cloneNode(true));

        let len = ul.children.length;
        let index = 0;

        let page = document.createElement('div');
        page.classList.add('page');

        for(let i=1;i<len;i++){
            let span = document.createElement('span');
            span.innerText = i;

            if(i==index+1){
                span.classList.add('active');
            }
            page.appendChild(span);
        }

        focus.appendChild(page);

        ul.style.width = 1280*len + 'px';

        let timer = setInterval(autoPlay,3000);

        focus.addEventListener('mouseenter',()=>{
            clearInterval(timer);
        });

        focus.addEventListener('mouseleave',()=>{
            timer = setInterval(autoPlay,3000);
        });

        // 事件委托,切换轮播图片
        focus.addEventListener('click',e=>{
            if(e.target.parentNode.classList.contains('page')){
                index = e.target.innerText-1;

                show();
            }
        });


        function autoPlay(){
            index++;
            show();
        }


        function show(){
            if(index>=len){
                ul.style.left = 0;
                index = 1;
            }
            let target = -index*1280;
            animate(ul,{left:target});

            page.querySelector('.active').classList.remove('active');

            if(index<len-1){
                page.children[index].className = 'active';
            }else{
                page.children[0].className = 'active';
            }
        }


            //Ajax数据生成
            // let xhr = new XMLHttpRequest();
            // let arr_state = [200,304];
            // let dl = document.querySelector('#bestgood')
            // xhr.onload = function(){
            //     if(arr_state.indexOf(xhr.status)>=0){
            //         let res =JSON.parse(xhr.responseText);
            //         dl.innerHTML=res.map(function(items,idx){
            //             return`
            //                 <dd class=dd${idx+1}>
            //                 <a href="html/list.html"><img src=${items.imgurl}></img></a>
            //                     <p>${items.name}</p>
            //                     <h2>￥${items.sale}</h2>
            //                     <h3>参考价:￥${items.price}</h3>
            //                 </dd>` 
            //         }).join('');
            //     }
            // }
            // xhr.open('get','api/data/bestgoods.json',true);
            // xhr.send();


        //吸顶效果
        var search = document.querySelector('.header_search');
        
        window.onscroll = function(){

            var scrollTop = window.scrollY;

            if(scrollTop >= 30){
                search.classList.add('fixed');
            }else{
                search.classList.remove('fixed');
            }
        }
    });
});