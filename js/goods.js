require(['config'],function(){
    // 模块化
    require(['jquery','zoom'],function($){
        jQuery(function($){
            //插入头尾
            $('#pageheader').load('header.html');
            $('#pagefooter').load('footer.html');

            //放大镜插件
            $('.box_img').gdsZoom({
                        position:'right'
                    });

            //商品飞入购物车
            $('.tocar').on('click',function(){
                //生成copyimg
                var $img = $('.box_img').find('img')
                var $copyimg =$('.box_img').find('img').clone()
                $copyimg.css({
                            position:'absolute',
                            left:$img.offset().left,
                            top:$img.offset().top,
                            width:430,
                            height:430,
                        });
                //加入页面
                $('body').append($copyimg);

                // 动画
                $copyimg.animate({
                    left:1180,
                    top:0,
                    width:30,
                    height:30,
                },function(){
                    $copyimg.remove();
                })

            });

        });


            //数据传递
            var imgbox = document.querySelector('.box_img')
            var search=location.search.slice(1);
            var params=search.split("&");
            var object = {}
            params.forEach(function(item){
                var arr=item.split("=");
                object[arr[0]]=arr[1]
            })


            imgbox.innerHTML=`<img src=${object.imgurl}></img>`;

            var put_price =document.querySelector('#put_price');

            put_price.innerHTML=`￥${object.price}`;

            put_name.innerText=decodeURI(object.name);

            //图片切换
            var tabUl = document.querySelector('.tabul').children
            for(var i=0;i<tabUl.length;i++){
                tabUl[i].onclick=function(){
                    for(var j=0;j<tabUl.length;j++){
                        if(this==tabUl[j]){
                            this.className='gaoliang'
                            imgbox.children[0].src="../img/list"+(j+1)+".png"
                        }
                        else{
                            tabUl[j].className=''
                           
                        }
                    }
                }
            }

            //点击左右滚动
             var btnLeft=document.querySelector('.btnleft')
             var btnRight=document.querySelector('.btnright')
             var Ul=document.querySelector('.tabul')
             var Left = 0
             btnLeft.onclick=function(){
                 Left-=72
                 if(Left<=-1008){
                     Left=0
                 }
                 Ul.style.left=Left+'px'
             }
             btnRight.onclick=function(){
                 Left+=72
                 if(Left>=0){
                     Left=-1008
                 }
                 Ul.style.left=Left+'px'
             }

             //获取cookie

             var addCart = document.querySelector('.buy');
             var put_qty = document.querySelector('#put_qty');
             var goodslist = [];

             let cookies=document.cookie;
             cookies=cookies.split(", ")||[];
             cookies.forEach(function(item){
                 var arr=item.split("=");
                 if(arr[0]==='goodslist'){
                     goodslist=JSON.parse(arr[1]);
                 }
            })    
             //添加商品到购物车
             addCart.onclick = function(){
                console.log(666)
                object.qty=put_qty.value;
                object.sumprice=put_qty.value*object.price;

                //去重
                for(var i=0;i<goodslist.length;i++){
                            if(goodslist[i].id ===object.id){
                                goodslist[i].qty=Number(goodslist[i].qty)+Number(put_qty.value);
                                break;
                            }
                        }
                if(i===goodslist.length){
                        // 通过按钮获取商品信息
                        goodslist.push(object);
                    }
                //写入cookie
                document.cookie = 'goodslist='+JSON.stringify(goodslist);
             }

            //飞入购物车存入cookie
             var tocar = document.querySelector('.tocar')

              tocar.onmouseup = function(){
                object.qty=put_qty.value;
                object.sumprice=put_qty.value*object.price;

                //去重
                for(var i=0;i<goodslist.length;i++){
                            if(goodslist[i].id ===object.id){
                                goodslist[i].qty=Number(goodslist[i].qty)+Number(put_qty.value);
                                break;
                            }
                        }

                if(i===goodslist.length){
                            // 通过按钮获取商品信息
                        goodslist.push(object);
                    }
                //写入cookie
                document.cookie = 'goodslist='+JSON.stringify(goodslist);
             }
    });
});