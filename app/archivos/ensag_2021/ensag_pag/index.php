<?php
    foreach($_FILES['images']['error'] as $key => $error){
        if($error == UPLOAD_ERR_OK){
            $name = $_FILES['images']['name'][$key];
            move_uploaded_file($_FILES['images']['tmp_name'][$key], 'uploads/' . $name);
        }
    }
    
    echo "<h2>Archivos correctamente subidos</h2>";
?>
