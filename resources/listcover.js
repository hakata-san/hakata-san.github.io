/*! Alphabetical Order Script for Visual Novels */
var list = { letters: [] };
$("#vn_list").children("p").each(function(){
    var itmLetter = $(this).text().substring(0,1).toUpperCase();
    if (!(itmLetter in list)) {
        list[itmLetter] = [];
        list.letters.push(itmLetter);
    }
    list[itmLetter].push($(this));
});
list.letters.sort();
$("#vn_list").empty();
$.each(list.letters, function(i, letter){
    list[letter].sort(function(a, b) {
        return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
    });
    var div = $("<div/>");
    $.each(list[letter], function(idx, itm){
        div.append(itm);
    });
    $("#vn_list").append($("<p/>").append($('<font size="4" color="#FFDCA0">').attr("name", letter.toLowerCase()).addClass("title").html(letter)).append(div));
});
/*! Original source $("#vn_list").append($("<p/>").append($("<a/>").attr("name", letter.toLowerCase()).addClass("title").html(letter)).append(div)); */
/*! Alphabetical Order Script for Hentai Videos */
var list = { letters: [] };
$("#hv_list").children("p").each(function(){
    var itmLetter = $(this).text().substring(0,1).toUpperCase();
    if (!(itmLetter in list)) {
        list[itmLetter] = [];
        list.letters.push(itmLetter);
    }
    list[itmLetter].push($(this));
});
list.letters.sort();
$("#hv_list").empty();
$.each(list.letters, function(i, letter){
    list[letter].sort(function(a, b) {
        return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
    });
    var div = $("<div/>");
    $.each(list[letter], function(idx, itm){
        div.append(itm);
    });
    $("#hv_list").append($("<p/>").append($('<font size="4" color="#FFDCA0">').attr("name", letter.toLowerCase()).addClass("title").html(letter)).append(div));
});
/*! Show Visual Novels and Games Cover */
$(".vn_cover").mouseenter(function(){
        var image_name=$(this).data('image');
        var imageTag='<p style="position:absolute;">'+'<img src="'+image_name+'" alt="image" height="350" />'+'</p>';
        $(this).parent('p').append(imageTag);
    });
    $(".vn_cover").mouseleave(function(){
        $(this).parent('p').children('p').remove();
    });
/*! Show Hentai Videos Cover */
$(".hv_cover").mouseenter(function(){
        var image_name=$(this).data('image');
        var imageTag='<p style="position:absolute;">'+'<img src="'+image_name+'" alt="image" height="350" />'+'</p>';
        $(this).parent('p').append(imageTag);
    });
    $(".hv_cover").mouseleave(function(){
        $(this).parent('p').children('p').remove();
    });
