  function calc(op)
  {
    var val1 = parseInt(document.getElementById("val1").value); 
    var val2 = parseInt(document.getElementById("val2").value);
    
    var res = "";
    switch(op)
    {
      case '+':
        res = val1 + val2;
        break;
      case '-':
        res = val1 - val2;
        break;
      case '*': ;
        res = val1 * val2;
        break;
      case '/': ;
        res = val1 / val2;
        break;
      default:
        res = '';
    }
    document.getElementById("res").value = res;
  }