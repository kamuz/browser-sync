<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Clock PHP</title>
  <script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
</head>
<body>
  <h1>Cool Time by PHP and AJAX</h1>
  <p id="time"></p>
  <a href="index.php">Go back</a>
  <script>
    function show(){
      $.ajax({
        url: "time.php",
        cache: false,
        success: function(html){
          $('#time').html(html)
        }
      })
    }
    setInterval('show()', 1000);
  </script>
</body>
</html>