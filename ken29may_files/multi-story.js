jQuery(document).ready(function($){$('#commnent-sorting').selectmenu({change:function(event,ui){var This=$(this);var sorting=$(this).val();if(sorting){window.location.href=sorting;}}});$('#prcing-edition').selectmenu({change:function(event,ui){var This=$(this);var sorting=$(this).val();if(sorting=='SEA'){$('#sea_pricing').removeClass('hide');$('#ind_pricing').addClass('hide');jQuery('#register-modal .sign_up_edition').val(3);}else{$('#ind_pricing').removeClass('hide');$('#sea_pricing').addClass('hide');jQuery('#register-modal .sign_up_edition').val(1);}
var IND_URL=jQuery('body').attr('data-current-site-url');var SEA_URL=IND_URL+'/sea';var is_common_article=jQuery('#is_common_article');if(is_common_article.length){if(sorting=='SEA'){jQuery('.logo a').attr('href',SEA_URL);jQuery('.prcing-upgrade').attr('href',SEA_URL);}else{jQuery('.logo a').attr('href',IND_URL);jQuery('.prcing-upgrade').attr('href',IND_URL);}}}});$('.Opt-in-edition').click(function(){var edition_id=$(this).attr('edition-id');$('.Opt-in-edition').addClass('loader-overlay');var data={action:'edition_opt_in',edition_id:edition_id};$.post(tkmultisitethemecodes_response_ajax_script.ajaxurl,data,function(response){response=response.slice(0,-1).trim();$('.Opt-in-edition').removeClass('loader-overlay');jQuery('#general-success-meaage-modal').modal('show');jQuery('#general-success-meaage-modal p').text('Opt-in Successfully!');setTimeout(function(){location.reload();},2000);});});$('.footer-comment').click(function(e){e.preventDefault();$([document.documentElement,document.body]).animate({scrollTop:$('#comments-wrapper').offset().top-100},1000);});const paywallForm=$('#paywall-form');const paywallformFormbtn=$('#paywall-form button');var paywallFormValidation=paywallForm.validate({rules:{email:{required:true,email:true},},submitHandler:function(form){paywallformFormbtn.addClass('loader-overlay');jQuery.ajax({type:'POST',url:ajaxurl,data:{action:'check_user_email',data:paywallForm.serialize()},success:function(data,textStatus,XMLHttpRequest){paywallformFormbtn.removeClass('loader-overlay');data=data.slice(0,-1).trim();var email=$('#paywall-form input[type="email"]').val();console.log(data);if(data=="show_login"){jQuery('#login-modal').modal('show');jQuery('#login-modal input[type="email"]').val(email);}else{jQuery('#register-modal').modal('show');jQuery('#register-modal input[type="email"]').val(email);}},error:function(errorThrown){}});},});const commentForm=$('#commentform');const commentFormbtn=$('#commentform #submit');var commentFormValidation=commentForm.validate({rules:{comment:{required:true,},},messages:{comment:{required:"Please fill the required field",}}});$('.faq-explain-div').click(function(){$([document.documentElement,document.body]).animate({scrollTop:$('.upgrade-features-wrapper').offset().top-50},1000);});});jQuery(window).bind("load",function(){var IND_URL=jQuery('body').attr('data-current-site-url');var SEA_URL=IND_URL+'/sea';var sorting=jQuery('.select-country .dropdown-text.country-dropdown').text();var is_common_article=jQuery('#is_common_article');if(is_common_article.length){if(sorting=='India'){jQuery('.logo a').attr('href',IND_URL);jQuery('.prcing-upgrade').attr('href',IND_URL);jQuery('#register-modal .sign_up_edition').val(1);}else{jQuery('.logo a').attr('href',SEA_URL);jQuery('.prcing-upgrade').attr('href',SEA_URL);jQuery('#register-modal .sign_up_edition').val(3);}}});