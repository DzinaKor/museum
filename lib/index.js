//==================	pars declaration	==================
const deploy_link		= "https://rolling-scopes-school.github.io/kostyakorshunov-JSFE2021Q3/museum/"
//const deploy_link		= "http://lm:5500/kostyakorshunov-JSFE2021Q3/museum/"
const github_link		= "https://github.com/KostyaKorshunov"
const github_rss_link	= "https://github.com/rolling-scopes-school/kostyakorshunov-JSFE2021Q3"
const github_rss_this_link	= github_rss_link+"/museum/"
//==================		set pars		==================

//==================		main menu		==================
let head_cont_h = 150;
const head_cont_h_const = 150

document.getElementById("bt_menu_close").addEventListener("click", event => {
//	document.getElementById("menu_popup_cont").style.transform = "translateX(-100vw)";
	document.getElementById("bt_menu_popup_on").style.transform = "Scale(1.0, 1.0)";
	document.getElementById("menu_popup").classList.add("menu_popup_cont_hide");
	document.getElementById("welcome_cont").classList.remove("menu_popup_cont_hide");
});
document.getElementById("bt_menu_popup_on").addEventListener("click", event => {
//	document.getElementById("menu_popup_cont").style.transform = "translateX(0vw)";
	document.getElementById("bt_menu_popup_on").style.transform = "Scale(0, 0)";
	document.getElementById("menu_popup").classList.remove("menu_popup_cont_hide");
	document.getElementById("welcome_cont").classList.add("menu_popup_cont_hide");
});
//==================		Slider			==================
document.getElementById("slideshow_container").addEventListener("swiped-left", event => {
		plusSlides(-1);
	//	console.log("LEFT")
});
document.getElementById("slideshow_container").addEventListener("swiped-right", event => {
		plusSlides(1);
	//	console.log("RIGHT")
});
let lastSlide = 0;
let slideIndex = 1;
showSlides(slideIndex);
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}
	function showSlides(n) {
		let i;
		const slides = document.getElementsByClassName("wel_slider");
		const dots = document.getElementsByClassName("slider_dot");
		const cur_nm = document.getElementById("cur_slide_active");


		if(n > slides.length) {
			slideIndex = 1
		}
		if(n < 1) {
			slideIndex = slides.length
		}
		for(i = 0; i < slides.length; i++) {
			slides[i].className = slides[i].className
									.replace(" slider_fade_r", "")
									.replace(" slider_fade_l", "");
			slides[i].style.zIndex = "2";
		//	slides[i].style.display = "none";
		//	slides[i].className.replace(" slider_img_hide_l", "")
		//	slides[i].style.width = "0";
		}
		for(i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" slider_dot_active", "");
		}
		//+++
		if( lastSlide > 0 ){
			slides[lastSlide - 1].style.zIndex = "5";
			slides[lastSlide - 1].className = slides[lastSlide - 1].className.replace(" slider_active", "");
			if( slideIndex < lastSlide ){
				slides[lastSlide - 1].className += " slider_fade_r";
			}else{
				slides[lastSlide - 1].className += " slider_fade_l";
			}
		}
		slides[slideIndex - 1].className += " slider_active";
		//	console.log( "cur = "+slideIndex+" last = "+lastSlide )
		//+++
	//	slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " slider_dot_active";
		cur_nm.innerHTML = "0"+slideIndex;
		lastSlide = slideIndex;
	}
//==================		Tours			==================
document.querySelectorAll(".tour").forEach(item => {
	item.addEventListener("mouseenter", event => {
		if( event.target.tagName === "SECTION" ){
			const hr = event.target.getElementsByClassName("tour_line")
			if( hr[0] != null ){
				hr[0].classList.add("tour_line_hover");
			}
			const h3 = event.target.getElementsByTagName("h3")
			if( h3[0] != null ){
				h3[0].classList.add("tour_h3_hover");
			}
		}
	})
	item.addEventListener("mouseleave", event => {
		if( event.target.tagName === "SECTION" ){
			const hr = event.target.getElementsByClassName("tour_line")
			if( hr[0] != null ){
				hr[0].classList.remove("tour_line_hover");
			}
			const h3 = event.target.getElementsByTagName("h3")
			if( h3[0] != null ){
				h3[0].classList.remove("tour_h3_hover");
			}
		}
	})
})
//++++++++++++++++++++++++
function run_tour(i) {
	const new_a = document.createElement("a");
	new_a.href = deploy_link + "src/tour_" + i + ".html";
	new_a.target = "_blank";
	new_a.click();
	new_a.remove();
}
//==================		Gallery			=================
let gallery = [
	"galery1.jpg",
	"galery2.jpg",
	"galery3.jpg",
	"galery4.jpg",
	"galery5.jpg",

	"galery6.jpg",
	"galery7.jpg",
	"galery8.jpg",
	"galery9.jpg",
	"galery10.jpg",

	"galery11.jpg",
	"galery12.jpg",
	"galery13.jpg",
	"galery14.jpg",
	"galery15.jpg"
];
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
		[array[i], array[j]] = [array[j], array[i]];
	}
}
function gallery_start() {
	shuffle(gallery);

		let c1 = 0;
		let c2 = 0;
		let c3 = 0;
		const gallery_cont_1 = document.querySelector("#gal_sub_1");
		const gallery_cont_2 = document.querySelector("#gal_sub_2");
		const gallery_cont_3 = document.querySelector("#gal_sub_3");
		if( gallery_cont_2.style.display === "none" ){	
			c2 = 100;	
		}
		if( gallery_cont_3.style.display === "none" ){
			c3 = 100;
		}
		
	gallery.map((f_nm) => { 
		const img = document.createElement("img");
	//	const img = document.createElement("div");
		img.classList.add("gallery_img");
		img.classList.add("gallery_img_start");
		img.src = "./assets/galery/"+f_nm;
		img.alt = "dynamic_load";
		img.style = "z-index: 1;"
	/*	img.addEventListener("", event => {
		});*/
	//	img.style = "z-index: 1; background: url('./assets/galery/"+f_nm+"');"
		if( c1 <= c2 && c1 < 6){
			gallery_cont_1.append(img);
			c1++;
		} else if( c2 <= c3 && c2 < 6){
			gallery_cont_2.append(img);
			c2++;
		} else if( c3 < c1 && c3 < 6){
			gallery_cont_3.append(img);
			c3++;
		}

	})
}
gallery_start();

window.addEventListener("scroll", function() {
	let body_top = window.scrollY;
	let delay_start = 100;
	document.querySelectorAll('img[alt="dynamic_load"]').forEach( el => {
		const posY = el.getBoundingClientRect().top;
		if(		posY < body_top	&& el.classList.contains("gallery_img_start")

			){
				delay_start += Math.floor( Math.random() * 400 + 100 );
				setTimeout( function(){ 
					el.classList.remove("gallery_img_start");
				}, delay_start );
		}else if( posY > body_top + ( document.documentElement.clientHeight * 2) ){
			el.classList.add("gallery_img_start");
		}
	});
			// + ( document.documentElement.clientHeight * 0.75)
		//	&& 	posY > body_top + document.documentElement.clientHeight 

});

//==================		Tickets			=================
function tic_chng(chn_type, chn_val) {
	let regex = new RegExp("[0-9]+",'gi');
	const inp_1 = document.getElementById("tic_basic");
	const inp_2 = document.getElementById("tic_senior");
	const inp_1dt = document.getElementById("tic_dt_basic");
	const inp_2dt = document.getElementById("tic_dt_senior");
	let c_val_1 = inp_1.value;
	let c_val_2 = inp_2.value;
	if( c_val_1.match(regex) && c_val_2.match(regex) ){

		if( chn_type == 1 ){
			const new_val = Number(c_val_1) + Number(chn_val)
			if( new_val >= 0 && new_val <= 20 ){
				inp_1.value = new_val
				inp_1dt.value = new_val
			}
		}
		else if( chn_type == 2 ){
			const new_val = Number(c_val_2) + Number(chn_val)
			if( new_val >= 0 && new_val <= 20 ){
				inp_2.value = new_val
				inp_2dt.value = new_val
			}
		}
		c_val_1 = inp_1.value;
		c_val_2 = inp_2.value;
		update_cost();
	}
}
//==================		img compar	==================
	initComparisons();
//==================		Map			==================
const layerC = new L.TileLayer("https://api.mapbox.com/styles/v1/kostyakorshunov/ckuny7sgyheru17o46y6jiprk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia29zdHlha29yc2h1bm92IiwiYSI6ImNrdWQzdjJycTBxOWwyeG10OWFwY2podWUifQ.oBhErVrhpVvIbhsvoQa1eQ");
const layerO = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
const mapOptions = {
	center: [48.86091, 2.3364],
	zoom: 16,
	layers: [layerC, layerO]
}
const map = new L.map('map', mapOptions );

function map_start(){
	//	const map_el = document.getElementById("map");

	//	var layer = new L.TileLayer("https://api.mapbox.com/styles/v1/kostyakorshunov/ckuny7sgyheru17o46y6jiprk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia29zdHlha29yc2h1bm92IiwiYSI6ImNrdWQzdjJycTBxOWwyeG10OWFwY2podWUifQ.oBhErVrhpVvIbhsvoQa1eQ");
	//	var layer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
		
		//map.addLayer(layerC);
		L.control.layers(
			{
				"Color": layerO
			},
			{
				"Grayscale": layerC
			}).addTo(map);
		map.setView([48.86091, 2.3364], 17);
		let poi1 = L.marker([48.86091, 2.3364]).addTo(map)
			.bindPopup("<a href='https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736'>Greek hall</a>");
		let poi2 = L.marker([48.8602, 2.3333]).addTo(map)
		.bindPopup("<a href='https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736'>Greek hall</a>");
		let poi3 = L.marker([48.8607, 2.3397]).addTo(map)
			.bindPopup("<a href='https://www.google.com/maps/@48.8606882,2.3356791,3a,90y,328.36h,87.55t/data=!3m7!1e1!3m5!1sAF1QipMZ9YgnArbwEIbTDANeSQYFu9gNqpW_2Sv8FBvY!2e10!3e12!7i4352!8i1815'>Royal Palace</a>");
		let poi4 = L.marker([48.8619, 2.3330]).addTo(map)
			.bindPopup("<a href='https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736'>Greek hall</a>");
		let poi5 = L.marker([48.8625, 2.3365]).addTo(map)
			.bindPopup("<a href='https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736'>Greek hall</a>");
}

setTimeout( function(){ 
		map_start(); 
	}, 1000 );
//	document.getElementById("map").style.setProperty("--my-var");
//==================		footer		==================
document.querySelectorAll(".footer_link").forEach(item => {
	item.addEventListener("mouseenter", event => {
		let nm = event.target.id
		event.target.src = "./images/"+nm+"_sel.svg";
		
	})
	item.addEventListener("mouseleave", event => {
		let nm = event.target.id
		event.target.src = "./images/"+nm+".svg";
	})
})
//==================	====		Video		====	==================
/*
var tag = document.createElement('script');
tag.id = 'iframe_yb';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//var youtubeScriptTag_1 = document.getElementsByTagName('script')[0];
//youtubeScriptTag_1.parentNode.insertBefore(tag, youtubeScriptTag_1);

var y_player_1;
var y_player_2;
var y_player_3;
var y_player_4;
var y_player_5;

function onPlayerReady(event) {
//    console.log("  youtube ready  ");
}
function onPlayerStateChange(event) {
	let nom = event.target.id;
	if(nom == 1){

	}else if(nom == 2){
	}else if(nom == 3){
	}else if(nom == 4){
	}else if(nom == 5){
	}

    console.log("  youtube change = " + nom +" /  "+event.target.getVideoData().title);
}

function onYouTubeIframeAPIReady() {
	y_player_1 = new YT.Player('youtube1', {
		videoId: "2OR0OCr6uRE",
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
  	});
	  y_player_2 = new YT.Player('youtube2', {
		videoId: "zp1BXPX8jcU",
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
  	});
	  y_player_3 = new YT.Player('youtube3', {
		videoId: "Vi5D6FKhRmo",
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
  	});
	  y_player_4 = new YT.Player('youtube4', {
		videoId: "NOhDysLnTvY",
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
  	});
	  y_player_5 = new YT.Player('youtube5', {
		videoId: "aWmJ5DgyWPI",
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
  	});
//	y_player_1.playVideo();
//  	console.log("  youtube API "+y_player_1);

}
*/
//==========================
let cur_Vol = 0.5;

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerView: 3,
	spaceBetween: 20,
//	slidesPerGroup: 3,
	loop: true,
	mousewheel: true,
	
	breakpoints: {
		// when window width is >= 220px
		220: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		// when window width is >= 781px
		781: {
			slidesPerView: 3,
			spaceBetween: 20
		}
	  },
	
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
//	  currentClass: '.swiper_circle_active',
//	  bulletActiveClass: '.swiper_circle_active',
	  clickable: true,
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper_button_next',			//'.swiper-button-next',
	  prevEl: '.swiper_button_prev',			//'.swiper-button-prev',
	}

	// And if we need scrollbar
/*	scrollbar: {
	  el: '.swiper-scrollbar',
	},*/
});
swiper.on('slideChange', function () {
	const ind = swiper.activeIndex - 2;
	if( ind == 0 || ind == 5 ){
		document.getElementById("video_main").src = "./assets/video/video4.mp4";
		document.getElementById("video_main").poster = "./assets/video/poster4.jpg";
			resetVideo();
	}else if( ind == 1 || ind == 6 ){
		document.getElementById("video_main").src = "./assets/video/video0.mp4";
		document.getElementById("video_main").poster = "./assets/video/poster0.jpg";
			resetVideo();
	}else if( ind == 2 || ind == 7 ){
		document.getElementById("video_main").src = "./assets/video/video1.mp4";
		document.getElementById("video_main").poster = "./assets/video/poster1.jpg";
			resetVideo();
	}else if( ind == 3 ){
		document.getElementById("video_main").src = "./assets/video/video2.mp4";
		document.getElementById("video_main").poster = "./assets/video/poster2.jpg";
			resetVideo();
	}else if( ind == 4 ){
		document.getElementById("video_main").src = "./assets/video/video3.mp4";
		document.getElementById("video_main").poster = "./assets/video/poster3.jpg";
			resetVideo();
	}
//	console.log( " video "+ind );
//	console.log('slide changed');
});

let videoElem = document.getElementById("video_main");
let playButton = document.getElementById("video_bt_play");
let playBigBt  = document.getElementById("video_bt_play_big");
const playHidBt  = document.getElementById("video_hid_bt");

playHidBt.addEventListener("click", handlePlayButton, false);
playButton.addEventListener("click", handlePlayButton, false);
playBigBt.addEventListener("click", handlePlayButton, false);

async function playVideo() {
try {
await videoElem.play();
	//	playButton.classList.add("playing");
	playButton.src = "./images/video_pause.svg";
	playBigBt.style.display = "none";
} catch(err) {
	//	playButton.classList.remove("playing");
	playButton.src = "./images/video_play.svg";
	playBigBt.style.display = "block";
}
}

function handlePlayButton() {
	if (videoElem.paused) {
		playVideo();
	} else {
		videoElem.pause();
		playButton.src = "./images/video_play.svg";
		playBigBt.style.display = "block";
		//	playButton.classList.remove("playing");
	}
}

const bt_Volume  = document.getElementById("video_volume");
const bt_Seek  = document.getElementById("video_seek");


bt_Volume.addEventListener("change", event => {
	videoElem.volume = bt_Volume.value / 100;
	cur_Vol = bt_Volume.value / 100;
	if( bt_Volume.value == 0 ){
		document.getElementById("video_bt_mute").src = "./images/video_mute.svg";
	}else{
		document.getElementById("video_bt_mute").src = "./images/video_unmute.svg";
	}
//	console.log( ""+bt_Volume.value );
});

document.getElementById("video_bt_mute").addEventListener("click", event => {
	if( videoElem.volume == 0 ){
		event.target.src = "./images/video_unmute.svg";
		videoElem.volume = cur_Vol;
		bt_Volume.value = 100 * cur_Vol;
	}else{
		cur_Vol = videoElem.volume;
		videoElem.volume = 0;
		event.target.src = "./images/video_mute.svg";
		bt_Volume.value = 0;
	}
});

bt_Seek.addEventListener("change", event => {
	const vid_len = videoElem.duration;
	if( !isNaN(vid_len) && vid_len > 0 ){
		videoElem.currentTime = ( bt_Seek.value / 100 ) * vid_len;
	}else{
		bt_Seek.value = 0;
	}
//	console.log( ""+bt_Volume.value );
});

videoElem.addEventListener("timeupdate", event => {
	const vid_len = videoElem.duration;
	let vid_cur_dur = videoElem.currentTime;
	if( !isNaN(vid_len) && vid_len > 0 ){
		bt_Seek.value = vid_cur_dur / vid_len * 100;
	}else{
		bt_Seek.value = 0;
	}
	//	console.log( ""+vid_cur_dur+"  /   "+vid_len );
});
const resetVideo = () => {
	bt_Volume.value = 100 * cur_Vol;
	videoElem.volume = cur_Vol;
	bt_Seek.value = 0;
	document.getElementById("video_bt_mute").src = "./images/video_unmute.svg";
	bt_Seek.value = 0;
	playBigBt.style.display = "block";
	playButton.src = "./images/video_play.svg";
	videoElem.playbackRate = 1;
};
resetVideo();

videoElem.addEventListener('ended', function () {
    resetVideo();
}, false)
//=======================================================	FuulScreen
const fullscr_toggle = (exit = 0) => {
	const video_cont = document.getElementById("video_play_cont");
	if( exit > 0 || video_cont.classList.contains("video_play_container_fs") ){
		video_cont.classList.remove("video_play_container_fs");
	}else{
		video_cont.classList.add("video_play_container_fs");
	}
};
document.getElementById("video_bt_full").addEventListener('click', event=> {
		fullscr_toggle();
});
//=======================================================	KeyPress
document.addEventListener('keypress', event=> {
	if( !videoElem.paused ){
		if( event.key == "m" ){
			if( videoElem.volume == 0 ){
				document.getElementById("video_bt_mute").src = "./images/video_unmute.svg";
				videoElem.volume = cur_Vol;
				bt_Volume.value = 100 * cur_Vol;
			}else{
				cur_Vol = videoElem.volume;
				videoElem.volume = 0;
				document.getElementById("video_bt_mute").src = "./images/video_mute.svg";
				bt_Volume.value = 0;
			}		
		}else if( event.keyCode == 32 && event.target == document.body ){
			//videoElem.pause();
			handlePlayButton();
			event.preventDefault();
			return false;
		}else if( event.key == "<" ){
			videoElem.playbackRate = 2.0;
		}else if( event.key == ">" ){
			videoElem.playbackRate = 0.5;
		}
	//	console.log(" "+event.key);
	//	console.log(" rate "+videoElem.playbackRate);

	}else{
		if( event.keyCode == 32 && event.target == document.body ){
			//videoElem.play(); 
			handlePlayButton();
			videoElem.playbackRate = 1.0;
			event.preventDefault();
			return false;
				//+++++++++++++++++
		}else if( event.key == "f" && event.target == document.body ){
				fullscr_toggle();
		}
	}
});

console.log(" Score = 148+");
console.log(" Из частично выполненного: ");
console.log(" 8) при попытке ввода в input невалидного значения, его граница подсвечивается красным, выводится текстовое предупреждение в человекочитаемом формате -2 ");
console.log(" Пункт выполнен частично: проверка проходит при submit (нажатии кнопки books) и красным подсвечивается все сразу."
			+" В реали (ИМХО) такой подход лучше, т.к. не дергает пользователя на каждом поле.");
console.log(" ===========================================");
console.log(" ");
console.log(" Из бонусов: ");
console.log("	--сделан форматированный ввод номера телефона и банковской карточки  +??");
console.log("	--сделаны два стиля для какрты (выбираются в правом верхнем углу карты)  +??");
console.log("	--для маркеров карты добавил popup с сылками на Google Maps StreetView  +??");
console.log(" ");
