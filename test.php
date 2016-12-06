<?php
/**
 * Created by PhpStorm.
 * User: rickypuorro
 * Date: 12/6/16
 * Time: 1:45 PM
 */

//header ( "Content-Type: image/png" );
//$png_image = imagecreate ( $_GET ['width'], 600) ;
//$background_color = imagecolorallocate ( $png_image, 55, 20, 90 );
//$text_color = imagecolorallocate($png_image, 255, 255, 255);
//imagestring ( $png_image, 5, 50, 50,  "A Simple Text String", $text_color);
//imagepng($png_image);
if ($_FILES) {
   echo 'A file was submitted.' ;
   print_r ($_FILES['file_to_upload']);

   if ($_FILES ['file_to_upload']['size'] !=0 )  {
       $upload_file = 'uploads/' . $_FILES['file_to_upload']['name'] ;

       move_uploaded_file( $_FILES['file_to_upload'] ['tmp_name'], $upload_file) ;
   }
}

?>


<html>
<head>
    <title>file upload demo</title>
</head>
<body>

<form action="test.php" method="post">
  <input type="text" name="filename" id="filename">
    <input type="file" name="file_to_upload" id="file_to_upload"><br><br>
    <input type="submit">
</form>
<?php
phpinfo();
?>
</body>
</html>




