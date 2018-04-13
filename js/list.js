require(['config'],function(){
    // 模块化
    require(['jquery','common'],function($){
        jQuery(function($){
        //插入头尾
         $('#pageheader').load('header.html');
         $('#pagefooter').load('footer.html');
        //分页加载
            var datalist = document.querySelector('#datalist');
            var page = document.querySelector('#page');

            let pageNo = 1;
            let qty = 10;

            let arr_status = [200,304];

            let xhr = new XMLHttpRequest();
            xhr.onload = ()=>{
                if(arr_status.indexOf(xhr.status)!=-1){
                    let res = JSON.parse(xhr.responseText);
                    console.log(res);
                    var list_ul = document.querySelector('#list_ul');

                    //点击价格从小到大排序
                    $('#sortX-D').on('click',function(){
                        res.data.sort(function(a,b){
                            return a.price-b.price;
                            })
                            create();
                        })

                    //点击价格从大到小排序
                    $('#sortD-X').on('click',function(){
                        res.data.sort(function(a,b){
                            return b.price-a.price;
                            })
                            create();
                        })

                    function create(){
                        //数据库生成列表
                        list_ul.innerHTML = res.data.map(items=>{
                        return `
                            <li data-id=${items.id}>
                                <a  class="to_list">
                                <img src=${items.imgurl}>
                                </a>
                                <h1>￥${items.price}</h1>
                                <h2>${items.name}</h2>
                                <button>加入购物车</button>
                            </li>
                        `
                        }).join('');
                    }
                    create();

                    //传参至详情列表
                    $('#goodlist').on('click','li',function(items){
                            var id = $(this).attr('data-id');
                            var params = '?';

                            res.data.map(function(items){
                                if(items.id == id){
                                    for(var attr in items){
                                        params += attr + '=' + items[attr] + '&'
                                    }
                                    // 删除多余的&
                                    params = params.slice(0,-1);
                                    // console.log(params);
                                    location.href = 'goods.html' + encodeURI(params);
                                }
                            });
                    
                     });

                    // 处理分页
                    let pageQty = Math.ceil(res.total/res.qty);

                    page.innerText = '';
                    for(let i=1;i<=pageQty;i++){
                        let span = document.createElement('span');
                        span.innerText = i;
                        if(i===res.pageNo){
                            span.className = 'active';
                        }
                        page.appendChild(span);
                    }
                }
            }


            xhr.open('post','../api/datalist.php');

            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

            // POS请求发送数据
            xhr.send(`pageNo=${pageNo}&qty=${qty}`);


            // 切换分页
            page.onclick = function(e){
                if(e.target.tagName.toLowerCase() === 'span'){
                    pageNo = e.target.innerText*1;
                    xhr.open('post','../api/datalist.php');
                    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                    xhr.send(`pageNo=${pageNo}&qty=${qty}`);
                }
            }
        });
       
    });
});