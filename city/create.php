<?php
    include "./layout/header.php";
    include "./class/database.php";
    include "./class/city.php";
    include "./class/country.php";
    $country = new Country();
    //呼叫取得城市代碼方法
    $data = $country->getCode();
    //建立城市物件
    $city = new City();
?>
<div class="container my-5">
    <div class="row justify-content-center">
        <div class="col-md-6 col-xs-12">
                <!-- 表單元件 -->
                <form action="create.php" method="post">
                    <!-- 城市名 -->
                    <div class="form-group">
                        <label for="city-name">城市名</label>
                        <input type="text" class="form-control" name="city-name" id="city-name" required>
                    </div>
                    <!-- 人口數 -->
                    <div class="form-group">
                        <label for="city-pop">城市人口</label>
                        <input type="text" class="form-control" name="city-pop" id="city-pop" required>
                    </div>
                    <!-- 國家代碼 -->
                    <div class="form-group">
                        <label for="country-code">國家代碼</label>
                        <select class="form-control" name="country-code" id="country-code">
                        <?php foreach($data as $row):?>
                        <option value="<?= $row["country_code"]?>">
                            <?= $row["country_code"]?>
                        </option>
                        <?php endforeach;?>
                        </select>
                    </div>
                    <!-- 送出按鈕 -->
                    <button type="submit" name="submit" class="btn btn-info">送出</button>
                    <a href="./index.php" class="btn btn-outline-secondary">回首頁</a>
                </form>
                <!-- 送出表單要執行php的語法 -->
                <?php
                //檢查是否有按下送出按鈕
                if(isset($_POST["submit"])){
                    //把各輸入框的資料送到$City物件中對應的屬性
                    $city->cityName = $_POST["city-name"];
                    $city->cityPop = $_POST["city-pop"];
                    $city->countryCode = $_POST["country-code"];
                    //呼叫$city物件中的新增資料的方法
                    if($city->create()){
                        //如果執行成功，取得true的布林直，顯示執行成功
                        echo '<div class="alert alert-warning my-3" role="alert">
                        新增成功
                        </div>';
                    }
                    else{
                        //顯示稍後再試
                        echo '<div class="alert alert-warning my-3" role="alert">
                        稍後再試
                        </div>';
                    }
                }
                ?>
        </div>
    </div>
</div>