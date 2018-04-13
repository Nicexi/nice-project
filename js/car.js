require(['config'],function(){
    // 模块化
    require(['jquery'],function($){

            //插入头尾
            $('#pageheader').load('header.html');
            $('#pagefooter').load('footer.html');

            var goodslist= []

            //读取cookie
             let cookies=document.cookie;

             cookies=cookies.split(", ")||[];

             cookies.forEach(function(item){
                 var arr=item.split("=");
                 if(arr[0]==='goodslist'){
                     goodslist=JSON.parse(arr[1]);
                 }
            })

            // 写入页面
                
            render()

            function render(){
                var car_ul = document.querySelector('#car_ul');

                var total = 0;

                car_ul.innerHTML=goodslist.map(function(item){
                            total+=item.price*item.qty
                    return`
                            <li  data-id=${item.id}>
                                <img src=${item.imgurl}>
                                <p>${decodeURI(item.name)}</p>
                                <a class="del">&times;</a>
                                <i>￥${item.price*item.qty}</i>
                                <input type="text" value=${item.qty}>
                                <span>￥${item.price}</span>
                            </li>
                    `
                    }).join('')
                //写入所有总价和
                var total_price = document.querySelector('#total_price');

                total_price.innerHTML='￥'+ total;
            }
            


            //点击X删除当前商品行商品

            car_ul.onclick = function(e){
                if(e.target.className=='del'){
                    
                    var id = e.target.parentNode.getAttribute('data-id');

                        for(var i=0;i<goodslist.length;i++){
                            if(goodslist[i].id === id){
                                goodslist.splice(i,1);
                                break;
                            }
                        }
                }
                //重新写入cookie
                 document.cookie = 'goodslist='+JSON.stringify(goodslist);

                    render();
            }

            //点击清空购物车
            var clearcar = document.querySelector('#clearcar');

            clearcar.onclick = function(){

                var now = new Date();
                now.setDate(now.getDate()-10);

                // 清除cookie：利用设置过期时间达到删除效果
                document.cookie = 'goodslist=null;expires='+now.toUTCString();

                render();
                //实现自动刷新
                location.href='car.html';
            }
    });
});