$(function(){

  function buildHTML(message){
    var insertImage = '';
    if (message.image) {
      insertImage = `<img src="${message.image}">`;
    }
    var html = `
      <div class="message">
        <div class="message-upper">
          <div class="message-upper__user-name">${message.name}</div>
          <div class="message-upper__time">${message.time}</div>
        </div>
        <div class="message-lower">
            <p class="message-lower__text">${message.content}</p>
        </div>
          ${insertImage}
      </div>`;
    return html
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-content').append(html)
      $('.form__submit').prop("disabled", false);
      $('.main-content').animate({scrollTop: $('.main-content')[0].scrollHeight}, 'fast');
      $('.form__message').val('');
      $('.hidden').val('');

    })
    .fail(function(){
      alert('error');
    })

    setInterval(function(){
    $.ajax({
      url: location.href.json,
    })
    .done(function(data){
    })
    .fail(function(data){
    });
  } else {
    cleraInterval(interval);
    }, 5000 );
  })
});
