jQuery(function($){
            //插入头尾
             $('#pageheader').load('header.html');
             $('#pagefooter').load('footer.html');

            //登录验证
             $('#btn').on('click',function(){
                $.ajax({
                    url:'../api/login.php',
                    data:{
                        username:$('.username').val(),
                        password:$('.password').val()
                    },
                    success:function(data){
                        if(data === 'success'){
                            location.href = '../index.html';
                        }else if(data === 'fail'){
                           alert('用户名或密码有误');
                        }
                    }
                })
                
            })
    });
