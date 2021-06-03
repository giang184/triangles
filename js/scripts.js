$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    const s1 = parseInt($("input#side1").val());
    const s2 = parseInt($("input#side2").val());
    const s3 = parseInt($("input#side3").val());
    if (s1>0 && s2>0 && s3>0) {
      let triangle;
      
      if(s1===s2 && s2===s3) {
        triangle = "a equilateral triangle";
      }
      else if(s1===s2 || s2===s3 || s1 === s3) {
        triangle = "an isosceles triangle";
      }
      else {
        triangle = "a scalene triangle";
      }
    

      $("#identifier").text(triangle);
      $("#result").show();
    } else {
      alert('Please enter 3 side lengths.');
    }
    

    event.preventDefault();
  });
});