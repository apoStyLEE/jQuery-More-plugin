More.js v1 - 1,76kb

====================================================== Açıklama
Uzun yazıları girilen karakter sayısına göre yada belirtilen bir ayraca göre kısaltmaya yarar.

====================================================== Kullanım
[html]
	<p class="more">
		Aliquam in lorem in est venenatis consectetur et a risus. {more} Pellentesque venenatis viverra cursus. Nulla tempus nisl vel dolor venenatis accumsan. Integer in sem in risus ultricies accumsan eget vel erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur id massa leo, eu convallis orci. Integer aliquam nibh eget leo dapibus auctor. Quisque ultrices dapibus augue eget molestie. Maecenas pharetra magna rhoncus sem tincidunt a tincidunt eros pharetra.
	</p>
[/html]

[js]
	$(".more").more(); //veya
	$(".more").more({character:50,splitChar:'daha'});
[/js]

====================================================== Ayarlar
'text'          :   ' ..devamı'
'textClass'     :   'mt',
'character'     :   100,
'splitChar'     :   '{more}',
'removeHtmlTag' :   true