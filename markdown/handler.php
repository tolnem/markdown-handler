<?php
$file = realpath($_SERVER['PATH_TRANSLATED']);
if(!$file) {
	echo "No filename";
	exit;
}
$legalExtensions = array('md', 'markdown', 'mdown');
if (!in_array(strtolower(substr($file, strrpos($file, '.') + 1)), $legalExtensions) || isset($_GET['raw'])) {
	header('Content-type: text/plain; charset=utf-8');
	readfile($file);
	exit;
}

header('Content-type: text/html; charset=utf-8');
?>
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="<?= dirname($_SERVER['SCRIPT_NAME']) ?>/style.css"/>
    <meta name="content-type" http-equiv="content-type" value="text/html; utf-8"/>
  </head>
  <body>
<?php
  require('markdown.php');
  echo Markdown(file_get_contents($file));
?>
  </body>
</html>
