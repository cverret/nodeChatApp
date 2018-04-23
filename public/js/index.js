var socket = io()

socket.on('connect', function () {
  console.log('Connected to server')
})

socket.on('disconnect', function () {
  console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
  console.log('new message', message)
  var li = jQuery('<li></li>')
  li.text(`${message.from}: ${message.text}`)
  jQuery('#messageList').append(li)
})

jQuery('#chatForm').on('submit', function (e) {
  e.preventDefault()

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  })
})