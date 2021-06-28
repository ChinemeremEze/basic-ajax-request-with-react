 <?php
 
   header("Access-Control-Allow-Origin: *");

   // check to make sure requestnum exists
   if (!isset($_POST['requestnum']))
   {
     echo '{error: "No requestnum provided" }';
     exit();
   }

   // check for range
   if (($_POST['requestnum'] < 0) || ($_POST['requestnum'] > 20))
   {
     echo '{error: "requestnum out of range" }';
     exit();
   }

   $results = array();

   // generate random lat and longs, return them
   for ($i = 0; $i < $_POST['requestnum']; $i++)
   {
     $lat = 43.2557 + (rand(-60,60) / 1000);
     $lng = -79.8711 + (rand(-150,150) / 1000);
     $results[] = ["num" => $i, "lat" => $lat, "lng" => $lng];
   }

   echo json_encode($results);

 ?>