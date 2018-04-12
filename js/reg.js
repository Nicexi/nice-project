jQuery(function($){
        //插入头尾
         $('#pageheader').load('header.html');
         $('#pagefooter').load('footer.html');

         //注册验证

         $('#btn').on('click',function(){
            console.log(666);
                $.ajax({
                    url:'../api/reg.php',
                    data:{
                        username:$('#username').val(),
                        password:$('#password').val()
                    },
                    success:function(data){
                        console.log(data);
                        if(data === 'success'){
                            location.href = 'login.html';
                        }else{
                            alert('用户名输入有误,或用户名已经存在,');
                        }
                        
                    }
                })
                
            })
         //表单验证正则
        let username = document.querySelector('#username');
        // let arr_state = [200,304];

        username.onchange = function(e){
            let _username = username.value;
            // let xhr = new XMLHttpRequest();
            //用户名验证
            if(!/^[a-z][a-z0-9\-]{5,19}$/.test(_username)){
                    username.value="";
                    username.focus();
                    alert('用户名不合法');
                    return false;
                }
        }
        //密码验证
            let password = document.querySelector('#password');
            password.onchange=function(e){
                let _password = password.value;
                if(!/^[^\s]{8,20}$/.test(_password)){
                    password.value = '';
                    password.focus();
                    alert('密码不合法');
                    return false;
                }
            }
        //确认密码验证
            let passWord = document.querySelector('#passWord');
            passWord.onchange=function(e){
                let _passWord = passWord.value;
                let _password = password.value;
                if(_passWord!=_password){
                    passWord.value = '';
                    passWord.focus();
                    alert('密码不一致');
                    return false;
                };
            }
        //手机号验证
            let phone = document.querySelector('#phone');
            phone.onchange=function(e){
                let _phone = phone.value;
                if(!/^1[34578]\d{9}$/.test(_phone)){
                    phone.value = '';
                    phone.focus();
                    alert('手机号不合法');
                    return false;
                }
            }
        //生成随机四位验证码
        let Rcode = document.querySelector('.Rcode')
        Rcode.innerHTML=showcode();
          function showcode(){
                var res = parseInt(Math.random()*10000);
                if(res<10){
                    res = '000'+res;
                }else if(res<100){
                    res= '00'+res;
                }else if(res<1000){
                    res= '0'+res;
                }
                return res;
            }
        //验证码验证
        let code = document.querySelector('#code');
        code.onchange=function(e){
                let _code = code.value;
                let _Rcode = Rcode.innerHTML;
                if(_code!=_Rcode){
                    code.value = '';
                    code.focus();
                    alert('验证码不正确');
                    return false;
                }
            }
        //邮箱验证
        let email = document.querySelector('#email');
            email.onchange=function(e){
                let _email = email.value;
                if(!/^[a-z0-9_\-\.]{2,}@[a-z\d\-]{1,63}(\.[a-z\u2E80-\u9FFF]{2,6})+$/.test(_email)){
                    email.value = '';
                    email.focus();
                    alert('邮箱不合法');
                    return false;
                }
            }
    });
