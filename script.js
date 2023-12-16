function showDialog() {
    var dialog = document.getElementById('dialog');
    dialog.style.display = 'block';
  }
  
  function closeDialog() {
    var dialog = document.getElementById('dialog');
    dialog.style.display = 'none';
  }
  
  function submitCity() {
    var city = document.getElementById('cityInput').value;
    alert('Вы выбрали город: ' + city);
    closeDialog();
  }
  
  function openSite(url) {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('אופס. נראה לא מוכנים לקבל הזמנות כאן. אך ניתן להתקשר אלינו ולבצע הזמנה בטלפון: 1-700-501-083');
    }
  }

