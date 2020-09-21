<?php

//定义$image用于存储FILES的image信息
    $image = $_FILES['image'];
//定义$filename获取image信息的filename
    $filename = $image['name'];

//如果不为空，就是二次提交,否则是第一次提交
if(!empty($_POST['filename'])) {
    //修改result文件的filename，完成上传图片的引用
    file_put_contents('result',$_POST['filename']);
    //跳转回上传页面
    return header('Location:1.php');
    
}else{ 
    //上传成功后返回js
    if(move_uploaded_file($image['tmp_name'],"images/".$image['name'])){
        //使用1.js中的preview函数返回图片
        echo"<script>parent.preview('$filename')</script>";
    }
}