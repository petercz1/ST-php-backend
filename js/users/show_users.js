function show_users(data) {
  console.log('Inside show_users');
  data = JSON.parse(data); // turns string of characters into json objects
  for (var counter = 0; counter < data.length; counter++) {
    var tr = $('<tr>'); // create empty table row
    var td = $('<td>'); // make first td
    td.text(data[counter].User); // add name of db
    tr.append(td); // add td to row
    var td = $('<td>'); // make second td
    td.text(data[counter].Host); // add name of db
    tr.append(td); // add td to row
    td = $('<td>'); // make third td to hold delete button
    var btn = $('<button class="delete" id="' + data[counter].User + '">delete</button>');
    btn.addClass("btn btn-danger");
    td.append(btn);
    tr.append(td);
    $('.table tbody').append(tr);
  }
  $('.delete').click(delete_user);
}