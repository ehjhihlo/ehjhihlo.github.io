$(document).ready(function () {
    var drag = false
    //移動文字框
    $('.text-container')
        .on('mousedown', '.text-editor', function (e) {
            if ($(this).css('cursor') == 'move') {
                drag = true
                movingTextarea = e.target
                starting = { X: e.pageX, Y: e.pageY }
            } else {
                drag = false
            }
        })

        .on('mousemove', '.text-editor', function (e) {
            if (drag == false) {
                if (e.offsetX < 20 || e.offsetX > ($(this).innerWidth() - 20) || e.offsetY < 20 || e.offsetY > ($(this).innerHeight() - 20)) {
                    $('.text-editor').css({ 'cursor': 'move' })
                } else {
                    $('.text-editor').css({ 'cursor': 'text' })
                }
            } else {
                delta = { X: e.pageX - starting.X, Y: e.pageY - starting.Y }
                final = { X: $(movingTextarea).position().left + delta.X, Y: $(movingTextarea).position().top + delta.Y }
                $(movingTextarea).css({ 'left': final.X })
                $(movingTextarea).css({ 'top': final.Y })
                starting = { X: e.pageX, Y: e.pageY }
            }
        })
        .on('mouseup', '.text-editor', function (e) {
            drag = false
        })

    // reset button
    $('.btn-reset').click(function () {
        $('.text-editor').remove()
    })
    counter = 2;

    // 新增迷因文字框
    $('.btn-add').click(function () {
        $newDiv = $("<div>請輸入迷因內容</div>")
        $newDiv.attr("class", "text-editor")
        $newDiv.attr("id", "text" + counter++)
        $newDiv.attr("contentEditable", "true")
        $('.text-container').append($newDiv)
        adjustFontSize()
    })

    //更改文字顏色
    var colorcounter = 0
    $('.btn-color').click(function () {
        colorcounter++
        if(colorcounter % 6 == 1){
            $('.text-editor').css({ 'color': 'black' })
        }
        if(colorcounter % 6 == 2){
            $('.text-editor').css({ 'color': 'blue' })
        }
        if(colorcounter % 6 == 3){
            $('.text-editor').css({ 'color': 'red' })
        }
        if(colorcounter % 6 == 4){
            $('.text-editor').css({ 'color': 'yellow' })
        }
        if(colorcounter % 6 == 5){
            $('.text-editor').css({ 'color': 'green' })
        }
        if(colorcounter % 6 == 0){
            $('.text-editor').css({ 'color': 'white' })
        }
    })
 
    //更改文字大小
    var fontcounter = 0    
    $('.btn-size').click(function () {
        fontcounter++
        if(fontcounter % 7 == 1){
            $('.text-editor').css({ 'font-size': '40px' })
        }
        if(fontcounter % 7 == 2){
            $('.text-editor').css({ 'font-size': 'xx-large' })
        }
        if(fontcounter % 7 == 3){
            $('.text-editor').css({ 'font-size': 'x-large' })
        }
        if(fontcounter % 7 == 4){
            $('.text-editor').css({ 'font-size': '90px' })
        }
        if(fontcounter % 7 == 5){
            $('.text-editor').css({ 'font-size': '70px' })
        }
        if(fontcounter % 7 == 6){
            $('.text-editor').css({ 'font-size': '55px' })
        }
        if(fontcounter % 7 == 0){
            $('.text-editor').css({ 'font-size': 'xxx-large' })
        }
    })
    
    //下載做好的迷因圖片
    document.querySelector('.btn-download').addEventListener('click', function() {
        html2canvas(document.querySelector('.image-container'), {
          onrendered: function(canvas) {
            // document.body.appendChild(canvas);
            return Canvas2Image.saveAsPNG(canvas);
          }
        });
      });
})