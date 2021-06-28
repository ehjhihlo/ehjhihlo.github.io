//上傳圖片至網站
var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  a = event.target.files[0].name;
  $(".image-container").css("background-image","url(" + a + ")")
  output.onload = function() {
  URL.revokeObjectURL(output.src) // free memory
  }
};

//文字框與按鈕功能
var script=document.createElement("script");
script.type="text/javascript";
script.src="https://code.jquery.com/jquery-3.4.1.min.js";
document.getElementsByTagName('body')[0].appendChild(script);
setTimeout(function(){
    $(document).ready(function () {
        // if(loadFile){
        //     $('.image-container').css({ 'background-image': '#output' })
        //     $('.btn').visibility="visible"
        // }

        // $('.upload-container').on('click', function () {
        //     $('.image-container').css({ 'background-image': '#output' })
        //     $('.btn').visibility="visible"
        // })

        // count=0
        // if ($('#output')){
        //     $newDiv = $("<div>請輸入迷因內容</div>")
        //     $newDiv.attr("class", "text-editor")
        //     $newDiv.attr("id", "text" + count++)
        //     $newDiv.attr("contentEditable", "true")
        //     $('.text-container').append($newDiv)
        //     adjustFontSize()
        // }

        //滑鼠移動文字框
        var drag = false
        $('.text-container')
            .on('mousedown', '.text-editor', function (event) {
                if ($(this).css('cursor') == 'move') {
                    drag = true
                    movingTextarea = event.target
                    starting = { X: event.pageX, Y: event.pageY }
                } 
                else {
                    drag = false
                }
            })

            .on('mousemove', '.text-editor', function (event) {
                if (drag == false) {
                    if (event.offsetX < 20 || event.offsetX > ($(this).innerWidth() - 20) || event.offsetY < 20 || event.offsetY > ($(this).innerHeight() - 20)) {
                        $('.text-editor').css({ 'cursor': 'move' })
                    } 
                    else {
                        $('.text-editor').css({ 'cursor': 'text' })
                    }
                } 
                else {
                    delta = { X: event.pageX - starting.X, Y: event.pageY - starting.Y }
                    final = { X: $(movingTextarea).position().left + delta.X, Y: $(movingTextarea).position().top + delta.Y }
                    $(movingTextarea).css({ 'left': final.X })
                    $(movingTextarea).css({ 'top': final.Y })
                    starting = { X: event.pageX, Y: event.pageY }
                }
            })

            .on('mouseup', '.text-editor', function (event) {
                drag = false
            })

        //reset
        $('.btn-reset').click(function () {
            $('.text-editor').remove()
        })
        
        //新增迷因文字框
        counter = 2;
        $('.btn-add').click(function () {
            $newtext = $("<div>請輸入迷因內容</div>")
            $newtext.attr("class", "text-editor")
            $newtext.attr("id", "text" + counter++)
            $newtext.attr("contenteditable", "true")
            $('.text-container').append($newtext)
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
            html2canvas(document.querySelector('.image-container','.output-image'), {
                onrendered: function(canvas) {
                    // document.body.appendChild(canvas);
                    return Canvas2Image.saveAsPNG(canvas);
                }
            });
        });
    })
},100);