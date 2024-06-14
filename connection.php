<?php
        $full_name = $_post['Full_Name'];
        $Emai_ID = $_post['Email_Id'];
        $mobile_number = $_post['Mo_number'];
        $Subje = $_post['Subject'];
        $note = $_post['note'];


        //Database connection
        $conn = new mysqli('localhost','root','','vrajpatel');
        if($conn->connect_error){
            die('Connection failed :' .$conn->connect_error);
        }else{
            $stmt = $conn->prepare("insert into contact_us(fullname, email, monumber, subject, notes)
                        values( ?, ?, ?, ?, ?)")

            $stmt->bind_param("ssiss" ,$full_name ,$Emai_ID ,$mobile_number ,$Subje ,$note );
            $stmt->execute();
            echo "message send successfully";
            $stmt->close();
            $conn->close();

        }
       
?>