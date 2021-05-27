<?php
    class Country{
        //屬性
        public $dbConnect;
        //建構式
        public function __construct(){
            //建立真實的資料庫物件
            $db = new Database();
            //物件設定給dbConnect屬性
            $this->dbConnect = $db->getConnection();
        }
        //方法:讀取country表格country_code欄位
        public function getCode(){
            $sql = "SELECT country_code FROM country";
            $getCode = $this->dbConnect->prepare($sql);
            $getCode->execute();
            $data = $getCode->fetchAll(PDO::FETCH_ASSOC);
            return $data;
        }
    }
?>