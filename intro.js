counter=0;
json='';
closeBtnClass="";
nextBtnClass="";
scrollflag=false;

function initiateIntro(myjsonarr,nextbtnclassname,closebtnclassname,enableScroll){
	json=JSON.parse(myjsonarr);
	closeBtnClass=closebtnclassname;
	nextBtnClass=nextbtnclassname;
	scrollflag=enableScroll;
	if(myjsonarr.length==0){
		console.warn('Function requires array of JSON as input.');
	}
	$('<div class="intro-overlay" style="position:fixed;width:100%;height:100%;z-index:99999;background-color:#000;opacity:0.65;top:0;left:0;"></div><style>.above-highlight{z-index:100000 !important;}</style>').appendTo(document.body);
	highlight();
}

function highlight(){
	var class_name=String("."+json[counter]['class']);
	var doc=document.getElementsByClassName("."+json[counter]['class']);
	var actBtn='';
	if(counter<json.length-1){
		actBtn='<button class="next-btn '+nextBtnClass+'">Next</button></div>';
	}else{
		actBtn='<button class="close-btn '+closeBtnClass+'">Done</button></div>';
	}
	$('<div class="intro-overlay-pointer" style="width: 0;height: 0;border-left: 5px solid transparent;border-right: 5px solid transparent;border-bottom: 5px solid white;z-index:100000;position:absolute;"></div>').appendTo(class_name);
	$('<div class="intro-overlay-msg" style="border:2px dashed #fff;padding:6px;border-radius:10px;z-index:100000;position:absolute;margin-top:10px;color:#fff;">'+json[counter]['msg']+' '+actBtn).appendTo(class_name);
	$(class_name).addClass('above-highlight');
	if(scrollflag){
		var $PContainer = $("html,body");
		var $scrollToEl = $(class_name);
		$PContainer.animate({scrollTop: $scrollToEl.offset().top - $PContainer.offset().top + $PContainer.scrollTop(), scrollLeft: 0},400); 
	}
	counter++;
}

function clearHighlights(){
	var class_name=String("."+json[counter-1]['class']);
	$(class_name).removeClass('above-highlight');
	$('.intro-overlay-pointer').remove();
	$('.intro-overlay-msg').remove();
}

function clickedNxt(){
	clearHighlights();
	highlight();
}

function clickedClose(){
	clearHighlights();
	$('.intro-overlay').remove();
	counter=0;
}

$(document).on('click', '.next-btn', clickedNxt);
$(document).on('click', '.close-btn', clickedClose);
