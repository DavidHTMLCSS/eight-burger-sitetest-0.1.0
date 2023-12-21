// video background

document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('background_video');
  video.play();
});


//city for Orders
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
    closeDialog();
  }
  
  function openSite(url) {
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('אופס.כנראה אנו לא מוכנים לקבל הזמנות כאן. אך ניתן להתקשר אלינו ולבצע הזמנה בטלפון: 1-700-501-083');
    }
  }

// Feedback
function showFeedbackModal() {
  var modal = document.getElementById('feedbackModal');
  modal.style.display = 'block';
}

function closeFeedbackModal() {
  var modal = document.getElementById('feedbackModal');
  modal.style.display = 'none';
}

