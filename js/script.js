$(document).ready(function () {
    $('.two').click(function () {
        $(this).next('.hide').toggle();
    });
    var clonex = $(".container");
    for (i = 0; i < data.length; i++) {
        var cloney = clonex.clone();
        var currentdata = data[i];
        var x = "a000" + i;
        $(cloney).appendTo(".right");
        $(cloney).find(".mname").html(currentdata.name).data("brand", currentdata.name);
        $(cloney).find(".mimage").attr('src', currentdata.img);
        $(cloney).find(".star").html(currentdata.star);
        $(cloney).find(".rate").html(currentdata.price);
        $(cloney).find(".rating").html(currentdata.rating);
        $(cloney).find(".review").html(currentdata.review);
        $(cloney).find(".specification .li1").html(currentdata.specification[0]).data("ram", currentdata.specification[0]);
        $(cloney).find(".specification .li2").html(currentdata.specification[1]).data("display", currentdata.specification[1]);
        $(cloney).find(".specification .li3").html(currentdata.specification[2]).data("camera", currentdata.specification[2]);
        $(cloney).find(".specification .li4").html(currentdata.specification[3]).data("battery", currentdata.specification[3]);
        $(cloney).find(".specification .li5").html(currentdata.specification[4]).data("processor", currentdata.specification[4]);
        $(cloney).attr('id', x);
    }
    $('.dropdown_1').hover(function (e) {
        $('.dropdown1').toggle();
        $('.dropdown1').animate({
            top: '-28px'
        }, 1000);
        $('.dropdown2').animate({
            top: '0px'
        });
        $('.dropdown2').hide();
        e.stopPropagation();
    });
    $('.dropdown_2').hover(function (e) {
        $('.dropdown2').toggle();
        $('.dropdown2').animate({
            top: '-28px'
        }, 1000);
        $('.dropdown1').animate({
            top: '0px'
        });
        $('.dropdown1').hide();
        e.stopPropagation();
    });
    $('body').click(function () {
        $('.dropdown1').hide();
        $('.dropdown2').hide();
        $('.dropdown1').animate({
            top: '0px'
        });
        $('.dropdown2').animate({
            top: '0px'
        });
    });
    $('.rt').click(function(){
        choosedFilters();
        filter();
        console.log(choosedfilters)
        console.log(filternames)
        console.log(comparingData)
        result();
    })
result();
});


function choosedFilters(){
    choosedfilters={};
    filternames=[];
    $('.rt').each(function(){
        if($(this).is(":checked")){
            filterid=$(this).data("id");
            filtertype=$(this).data("type");
            if(!choosedfilters[filtertype]){
                choosedfilters[filtertype]=[];
                if(filternames.includes(filtertype)==false){
                    filternames.push(filtertype)
                }
            }
            
            choosedfilters[filtertype].push(filterid);
        }
    })
}

function filter() {
	for (var i = 0; i < data.length; i++) {
		x = "#a000" + i;
		$(x).show();
		comparingData = {};
		for (var j = 0; j < filternames.length; j++) {
			if (!comparingData[filternames[j]]) {
				comparingData[filternames[j]] = [];
			};
			value = data[i][filternames[j]];

			if (!comparingData[filternames[j]][value]) {
				comparingData[filternames[j]].push(value);
			}
			var len = choosedfilters[filternames[j]].length;
			for (k = 0; k < len; k++) {
				filterVal = choosedfilters[filternames[j]][k];
				dataVal = comparingData[filternames[j]][0];
				if(filterVal == dataVal){
					break;
				}
				else if (filterVal != dataVal) {
					if (len == k+1) {
						$(x).hide();
					}
					else{continue;}
				}
			}
		}
	}
}

function result() {
	var count = 0;
	for (i = 0; i < data.length; i++) {
		var proId = "#a000" + i;
		visPro = $(proId).is(':visible');
		if (visPro) {
			count += 1;
		}
	};
	$('#start').html(count)
	$('#end').html(data.length)
	if (count == 0) {
		$('.noresult').show();
	}
	if (count != 0) {
		$('.noresult').hide();
	}
    $(".f_end").click(function(){
	$("html, body").animate({
		scrollTop: "0"
	}, 1000);
})
};


$(document).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("active");
    }
    if (scroll > 100) {
        $('.dropdown1').hide();
        $('.dropdown2').hide();
    } else {
        $("#header").removeClass("active");
    }
});