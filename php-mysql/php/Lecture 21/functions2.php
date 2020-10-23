<!DOCTYPE html>
<html>
<body>

<?php

function myAge($minage = 30) {
     echo "My age is : $minage <br>";
}

myAge();
myAge(50);
myAge(60);
myAge(18);

echo "<hr />";


function add($x, $y) {
     $z = $x + $y;
     return $z;
}

echo "1 + 2 = " . add(1,2) . "<br>";
echo "3 + 4 = " . add(3,4) . "<br>";
echo "5 + 5 = " . add(5,5);

?>

</body>
</html>