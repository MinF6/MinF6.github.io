// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };
let nav_shadow = document.getElementById('navber');
let top_anchor = document.getElementsByClassName('anchor')[0];
let item_row1_open = true;
let item_row2_open = true;
let icon_num1_open = true;
let icon_num2_open = true;
let icon_num3_open = true;
let icon_num4_open = true;
let icon_num5_open = true;
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        // 往下拉動時
        nav_shadow.style.boxShadow = '0px 7px 31px 0px rgba(0, 0, 0, 0.1)';
        top_anchor.style.opacity = 1;
        //服務項目動畫
        if (item_row1_open) {
            let item_top = document.getElementById('item_row1').getBoundingClientRect().top;
            if (item_top < window.innerHeight) {
                let i = 0;
                let flag = setInterval(item_transition, 500);
                function item_transition() {
                    document.getElementsByClassName('item')[i].style.opacity = '1';
                    document.getElementsByClassName('item')[i].style.transform = 'scale(1)';
                    i++;
                    if (i == 3) {
                        clearInterval(flag);
                    }
                }
                item_row1_open = false;
                console.log('ok1');
            }

        }
        if (item_row2_open) {
            let item_top = document.getElementById('item_row2').getBoundingClientRect().top;
            if (item_top < window.innerHeight) {
                let i = 5;
                let flag = setInterval(item_transition2, 500);
                function item_transition2() {
                    document.getElementsByClassName('item')[i].style.opacity = '1';
                    document.getElementsByClassName('item')[i].style.transform = 'scale(1)';
                    i--;
                    if (i == 2) {
                        clearInterval(flag);
                    }
                }
                item_row2_open = false;
                console.log('ok2');

            }
        }
        //sop動畫
        if (icon_num1_open) {
            let icon_top = document.getElementsByClassName('icon')[0].getBoundingClientRect().top;
            if (icon_top < window.innerHeight) {
                document.getElementsByClassName('icon')[0].style.opacity = '1';
                icon_num1_open = false;
            }
        }else if(icon_num2_open){
            let icon_top = document.getElementsByClassName('icon')[1].getBoundingClientRect().top;
            if (icon_top < window.innerHeight) {
                document.getElementsByClassName('icon')[1].style.opacity = '1';
                icon_num2_open = false;
            }
        }else if(icon_num3_open){
            let icon_top = document.getElementsByClassName('icon')[2].getBoundingClientRect().top;
            if (icon_top < window.innerHeight) {
                document.getElementsByClassName('icon')[2].style.opacity = '1';
                icon_num3_open = false;
            }
        }else if(icon_num4_open){
            let icon_top = document.getElementsByClassName('icon')[3].getBoundingClientRect().top;
            if (icon_top < window.innerHeight) {
                document.getElementsByClassName('icon')[3].style.opacity = '1';
                icon_num4_open = false;
            }
        }else if(icon_num5_open){
            let icon_top = document.getElementsByClassName('icon')[4].getBoundingClientRect().top;
            if (icon_top < window.innerHeight) {
                document.getElementsByClassName('icon')[4].style.opacity = '1';
                icon_num5_open = false;
            }
        }

    } else {
        // 回到頂點時
        nav_shadow.style.boxShadow = 'none';
        top_anchor.style.opacity = 0;

    }
}