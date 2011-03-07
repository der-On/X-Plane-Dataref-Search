<?php require('dataref-search-inc.php');
parse();
//var_dump($datarefs);
?>
<?php print '<?xml version="1.0" encoding="UTF-8" ?>'; ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="audience" content="all" />
    <meta name="document-rights" content="" />
    <meta name="language" content="en" />
    <meta name="robots" content="INDEX, FOLLOW" />
    <meta name="title" content="XPlane2Blender - Dataref Search" />
    <meta name="author" content="Ondrej Brinkel" />
    <meta name="owner" content="Ondrej Brinkel" />
    <meta name="publisher" content="Ondrej Brinkel" />
    <meta name="copyright" content="Ondrej Brinkel 2011" />
    <meta name="keywords" content="X-Plane, X-Plane 9, X-Plane 10, Datarefs, Dataref, XPlane2Blender" />
    <meta name="description" content="Search X-Plane Datarefs" />
    <meta name="document-type" content="Public" />

    <meta name="document-distribution" content="Global" />
    <meta http-equiv="Content-Script-Type" content="text/javascript" />
    <title>XPlane2Blender - Dataref Search</title>
    
    <link rel="stylesheet" href="dataref-search.css" type="text/css" />
    <script type="text/javascript" src="jquery-1.5.1.min.js"></script>
	<script type="text/javascript" src="jquery.zclip.min.js"></script>
	<script type="text/javascript" src="dataref-search.js"></script>
</head>
<body>
    <div id="page">
        <div id="header">
            <h1>XPlane2Blender - Dataref Search</h1>
            <h2 id="datarefs-version"><?php print $version; ?></h3>
			<ol class="howto">
				<li>Type in your search criteria and click "Search".</li>
				<li>Click on the dataref name you want to copy.</li>
				<li>Double click "Copy to clipboard" and paste the dataref into Blender.</li>
			</ol>
        </div>
		<div id="search">
			<form method="get">
				<label for="search-name">Name</label><input name="name" type="text" id="search-name" value="<?php print $_GET['name']; ?>" />
				<label for="search-type">Type</label><select name="type" id="search-type"><?php print fillSelect($types,$_GET['type']);?></select>
				<label for="search-writable">Writable</label><select name="writable" id="search-writable"><?php print fillSelect($writables,$_GET['writable']);?></select>
				<label for="search-units">Units</label><select name="units" id="search-units"><?php print fillSelect($units,$_GET['units']);?></select>
				<label for="search-description">Description</label><input name="description" type="text" value="<?php print $_GET['description']; ?>" />
				<input name="submit" type="submit" id="search-submit" value="Search"/>
			</form>
			<button id="copy-button" title="Double click to copy to clipboard">Copy to clipboard</button>
			<label for="test-copy">Test your clipboard</label><input id="test-copy" type="text" name="test" value="" />
			<p id="messages">
				Search matched <?php print count($datarefs); ?> datarefs. Found in <?php print $time; ?> seconds
			</p>
			<div class="clear"></div>
		</div>
        <div id="content">
            <table>
                <thead>
                    <th></th>
					<th>Name</th>
                    <th>Type</th>
                    <th>Writable</th>
                    <th>Units</th>
                    <th>Description</th>
                </thead>
                <tbody id="search-results">
					<?php print fillTable();?>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>