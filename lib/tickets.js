//=== presets
const euro = "€"; 
let now = new Date();
const el_tic_date = document.getElementById("tic_dt_date");
const el_tic_time = document.getElementById("tic_dt_time");

let last_tic_phone = "___ ___-__-__";			//"(+___ __) ___-__-__";		/^\(\+([0-9]{3}) ([0-9]{2})\) ([0-9]{3})-([0-9]{2})-([0-9]{2})$/
const tic_phone_delim = "_";
let last_card_num = "____ - ____ - ____ - ____";
const card_num_delim = "_";

let objLStore = Object.create({
		bs: "0",
		sn: "0",
		tp: "20"
});

//=====================
const valid_map = new Map();
valid_map.set("date", {	
			newVal: 	"",
			lastVal:	"",
			nodeId:		"tic_dt_date",
			check:		(val) => {
							if( /^(202[0-9])-([0][1-9]|[1][012])-([0123][0-9])$/.test(val) ) {
								return true;
							}
								return false;
						}	});
valid_map.set("time", {	
			newVal: 	"",
			lastVal:	"",
			nodeId:		"tic_dt_time",
			check:		(val) => {
							if( /^([0][9]|[1][0-8]):([03][0])$/.test(val) )	return true;
							return false;
						}	});

valid_map.set("name", {	
			newVal: 	"",
			lastVal:	"",
			nodeId:		"tic_dt_name",
			check:		(val) => {
							if( /^[ _A-Za-zА-Яа-я]+$/.test(val) ){
								if(val.length >= 3 && val.length <= 15)	return true;
							}
							return false;
						}	});
valid_map.set("email", {	
			newVal: 	"",
			lastVal:	"",
			nodeId:		"tic_dt_email",
			check:		(val) => {
							if( /^([-_A-Za-z0-9]+)@([A-Za-z]+)\.([A-Za-z]+)$/.test(val) ){
								const sp = val.split("@")[1].split(".");
									if( sp[0].length >= 4 && sp[1].length >= 2 ){
										return true;
									}
							}
							return false;
						}	});
valid_map.set("phone", {	
			newVal: 	"",
			lastVal:	"",
			nodeId:		"tic_dt_phone",
			check:		(val) => {
							if( /^([0-9]{3}) ([0-9]{3})-([0-9]{2})-([0-9]{2})$/.test(val)  ){
									return true;
							}
							return false;
						}	});
valid_map.set("type", {	
			newVal: 	"",
			lastVal:	"",
			nodeId:		"tic_dt_type",
			check:		(val) => {
							if( ""+val === "20" ){		return true;
							}else if(""+val === "25"){	return true;
							}else if(""+val === "40"){	return true;		}
								return false;
						}	});
valid_map.set("count_basic", {	
			newVal: 	"",
			lastVal:	"",
			nodeId:		"tic_dt_basic",
			check:		(val) => {
							if( /^[0-9]+$/.test(val) )	return true;
							return false;
						}	});
valid_map.set("count_senior", {	
			newVal: 	"",
			lastVal:	"",
			nodeId:		"tic_dt_senior",
			check:		(val) => {
							if( /^[0-9]+$/.test(val) )	return true;
							return false;
						}	});
valid_map.set("card_number", {	
			newVal: 	"",
			lastVal:	"",
			nodeId:		"tic_dt_card_number",
			check:		(val) => {
							if( /^([0-9]{4}) - ([0-9]{4}) - ([0-9]{4}) - ([0-9]{4})$/.test(val) ) {
									return true;
							}
							return false;
						}	});
valid_map.set("card_month", {	
			newVal: 	"",
			lastVal:	"",
			nodeId:		"tic_dt_card_month",
			check:		(val) => {
							if( /^[0][0-9]|[1][12]$/.test(val) )	return true;
							return false;
						}	});
valid_map.set("card_year", {	
			newVal: 	"",
			lastVal:	"",
			nodeId:		"tic_dt_card_year",
			check:		(val) => {
							if( /^202[0-9]|203[0-9]$/.test(val) )	return true;
							return false;
						}	});
valid_map.set("card_name", {	
			newVal: 	"",
			lastVal:	"",
			nodeId:		"tic_dt_card_name",
			check:		(val) => {
							if( /^([A-Za-z]+)[ ]([A-Za-z]+)$/.test(val) )	return true;
							return false;
						}	});
valid_map.set("card_cvv", {	
			newVal: 	"",
			lastVal:	"",
			nodeId:		"tic_dt_card_cvv",
			check:		(val) => {
							if( /^([0-9]{4}|[0-9]{3})$/.test(val) )	return true;
							return false;
						}	});
//=====================
//=== default
def();

document.getElementById("tic_submit").addEventListener("click", event => {
	const tp = 1 + window.scrollY;
	document.getElementById("modal_ticform").style.top = ""+tp+"px";
	document.getElementById("modal_ticform").style.display = "block";
	//	console.log(" === "+window.scrollY);
});
document.getElementById("ticform_modal_close").addEventListener("click", event => {
	document.getElementById("modal_ticform").style.display = "none";
});
document.getElementById("modal_ticform").addEventListener("click", event => {
	if( event.target === event.currentTarget ){
		document.getElementById("modal_ticform").style.display = "none";
	}
});
document.querySelectorAll("input").forEach( item => {
	item.addEventListener("change", event => {
		update_cost();
	});
});
document.getElementById("tic_dt_phone").addEventListener("keyup", event => {
//	let inp = event.target.value;
	let inp = event.key;

	if( inp.match(/[0-9]/) ){
		last_tic_phone = formt(inp, last_tic_phone, tic_phone_delim);
		event.target.value = last_tic_phone;
	}else if( inp === "Backspace" ){
		last_tic_phone = formt("99", last_tic_phone, tic_phone_delim);
		event.target.value = last_tic_phone;
	}else{
		event.target.value = last_tic_phone;
	}
});
document.getElementById("tic_dt_card_number").addEventListener("keyup", event => {
	//	let inp = event.target.value;
		let inp = event.key;
	
		if( inp.match(/[0-9]/) ){
			last_card_num = formt(inp, last_card_num, card_num_delim);
			event.target.value = last_card_num;
		}else if( inp === "Backspace" ){
			last_card_num = formt("99", last_card_num, card_num_delim);
			event.target.value = last_card_num;
		}else{
			event.target.value = last_card_num;
		}
	});
const dt_submit = () => {
	let err = 0;
		err = valid_input(1, 1);
//	console.log("<<<<		<<<<	Errors: "+err+"	>>>>		>>>>");
}

//	====	====	====	====	====	====	====
function def() {
		el_tic_date.setAttribute("min", now.toLocaleDateString('en-ca'));
		el_tic_date.value = now.toLocaleDateString('en-ca');

	for( let i = 9; i< 18; i++){
		const new_opt 		= document.createElement("option");
		const new_opt_h 	= document.createElement("option");
		new_opt.style.paddingLeft = "25px";
		new_opt_h.style.paddingLeft = "25px";
		new_opt.value 		= (i<10)? "0"+i+":00" : i+":00";
		new_opt_h.value 	= (i<10)? "0"+i+":30" : i+":30";
		new_opt.label		= (i<10)? "0"+i+":00" : i+":00";
		new_opt_h.label		= (i<10)? "0"+i+":30" : i+":30";
		new_opt.innerHTML	= (i<10)? "0"+i+":00" : i+":00";
		new_opt_h.innerHTML	= (i<10)? "0"+i+":30" : i+":30";

		el_tic_time.appendChild( new_opt );
		el_tic_time.appendChild( new_opt_h );

		}
		const new_opt 	= document.createElement("option");
		new_opt.value 	= "18:00";
		new_opt.label	= "18:00";
		el_tic_time.appendChild( new_opt );


	}
const formt = (input, last, delim) => {
	if(!input || isNaN(input)) return "";
		
		if( input != "99" ){
			last = last.replace(delim, input);
		}else{
			if( last.indexOf(delim) < 0 ){
				last = last.substring(0, last.length - 1) + delim;
			}else{
				last = last.replace(/(\d)(?=[^\d]+$)/g, delim);
			}	
		//	console.log( " 99 is "+input );
		}
	return last;
};
//=========================================
	const tic_type_ch = (in_main) => {
		const el_tic_type = document.getElementById("tic_dt_type");
		const el_tic_type_main = document.querySelector("input[name='tic_type']:checked");
		if( in_main == 1 ){
			let type_val = el_tic_type_main.value;
			el_tic_type.value = type_val;
		}else if( in_main == 0){
			let type_val = el_tic_type.value;
			document.getElementById("tic_type_"+type_val).checked = true;
		}
		update_cost();
	}
	const tic_count_ch = (in_main, tp) => {
		const cnt_b 		= document.getElementById("tic_dt_basic");
		const cnt_b_main 	= document.getElementById("tic_basic");
		const cnt_s 		= document.getElementById("tic_dt_senior");
		const cnt_s_main 	= document.getElementById("tic_senior");
		//++++++++++
			if( !fn_chk_digit(cnt_b.value, 0, 20) ){
				cnt_b.value = 0;
				update_cost();
				return false;
			}
			if( !fn_chk_digit(cnt_s.value, 0, 20) ){
				cnt_s.value = 0;
				update_cost();
				return false;
			}
			if( !fn_chk_digit(cnt_b_main.value, 0, 20) ){
				cnt_b_main.value = 0;
				update_cost();
				return false;
			}
			if( !fn_chk_digit(cnt_s_main.value, 0, 20) ){
				cnt_s_main.value = 0;
				update_cost();
				return false;
			}
		//++++++++++
		if( in_main == 1 ){
			if(tp == 1){
				cnt_b.value = cnt_b_main.value;
			}else if( tp == 2){
				cnt_s.value = cnt_s_main.value;
			}
		}else if( in_main == 0){
			if(tp == 1){
				cnt_b_main.value = cnt_b.value;	
			}else if( tp == 2){
				cnt_s_main.value = cnt_s.value;
			}
		}
		update_cost();
		return true;
	}

	const fn_chk_digit = (a, mn,  mx) => {
		const rg = new RegExp(/[0-9]+/g);
		if( a === null || a === undefined || isNaN(a) || !a.match(rg) || a > mx || a < mn )		return false;
			return true;
	};
//###############################################################################
//	====	====	====	Validation
	const valid_input = (empt=0, light=0) => {
		let err = 0;
		for(const[dt_id, dt] of valid_map ){
			let new_val = document.getElementById(dt.nodeId).value;
			if( empt == 0 && new_val == "" ){
				if(light == 1){
					document.getElementById(dt.nodeId).classList.add("input_light");
				}
		//	console.log(">>> new val: Empty");
			}else{
				if( dt.check(new_val) ){	
					if(light == 1){
						document.getElementById(dt.nodeId).classList.remove("input_light");
					}
				//	console.log(">>> new val: "+new_val);
				}else{		//Error!
					err++;
			//		console.log(">>> Error: "+new_val);
					if(light == 1){
						document.getElementById(dt.nodeId).classList.add("input_light");
					}
				}
			}
		}
		//	console.log(">>>>	>>>>	>>>> Errors: "+err);
		//	console.log(" ================================================== ");
		return err;
	};
//	====	====	====	Update data in view
	const update_cost = () => {
		const map_type = {
			20: "Permanent exhibition",
			25: "Temporary exhibition",
			40: "Combined Admission"
		};
		if( valid_input() <= 0 ){
			const cnt_bs = 	document.getElementById("tic_basic").value;
			const cnt_sn = 	document.getElementById("tic_senior").value;
			if( 	document.getElementById("tic_dt_basic").value != cnt_bs
				||	document.getElementById("tic_dt_senior").value != cnt_sn ){
					console.log( "Error while updating data!" );
					return false;
				}
			const tic_one_cost = document.getElementById("tic_dt_type").value;
			const tic_one_cost_main = document.querySelector("input[name='tic_type']:checked").value;
			if( tic_one_cost != tic_one_cost_main ){
					console.log( "Error while updating data!" );
					return false;
				}
			const tic_one_cost_sn  = tic_one_cost / 2;
			const sum_b	= cnt_bs * tic_one_cost;
			const sum_s	= cnt_sn * tic_one_cost / 2;
			const sum 	= sum_b + sum_s;

			document.getElementById("tic_sum").innerHTML = sum;
			document.getElementById("tic_basic_out").innerHTML = tic_one_cost;
			document.getElementById("tic_senior_out").innerHTML = tic_one_cost_sn;

			document.getElementById("tic_over_count_bs").innerHTML = cnt_bs;
			document.getElementById("tic_over_count_sn").innerHTML = cnt_sn;

			document.getElementById("tic_over_price_bs").innerHTML = tic_one_cost;
			document.getElementById("tic_over_price_sn").innerHTML = tic_one_cost_sn;
			document.getElementById("tic_over_cost_bs").innerHTML = sum_b+" "+euro;
			document.getElementById("tic_over_cost_sn").innerHTML = sum_s+" "+euro;

			document.getElementById("tic_over_total_cost").innerHTML = sum+" "+euro;
			//+++++++++++++++++++++
			const tic_date = new Date(document.getElementById("tic_dt_date").value);
			const tic_time = document.getElementById("tic_dt_time").value;
			const tic_type = map_type[tic_one_cost];
			document.getElementById("tic_date_over_out").innerHTML = tic_date.toLocaleDateString(navigator.language);
			document.getElementById("tic_time_over_out").innerHTML = tic_time;
			document.getElementById("tic_type_over_out").innerHTML = tic_type;

			objLStore.bs = cnt_bs;
			objLStore.sn = cnt_sn;
			objLStore.tp = tic_one_cost;
			localStorage.setItem("museum", JSON.stringify(objLStore));
		//	console.log("update");
		}
	};

//###############################################################################
const loadLS = () => {
		const chk = localStorage.getItem("museum");
		
	if( chk !== null || chk !== undefined || chk != "" ){
			let c_obj = null;
		    try {
				c_obj = JSON.parse(localStorage.getItem("museum"));
			} catch (e) {		return false;		}
		
		if (typeof c_obj === "object" && c_obj !== null) {
			objLStore = c_obj;
		
			document.getElementById("tic_basic").value = objLStore.bs;
			document.getElementById("tic_senior").value = objLStore.sn;
			document.getElementById("tic_dt_basic").value = objLStore.bs;
			document.getElementById("tic_dt_senior").value = objLStore.sn;
			document.getElementById("tic_dt_type").value = objLStore.tp;
			document.getElementById("tic_type_"+objLStore.tp).checked = true;
		}
		
	}
};
loadLS();
update_cost();
