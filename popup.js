function htmlEncode(value) 
{
    return $('<div/>').text(value)
      .html();
}
var k="";
var taburl="";
$(function()
{

	var taburl = chrome.tabs.getSelected(null, function(tab) 
        {
            var selected="";
             taburl = tab.url;
            let finalURL =
    'https://chart.googleapis.com/chart?cht=qr&chl=' +
              htmlEncode(taburl) +
              '&chs=160x160&chld=L|0'
            $('.qr-code').attr('src', finalURL);
            //document.querySelector('.output').textContent = taburl;
        });
   
    chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
      }, function(selection) {
          k=selection[0];
        //document.getElementById("text").innerHTML=taburl+'#:~:text='+ encodeURI(k);
      });
});