jQuery(document).ready(function($){jQuery(document).ready(function($){$('.search-sort-dropdown').on('click',function(){$(this).toggleClass("drop-down-open");});});function debounce(func,wait,immediate){let timeout;return function(){let context=this,args=arguments;const later=function(){timeout=null;if(!immediate)func.apply(context,args);};const callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);};}
const searchForm=$('.search-form');const searchSuggestionsBox=$('.search-suggestions-box-wrapper');const _searchForms=$('form.search-form');function searchTemplate(post_id,title,link,date,author,is_free,reading_progress,is_saved,image,is_user_logged_in){var sval=($('#search_form_input_box')[0].value.length!=0)?$('#search_form_input_box')[0].value:$('#search_form_input_box_mobile')[0].value;var is_free_strory=(is_free)?'Free Read':'';var is_save_story=(is_saved)?'active':'';if(is_user_logged_in){$html=`<div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="stories-card">
                        <a class="search-sug-meta" href="${link}?searchTerm=`+sval+`">
                            <div class="card-body">
                                <p class="date">${date}
                                    <strong>${is_free_strory}</strong>
                                 </p>
                                <h4 class="article-title"><span>${title}</span></h4>
                                <p class="author-name">${author}</p>
                            </div>
                            <div class="card-image" style="background-image: url('${image}');">
                                <span class="save-icon ${is_save_story}" data-story-id="${post_id}"></span>
                                <div class="progress-bar" style="width: ${reading_progress}%"></div>
                            </div>
                        </a>
                    </div>
                </div>`;}else{$html=`<div class="col-xs-12 col-md-6 col-lg-4">
                    <div class="stories-card">
                        <a class="search-sug-meta" href="${link}?searchTerm=`+sval+`">
                            <div class="card-body">
                                <p class="date">${date}
                                    <strong>${is_free_strory}</strong>
                                 </p>
                                <h4 class="article-title"><span>${title}</span></h4>
                                <p class="author-name">${author}</p>
                            </div>
                            <div class="card-image" style="background-image: url('${image}');">
                                <div class="progress-bar" style="width: ${reading_progress}%"></div>
                            </div>
                        </a>
                    </div>
                </div>`;}
return $html;}
function updateSuggestionBoxPosition(searchForm){if(searchForm.hasClass('search-form-small-screens')){searchSuggestionsBox.addClass('menu-search-form');}else{searchSuggestionsBox.removeClass('menu-search-form');}
const searchFormInput=searchForm.find('input');const searchSuggestionsBoxDebouncer=debounce(()=>{searchSuggestionsBox.css({top:searchFormInput.offset().top+searchFormInput.outerHeight()});},300);searchSuggestionsBoxDebouncer();$(window).on('resize',()=>{searchSuggestionsBoxDebouncer();});}
$('.search-field').on('keyup',function(e){const _this=this;var klength=this.value.length;if(klength<=2){$('search-suggestions-box-wrapper').css('display','none');$('.search-loader').css('display','none');}
if(!searchSuggestionsBox.is(':visible')){searchSuggestionsBox.show();}
if(!$(_this).val().length){searchSuggestionsBox.hide();}
const searchForm=$(_this).closest('form.search-form');updateSuggestionBoxPosition(searchForm);if(klength>2&&38!==e.keyCode&&40!==e.keyCode&&13!==e.keyCode&&27!==e.keyCode&&37!==e.keyCode&&39!==e.keyCode&&20!==e.keyCode&&17!==e.keyCode&&35!==e.keyCode&&27!==e.keyCode&&34!==e.keyCode&&33!==e.keyCode&&19!==e.keyCode&&44!==e.keyCode&&145!==e.keyCode&&9!==e.keyCode&&224!==e.keyCode&&91!==e.keyCode&&8!==e.keyCode){$('.results-list').empty();$('.search-loader').css('display','block');searchSuggestionsBox.find('.no-results-box').addClass('hide');searchSuggestionsBox.find('.see-all-posts-link-wrapper').addClass('hide');setTimeout(function(){$.ajax({type:'POST',url:ajaxurl,dataType:'json',data:{action:'on_ajax_search',search_string:$(_this).val()},success(result){$('.search-loader').css('display','none');$('.results-list').empty();if(result.status){$('.no-results-box').hide();$('.search-suggestion-results').show();$.each(result.posts,(index,el)=>{$('.results-list').append(searchTemplate(el.post_id,el.title,el.get_the_permalink,el.date,el.author,el.is_free,el.reading_progress,el.is_saved,el.image,e.is_user_logged_in));});searchSuggestionsBox.find('.no-results-box').addClass('hide');searchSuggestionsBox.find('.see-all-posts-link-wrapper').removeClass('hide');searchSuggestionsBox.find('.see-all-posts-link').attr('href',result.see_all);searchSuggestionsBox.find('.search-term').text($('#search_form_input_box').val());}else{searchSuggestionsBox.find('.search-term').text($('#search_form_input_box').val());searchSuggestionsBox.find('.search-suggestion-results').hide();searchSuggestionsBox.find('.no-results-box').removeClass('hide');searchSuggestionsBox.find('.no-results-box').show();searchSuggestionsBox.find('.see-all-posts-link-wrapper').addClass('hide');}}});},1500);}});});