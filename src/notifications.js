Notification.requestPermission().then(function(result) {
  console.log(result);
});

let n = new Notification('Notification!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

n.onshow = () => console.log('show');