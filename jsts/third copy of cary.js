function viewSell(){
	var url=window.location.toString();
	var nowTime=Math.floor(Date.now()/1000);
	var lfflCo=localStorage.getItem('lfflCo');
	var lfflNo=localStorage.getItem('lfflNo');
	var a=$('.adv-within a:eq(1)').attr('href');
	var e=$('.adv-within a:eq(1)').html();
	if(url.search(/\/post\//)>-1&&(lfflCo==null||lfflTo==null||(lfflCo!=a&&lfflNo!=e&&(nowTime-lfflTo)>=180))){
		$('.adv-within').before('<style id="sffl">#lffl{display:block;position:fixed;top:0;left:0;width:100%;height:100%;cursor:default;}</style>');
		$('.adv-within').before('<a id="lffl"></a>');
		var b=$('.adv-within a:eq(1)').attr('class');
		var c=$('.adv-within a:eq(1)').attr('onclick');
		var d=$('.adv-within a:eq(1)').attr('onmouseover');
		localStorage.setItem('lfflCo',a);
		localStorage.setItem('lfflNo',e);
		localStorage.setItem('lfflTo',nowTime);
		$('#lffl').attr('href',a);
		$('#lffl').attr('class',b);
		$('#lffl').attr('onclick',c);
		$('#lffl').attr('onmouseover',d);
		$('#lffl').attr('target','_blank');
	}
}
viewSell();

$('#lffl').click(function(){
	$('#lffl').remove();
	$('#sffl').remove();
	window.location=window.location;
});