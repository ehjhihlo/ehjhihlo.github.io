<?php
    class Database{
        //取得資料庫連線的方法
        public function getConnection(){
            $connect = new PDO("mysql:host=localhost;port=3306;dbname=country_db","root","");
            return $connect;
        }
    }
?>