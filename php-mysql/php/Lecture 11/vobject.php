<!DOCTYPE html>
<html>
    <head>
      <title> Introduction to Object-Oriented Programming </title>
    </head>
	<body>
      <p>
      <?php
        // Create the Class
        class Person {
            public $firstname;
            public $lastname;
            public $age;
            
            public function __construct($firstname, $lastname, $age) {
              $this->firstname = $firstname;
              $this->lastname = $lastname;
              $this->age = $age;
            }
            
            public function hello() {
              return "I am " . $this->firstname . " " . $this->lastname . ", my age is: " . $this->age . "";
            }
        }
          
        $person1 = new Person('John', 'Smith', 25);
		$person2 = new Person('Joe', 'Bob', 35);
        
        echo $person1->hello(); 
		echo "<br>";
		echo $person2->hello(); 
        ?>
        </p>
    </body>
</html>