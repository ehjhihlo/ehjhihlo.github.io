<?php
    class City{
        //1.屬性
        //資料庫連線
        public $dbConnect;
        //未來新增 更新
        public $id;
        public $cityName;
        public $cityPop;
        public $countryCode;

        //2.自動執行建構式
        public function __construct(){
            //建立真實的資料庫物件
            $db = new Database();
            //物件設定給dbConnect屬性
            $this->dbConnect = $db->getConnection();
        }
        //3.方法：讀取、新增、更新、刪除
        //讀取所有city表格資料
        public function getAllCity(){
            $sql = "SELECT * FROM city";
            $getData = $this->dbConnect->prepare($sql);
            $getData->execute();
            $data = $getData->fetchAll(PDO::FETCH_ASSOC);
            return $data;
        }
        //新增資料
        public function create(){
            $sql = "INSERT INTO city(city_name, population, country_code)
                    VALUES(:city_name, :population, :country_code)";
            $addData = $this->dbConnect->prepare($sql);
            $addData->bindParam(":city_name",$this->cityName);
            $addData->bindParam(":population",$this->cityPop);
            $addData->bindParam(":country_code",$this->countryCode);
            //執行sql指令 同時回傳是否執行成功
            $result = $addData->execute();
            return $result;
        }
        //根據url的ID參數來讀取單個要編輯的資料
        public function getOneCity(){
            $sql = "SELECT * FROM city WHERE id = :id";
            $getOneCity = $this->dbConnect->prepare($sql);
            $getOneCity->bindParam(":id",$this->id);
            $getOneCity->execute();
            $data = $getOneCity->fetch(PDO::FETCH_ASSOC);
            //讀出來的該筆資料 存到 屬性當中
            $this->cityName = $data["city_name"];
            $this->cityPop = $data["population"];
            $this->countryCode = $data["country_code"];
        }
        //更新資料
        public function update(){
            $sql = "UPDATE city
                    SET city_name = :city_name,
                        population = :population,
                        country_code = :country_code
                    WHERE id=:id";
            $updateData = $this->dbConnect->prepare($sql);
            $updateData->bindParam(":city_name",$this->cityName);
            $updateData->bindParam(":population",$this->cityPop);    
            $updateData->bindParam(":country_code",$this->countryCode);    
            $updateData->bindParam(":id",$this->id);  
            
            $result = $updateData->execute();
            return $result;
        }
        //刪除資料
        public function delete(){
            $sql = "DELETE FROM city WHERE id = :id";
            $deleteData = $this->dbConnect->prepare($sql);
            $deleteData->bindParam(":id",$this->id);

            $result = $deleteData->execute();
            return $result;
        }
    }
?>