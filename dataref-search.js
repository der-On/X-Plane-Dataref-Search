$(document).ready(function(){
	var copyButton = $('#copy-button');

	copyButton.click(function(){
		copyButton.zclip({
			path:'ZeroClipboard.swf',
			copy:getName()
		});
	});
});

function getName()
{
	var name = '';
	$('input[name="copy"]').each(function(i,el){
		if (el.checked) {
			name = $(el).val();
		}
	});
	return name;
}