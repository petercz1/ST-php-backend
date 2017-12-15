function create_user() {
  console.log('Inside create_user');
  var user = $('#user_name').val();
  var pass = $('#user_pass').val();
  var data = {
    user_name: user,
    user_pass: pass
  };
  $.get('backend/manage_users/create_user.php', data).done(created_user).fail(blow_up);
  $('#create_user').removeClass('btn-primary').addClass('btn-warning').text('creating...');
}

function created_user() {
  console.log('Inside created_user');
  $('#create_user').removeClass('btn-warning').addClass('btn-success').text('created!');
  do_setup();
}