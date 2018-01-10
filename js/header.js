function createString(input){
   $(input).each(function(){
     let myStr = $(this).html();
     myStr = myStr.split('');
     
     let contents = '';
     for (let i = 0, len = myStr.length; i < len; i) {
       contents = '<span class="single-char char-'  i  '">'  myStr[i]  '</span>';
     }
     $(input).html(contents);
   });
 }
 
 $('document').ready(function() {
   let myHeader = $('#main-header');
   createString(myHeader);
   $('.char-3').addClass('accent');
   $('.char-11').addClass('accent');
 }); 