<?php
    include "./class/database.php";
    include "./class/city.php";
    $city = new City();
    $city->id = $_GET["id"];

    //呼叫刪除方法
    if($city->delete()){
        // 刪除成功就倒回首頁
        // header("Location:index.php");
        // 前端Javascript 跳出一個視窗
        echo "<script>alert('刪除成功!');
                    window.location.href = 'index.php';
        </script>";
    }
    else{
        // header("Location:index.php");
        echo "<script>alert('請稍後再試!');
                    window.location.href = 'index.php';
        </script>";
    }
?>