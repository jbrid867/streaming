var mjpeg_img;
 
function reload_img () {
  mjpeg_img.src = "cam.jpg?time=" + new Date().getTime();

  setTimeout(function() {
	reload_img
	}, 10);
}
function error_img () {
  setTimeout("mjpeg_img.src = 'cam.jpg?time=' + new Date().getTime();", 100);
}
function init() {
  mjpeg_img = document.getElementById("mjpeg_dest");
  mjpeg_img.onload = reload_img;
  mjpeg_img.onerror = error_img;
  reload_img();
}

