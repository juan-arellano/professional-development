<!DOCTYPE html>
<html>
<body>

<?php
$x = 30;
$y = 20;


function test1() {
     global $x, $y;
	 $y = $x + $y;
} 

test1(); // execute Function
echo $y; // Output value of variable y

?>

</body>
</html>