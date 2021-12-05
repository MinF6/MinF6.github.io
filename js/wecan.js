function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    /*新增放大鏡*/
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    /*插入放大鏡*/
    img.parentElement.insertBefore(glass, img);
    /*設定放大鏡的背景屬性*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*放大鏡一定時執行moveMagnifier函式*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*觸控螢幕也可以使用*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
        var pos, x, y;
        /*防呆-img移動時*/
        e.preventDefault();
        /*取得x跟y的座標*/
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        /*放大鏡限制在圖片裡*/
        if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
        if (x < w / zoom) { x = w / zoom; }
        if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
        if (y < h / zoom) { y = h / zoom; }
        /*設定放大鏡位置*/
        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";
        /*顯示放大鏡看到的東西*/
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /*取得img中x跟y的位置*/
        a = img.getBoundingClientRect();
        /*計算相對於img的x與y座標*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*避免畫面滾動*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}



magnify("myimage", 2);