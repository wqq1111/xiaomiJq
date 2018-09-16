//页面加载
$(function () {
    //购物车
    $(".shopping").on("mouseenter",function () {
        $(".goods").clearQueue().slideDown("slow");
    })
    $(".shopping").on("mouseleave",function () {
        $(".goods").clearQueue().slideUp("slow");
    })

    //侧导航选项卡
    let lis=$("li.outer");
    console.log(lis);
    //隐式循环
    lis.mouseenter(function () {
        $(".bn-choose").css("display","none");
        $(this).children(".bn-choose").css("display","flex");
    })
    lis.mouseleave(function () {
        $(this).children(".bn-choose").css("display","none");
    })


    //轮播图
    let pic=$(".pict");
    let dots=$(".item");
    let btnL=$(".leftBtn");
    let btnR=$(".rightBtn");
    let banner=$(".bn")
    let now=0;

    //初始化
    pic.first().css("z-index",10);
    dots.eq(0).addClass("active");

    let t=setInterval(move,2000);
    function move() {
        now++;
        if(now==pic.length){
            now=0;
        }
        pic.css("z-index","5").eq(now).css("z-index",10);
        dots.removeClass("active").eq(now).addClass("active");
    }

    function moveL(){
        now--;
        if(now==-1){
            now=pic.length-1;
        }
        pic.css("z-index","5").eq(now).css("z-index",10);
        dots.removeClass("active").eq(now).addClass("active");
    }

    btnR.click(function () {
        move();
    })
    btnL.click(function () {
            moveL();
        })
    banner.mouseenter(function () {
        clearInterval(t);
    })
    banner.mouseleave(function () {
        t=setInterval(move,2000);
    })
    //点击轮播点
    dots.click(function () {
        let nn= $(this).index();
        // console.log(nn);
        dots.removeClass("active").eq(nn).addClass("active");
        pic.css("z-index",5).eq(nn).css("z-index",10);
        now=nn;
    });



    //家电板块选项卡
    let top=$(".elec-list");
    let bottom=$(".elec-span");
    console.log(top, bottom);

    top.last().addClass("change");
    bottom.last().css("display","block");
    top.mouseenter(function () {
        let i=$(this).index();
        top.removeClass("change").eq(i).addClass("change");
        bottom.css("display","none").eq(i).css("display","block");
    })
    // top.triggerHandler("mouseenter");

    //小米闪购
    let btns=$(".flash-btn"); //两个按钮
    let box=$(".flash-list");
    let w=box.width()/2;
    let count=0;
    console.log(btns,box,w);

    btns.last().click(function () {
        count++;
        if(count==2){
            count=1;
        }
        box.css({"transform":`translate(${-w*count}px)`});
    })

    btns.first().click(function () {
        count--;
        if(count==-1){
            count=0;
        }
        box.css({"transform":`translate(${-w*count}px)`});
    })



    //为你推荐平移
    let btns1=$(".rec-btn"); //两个按钮
    let box1=$(".rec-list");
    let w1=box1.width()/3;
    let count1=0;
    console.log(btns,box,w);

    btns1.eq(1).click(function () {
        count1++;
        if(count1==3){
            count1=2;
        }
        box1.css({"transform":`translate(${-w1*count1}px)`});
    })

    btns1.eq(0).click(function () {
        count1--;
        if(count1==-1){
            count1=0;
        }
        box1.css({"transform":`translate(${-w*count1}px)`});
    })


    //内容轮播图
    //图书
    let imgs1=$(".con-desc1");
    let point1=$(".pin1");
    let leftbtn1=$(".con-leftBtn1");
    let rightbtn1=$(".con-rightBtn1");
    let widths1=imgs1.width();
    console.log(imgs1,point1,leftbtn1,rightbtn1,widths1);
    let present=0;
    let next=0;
    let flag=true;

    imgs1.eq(0).css({left:0});
    point1.eq(0).addClass("hot1");
    // let t=setInterval(move,2000);
    //向左滑动
    function move1(){
        next++;
        if(next==imgs1.length){
            next=0;
        }
        imgs1.eq(next).css({left:widths1});
        imgs1.eq(present).animate({left:-widths1});
        imgs1.eq(next).animate({left:0},function () {
            flag=true;
        });
        point1.eq(present).removeClass("hot1");
        point1.eq(next).addClass("hot1");
        present=next;
    }
    //向右滑动
    function move1L(){
        next--;
        if(next<0){
            next=imgs1.length-1;
        }
        imgs1.eq(next).css({left:-widths1});
        imgs1.eq(present).animate({left:widths1});
        imgs1.eq(next).animate({left:0},function () {
            flag=true;
        });
        point1.eq(present).removeClass("hot1");
        point1.eq(next).addClass("hot1");
        present=next;
    }
    leftbtn1.click(function () {
        if(present==0){
            return;
        }
        if(!flag){
            return;
        }
        flag=false;
        move1L();
    });
    rightbtn1.click(function () {
        if(present==point1.length-1){
            return;
        }
        if(!flag){
            return;
        }
        flag=false;
        move1();
    });
    //鼠标点击轮播点
    point1.click(function () {
        let i=$(this).index();
        // console.log(i);
        if(present==i){
            return;
        }else if(present<i){
            imgs1.eq(i).css({left:widths1});
            imgs1.eq(present).animate({left:-widths1});
            imgs1.eq(i).animate({left:0},function () {
                flag=true;
            });
            point1.removeClass("hot1").eq(i).addClass("hot1");
            present=next=i;
        }else if(present>i){
            imgs1.eq(i).css({left:-widths1});
            imgs1.eq(present).animate({left:widths1});
            imgs1.eq(i).animate({left:0},function () {
                flag=true;
            });
            point1.removeClass("hot1").eq(i).addClass("hot1");
            present=next1=i;
        }

    })


    //MIUI
    let imgs2=$(".con-desc2");
    let point2=$(".pin2");
    let leftbtn2=$(".con-leftBtn2");
    let rightbtn2=$(".con-rightBtn2");
    let widths2=imgs2.width();
    // console.log(imgs1,point1,leftbtn1,rightbtn1,widths1);
    let present2=0;
    let next2=0;
    let flag2=true;

    imgs2.eq(0).css({left:0});
    point2.eq(0).addClass("hot1");
    // let t=setInterval(move,2000);
    //向左滑动
    function move2(){
        next2++;
        if(next2==imgs2.length){
            next2=0;
        }
        imgs2.eq(next2).css({left:widths2});
        imgs2.eq(present2).animate({left:-widths2});
        imgs2.eq(next2).animate({left:0},function () {
            flag2=true;
        });
        point2.eq(present2).removeClass("hot1");
        point2.eq(next2).addClass("hot1");
        present2=next2;
    }
    //向右滑动
    function move2L(){
        next2--;
        if(next2<0){
            next2=imgs2.length-1;
        }
        imgs2.eq(next2).css({left:-widths1});
        imgs2.eq(present2).animate({left:widths1});
        imgs2.eq(next2).animate({left:0},function () {
            flag2=true;
        });
        point2.eq(present2).removeClass("hot1");
        point2.eq(next2).addClass("hot1");
        present2=next2;
    }
    leftbtn2.click(function () {
        if(present2==0){
            return;
        }
        if(!flag2){
            return;
        }
        flag2=false;
        move2L();
    });
    rightbtn2.click(function () {
        if(present2==point2.length-1){
            return;
        }
        if(!flag2){
            return;
        }
        flag2=false;
        move2();
    });
    //鼠标点击轮播点
    point2.click(function () {
        let i=$(this).index();
        // console.log(i);
        if(present2==i){
            return;
        }else if(present2<i){
            imgs2.eq(i).css({left:widths1});
            imgs2.eq(present2).animate({left:-widths1});
            imgs2.eq(i).animate({left:0},function () {
                flag2=true;
            });
            point2.removeClass("hot1").eq(i).addClass("hot1");
            present2=next2=i;
        }else if(present2>i){
            imgs2.eq(i).css({left:-widths1});
            imgs2.eq(present2).animate({left:widths1});
            imgs2.eq(i).animate({left:0},function () {
                flag2=true;
            });
            point2.removeClass("hot1").eq(i).addClass("hot1");
            present2=next2=i;
        }

    })

    //游戏
    let imgs3=$(".con-desc3");
    let point3=$(".pin3");
    let leftbtn3=$(".con-leftBtn3");
    let rightbtn3=$(".con-rightBtn3");
    let widths3=imgs3.width();
    // console.log(imgs1,point1,leftbtn1,rightbtn1,widths1);
    let present3=0;
    let next3=0;
    let flag3=true;

    imgs3.eq(0).css({left:0});
    point3.eq(0).addClass("hot1");
    //向左滑动
    function move3(){
        next3++;
        if(next3==imgs3.length){
            next3=0;
        }
        imgs3.eq(next3).css({left:widths3});
        imgs3.eq(present3).animate({left:-widths3});
        imgs3.eq(next3).animate({left:0},function () {
            flag3=true;
        });
        point3.eq(present3).removeClass("hot1");
        point3.eq(next3).addClass("hot1");
        present3=next3;
    }
    //向右滑动
    function move3L(){
        next3--;
        if(next3<0){
            next3=imgs3.length-1;
        }
        imgs3.eq(next3).css({left:-widths1});
        imgs3.eq(present3).animate({left:widths1});
        imgs3.eq(next3).animate({left:0},function () {
            flag3=true;
        });
        point3.eq(present3).removeClass("hot1");
        point3.eq(next3).addClass("hot1");
        present3=next3;
    }
    leftbtn3.click(function () {
        if(present3==0){
            return;
        }
        if(!flag3){
            return;
        }
        flag3=false;
        move3L();
    });
    rightbtn3.click(function () {
        if(present3==point3.length-1){
            return;
        }
        if(!flag3){
            return;
        }
        flag3=false;
        move3();
    });
    //鼠标点击轮播点
    point3.click(function () {
        let i=$(this).index();
        // console.log(i);
        if(present3==i){
            return;
        }else if(present3<i){
            imgs3.eq(i).css({left:widths1});
            imgs3.eq(present3).animate({left:-widths1});
            imgs3.eq(i).animate({left:0},function () {
                flag3=true;
            });
            point3.removeClass("hot1").eq(i).addClass("hot1");
            present3=next3=i;
        }else if(present3>i){
            imgs3.eq(i).css({left:-widths1});
            imgs3.eq(present3).animate({left:widths1});
            imgs3.eq(i).animate({left:0},function () {
                flag3=true;
            });
            point3.removeClass("hot1").eq(i).addClass("hot1");
            present3=next3=i;
        }

    })

    //应用
    let imgs4=$(".con-desc4");
    let point4=$(".pin4");
    let leftbtn4=$(".con-leftBtn4");
    let rightbtn4=$(".con-rightBtn4");
    let widths4=imgs4.width();
    // console.log(imgs1,point1,leftbtn1,rightbtn1,widths1);
    let present4=0;
    let next4=0;
    let flag4=true;

    imgs4.eq(0).css({left:0});
    point4.eq(0).addClass("hot1");
    //向左滑动
    function move4(){
        next4++;
        if(next4==imgs4.length){
            next4=0;
        }
        imgs4.eq(next4).css({left:widths4});
        imgs4.eq(present4).animate({left:-widths4});
        imgs4.eq(next4).animate({left:0},function () {
            flag4=true;
        });
        point4.eq(present4).removeClass("hot1");
        point4.eq(next4).addClass("hot1");
        present4=next4;
    }
    //向右滑动
    function move4L(){
        next4--;
        if(next4<0){
            next4=imgs4.length-1;
        }
        imgs4.eq(next4).css({left:-widths1});
        imgs4.eq(present4).animate({left:widths1});
        imgs4.eq(next4).animate({left:0},function () {
            flag4=true;
        });
        point4.eq(present4).removeClass("hot1");
        point4.eq(next4).addClass("hot1");
        present4=next4;
    }
    leftbtn4.click(function () {
        if(present4==0){
            return;
        }
        if(!flag4){
            return;
        }
        flag4=false;
        move4L();
    });
    rightbtn4.click(function () {
        if(present4==point4.length-1){
            return;
        }
        if(!flag4){
            return;
        }
        flag4=false;
        move4();
    });
    //鼠标点击轮播点
    point4.click(function () {
        let i=$(this).index();
        // console.log(i);
        if(present4==i){
            return;
        }else if(present4<i){
            imgs4.eq(i).css({left:widths1});
            imgs4.eq(present4).animate({left:-widths1});
            imgs4.eq(i).animate({left:0},function () {
                flag4=true;
            });
            point4.removeClass("hot1").eq(i).addClass("hot1");
            present4=next4=i;
        }else if(present4>i){
            imgs4.eq(i).css({left:-widths1});
            imgs4.eq(present4).animate({left:widths1});
            imgs4.eq(i).animate({left:0},function () {
                flag4=true;
            });
            point4.removeClass("hot1").eq(i).addClass("hot1");
            present4=next4=i;
        }

    })


    //返回顶部
    let back=$(".back");
    back.click(function () {
        $(document.body).animate({scrollTop:0});
        $(document.documentElement).animate({scrollTop:0});
    })
    $(window).scroll(function () {
        if(document.body.scrollTop>500){
            $(".back").css({display:"block"});
        }else if(document.documentElement.scrollTop>500){
            $(".back").css({display:"block"});
        }else{
            $(".back").css("display","none");
        }
    })



    // 倒计时
    let timeN=document.querySelectorAll(".num");
    console.log(timeN);

    setDate();

    setInterval(setDate,1000);

    function setDate() {
        let arr=fn();
        timeN.forEach((value,index)=>{
            value.innerHTML=arr[index];
        })
    }
    //获取数组
    function fn(){
        let arr=[];
        //获取现在的时间
        let now=new Date();
        //获取未来的时间
        let future=new Date(2018,9,1);
        //计算出未来与现在的时间差（/1000表示将毫秒变为秒）
        let times=Math.floor((future.getTime()-now.getTime())/1000);


        //得到小时数
        let hour=Math.floor(times%(30*24*60*60)%(24*60*60)/(60*60));
        if(Math.floor(hour/10)==0){
            arr.push("0"+hour);
        }else{
            arr.push(hour);
        }
        //得到分钟数
        let m=Math.floor(times%(30*24*60*60)%(24*60*60)%(60*60)/60);
        if(Math.floor(m/10)==0){
            arr.push("0"+m);
        }else{
            arr.push(m);
        }
        //得到秒数
        let s=Math.floor(times%(30*24*60*60)%(24*60*60)%(60*60)%60);
        if(Math.floor(s/10)==0){
            arr.push("0"+s);
        }else{
            arr.push(s);
        }



        return arr;
    }







})
