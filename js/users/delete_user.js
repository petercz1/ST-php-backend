function delete_user() {
  console.log('Inside delete_user');
  var del_user = $(this).attr('id');
  console.log(del_user);

  var data = {
    user_name: del_user
  };
  $.get('backend/manage_users/delete_user.php', data).done(deleted_user).fail(blow_up);
}

function deleted_user(data) {
  console.log('Inside deleted_user');
  console.log(data);
  do_setup();
}