var mainshow = {
    /*Init*/
    messages: []
    , ResourcesPath: $('#ResourcesPath').val()
    , fnInit: function (textArr) {
        if (typeof textArr !== 'undefined') {
            mainshow.messages = textArr;                                  /*ë‹¤êµ­ì–´ ë©”ì„¸ì§€*/
        }
        mainshow.fnRolling();
        mainshow.fnAddBtnEvent();
        mainshow.fnSlickEvent();
		mainshow.fnSoldList();
		mainshow.fnPopMakesList();
		mainshow.fnFeatureList();
        //mainshow.fnRentalCarList();
        mainshow.fnNewlyCarList();
        mainshow.fnReviewList();
		mainshow.fnVideoList();
		mainshow.fnMaxBidBuyerNotice();

        mainshow.fnDrawCalender();

        var auth = $('.user_auth').val().substring(0, 5);    /*ë¡œê·¸ì¸ ì‹œ ê¶Œí•œ íšë“*/

        /* ì¶œí’ˆìž ë˜ëŠ” í•œêµ­ ë¹„ë¡œê·¸ì¸ ì ‘ì† ì—¬ë¶€ í™•ì¸ */
        var bIsKorea = $('input[name=i_sbIsKorea]').val();
        var langCd = $('#i_sLangCd').val();

        /* í›„ìƒë‹´ ì¶œí’ˆ ë¦¬ìŠ¤íŠ¸ëŠ” í•´ì™¸ ë¹„ë¡œê·¸ì¸ ì ‘ì† ë˜ëŠ” ìž…ì°°ìžë§Œ ë³´ì´ë„ë¡ ìˆ˜ì • */
        if ($('#lastChance').val() > 0) {
            $('.center_lastchance_auction').show();
        } else {
            $('.center_ongoing_auction').show();
        }

        //êµ­ë‚´ ì´ë©´ì„œ í•œêµ­ì–´ì¼ë•Œ
        if (bIsKorea == 'XY' && langCd == 'ko') {
            $('.center_sales_reg').show();
            $('.center_sales_manage').show();
            $('.btn_live').hide();
            $('.btn_fxid').hide();
        } else {  //êµ­ë‚´ì™€ í•œêµ­ì–´ê°€ ì•„ë‹ê²½ìš° ë¦¬ìŠ¤íŠ¸

            /*if (bIsKorea == 'XN' || bIsKorea == 'N') {
                if (langCd == 'es') {
                    mainshow.fnOpenPopUp('.pop_mainNotice', '2020082100');
                }
            }*/
            //ì…€ëŸ¬ì¼ê²½ìš°
            if ('AUC11' == auth || 'AUC10' == auth) {
                $('.center_sales_reg').show();
                $('.center_sales_manage').show();
                $('.btn_live').hide();
                $('.btn_fxid').hide();
                $('.btn_lastof').hide();
            } else {
                $('.btn_live').show();
                $('.btn_fxid').show();
                $('.center_sales_reg').hide();
                $('.center_sales_manage').hide();
            }
        }

        let loginAuth = $('.user_auth').val();

        //í•´ì™¸ ì ‘ì† ìž…ì°°ìž í˜¹ì€ í•´ì™¸ ë¹„ì ‘ì†ìž ì¼ ê²½ìš° ë…¸ì¶œ
        if($('#i_sbIsKorea').val() == 'XN' || ($('#i_sbIsKorea').val() == 'N' && (loginAuth == 'AUC20OnLogin' || loginAuth == 'AUC21OnLogin' || loginAuth == 'AUC22OnLogin' || loginAuth == 'AUC23OnLogin'))){
            $('.guideProcess').show();
        }
    }
    , fnRolling: function () {
    	
        let html = "";
        let langCd = $("#langCd").val();
        let time = new Date();
        let date = moment.tz(time, 'Asia/Seoul');
        let curTime = date.format('YYYYMMDD')//MM/DD/YYYY HH:mm:ss
        let sessionCountryCd = $('#i_sCountry').val();

        if(curTime >= '20240401' && curTime <= '20240430'){
            html += '<div class="bn_5years" style="border-top:1px solid #eee;background:url(' + mainshow.ResourcesPath + '/images/main/bg_5years.png) 0 0 repeat-x">';
            html += '	<div class="inner 5years">';
            html += '		<a href="https://buyer.auctionwini.com/liveAuction">';
            if (langCd == 'ru') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_5years_ru.png" alt="" />';
            } else if (langCd == 'es') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_5years_es.png" alt="" />';
            } else if (langCd == 'mn') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_5years_mn.png" alt="" />';
            }  else if (langCd == 'ar') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_5years_ar.png" alt="" />';
            }else {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_5years_en.png" alt="" />';
            }
            html += '		</a>'
            html += '	</div>';
            html += '</div>';
        }

        html += '<div class="bn_rentalAuc" style="background:#f5f5f5">';
        html += '	<div class="inner rentalAuc">';
        html += '		<a href="https://buyer.auctionwini.com/rentalAuction">';
        if (langCd == 'ru') {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalAuc5_ru.png" alt="" />';
        } else if (langCd == 'es') {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalAuc5_es.png" alt="" />';
        } else if (langCd == 'mn') {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalAuc5_mn.png" alt="" />';
        } else if (langCd == 'ar') {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalAuc5_ar.png" alt="" />';
        }else {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalAuc5_en.png" alt="" />';
        }
        html += '		</a>'
        html += '	</div>';
        html += '</div>';

        html += '<div class="bn_rentalAuc" style="background:#053986">';
        html += '	<div class="inner rentalAuc">';
//            html += '		<a href="/support/notice-view24">';
        if (langCd == 'ru') {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalAuc4_ru.png" alt="" />';
        } else if (langCd == 'es') {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalAuc4_es.png" alt="" />';
        } else if (langCd == 'mn') {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalAuc4_mn.png" alt="" />';
        } else if (langCd == 'ar') {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalAuc4_ar.png" alt="" />';
        }else {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalAuc4_en.png" alt="" />';
        }
//            html += '		</a>'
        html += '	</div>';
        html += '</div>';

        if(curTime >= '20240213'){  // 2.13 ~ ì¶”í›„ê³µì§€
            html += '<div class="bn_rentalPro" style="background:#101010">';
            html += '	<div class="inner rentalPro">';
            html += '		<a href="https://buyer.auctionwini.com/rentalAuction">';
            if (langCd == 'ru') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalFeb_ru.png" alt="" />';
            } else if (langCd == 'es') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalFeb_es.png" alt="" />';
            } else if (langCd == 'mn') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalFeb_mn.png" alt="" />';
            } else if (langCd == 'ar') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalFeb_ar.png" alt="" />';
            }else {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentalFeb_en.png" alt="" />';
            }
            html += '		</a>'
            html += '	</div>';
            html += '</div>';
        }

        
        //parts ê¸°ê°„ ë¯¸ì •
        html += '<div class="bn_parts" style="background:url(' + mainshow.ResourcesPath + '/images/main/bg_parts.png) 0 0 repeat-x">';
        html += '	<div class="inner parts">';
        html += '		<a href="/support/notice-view26">';
        if (langCd == 'ru') {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_parts_ru.png" alt="" />';
        } else if (langCd == 'es') {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_parts_es.png" alt="" />';
        } else if (langCd == 'mn') {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_parts_mn.png" alt="" />';
        }  else if (langCd == 'ar') {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_parts_ar.png" alt="" />';
        }else {
            html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_parts_en.png" alt="" />';
        }
        html += '		</a>'
        html += '	</div>';
        html += '</div>';

        //review2 6.3 ~ 12.31
        if(curTime >= '20240531' && curTime <= '20241231') {
            html += '<div class="bn_review2" style="background:#2c2e3f">';
            html += '	<div class="inner review2">';
            html += '		<a href="/support/notice-view27">';
            if (langCd == 'ru') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_review2_ru.png" alt="" />';
            } else if (langCd == 'es') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_review2_es.png" alt="" />';
            } else if (langCd == 'mn') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_review2_mn.png" alt="" />';
            } else if (langCd == 'ar') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_review2_ar.png" alt="" />';
            } else {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_review2.png" alt="" />';
            }
            html += '		</a>'
            html += '	</div>';
            html += '</div>';
        }


        if(curTime >= '20240208' && curTime <= '20240212'){  // 2.8~2.12
            html += '<div class="bn_rentalAuc" style="background:#E6E6E6 url(' + mainshow.ResourcesPath + '/images/main/bg_lunar24.png) 0 0 repeat-x">';
            html += '	<div class="inner lunar24">';
            html += '		<a href="/support/notice-view25">';
            html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_lunar24_' + propertyLang + '.png" alt="" />';
            html += '		</a>'
            html += '	</div>';
            html += '</div>';
        }


        if(curTime >= '20231228' && curTime <= '20240101'){  // 12.29 ~ 1.1
            if(sessionCountryCd !== 'C1570' ) {
                html += '<div class="bn_happyNewYear24" style="background:#101224">';
                html += '	<div class="inner">';
                html += '		<a href="javascript:;">';
                if (langCd == 'ru') {
                    html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_happyNewYear2024_ru.png" alt="" />';
                } else if (langCd == 'es') {
                    html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_happyNewYear2024_es.png" alt="" />';
                } else if (langCd == 'mn') {
                    html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_happyNewYear2024_mn.png" alt="" />';
                } else {
                    html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_happyNewYear2024.png" alt="" />';
                }
                html += '		</a>'
                html += '	</div>';
                html += '</div>';
            }
        }

        if(curTime >= '20231005' && curTime <= '20231031'){  // 10.05 ~ 10.31
            html += '<div class="bn_finalCall" style="background:#000">';
            html += '	<div class="inner">';
            html += '		<a href="/support/notice-view23">';
            if (langCd == 'ru') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_finalCall_ru.png" alt="" />';
            } else if (langCd == 'es') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_finalCall_es.png" alt="" />';
            } else {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_finalCall.png" alt="" />';
            }
            html += '		</a>'
            html += '	</div>';
            html += '</div>';
        }

        if(curTime >= '20230830' && curTime <= '20231130'){  // 08.30 ~ 11.30
            if(sessionCountryCd !== 'C1570' ) {
                html += '<div class="bn_localAuc" style="background:#931F1F">';
                html += '	<div class="inner">';
                html += '		<a href="/support/local-auction">';
                if (langCd == 'ru') {
                    html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_localAuc_ru.png" alt="" />';
                } else if (langCd == 'es') {
                    html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_localAuc_es.png" alt="" />';
                } else {
                    html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_localAuc.png" alt="" />';
                }
                html += '		</a>'
                html += '	</div>';
                html += '</div>';
            }
        }


        if(curTime >= '20231201' && curTime <= '20231231'){  // 12.01 - 12.31
            html += '<div class="bn_decAuc" style="background:#023E3A">';
            html += '	<div class="inner">';
            html += '		<a href="/entry/carsale/get-carsale-pc-list-on/gb/2#1">';
            if (langCd == 'ru') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_decAuc_ru.png" alt="" />';
            } else if (langCd == 'es') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_decAuc_es.png" alt="" />';
            }  else if (langCd == 'mn') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_decAuc_mn.png" alt="" />';
            } else {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_decAuc.png" alt="" />';
            }
            html += '		</a>'
            html += '	</div>';
            html += '</div>';
        }


        if(curTime >= '20230918'){  // 09.18~ ê²Œì‹œì œí•œ ì—†ìŒ
            if(sessionCountryCd !== 'C1570' ) {
                html += '<div class="bn_cuttingSvc" style="background:#EBEBEB">';
                html += '	<div class="inner">';
                html += '		<a href="/support/cutting-service">';
                if (langCd == 'ru') {
                    html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_cuttingSvc_ru.png" alt="" />';
                } else if (langCd == 'es') {
                    html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_cuttingSvc_es.png" alt="" />';
                } else if (langCd == 'ar') {
                    html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_cuttingSvc_ar.png" alt="" />';
                }else {
                    html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_cuttingSvc.png" alt="" />';
                }
                html += '		</a>'
                html += '	</div>';
                html += '</div>';
            }
        }

        if(curTime <= '20230215'){  // 2.1 ~ 2.15 ë…¸ì¶œ
            html += '<div class="bn_200th" style="background:#000">';
            html += '	<div class="inner">';
            html += '		<a href="/support/notice-view20">';
            if(langCd == 'ru'){
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_200th_ru.png" alt="" />';
            }else if(langCd == 'es'){
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_200th_es.png" alt="" />';
            }else{
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_200th_en.png" alt="" />';
            }
            html += '	    </a>';
            html += '	</div>';
            html += '</div>';
        }

        if(curTime >= '20230120' && curTime <= '20230124'){  //1/20 (ê¸ˆ) ~ 1/24 (í™”) ë…¸ì¶œ
            html += '<div class="bn_2023holiday" style="background:#060D51">';
            html += '	<div class="inner">';
            html += '		<a href="javascript:;">';
            html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_2023holiday_' + propertyLang + '.png" alt="" />';
            html += '	    </a>';
            html += '	</div>';
            html += '</div>';
        }

        if(langCd === 'es'){ //Chile:C0350 / Paraguay:C1310 , es ì–¸ì–´ì—ë§Œ ë…¸ì¶œ
            if( sessionCountryCd == 'C0350' || sessionCountryCd == 'C1310'){
                html += '<div class="bn_consoleChile" style="background:#081541">';
                html += '	<div class="inner">';
                html += '		<a href="/support/notice-view19">';
                html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_consoleChile_es.png" alt="" />';
                html += '	    </a>';
                html += '	</div>';
                html += '</div>';
            }
        }

        if(langCd === 'en' || langCd === 'ru'){ //ì•„ì œë¥´ë°”ì´ìž”, en/ru ì–¸ì–´ì—ë§Œ ë…¸ì¶œ
            if( sessionCountryCd == 'C0130'){
                html += '<div class="bn_2017over" style="background:#111310">';
                html += '	<div class="inner">';
                html += '		<a href="/entry/carsale/get-carsale-pc-list-on-search?i_sHighlightCd=&i_sStYearCd=2017&i_sEnYearCd=&i_sMakeCd=&i_sModelCd=&i_sMainSearchModelNm=&i_sMainYn=MM&i_arrHilight=&newlyAdded=Y&i_sFlagInspected=&i_arrFuelType=">';
                html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_2017over_az.png" alt="" />';
                html += '	    </a>';
                html += '	</div>';
                html += '</div>';
            }
        }
        if(langCd === 'en' || langCd === 'ru'){ //ì¡°ì§€ì•„, en/ru ì–¸ì–´ì—ë§Œ ë…¸ì¶œ
            if( sessionCountryCd == 'C0610'){
                html += '<div class="bn_latin60Day" style="background:#111310">';
                html += '	<div class="inner">';
                html += '		<a href="/entry/carsale/get-carsale-pc-list-on-search?i_sHighlightCd=&i_sStYearCd=2017&i_sEnYearCd=&i_sMakeCd=&i_sModelCd=&i_sMainSearchModelNm=&i_sMainYn=MM&i_arrHilight=&newlyAdded=Y&i_sFlagInspected=&i_arrFuelType=">';
                html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_2017over_ge.png" alt="" />';
                html += '	    </a>';
                html += '	</div>';
                html += '</div>';
            }
        }

        /*if(langCd === 'es'){  // 12.09 ~ 06.20, esì–¸ì–´, Chile:C0350 / Paraguay:C1310 / Costa Rica:C0380 / El Salvador:C0500 / Guatemala:C0670 / Honduras:C0720 / Nicaragua:C1210 / Panama:C1290 / dominica : C0470
            if( sessionCountryCd == 'C0350' || sessionCountryCd == 'C1310' || sessionCountryCd == 'C0380' || sessionCountryCd == 'C0500' || sessionCountryCd == 'C0670' ||
                sessionCountryCd == 'C0720' || sessionCountryCd == 'C1210' || sessionCountryCd == 'C1290' || sessionCountryCd == 'C0470'){
                html += '<div class="bn_latin60Day" style="background:#003E6E">';
                html += '	<div class="inner">';
                html += '		<a href="/support/notice-view17">';
                html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_latin60Day_es.png" alt="" />';
                html += '	    </a>';
                html += '	</div>';
                html += '</div>';
            }
        }*/

        if(langCd === 'es'){  // 11.10 ~ 11.30, esì–¸ì–´, Chile:C0350 / Paraguay:C1310 / Costa Rica:C0380 / El Salvador:C0500 / Guatemala:C0670 / Honduras:C0720 / Nicaragua:C1210 / Panama:C1290
            if(sessionCountryCd == 'C0350' || sessionCountryCd == 'C1310' || sessionCountryCd == 'C0380' || sessionCountryCd == 'C0500' || sessionCountryCd == 'C0670' || sessionCountryCd == 'C0720' || sessionCountryCd == 'C1210' || sessionCountryCd == 'C1290'){
                if(curTime <= '20221130') {
                    html += '<div class="bn_review150" style="background:#febd2e">';
                    html += '	<div class="inner">';
                    html += '		<a href="/entry/carsale/get-carsale-pc-list-on">';
                    html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_latinNov_' + propertyLang + '.png" alt="" />';
                    html += '	    </a>';
                    html += '	</div>';
                    html += '</div>';
                }
            }
        }

        if(langCd === 'es'){  // 12.01 ~ 12.31, esì–¸ì–´, Chile:C0350 / Paraguay:C1310 / Costa Rica:C0380 / El Salvador:C0500 / Guatemala:C0670 / Honduras:C0720 / Nicaragua:C1210 / Panama:C1290
            if(sessionCountryCd == 'C0350' || sessionCountryCd == 'C1310' || sessionCountryCd == 'C0380' || sessionCountryCd == 'C0500' || sessionCountryCd == 'C0670' || sessionCountryCd == 'C0720' || sessionCountryCd == 'C1210' || sessionCountryCd == 'C1290'){
                if( langCd === 'es' && curTime >= '20221201' && curTime <= '20221231') {
                    html += '<div class="bn_latinDec" style="background:#1B1E26">';
                    html += '	<div class="inner">';
                    html += '		<a href="/entry/carsale/get-carsale-pc-list-on">';
                    html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_latinDec_' + propertyLang + '.png" alt="" />';
                    html += '	    </a>';
                    html += '	</div>';
                    html += '</div>';
                }
            }
        }

        if(langCd === 'en' || langCd === 'es' || langCd === 'ru'){  //í•œêµ­ ë…¸ì¶œì œì™¸, 10ì›”1ì¼ë¶€í„° 12ì›” 31ì¼ê¹Œì§€
            if(sessionCountryCd !== 'C1570' && curTime <= '20221231') {
                html += '<div class="bn_review150" style="background:#492E78">';
                html += '	<div class="inner">';
                html += '		<a href="/support/notice-view15">';
                html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_review150_' + propertyLang + '.png" alt="" />';
                html += '	    </a>';
                html += '	</div>';
                html += '</div>';
            }
        }

        if(langCd === 'ru' && curTime >= '20220913') {  //ëŸ¬ì‹œì•„ ë”œëŸ¬  13ì¼ ê²Œì‹œ

            if(sessionCountryCd == "C0850"){ //ì¹´ìžíìŠ¤íƒ„
                html += '<div class="bn_russianDealer" style="background:#e9e9e9">';
                html += '	<div class="inner">';
                html += '		<a href="/entry/carsale/get-carsale-pc-list-on">';
                html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_russianDealer1_ru.png" alt="" />';
                html += '	    </a>';
                html += '	</div>';
                html += '</div>';
            }
            if(sessionCountryCd == "C0890"){ //í‚¤ë¥´ê¸°ìŠ¤ìŠ¤íƒ„
                html += '<div class="bn_russianDealer" style="background:#e9e9e9">';
                html += '	<div class="inner">';
                html += '		<a href="/entry/carsale/get-carsale-pc-list-on">';
                html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_russianDealer2_ru.png" alt="" />';
                html += '	    </a>';
                html += '	</div>';
                html += '</div>';
            }
            if(sessionCountryCd == "C1680"){ //íƒ€ì§€í‚¤ìŠ¤íƒ„
                html += '<div class="bn_russianDealer" style="background:#e9e9e9">';
                html += '	<div class="inner">';
                html += '		<a href="/entry/carsale/get-carsale-pc-list-on">';
                html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_russianDealer3_ru.png" alt="" />';
                html += '	    </a>';
                html += '	</div>';
                html += '</div>';
            }

        }
        
        if(sessionCountryCd == 'C0350' || sessionCountryCd == 'C0670' || sessionCountryCd == 'C0720' || sessionCountryCd == 'C1210' || sessionCountryCd == 'C0380' || sessionCountryCd == 'C1310'){
            if(langCd === 'es' && curTime <= '20220504') {
                html += '<div class="bn_tuesday" style="background:url(../resources/images/main/bg_noMore.png) center no-repeat;background-size:cover">';
                html += '	<div class="inner">';
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_noMoreWaitiing_es.png" alt="" />';
                html += '	</div>';
                html += '</div>';
            }
        }

        //ì„¤ë‚ ë°°ë„ˆ ê²Œì‹œì¢…ë£Œ 22.02.01
        if(curTime <= '20220201') {
            html += '<div class="bn_tuesday" style="background:#f8f0e7">';
            html += '	<div class="inner">';
            html += '		<a href="/support/notice-view11">';
            html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_2022Lunar_' + propertyLang + '.png" alt="" />';
            html += '		</a>'
            html += '	</div>';
            html += '</div>';
        }

        //ìš°í¬ë¼ì´ë‚˜ ë² ë„ˆ ê²Œì‹œì¢…ë£Œ 22.03.11
        if( langCd === 'en'&& sessionCountryCd === 'C1800' && curTime <= '20220311') {
            html += '<div class="bn_tuesday" style="background:#005bbb">';
            html += '	<div class="inner">';
            html += '		<a href="/support/notice-view12">';
            html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_Ukraine_' + propertyLang + '.png" alt="" />';
            html += '		</a>'
            html += '	</div>';
            html += '</div>';
        }

        //ëª½ê³¨ ë² ë„ˆ ê²Œì‹œì¢…ë£Œ 22.08.31
        if( langCd === 'mn'/*&& sessionCountryCd === 'C1100'*/ && curTime <= '20220831') {
            html += '<div class="bn_tuesday" style="background:#ceedff">';
            html += '	<div class="inner">';
            html += '		<a href="/support/notice-view13">';
            html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/bn_consol_mn.png" alt="" />';
            html += '		</a>'
            html += '	</div>';
            html += '</div>';
        }



        // AUCWEB-823 ì„ ì  ì§€ì—° ë³´ìƒ ë°°ë„ˆ - ë©”ì¸ ë°°ë„ˆ ê²Œì‹œ
        if(sessionCountryCd !== 'C0090' && sessionCountryCd !== 'C0130' && sessionCountryCd !== 'C0610' && sessionCountryCd !== 'C1800' && sessionCountryCd !== 'C1680'
            && sessionCountryCd !== 'C1840' && sessionCountryCd !== 'C0890' && sessionCountryCd !== 'C0850' && sessionCountryCd !== 'C1080'&& sessionCountryCd !== 'C1400' && sessionCountryCd !== 'C1770'){

            if(propertyLang === 'en' || propertyLang === 'es' || propertyLang === 'fr' || propertyLang === 'pt'|| propertyLang === 'ar' || propertyLang === 'mn'){
                let discountEventImgName = '';
                const imgFileNamePrefix = 'shipEvent20220131_';
                const subImgFileType = '.png'

                discountEventImgName = imgFileNamePrefix + propertyLang + subImgFileType;

                if(propertyLang === 'ar'){
                    discountEventImgName = imgFileNamePrefix + 'en' + subImgFileType;
                }

                if(curTime <= '20220131'){
                    html += '<div class="bn_discountEvent_right">';
                    html += '   <div class="bn_discountEvent_left"></div>';
                    html += '	  <div class="inner">';
                    html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/event/' + discountEventImgName +  '" alt="" />';
                    html += '     </div>';
                    html += '</div>';
                }
            }
        }

        html += '<div class="bn_easyStep" style="background:#101010">';
        html += '	<div class="inner">';
        html += '		<a href="/support/how-to-start">';
        html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_easyStep_' + propertyLang + '.png" alt="" />';
        html += '		</a>'
        html += '	</div>';
        html += '</div>';

        if(curTime >= '20230830' && curTime <= '20231005'){  // 8.30 ~ 10.05
            html += '<div class="bn_reviews" style="background:#262837">';
            html += '	<div class="inner">';
            html += '		<a href="/support/notice-view22">';
            if(langCd == 'ru'){
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_review_ru.png" alt="" />';
            }else if(langCd == 'es'){
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_review_es.png" alt="" />';
            }else{
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_review.png" alt="" />';
            }
            html += '		</a>'
            html += '	</div>';
            html += '</div>';
        }

        if(curTime >= '20230308' && curTime <= '20230322'){  // 3.8~ 3.22 ë…¸ì¶œ
            html += '<div class="bn_200thWinner" style="background:#000">';
            html += '	<div class="inner">';
            html += '		<a href="/support/notice-view21">';
            if(langCd == 'ru'){
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_200thWinner_ru.png" alt="" />';
            }else if(langCd == 'es'){
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_200thWinner_es.png" alt="" />';
            }else{
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_200thWinner_en.png" alt="" />';
            }
            html += '	    </a>';
            html += '	</div>';
            html += '</div>';
        }

        html += '<div class="bn_tuesday" style="background:#060606">';
        html += '	<div class="inner">';
        html += '		<a href="/join/joinus">';
        html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/wbn_tuesday2_' + propertyLang + '.png" alt="" />';
        html += '		</a>'
        html += '	</div>';
        html += '</div>';

        html += '<div class="bn_bestCar" style="background:#e9e9e9">';
        html += '	<div class="inner">';
        html += '		<a href="/entry/carsale/get-carsale-pc-list-on#1">';
        html += '		    <img src="' + mainshow.ResourcesPath + '/images/main/bn_bestCar_' + propertyLang + '.png" alt="" />';
        html += '		</a>'
        html += '	</div>';
        html += '</div>';
        
        // if (langCd != 'ko') {
        //     html += '<div class="bn_rental ' + propertyLang + '" style="background:#18181b;">';
        //     html += '	<div class="inner">';
        //     html += '		<a href="/join/joinus">';
        //     html += '			<img src="' + mainshow.ResourcesPath + '/images/main/wbn_rentcar_' + propertyLang + '.png" alt="" />';
        //     html += '		</a>'
        //     html += '	</div>';
        //     html += '</div>';
        // }
        
        if (langCd == 'en' || langCd == 'es') {
            html += '<div class="wbn_shipping" style="background:#38a8ff;">';
            html += '	<div class="inner">';
            html += '		<a href="https://youtu.be/K9RzQLK5Vgw" target="_blank">';
            html += '			<img src="' + mainshow.ResourcesPath + '/images/main/wbn_shipping_' + propertyLang + '.png" alt="" />';
            html += '		</a>'
            html += '	</div>';
            html += '</div>';
        }

        html += '<div class="bn_fb" style="background:#546dbd;">';
        html += '	<div class="inner">';
        html += '		<a href="https://www.facebook.com/Official.Auctionwini/" target="_blank" class="bn_link">';
        html += '			<img src="' + mainshow.ResourcesPath + '/images/main/wbn_fbFollow2_' + propertyLang + '.png" alt="" />';
        html += '		</a>';
        html += '	</div>';
        html += '</div>';

        if(langCd !== 'es' && langCd !== 'ko'){  // es,ko ë¹„ë…¸ì¶œ (ê²Œì‹œê¸°í•œ ì—†ìŒ)
            html += '<div class="bn_winiLogis" style="background:#0E3D83">';
            html += '	<div class="inner">';
            html += '		<a href="https://winilogis.com/" target="_blank">';
            if(langCd == 'ru'){
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_winiLogis3_ru.png" alt="" />';
            }else if(langCd == 'mn'){
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_winiLogis3_mn.png" alt="" />';
            }else if (langCd == 'ar') {
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_winiLogis3_ar.png" alt="" />';
            }else{
                html += '		<img src="' + mainshow.ResourcesPath + '/images/main/wbn_winiLogis3_en.png" alt="" />';
            }
            html += '	    </a>';
            html += '	</div>';
            html += '</div>';
        }


        $(".mainSlide").html(html);
    }
    , ResourcesPath: $('#ResourcesPath').val()
    , fnSlickEvent: function () {
        $(".main_list ul").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            variableWidth: true,
            touchMove: false,
            infinite: false,
        });
        $(".maylike_sd ul").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            variableWidth: true,
            touchMove: false,
        });
    }
    /*ë²„íŠ¼Event*/
    , fnAddBtnEvent: function () {
        /*ì˜¥ì…˜ìœ„ë‹ˆëž€? ë²„íŠ¼ ì²˜ë¦¬ */
        $('.btn_seeMore').on('click', function (event) {
            event.preventDefault();
            $(location).attr('href', '/about/aboutus/about-auctionwini');
        });
        /*ê²€ìƒ‰*/
        $('#btn_search').on("click", function () {
            mainshow.fnSearch();
        });
        $('.btn_suv').on("click", function () {
            mainshow.fnSearchByCondition($(this));
        });
        $('.btn_oldcar').on("click", function () {
            mainshow.fnSearchByCondition($(this));
        });
        $('.btn_compactcar').on("click", function () {
            mainshow.fnSearchByCondition($(this));
        });
        /*íšŒì›ê°€ìž… íŽ˜ì´ì§€ ì´ë™*/
        $('#goJoinUs').on('click', function () {
            $(location).attr('href', '/join/joinus');
        });


        /*INFOPAGE - Live Auction See More ì´ë™*/
        $('.btn_live_auction_more').on('click', function () {
            alert("ì¤€ë¹„ì¤‘ìž…ë‹ˆë‹¤.");
        });

        /*OnGoingAuction List íŽ˜ì´ì§€ ì´ë™*/
        $('#goOnGoingAuction').on('click', function () {
            var goForm = $('<form></form>')
            goForm.attr('id', 'goOnGoingAuction');
            goForm.attr('action', '/entry/carsale/get-carsale-ongoing-list');
            goForm.attr('method', 'GET');
            goForm.appendTo('body');
            goForm.submit();
        });

        $('.btn_onGoing').on('click', function () {
            $('#goOnGoingAuction').remove();

            var goForm = $('<form></form>')
            goForm.attr('id', 'goOnGoingAuction');
            goForm.attr('action', '/entry/carsale/get-carsale-ongoing-list');
            goForm.attr('method', 'GET');
            goForm.appendTo('body');
            goForm.submit();
        });
        /*prefer ìƒì„¸ ì´ë™*/
        $(document).on('click', '.preferlclick', function (e) {
            var entryCd = $(this).find('input[name=entryCd]').val();
            var carCd = $(this).find('input[name=carCd]').val();
            var aucCd = stUtil.fnNullToStrike($(this).find('input[name=aucCd]').val());   /*(íšŒì°¨ëŠ” ì—†ì„ ìˆ˜ë„ ìžˆìŒ)*/

            location.href = '/entry/carsale/get-carsale/' + aucCd + '/' + entryCd + '/' + carCd;
        });

        /*recommend ìƒì„¸ ì´ë™*/
        $(document).on('click', '.recomclick', function (e) {
            var entryCd = $(this).find('input[name=entryCd]').val();
            var carCd = $(this).find('input[name=carCd]').val();
            var aucCd = stUtil.fnNullToStrike($(this).find('input[name=aucCd]').val());   /*(íšŒì°¨ëŠ” ì—†ì„ ìˆ˜ë„ ìžˆìŒ)*/

            location.href = '/entry/carsale/get-carsale/' + aucCd + '/' + entryCd + '/' + carCd;
        });

        /*aboutus ë²„íŠ¼*/
        $('.btn_aboutus').on('click', function () {
            location.href = '/about/aboutus/about-us-list-view';
        });

        /*Crashed ~ Repaired*/
        $('.a_ongoing').on('click', function () {
            /*DEFAULT : crashed*/
            var status = stUtil.fnNullToStrike($(this).attr('data-status'), 'A0010'),
                goForm = $('<form></form>')

            $('#goOnGoingAuction').remove();

            goForm.attr('id', 'goOnGoingAuction');
            goForm.attr('action', '/entry/carsale/get-carsale-ongoing-list');
            goForm.attr('method', 'GET');
            goForm.append('<input name="i_arrHilight" value="' + status + '">');
            goForm.appendTo('body');
            goForm.submit();
        });

        /*app download ë²„íŠ¼í´ë¦­ì‹œ*/
        $('.btn_main_app').on('click', function (e) {
            apUtil.fnDownLoad();
        });

        /*ë¼ì´ë¸Œ, Last, OnGoing ì´ë™ ë²„íŠ¼ ì œì–´*/
        $('.btn_main_various').on('click', function () {
            var form = document.auc_ongoing;

            form.action = '/entry/carsale/get-carsale-ongoing-list';
            form.method = 'GET';
            form.submit();
        });

        /*current auction ë©”ì¸ ì¤‘ì•™ ë²„íŠ¼*/
        $('.center_ongoing_auction').on('click', function (e) {
            e.preventDefault();
            location.href = '/entry/carsale/get-carsale-pc-list-on';
        });


        /*centerBuyItNow ë©”ì¸ ì¤‘ì•™ ë²„íŠ¼*/
        $('.centerBuyItNow').on('click', function (e) {
            e.preventDefault();
            location.href = '/entry/carsale/get-carsale-pc-list-fx#1';
        });


        /*LastChance auction ë©”ì¸ ì¤‘ì•™ ë²„íŠ¼*/
        $('.center_lastchance_auction').on('click', function (e) {
            e.preventDefault();
            location.href = '/entry/carsale/get-carsale-pc-list-lc';
        });

        /*sales register ë©”ì¸ ì¤‘ì•™ ë²„íŠ¼*/
        $('.center_sales_reg').on('click', function (e) {
            e.preventDefault();
            /*ë§¤ë¬¼ë“±ë¡ ê¶Œí•œ ì—¬ë¶€*/
            var regFlag = $('#i_sRegYn').val();

            if ('N' == regFlag) {
                alert('ë§¤ë¬¼ë“±ë¡ ê¶Œí•œì´ ì—†ìŠµë‹ˆë‹¤. ê´€ë¦¬ìžì—ê²Œ ë¬¸ì˜ ë°”ëžë‹ˆë‹¤.');
                return false;
            }

            location.href = '/entry/carsale/carsale-regist';
        });

        /*current auction ë©”ì¸ ì¤‘ì•™ ë²„íŠ¼*/
        $('.center_sales_manage').on('click', function (e) {
            e.preventDefault();

            location.href = '/entry/carsale/get-carsale-regist-list';
        });

        $('.btn_secretprice_seemore').on('click', function (e) {
            e.preventDefault();
            alert("ì¤€ë¹„ì¤‘ìž…ë‹ˆë‹¤.");
        });

        /*ë©”ì¸í™”ë©´ ì¡°ê±´ê²€ìƒ‰ ì‹œ, ëª¨ë¸ì˜ ì´ë¦„ ë‹´ê¸°*/
        $(document).on('change', '#i_sModelCd', function () {
            $('#carmodelnm').val($('#i_sModelCd option:selected').text());    /*ì„ íƒëœ ëª¨ë¸ê°’ì„ ë„˜ê²¨ì¤„ hidden íƒœê·¸ì— ë‹´ê¸°*/
        });

        /*newly Arrived Detail ì´ë™*/
        $(document).on('click', '.btn_newly_arrived_detail', function (e) {
            var $btnObj = $(this),
                $frmObj = $('form[id=newlyArrivedDetailFrm]');

            var aucCd = $btnObj.find('input[name=i_sAucCd]').val();    /*í´ë¦­í•œ newly Arrived Carì˜ íšŒì°¨ì½”ë“œ*/
            var entryCd = $btnObj.find('input[name=i_sEntryCd]').val();  /*í´ë¦­í•œ newly Arrived Carì˜ ì¶œí’ˆì½”ë“œ*/
            var carCd = $btnObj.find('input[name=i_sCarCd]').val();    /*í´ë¦­í•œ newly Arrived Carì˜ ì°¨ëŸ‰ì½”ë“œ*/
            var seq = $btnObj.find('input[name=i_iSeq]').val();      /*í´ë¦­í•œ newly Arrived Carì˜ ìˆœì„œ*/
            var controll = $('#controlFlag').val();

			+-
            $("<input></input>").attr({
                type: "hidden",
                id: "i_iSeq",
                name: "i_iSeq",
                value: seq
            }).appendTo("#newlyArrivedDetailFrm");


            $frmObj.attr('method', 'GET');
            $frmObj.attr('action', '/entry/carsale/get-carsale/' + aucCd + '/' + entryCd + '/' + carCd + '/' + seq + '/' + controll);

            $frmObj.submit();
        });

        $(document).on('mouseenter', '.newly li a', function (e) {
            var $hideM = $(this).find('.btnCon');
            if (!$hideM.is(':animated')) $hideM.slideDown('fast');
        });

        $(document).on('mouseleave', '.newly li a', function (e) {
            $(this).find('.btnCon').slideUp('fast');
        });

        /**
         * shahn 190731 ì—°ì‹ ì œì–´
         * @TODO : 1)Fromë³´ë‹¤ ToëŠ” í•­ìƒ ì»¤ì•¼ í•œë‹¤(From<=To)    2)Toë¥¼ ë¨¼ì € ì„ íƒ í›„, Fromì„ Toë³´ë‹¤ ë” ë†’ê²Œ ì„ íƒí•˜ë©´, Toê°€ ì´ˆê¸°í™” ëœë‹¤.
         */
        $(document).on('change', '#i_sStYearCd', function () {
            $('#i_sEnYearCd option').show();    /*hideì²˜ë¦¬ëœ ê²ƒë“¤ì´ ìžˆìœ¼ë©´ ëª¨ë‘ showë¡œ ì´ˆê¸°í™”*/

            var from = Number($('#i_sStYearCd').val());    /*fromì˜ í˜„ìž¬ ì„ íƒ ê°’. ë¹„êµë¥¼ ìœ„í•´ ìˆ«ìží˜•ìœ¼ë¡œ ë³€í™˜*/
            var to = Number($('#i_sEnYearCd').val());      /*toì˜ í˜„ìž¬ ì„ íƒ ê°’. ë¹„êµë¥¼ ìœ„í•´ ìˆ«ìží˜•ìœ¼ë¡œ ë³€í™˜*/

            /*ì„ íƒëœ fromë³´ë‹¤ ì•„ëž˜ê°’ë“¤ì„ hideì‹œí‚¤ê¸° ìœ„í•œ ì²˜ë¦¬*/
            var after = $('#i_sStYearCd option:selected').prevAll().size();    /*from ì„ íƒê°’ ì´ì „ì˜ ê°œìˆ˜*/
            $('#i_sEnYearCd option:eq(' + after + ')').prevAll().hide();         /*fromì—ì„œ ì„ íƒí•œ ê°’ì„ ê¸°ì¤€ìœ¼ë¡œ, ê·¸ ì´ì „ì€ ëª¨ë‘ hide*/

            if (from > to) {    /*if fromë³´ë‹¤ toê°€ ìž‘ìœ¼ë©´*/
                $('#i_sEnYearCd').val('');    /*toë¥¼ ì´ˆê¸°í™”*/
            }
        });
    }
    /*pop makes ì˜ì—­*/
    
    , fnPopMakesList     :   function() {
        $.ajax({
            type : 'POST'
            ,url : '/main/get-pop-makes'
            ,success    : function(data){
                mainshow.fnPopMakesDraw(data);    /*pop makes ë¦¬ìŠ¤íŠ¸ë¥¼ ê·¸ë¦¬ê¸°*/
            }
            , error     : function(jqXHR, textStatus, errorThrown){
                console.log(jqXHR.responseText);
            }
        })
    }
    /*pop makes ê·¸ë¦¬ê¸°*/
    , fnPopMakesDraw : function(data){
    	list = data.popMakeList;
        let popMakesHtml = "";

        for (let i = 0; i < list.length; i++) {
            var modelCd        	= stUtil.fnNullToStrike(list[i].V_SUBCD);
            var modelName     	= stUtil.fnNullToStrike(list[i].V_SUBCDNM);
            var count     		= list[i].CNT;

            popMakesHtml +=
            	`<li class="`+modelCd+`" onclick="mainshow.fnSearch('maker', '`+modelCd+`');" class="makeListItem"><img src="https://image.autowini.com/resources/IMG/common/brands/`+modelCd+`.png" onerror="this.src='https://image.autowini.com/resources/IMG/common/brands/others.png'"><span>`+modelName+`</span><em>(`+count+`)</em></li>`;
        }

        $(".makeListBox").html(popMakesHtml);
    }

    , fnFeatureList     :   function() {
        $.ajax({
            type : 'POST'
            ,url : '/main/get-find-features'
            ,success    : function(data){
                //mainshow.fnPopMakesDraw(data);    /*pop makes ë¦¬ìŠ¤íŠ¸ë¥¼ ê·¸ë¦¬ê¸°*/
                $('#INSPECTED').text('(' + data.featureList.INSPECTED + ')');
                $('#REENTRY').text('(' + data.featureList.REENTRY + ')');
                $('#PYY').text('(' + data.featureList.PYY + ')');
                $('#STATUS_DRIVE').text('(' + data.featureList.STATUS_DRIVE + ')');
                $('#STATUS_DRIVE_NONE').text('(' + data.featureList.STATUS_DRIVE_NONE + ')');
                $('#STATUS_DRIVE_ENGINE_STARTS').text('(' + data.featureList.STATUS_DRIVE_ENGINE_STARTS + ')');
                $('#RORO').text('(' + data.featureList.RORO + ')');
                $('#DAMAGECD_REAR').text('(' + data.featureList.DAMAGECD_REAR + ')');
                $('#DAMAGECD_SIDE').text('(' + data.featureList.DAMAGECD_SIDE + ')');
                $('#DAMAGECD_FRONT').text('(' + data.featureList.DAMAGECD_FRONT + ')');
                $('#FUEL_HYBRID').text('(' + data.featureList.FUEL_HYBRID + ')');
                $('#FUEL_DIESEL').text('(' + data.featureList.FUEL_DIESEL + ')');
                $('#FUEL_ELEC').text('(' + data.featureList.FUEL_ELEC + ')');
                $('#PRICE_DROPPED').text('(' + data.featureList.PRICE_DROPPED + ')');

            }
            , error     : function(jqXHR, textStatus, errorThrown){
                console.log(jqXHR.responseText);
            }
        })
    }

    /*Sold Car ì˜ì—­*/
    , fnSoldList     :   function() {
        $.ajax({
            type : 'POST'
            ,url : '/main/get-soldCar-List'
            ,success    : function(data){
                mainshow.fnSoldDraw(data);    /*Sold Carì˜ ë¦¬ìŠ¤íŠ¸ë¥¼ ê·¸ë¦¬ê¸°*/
            }
            , error     : function(jqXHR, textStatus, errorThrown){
                console.log(jqXHR.responseText);
            }
        })
    }
    /*Sold Car ê·¸ë¦¬ê¸°*/
    , fnSoldDraw : function(data){
        let car = data.list;
        let soldHtml = "";
        if(car < 5){
            $(".sold").removeClass('item')
            $(".sold").addClass('noData')
            $(".sold").html(
                '    <img src="'+ $("#ResourcesPath").val()+'/images/content/bg_featuredNodata.svg">\n' +
                '     <p>'+mainshow.messages["list.Current.waiting.title1"]+'</p>\n'
            );
        }else{
            for (let i = 0; i < car.length; i++) {
                var carImage        = stUtil.fnNullToStrike(car[i].V_IMG_FULL_PATH);            /*ì´ë¯¸ì§€ í’€ê²½ë¡œ*/
                var carImageExt     = carImage.substr(carImage.length-4,carImage.length);       /*ì´ë¯¸ì§€ í™•ìž¥ìž*/
                var carImageDot     = carImageExt=='jpeg'?5:4;
                var carNM           = stUtil.fnNullToStrike(car[i].V_CARNM);                    /*ì°¨ëŸ‰ëª…*/

                carImageExt = carImageExt=='jpeg'?carImage.substr(carImage.length-carImageDot,carImage.length):carImageExt;
                // let carThumImage = carImage.substr(0,carImage.length-carImageDot)+'_320'+carImageExt;
                let carThumImage = carImage;

                soldHtml +=
                    '<div class="item">\n' +
                    '    <dl>\n' +
                    '        <dt class="markItem"><img src="'+ carThumImage + '" alt="'+ carNM + '" loading="lazy"/></dt>\n' +
                    '        <dd class="price">\n' +
                    '            <strong class="ell1">'+ carNM + '</strong>\n' +
                    '        </dd>\n' +
                    '    </dl>\n' +
                    '</div>';
            }
        }

        $(".sold").html(soldHtml);
    }

    /*Review ì˜ì—­*/
    , fnReviewList     :   function() {
        $.ajax({
            type : 'POST'
            ,url : '/main/get-review-List'
            ,success    : function(data){
                mainshow.fnReviewDraw(data);    /*Reviewì˜ ë¦¬ìŠ¤íŠ¸ë¥¼ ê·¸ë¦¬ê¸°*/
            }
            ,error      : function(jqXHR, textStatus, errorThrown){
                console.log(jqXHR.responseText);
            }
        })
    }
    /*Review ê·¸ë¦¬ê¸°*/
    , fnReviewDraw : function(data){
        let innerHTML = "";
        let review = data.list;
        let reviewTemplete =
            '<div class="listBox {{ISBEST}}" onclick="location.href=\'/community/reviews\'">\n' +
            '    <div class="video">\n' +
            '        <div class="isYoutube" style="{{YOUTUBE_CSS}}"></div>\n' +
            '        <img src="{{IMG_URL}}" loading="lazy"></img>\n' +
            //'        <iframe style="display: none; pointer-events: none;" width="100%" height="240" src="{{YOUTUBE_URL}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n' +
            '    </div>\n' +
            '    <div class="imgText">\n' +
            '        <p>{{CONTENT}}</p>\n' +
            '        <div class="videoInfo">\n' +
            '            <span class="flag"><img src="{{PROPADR}}/images/common/flag2/{{COUNTRY_CD}}.png"/>{{COUNTRY_NM}}</span>\n' +
            '            <div class="postcomment">\n' +
            '                <a class="like">\n' +
            '                    <span>{{LIKE_CNT}}</span>\n' +
            '                </a>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';
        
        for (let i = 0; i < review.length; i++) {
            var tempHTML        = reviewTemplete;
            var rvItemCd        = review[i].ITEM_CD;
            var rvIsBest        = (review[i].IS_BEST == "Y") ? "best" : "";
            var rvYoutube       = review[i].YOUTUBE_URL;
            var rvImage         = review[i].IMG_REVIEW;
            var rvCountryCD     = review[i].COUNTRY_CD;                                 /* ë¦¬ë·° ë“±ë¡ìž êµ­ê°€Cd */
            var rvCountryNm     = review[i].COUNTRY_NM;
            var rvLikeCnt       = stUtil.fnNullToStrike(review[i].LIKE_CNT);
            var rvContent       = review[i].CONTENT.replaceAll("\n", "<br>");

            //ì¢‹ì•„ìš” cnt
            if(rvLikeCnt == "-") {
                rvLikeCnt = "0";
            } else if(rvLikeCnt >= 1000) {
                rvLikeCnt = "+999";
            }

            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{ITEMCD}}', rvItemCd);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{ISBEST}}', rvIsBest);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{IMG_URL}}', rvImage);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{YOUTUBE_URL}}', rvYoutube);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{YOUTUBE_CSS}}', (rvYoutube != undefined) ? "" : "display: none;");
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{COUNTRY_CD}}', rvCountryCD);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{COUNTRY_NM}}', rvCountryNm);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{LIKE_CNT}}', rvLikeCnt);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{CONTENT}}', rvContent);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{PROPADR}}', $("#ResourcesPath").val());

            innerHTML += tempHTML;
        }

        $("#divReviewList").html(innerHTML);
    }
    
    /**
     * @author ishift_ash TODO : 2019.05.24~2019.05.27
     *
     * ë©”ì¸íŽ˜ì´ì§€ í•˜ë‹¨ Newly Arrived Carë¥¼ ë³´ì—¬ì£¼ê¸° ìœ„í•œ ìž‘ì—…
     * fnNewlyCarList, fnNewlyDraw ì¶”ê°€
     */
    /*Newly Arrived Car 5ê°œ ë³´ì—¬ì£¼ê¸°*/
    , fnNewlyCarList: function () {

        var langCd = $("#i_sLangCd").val();

        $.ajax({
            type: 'POST'
            , url: '/main/get-mainCar-List'
            , data: {
                i_sLangCd: langCd
            }
            , success: function (data) {
                /*if (!data) {
                    mainshow.fnCount();
                } else {
                    mainshow.fnCount(data.list);
                }*/

                mainshow.fnNewlyDraw(data);    /*newly Arrived Carì˜ ë¦¬ìŠ¤íŠ¸ë¥¼ ê·¸ë¦¬ê¸°*/

                if(data.list.length > 0){
                    mainshow.fnListDraw(data.list, "mainMostlyList");    /*newly Arrived Carì˜ ë¦¬ìŠ¤íŠ¸ë¥¼ ê·¸ë¦¬ê¸°*/
                }else{
                    $("#mainMostlyList").html("");
                    $('#mainMostly').hide();
                }

                if(data.selectedList.length >= 4){
                    mainshow.fnListDraw(data.selectedList, "mainSelectedList");    /*selected ë¦¬ìŠ¤íŠ¸ë¥¼ ê·¸ë¦¬ê¸°*/
                }else{
                    $("#mainSelectedList").html("");
                    $('#mainSelected').hide();
                }

                if(data.crushedList.length >= 4){
                    mainshow.fnListDraw(data.crushedList, "mainCrushedList");    /*selected ë¦¬ìŠ¤íŠ¸ë¥¼ ê·¸ë¦¬ê¸°*/
                }else{
                    $("#mainCrushedList").html("");
                    $('#mainCrushed').hide();
                }

                if(data.lessthanList.length >= 4){
                    mainshow.fnListDraw(data.lessthanList, "mainLess5List");    /*selected ë¦¬ìŠ¤íŠ¸ë¥¼ ê·¸ë¦¬ê¸°*/
                }else{
                    $("#mainLess5List").html("");
                    $('#mainLess5').hide();
                }

                if(data.rentalList.length >= 4){
                    mainshow.fnRentalListDraw(data.rentalList, "rentalAuctionList");
                }else{
                    $("#rentalAuction").html("");
                    $('#rentalAuction').hide();
                }
            }
            , error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.responseText);
            }
            , complete: function() {
                mainshow.fnMianLayout();
            }
        })
    }
    //Rental ì°¨ëŸ‰ 10ëŒ€ ë…¸ì¶œ
    , fnRentalCarList: function () {

        var langCd = $("#i_sLangCd").val();

        $.ajax({
            type: 'POST'
            , url: '/main/get-rentalCar-List'
            , data: {
                i_sLangCd: langCd
            }
            , success: function (data) {

                if(data.rentalList.length >= 4){
                    mainshow.fnRentalListDraw(data.rentalList, "rentalAuctionList");
                }else{
                    $("#rentalAuction").html("");
                    $('#rentalAuction').hide();
                }
            }
            , error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.responseText);
            }
            , complete: function() {
                //mainshow.fnMianLayout();
            }
        })
    }
    , fnNewlyTemplate: function (type) {

        let defultYoutubeTemplate =
            '	<a href="{{itemDetail}}" target="_blank" class="markArea s" style="background-image:url({{imageUrl}})">' +
            //ì¶”ê°€
            '		<span class="mark">' +
            '	    	{{youtube}}' +
            '		</span>' +

            '	    <span class="{{veifired}}"></span>' +
            '	</a>' +

            '	<dl>' +
            '	    <dt>' +
            '		<span class="dmg">{{damageNm}}</span>' +
            '		<strong class="ell2">{{carNm}}</strong>' +
            '	    </dt>' +
            '	    <dd>' +
            '		<ul class="clearfix">' +
            '		    <li>Lot. {{roundSeq}}</li>' +
            '		    <li>{{carExhaustQty}}cc</li>' +
            '		    <li>{{carFuelTypeNm}}</li>' +
            '		    <li>{{flagDvml}} {{carMileage}}km</li>' +
            '		</ul>' +
            '	    </dd>' +
            '	    <dd class="price totalPrice">USD {{carPrice}}</dd>' +
            '	</dl>';

        let defultTemplate =
            '<li>' +
            '	<span class="{{veifired}}"></span>' +
            '	<a href="{{itemDetail}}" target="{{target}}" class="markArea s" style="background-image:url({{imageUrl}})">' +
            '	    <span class="mark">' +
            '		{{youtube}}' +
            '	    </span>' +

            '	</a>' +
            '	<dl>' +
            '	    <dt class="ell1">{{carNm}}</dt>' +
            '	    <dd class="price totalPrice">USD {{carPrice}}</dd>' +
            '	</dl>' +
            '</li>';

        let stoKItemTemplate =
            ' <div class="item">' +
            '	<a href="{{itemDetail}}" target="{{target}}" class="markArea s" style="background-image:url({{imageUrl}})">' +
            '	    <span class="mark">' +
            '            {{youtube}}' +
            '	    </span>' +

            '       </a>' +
            '   <dl>' +
            '     <dd class="dmg">{{damageNm}} </dd>' +
            '     <dt class="ell2">{{carNm}}</dt>' +
            '     <dd>' +
            '    <ul class="info clearfix">' +
            '	       <li>Lot. {{roundSeq}}</li>' +
            '          <li>{{carExhaustQty}}cc</li>' +
            '		   <li>{{carFuelTypeNm}}</li>' +
            '		   <li>{{flagDvml}} {{carMileage}}km</li>' +
            '       </ul>' +
            '    </dd>' +
            '    <dd class="price">USD {{carPrice}}</dd>' +
            '   </dl>' +
            '</div>';

        let stoKImgTemplate =
            '<div class="item">' +
            '<a href="javascript:;" style="background-image:url({{imageUrl}})"></a>' +
            '</div>';

        let auctionTimeTable =
            '<li class="auc{{status}} " data-seq="{{seq}}">' +
            '   <a id="auc{{status}}" class="btn_view">{{auctionGbText}} ({{total}})'+
            '       <span class="date" id="auctionTime{{status}}">{{startDate}}</span>'+
            '   </a>'+
            /*'   <dl>'+
            '       <dt class="flex">'+
            '           <span><em class="redMark">{{auctionGb}}</em> {{auctionGbText}}</span>'+ //íšŒì°¨ë³„ íƒ€ì´í‹€ ë°ì´í„° ì ìš© ìš”ì²­
            '           <a class="btn_view" id="auc{{status}}"><b>{{total}}</b> units</a>'+
            '       </dt>'+
            '       <dd class="flex">'+
            '           <span class="date" id ="auctionTime{{status}}">{{startDate}}</span>'+
            '           <a class="btn_live" onclick="header.fnWebAuctionJoin(\'{{seq}}\')" id="join{{status}}">' + mainshow.messages["join.main.liveAuction2"] + '</a>'+
            '           </dd>'+
            '   </dl>'+*/
            '</li>';

        let returnType = "";

        if (type == "youte") {
            returnType = defultYoutubeTemplate;
        } else if (type == "newly") {
            returnType = defultTemplate;
        } else if (type == "verifiedStock") {
            returnType = stoKItemTemplate;
        } else if (type == "stokImg") {
            returnType = stoKImgTemplate;
        } else if (type == "auctionTime") {
            returnType = auctionTimeTable;
        }

        return returnType;

    }
    , fnDataBind: function (data, type) {

        var listDate = (type == 'verifiedStock') ? data.stockList : (type == 'stokImg') ? data.stockList : data.list;

        if (type == 'verifiedStock' || type == 'youte'  ) {
            if (listDate.length == 0) {
                return '';
            }
        }

        var view = "";
        var templateType = (type == 'youte') ? ((i == 0) ? type : 'newly') : type;
        var cnt = (type == 'newly') ? 1 : 0;
        var listSize = (type == 'youte') ? 1 : listDate.length;
        for (var i = cnt; i < listSize; i++) {
            var template = mainshow.fnNewlyTemplate(type);
            var carInfo = listDate[i].aucEntryCarInfoVO,                                /*ì°¨ëŸ‰ì •ë³´*/
                entryInfo = listDate[i].aucEntryMasterVO,                                 /*ì¶œí’ˆì •ë³´*/
                imgUrl = listDate[i].carImageVO,                                       /*ì´ë¯¸ì§€ í’€ê²½ë¡œ*/
                regUserCd = entryInfo.i_sRegUserCd,
                carStatusDmg = carInfo.i_arrCarDamageVO;                                      /*ë°ë¯¸ì§€ìƒì„¸*/

            var carNm = stUtil.fnNullToStrike(carInfo.i_sCarNm),                       /*ì°¨ëŸ‰ëª…*/
                roundSeq = stUtil.fnNullToStrike(listDate[i].i_sEntrySeq),               /*ì¶œí’ˆìˆœë²ˆ í˜•ì‹ë§žì¶¤ xxxx-xst*/
                carMileage = stUtil.fnNullToStrike(stUtil.fnNumCommas(carInfo.i_iDvml)),    /*ì£¼í–‰ê±°ë¦¬*/
                carFuelTypeNm = stUtil.fnNullToStrike(carInfo.i_sFuelTypeNm),                  /*ì—°ë£Œëª…*/
                carEngineTypeNm = stUtil.fnNullToStrike(carInfo.i_sEngineTypeNm),                /*ì—”ì§„íƒ€ìž…ëª…*/
                carFlagEngine = stUtil.fnNullToStrike(carInfo.i_sFlagEngine),                  /*ì—”ì§„ëª…*/
                carStatusNm = stUtil.fnNullToStrike(carInfo.i_sCarStatusNm),                 /*ìƒíƒœëª…*/
                carExhaustQty = stUtil.fnNullToStrike(stUtil.fnNumCommas(carInfo.i_iExhuQty)) /*ë°°ê¸°ëŸ‰*/
            var entryCd = entryInfo.i_sEntryCd,                                          /*ì¶œí’ˆ ì½”ë“œ*/
                aucCd = entryInfo.i_sAucCd,
                carCd = carInfo.i_sCarCd,                                              /*ì°¨ëŸ‰ ì½”ë“œ*/
                sSaleSelect = entryInfo.i_sSaleSelect,                                       /* íŒë§¤ìœ í˜•*/
                YoutubeURL = entryInfo.i_sYoutubeURL,                                       /* Youtube URL*/
                carStatusNm = stUtil.fnNullToStrike(carInfo.i_sCarStatusNm),                 /* ì°¨ëŸ‰ ìƒíƒœ*/
                flagDvml = stUtil.fnNullToStrike(carInfo.i_sFlagDvml);                    /*ì°¨ëŸ‰ ì£¼í–‰ ê±°ë¦¬ ë‹¨ìœ„*/
            let itemCd=entryInfo.itemCd;
            let urlcarNm = carNm.replace(/ /gi, "-");

            var userCd = $('input[name="i_sAuctionUserCd"]').val();
            var carPrice = stUtil.fnNullToStrike(entryInfo.i_iMaxBidAmt);            /*í˜„ìž¬ ë¹„ë”©ì•¡ ì„¤ì • */

            if ('-' === carPrice) {
                carPrice = stUtil.fnNullToStrike(entryInfo.i_iStartAmt);         /*ìµœê³ ë¹„ë”©ì•¡ ì—†ì„ ê²½ìš° ì‹œìž‘ê°€*/
            }
            carPrice = stUtil.fnNumCommas(carPrice);
            if ('-' === carPrice) {
                carPrice = "*,***";
            }

            var roro = '';
            if (carInfo.i_sFlagRoRo != 'N') {
                roro = 'roro';
            }
            var youtube = '';
            if (!stUtil.fnIsNull(carInfo.i_sYoutubeURL)) {
                youtube = '<em><img src="' + mainshow.ResourcesPath + '/images/common/ico_videoStock.png" alt="video"></em>';
            }

            // vRd : run&drive
            // vEs : engine start
            // vNd : non drivable
            var veifired = 'non';
            if (entryInfo.i_sConsignFlag == 'Y') {
                veifired = (carInfo.i_sCarStatusCd == 'A0010') ? 'verifired' : (carInfo.i_sCarStatusCd == 'A0020') ? 'vEs' : 'vNd'
            }


            /* ì°¨ëŸ‰ ë°ë¯¸ì§€ Array ì¶œë ¥ */
            var damageNm = '';
            for (var j = 0; j < carStatusDmg.length; j++) {
                damageNm += '<em class="' + (('Y' === carStatusDmg[j].i_sFlagImport) ? "high" : "") + '">' + carStatusDmg[j].i_sDamageCdNm + '</em>'
            }

            var imageUrl = imgUrl == null ? "/resources/images/etc/photo_empty.png" : imgUrl.i_sImageFullPath;

            // var imageExt = imageUrl.substr(imageUrl.length - 4, imageUrl.length);
            // var imageDot = imageExt == 'jpeg' ? 5 : 4;
            // imageExt = imageExt == 'jpeg' ? imageUrl.substr(imageUrl.length - imageDot, imageUrl.length) : imageExt;
            // imageUrl = (roro == 'roro') ? imageUrl.substr(0, imageUrl.length - imageDot) + '_RORO' + imageExt : imageUrl;


            var itemDetail = '/entry/carsale/' + ((sSaleSelect == 'B') ? ('get-carsale-fixed/' + entryCd + '/' + carCd + '/') : itemCd==""?('get-carsale/' + aucCd + '/' + entryCd + '/' + carCd + '/'):'get-carsale-on/'+itemCd+'/'+urlcarNm   );
	        // êµ­ë‚´ ë°”ì´ì–´ í™•ì¸
	        var aucAuth = $('input[name=i_sAuthList]').val();
	        var sellerCertYn = $('input[name=i_sSellerCertYn]').val();

			let target = '_blank';

	        let countryCode = $("[name=countryCode]").val();

            if(aucAuth == ''){
                itemDetail = '/login';
                target = '';
            }

            if((aucAuth.indexOf("AUC10") > -1 || aucAuth.indexOf("AUC11") > -1) && sellerCertYn == 'N'){
                itemDetail = '/limit'
                target = '';
            }

            template = template.replace('{{itemDetail}}', itemDetail);
            template = template.replace('{{target}}', target);
            template = template.replace('{{youtube}}', youtube);
            template = template.replace('{{imageUrl}}', imageUrl);
            template = template.replace('{{carNm}}', carNm);
            template = template.replace('{{veifired}}', veifired);
            template = template.replace('{{damageNm}}', damageNm);
            template = template.replace('{{roundSeq}}', roundSeq);
            template = template.replace('{{carFuelTypeNm}}', carFuelTypeNm);
            template = template.replace('{{carExhaustQty}}', carExhaustQty);
            template = template.replace('{{carMileage}}', carMileage);
            template = template.replace('{{flagDvml}}', flagDvml);
            template = template.replace('{{carPrice}}', carPrice);

            view = view + template
        }
        return view;

    }
    /*newly Arrived ê·¸ë¦¬ê¸°*/
    , fnNewlyDraw: function (data) {
        var videoHtml = mainshow.fnDataBind(data, 'youte');
        var newHtml = mainshow.fnDataBind(data, 'newly');
        var verifiedStockHtml = mainshow.fnDataBind(data, 'verifiedStock');
        var verifiedStockImgHtml = mainshow.fnDataBind(data, 'stokImg');


        if (verifiedStockHtml == '') {
            $(".main_stock").addClass('veri_non');
        } else {
            $(".main_stock").removeClass('veri_non');
        }
        $(".stock_item").html(verifiedStockHtml);
        $(".stock_img").html(verifiedStockImgHtml);

        $("div.arrived div.video").html(videoHtml);
        $(".new").html(newHtml);


        //mainshow.fnMianLayout();
    }
    /*Prev,Nextë¥¼ ìœ„í•œ ì˜¤ë¸Œì íŠ¸ ì…‹íŒ…*/
    , fnSettingList: function (carlist) {

        /*ì˜¤ë¸Œì íŠ¸ ì´ˆê¸°í™”*/
        $('#i_objectList').remove();

        var arrList = new Array();
        var listDetail = new Array();

        for (var i = 0; i < carlist.length; i++) {
            arrList.push({
                'i_sEntryCd': carlist[i].aucEntryMasterVO.i_sEntryCd
                , 'i_sCarCd': carlist[i].aucEntryCarInfoVO.i_sCarCd
                , 'i_sAucCd': carlist[i].aucAuctionNoVO.i_sAucCd
                , 'i_iSeq': carlist[i].i_iRownum
            });
        }

        listDetail = arrList;

        /*jsoní˜•ì‹ìœ¼ë¡œ inputíƒœê·¸ì— ì„¸íŒ…*/
        var json_str = JSON.stringify(listDetail);

        $("<input></input>").attr({
            type: "hidden",
            id: "i_objectList",
            name: "i_objectList",
            value: json_str
        }).appendTo("#newlyArrivedDetailFrm");
        $("<input></input>").attr({
            type: "hidden",
            id: "controlFlag",
            name: "controlFlag",
            value: "new"
        }).appendTo("#newlyArrivedDetailFrm");

    }

    , fnCount: function (count) {

        if (!count) {
            $('.flagEntry_ON').next('dd').text(0);
            $('.flagEntry_LC').next('dd').text(0);
            $('.flagEntry_UC').next('dd').text(0);
            $('.flagEntry_PL').next('dd').text(0);
            $('.flagEntry_WL').next('dd').text(0);
            $('#schname_vals').text('0');
        } else {
            for (var i in count) {
                $('.flagEntry_' + count[i].i_sFlagEntry).next('dd').text(count[i].i_iEntryCnt);

                if (count[i].i_sFlagEntry == $('#entryListFlag').val()) {
                    $('#schname_vals').text(count[i].i_iEntryCnt);

                    $("<input></input>").attr({
                        type: "hidden",
                        id: "i_iCurrTotal",
                        name: "i_iCurrTotal",
                        value: count[i].i_iEntryCnt
                    }).appendTo("#newlyArrivedDetailFrm");
                }
            }
        }
    }
    /*ê²€ìƒ‰*/
    , fnSearch: function (id, data) {

        if(id == 'date'){
            let date = new Date();

            date.setFullYear(date.getFullYear() - data);
            let fromDate = date.getFullYear();

            date = new Date();
            date.setFullYear(date.getFullYear() + 1);
            let toDate = date.getFullYear();

            $('#from').val(fromDate);
            $('#to').val(toDate);
        }
        $('#' + id).val(data);
        $('#carmodel').val($("#i_sModelCd").val());
        $('#mainYn').val("MM");

        $('#main_search').submit();

    }
    , fnMianLayout: function () {

        /* verified */
        $('.stock_item').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            fade: true,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            pauseOnFocus: true,
            asNavFor: '.stock_img'
        });
        $('.stock_img').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            asNavFor: '.stock_item',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        var $status = $('.pagingInfo .currenNum');
        var $statusTatal = $('.pagingInfo .total');
        var $slickElement = $('.mainSlide');

        $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i);
            $statusTatal.text(' / ' + slick.slideCount);
        });

        /* mainSlide */
        $slickElement.slick({
            slidesToShow: 1,
            //slidesToScroll: 1,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: false,
            pauseOnFocus: false

        });

        //ì´ì „ ë‹¤ìŒ ë²„íŠ¼
        $('.next').on('click', function () {
            $('.mainSlide').slick('slickNext');
        });
        $('.prev').on('click', function () {
            $('.mainSlide').slick('slickPrev');
        });

        //ìž¬ìƒ ì •ì§€ ë²„íŠ¼
        $('.pause').on('click', function () {

            if ($(this).hasClass('pause')) {

                $('.mainSlide').slick('slickPause');
                $(this).addClass('play');
                $(this).removeClass('pause');
            } else {

                $('.mainSlide').slick('slickPlay');

                $(this).addClass('pause');
                $(this).removeClass('play');
            }
        });

        /* main tab */
        $('.tabLink').on('click', function () {
            $(this).parent().addClass('on').siblings().removeClass('on');
        });
        $('.arrow').on('click', function () {
            var tab = $(this).siblings().find('li.on');
            tab.removeClass('on').siblings().addClass('on');
        });
        $('.tool').on('click', function () {
            $('.tooltip').show();
        });
        $('.tooltip').on('click', function () {
            $('.tooltip').hide();
        });

        const swiper = new Swiper('.mainMostlyList', {
            speed: 400,
            slidesPerView: 4,
            spaceBetween: 27,
            navigation: {
                nextEl: '.swiper-next1',
                prevEl: '.swiper-prev1',
            },
        });

        const swiper2 = new Swiper('.mainSelectedList', {
            speed: 400,
            slidesPerView: 4,
            spaceBetween: 27,
            navigation: {
                nextEl: '.swiper-next2',
                prevEl: '.swiper-prev2',
            },
        });

        const swiper3= new Swiper('.mainCrushedList', {
            speed: 400,
            slidesPerView: 4,
            spaceBetween: 27,
            navigation: {
                nextEl: '.swiper-next3',
                prevEl: '.swiper-prev3',
            },
        });

        const swiper4= new Swiper('.mainLess5List', {
            speed: 400,
            slidesPerView: 4,
            spaceBetween: 27,
            navigation: {
                nextEl: '.swiper-next4',
                prevEl: '.swiper-prev4',
            },
        });

        const swiper5= new Swiper('.rentalAuctionList', {
            speed: 400,
            slidesPerView: 4,
            spaceBetween: 27,
            navigation: {
                nextEl: '.swiper-next5',
                prevEl: '.swiper-prev5',
            },
        });


    },
    fnHandlePopUp: function(selector, start, end){ //ì‹œìž‘ì¢…ë£Œ ì‹œê°„ íŒì—…
        const currentDate = new Date();
        const startDate = new Date(start);
        const endDate = new Date(end);

        const popup = document.querySelector(selector);

        const { log } = console;

        if(currentDate >= startDate && currentDate <= endDate){
            log('show', true);
            modalPopup(popup);
            return;
        }

        log('show', false);
    }
    , fnCookiePopUp: function (popup, staDay, endDay) { // ì¢…ë£Œ+ì¿ í‚¤íŒì—…
        let time = new Date();
        let date = moment.tz(time, 'Asia/Seoul');
        let curTime = date.format('YYYYMMDD')//MM/DD/YYYY HH:mm:ss

        if(curTime >= staDay && curTime <= endDay){
            if (getCookie(popup) == "Y") {
                modalPopupClose(popup);
            } else {
                modalPopup(popup);
            }
        } else {
            modalPopupClose(popup);
        }
    },
    // TODO íŒì—… ì—¬ëŸ¬ê°œìš© í•¨ìˆ˜ë¡œ ë§Œë“¤ê¸° , popup1ì´ ì´ë²¤íŠ¸ íŒì—…
    fnOpenPopUp2: function (popup, type, popup1, popup2) {
        var bIsKorea = $('input[name=i_sbIsKorea]').val();
        let langCd = $("input[name=langCd]").val();

        let time = new Date();
        let date = moment.tz(time, 'Asia/Seoul');
        let curTime = date.format('YYYYMMDD')//MM/DD/YYYY HH:mm:ss

        if(type == 'G'){
            let standardDay = popup1.endDay > popup2.endDay ? popup1.endDay : popup2.endDay;

            // ë‘˜ ì¤‘ í•˜ë‚˜ê°€ ê¸°í•œì´ ëë‚˜ì§€ ì•Šì•˜ìœ¼ë©´ íŒì—… ë„ìš°ê¸°
            if(curTime <= standardDay) {
                modalPopup(popup);
                // ì´ë²¤íŠ¸ íŒì—… ë‹¤ì‹œë³´ì§€ ì•Šê¸°ë¡œ ì„¤ì •ë˜ì—ˆë‹¤ë©´
                if (getCookie(popup) == "Y") {
                    popup1.popup.remove();

                    //popup2 ê¸°í•œ ëë‚œ ê²½ìš°
                    if (curTime > popup2.endDay) {
                        modalPopupClose(popup);
                    }
                }

                if (curTime > popup1.endDay) {
                    popup1.popup.remove();
                }

                if (curTime > popup2.endDay) {
                    popup2.popup.remove();
                }
            }
            else{
                // ë‘˜ ë‹¤ ê¸°í•œ ëë‚œ ê²½ìš°
                modalPopupClose(popup);
            }
        }else{

            if(bIsKorea == 'XN'   ||   bIsKorea =='N' ){
                if(langCd == 'ko'){

                }else{
                    if (curTime <= endDay) {
                        if (getCookie(popup) == "Y") {
                            modalPopupClose(popup);
                        } else {
                            modalPopup(popup);
                        }
                    } else {
                        modalPopupClose(popup)
                    }
                }
            }
        }
    }

    /*List ê·¸ë¦¬ê¸°*/
    , fnListDraw : function(data, id){
        let innerHTML = "";
        let list = data;

        let template =
            '            <li class="swiper-slide">\n' +
            '                <a href="{{carDetail}}">\n' +
            '                    <div class="img">\n' +
            '                       {{new}}\n' +
            '                       <img src="{{IMG_URL}}" loading="lazy"/>\n' +  // ì´ë¯¸ì§€ ê²½ë¡œ ì—†ì„ ê²½ìš°  /resources/images/etc/photo_empty.png ë¡œ ëŒ€ì²´
            '                       <div class="badge">\n' +
            '                           {{video}}\n' +
            '                           {{isRoRo}}\n' +
            '                       </div>\n' +
            '                    </div>\n' +
            '                    <div class="info">\n' +
            '                       {{inspected}}' +
            '                       {{dropped}}\n' +
            '                        <dl>\n' +
            '                            <dt>{{carNm}}</dt>\n' +
            '                            <dd class="damage">\n' +
            '                                <span class="hit">Run&amp;Drive</span>\n' +
            '                                <span>{{dmgNm}}</span>\n' +
            '                                <em>{{dmgCnt}}</em>\n' +
            '                            </dd>\n' +
            '                        </dl>\n' +
            '                        <div class="infoDetail">\n' +
            '                            <ul>\n' +
            '                                <li class="info1">{{exhuQty}}cc</li>\n' +
            '                                <li class="info2">{{fuelTypeNm}}</li>\n' +
            '                                <li class="info3">{{dvml}}</li>\n' +
            '                                <li class="info4">{{steeringNm}}</li>\n' +
            '                            </ul>\n' +
            '                            <div class="price">\n' +
            '                                <span>Current Bid<b>USD {{bid}}</b></span>\n' +
            '                                <button type="button" class="" data-id="fix_mmBox">Bid Now</button>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </a>\n' +
            '            </li>' ;

        for (let i = 0; i < list.length; i++) {
            var tempHTML        = template;
            var image           = "";
            var isRoRo          = list[i].aucEntryCarInfoVO.i_sFlagRoRo == 'Y' ? '<span class="roro">RO-RO</span>' : '';
            var isInspected     = list[i].aucEntryCarInfoVO.i_sFlagInspected;
            var carNm           = list[i].aucEntryCarInfoVO.i_sCarNm;
            var exhuQty         = list[i].aucEntryCarInfoVO.i_iExhuQty;
            var fuelTypeNm      = list[i].aucEntryCarInfoVO.i_sFuelTypeNm;
            var dvml            = list[i].aucEntryCarInfoVO.i_iDvml;
            var steeringNm      = list[i].aucEntryCarInfoVO.i_sSteeringNm;
            var bid             = common.StringUtil.fnSetCommas(list[i].aucEntryCarInfoVO.i_iTotOrder);
            var dmgNm           = list[i].aucEntryCarInfoVO.i_arrCarDamageVO.length == 0 ? '' : list[i].aucEntryCarInfoVO.i_arrCarDamageVO[0].i_sDamageCdNm;
            var dmgCnt          = list[i].aucEntryCarInfoVO.i_arrCarDamageVO.length;
            var youTube         = list[i].aucEntryCarInfoVO.i_sYoutubeURL;
            var newly           = list[i].aucEntryMasterVO.i_sFlagReentry;
            let priceRank       = list[i].aucEntryMasterVO.price_RANK;

            if(list[i].carImageVO == null){
                image = "/resources/images/etc/photo_empty.png";
            }else{
                if(list[i].carImageVO.i_sImageFullPath == null){
                    image = "/resources/images/etc/photo_empty.png";
                }else{
                    image = list[i].carImageVO.i_sImageFullPath;
                    let imageLastIndex = image.lastIndexOf('.');
                    image = image.substring(0, imageLastIndex) + '_720' + image.substring(imageLastIndex, image.length);
                }
            }

            if(newly == '20'){
                newly = '<div class="new">New</div>';
            }else{
                newly = '';
            }

            if(youTube == '' || youTube == null){
                youTube = '';
            }else{
                youTube = '<span class="video"></span>';
            }

            if(isInspected == 'Y'){
                //isInspected = '';
                isInspected = '<span class="inspected">Inspected</span>\n';
            }else {
                //isInspected = '<img class="inspected" src="' + $('#propAdr').val() + '/images/common/ic_inspected.png" >\n';
                isInspected = '';
            }

            if(priceRank == 'down'){
                priceRank = '<span class="dropped">Price dropped</span>';
            }else {
                priceRank = '';
            }

            if(dmgCnt == 0 || dmgNm == '' || dmgNm == null){
                dmgNm = '';
            }

            if(dmgCnt == 0 || dmgCnt == 1){
                dmgCnt = '';
            }else {
                dmgCnt = '+&nbsp;' + (dmgCnt -1);
            }

            if($('#i_sbIsKorea').val() == 'XY'){
                bid = '*,***';
            }

            var carNm = stUtil.fnNullToStrike(list[i].aucEntryCarInfoVO.i_sCarNm),                       /*ì°¨ëŸ‰ëª…*/
                entryCd = list[i].aucEntryMasterVO.i_sEntryCd,                                          /*ì¶œí’ˆ ì½”ë“œ*/
                aucCd = list[i].aucEntryMasterVO.i_sAucCd,
                carCd = list[i].aucEntryCarInfoVO.i_sCarCd,                                              /*ì°¨ëŸ‰ ì½”ë“œ*/
                sSaleSelect = list[i].aucEntryMasterVO.i_sSaleSelect,                                       /* íŒë§¤ìœ í˜•*/
                itemCd = list[i].aucEntryMasterVO.itemCd,
                urlcarNm = carNm.replace(/ /gi, "-");

            var itemDetail = '/entry/carsale/' + ((sSaleSelect == 'B') ? ('get-carsale-fixed/' + entryCd + '/' + carCd + '/') : itemCd==""?('get-carsale/' + aucCd + '/' + entryCd + '/' + carCd + '/'):'get-carsale-on/'+itemCd+'/'+urlcarNm   );
            // êµ­ë‚´ ë°”ì´ì–´ í™•ì¸
            var aucAuth = $('input[name=i_sAuthList]').val();
            var sellerCertYn = $('input[name=i_sSellerCertYn]').val();

            let target = '_blank';
            let countryCode = $("[name=countryCode]").val();

            if(aucAuth == ''){
                itemDetail = '/login';
                target = '';
            }
            if((aucAuth.indexOf("AUC10") > -1 || aucAuth.indexOf("AUC11") > -1) && sellerCertYn == 'N'){
                itemDetail = '/limit'
                target = '';
            }

            let dvmlText = '';
            if(dvml == null){
                dvmlText = 'Unknown';
            }else{
                dvmlText = dvml.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'km';
            }

            let exhuQtyText = '';
            if(exhuQty == null){
                exhuQtyText = '-';
            }else{
                exhuQtyText = exhuQty.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            // ì˜¥ì…˜ 200íšŒ ì´ë²¤íŠ¸ ì²˜ë¦¬
            if (aucCd == 'AN202302060001' && (entryCd == 'EX202302080000000131' || entryCd == 'EX202302080000000727' || entryCd == 'EX202302080000000848')) {
                newly = '<span class="event">200â„¢ EVENT</span>';
            }

            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{new}}', newly);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{IMG_URL}}', image);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{isRoRo}}', isRoRo);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{carNm}}', carNm);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{exhuQty}}', exhuQtyText);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{fuelTypeNm}}', fuelTypeNm);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{dvml}}', dvmlText);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{steeringNm}}', steeringNm);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{bid}}', bid);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{dmgNm}}', dmgNm);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{dmgCnt}}', dmgCnt);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{inspected}}', isInspected);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{dropped}}', priceRank);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{video}}', youTube);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{carDetail}}', itemDetail);

            innerHTML += tempHTML;
        }

        $("#" + id).html(innerHTML);
    }

    /* RentalList ê·¸ë¦¬ê¸°*/
    , fnRentalListDraw : function(data, id){
        let innerHTML = "";
        let list = data;

        let template =
            '            <li class="swiper-slide">\n' +
            '                <a href="javascript:;" onclick="mainshow.goProxyDetail(\'rental\', \'{{proxyNo}}\');">\n' +
            '                    <div class="img">\n' +
            '                       <div class="new">New</div>\n' +
            '                       <img src="{{IMG_URL}}" loading="lazy"/>\n' +  // ì´ë¯¸ì§€ ê²½ë¡œ ì—†ì„ ê²½ìš°  /resources/images/etc/photo_empty.png ë¡œ ëŒ€ì²´
            '                       <div class="badge">\n' +
            '                           {{isRoRo}}\n' +
            '                           <span class="rental">RENTAL</span>\n' +
            '                       </div>\n' +
            '                    </div>\n' +
            '                    <div class="info">\n' +
            '                        <dl>\n' +
            '                            <dt>{{carNm}}</dt>\n' +
            '                            <dd class="damage">\n' +
            '                                <span class="hit">Run&amp;Drive</span>\n' +
            '                                <span>{{dmgNm}}</span>\n' +
            '                            </dd>\n' +
            '                        </dl>\n' +
            '                        <div class="infoDetail">\n' +
            '                            <ul>\n' +
            '                                <li class="info1">{{exhuQty}}cc</li>\n' +
            '                                <li class="info2">{{fuelTypeNm}}</li>\n' +
            '                                <li class="info3">{{dvml}}</li>\n' +
            '                                <li class="info4">{{steeringNm}}</li>\n' +
            '                            </ul>\n' +
            '                            <div class="price">\n' +
            '                                <span>Current Bid<b>USD {{bid}}</b></span>\n' +
            '                                <button type="button" class="" data-id="fix_mmBox">Bid Now</button>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </a>\n' +
            '            </li>' ;

        for (let i = 0; i < list.length; i++) {
            var tempHTML    = template;
            var image       = "";
            var isRoRo      = list[i].ISRORO == 'Y' ? '<span class="roro">RO-RO</span>' : '';
            var carNm       = stUtil.fnNullToStrike(list[i].CARNM);
            var exhuQty     = list[i].ENGINEVOLUME;
            var fuelTypeNm  = list[i].FUELTYPENM;
            var dvml        = list[i].ODOMETER;
            var steeringNm  = list[i].STEERINGNM;
            var bid         = common.StringUtil.fnSetCommas(list[i].STARTAMT);
            var dmgNm       = list[i].DMG;
            var proxyNo       = list[i].PROXYNO;

            if(list[i].IMG == null){
                image = "/resources/images/etc/photo_empty.png";
            }else{
                image = list[i].IMG;
            }

            if(dmgNm == '' || dmgNm == null){
                dmgNm = '';
            }

            if($('#i_sbIsKorea').val() == 'XY'){
                bid = '*,***';
            }

            let dvmlText = '';
            if(dvml == null){
                dvmlText = 'Unknown';
            }else{
                dvmlText = dvml.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'km';
            }

            let exhuQtyText = '';
            if(exhuQty == null){
                exhuQtyText = '-';
            }else{
                exhuQtyText = exhuQty.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{IMG_URL}}', image);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{isRoRo}}', isRoRo);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{carNm}}', carNm);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{exhuQty}}', exhuQtyText);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{fuelTypeNm}}', fuelTypeNm);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{dvml}}', dvmlText);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{steeringNm}}', steeringNm);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{bid}}', bid);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{dmgNm}}', dmgNm);
            tempHTML = common.StringUtil.fnReplaceAll(tempHTML,'{{proxyNo}}', proxyNo);

            innerHTML += tempHTML;
        }

        $("#" + id).html(innerHTML);
    }

    , goProxyDetail : function(target, proxyNo){
        // êµ­ë‚´ ë°”ì´ì–´ í™•ì¸
        var aucAuth = $('input[name=i_sAuthList]').val();
        var sellerCertYn = $('input[name=i_sSellerCertYn]').val();

        if(aucAuth == ''){
            $(location).attr('href', '/login/R');
        }
        if((aucAuth.indexOf("AUC10") > -1 || aucAuth.indexOf("AUC11") > -1) && sellerCertYn == 'N'){
            $(location).attr('href', '/limit');
        }

        var userId = $('#userNm').val();
        console.log('userId =' +userId);

        if(!!userId){
            $.ajax({
                type: 'POST',
                url: '/common/get-proxy-auth',
                success: function(data){
                    if(data.authProxy){
                        //location.href= data.buyerServerUrl + '/'+target+'Auction?token=' + data.token
                        location.href= data.buyerServerUrl + '/'+target+'Auction/detail-' + proxyNo + '?token=' + data.token;
                    }else{
                        modalPopup('.vipMsgPop');
                    }
                },
                error: function(e){
                    alert('A temporary error has occurred. Please try again later.');
                    location.href="/login"
                }
            })
        }else{
            location.href="/login"
        }
    }

	, fnVideoList: function(){
		let language = $('#i_sLangCd').val();

		$.ajax({
			url: '/main/get-video-list',
			type: 'post',
			dataType: 'json',
			data: {
				language: language
			},
			success: function (data) {
				if (data.code > -1) {
					let innerHtml = "";

					let firstRow = data.list[0];

					$("#maxScreen").attr("src", "https://www.youtube.com/embed/" + firstRow.videoId + "?autoplay=1&mute=1");
					$("#maxScreenTxt").html(firstRow.title);

					for(let row of data.list){

						let onOff = (row.sort == 1) ? 'on' : 'off';

						innerHtml += `<li class="` + onOff + `" data-url="` + row.videoId + `">
				                        <img src="http://img.youtube.com/vi/` + row.videoId + `/2.jpg"/>
				                        <span>` + row.title + `</span>
				                      </li> \n`
					}
					$("#videoList").html($("#videoList").html() + innerHtml);
				}
			}
		})

	},

    fnMaxBidBuyerNotice : function() {

        let auth = $('input[name=i_sAuthList]').val();

        if (auth.indexOf("AUC22") > -1 || auth.indexOf("AUC23") > -1 || auth.indexOf("AUC25") > -1 || auth.indexOf("AUC30") > -1) {

            let userCd = $('input[name=i_sAuctionUserCd]').val();

            $.ajax({
                url: '/main/buyer-max-bids-info',
                type: 'GET',
                dataType: 'json',
                data: {
                    userCd: userCd
                },
                success: function (data) {

                    if (data.flagMax && data.isNotice) {
                        $('#preAuctionSeq').text(data.preAuctionSeq + "ì°¨ ê²½ë§¤");
                        $('#bidsCnt').text(data.maxBidsCnt);

                        modalPopup(".buyerConfirmPop");
                    }
                }
            })
        }
    }

    , fnDrawCalender : function(e) {
        // mainSchedule
        $.ajax({
            url: '/main/get-auction-schedule',
            type: 'GET',
            dataType: 'json',
            data: {
            },
            success: function (data) {
                let dateList = data.date;
                let scheduleList = data.list;

                let innerHtml = '';

                let template =
                    '<li class="{{isToday}} {{isExist}}">\n' +
                    '   <dl>\n' +
                    '       <dt>{{date}}</dt>\n' +
                    '       <dd>\n' +
                    '           {{auctionList}}\n' +
                    '       </dd>\n' +
                    '   </dl>\n' +
                    '</li>';

                let todayProxyLinks = '';

                for (let i = 0; i < 10; i++) {
                    let map = dateList[i];
                    let tempTemplate = template;
                    let isToday = '';
                    let proxyDate = map.date+' '+map.day;
                    let isExist = '';
                    let auctionList = '';

                    if (map.isToday == 'P') {
                        isToday = 'off';
                    } else if (map.isToday == 'Y') {
                        isToday = 'on';
                    }

                    if (map.date in scheduleList) {

                        let sellerList = scheduleList[map.date];

                        for (let i2 = 0; i2 < sellerList.length; i2++) {

                            if (map.isToday == 'Y' && map.date == sellerList[i2].BID_END_DTM) {
                                let proxyType = (sellerList[i2].REG_SOURCE == 'RENTAL') ? 'Rental' : (sellerList[i2].REG_SOURCE == 'LOCAL') ? 'LOCAL': 'LIVE';

                                todayProxyLinks += '<button type="button" onclick="mainshow.switchProxy(\'' + sellerList[i2].REG_SOURCE.toLowerCase() + '\',\'' + map.date + '\')">' + proxyType + ' Auction - ' + sellerList[i2].SELLER_NAME + ' (' + sellerList[i2].COUNT + ')</button>';
                            }

                            auctionList += '<a href="javascript:;" onclick="mainshow.switchProxy(\'' + sellerList[i2].REG_SOURCE.toLowerCase() + '\',\'' + sellerList[i2].BID_END_DTM + '\')">' + sellerList[i2].SELLER_NAME + '(' + common.StringUtil.fnSetCommas(sellerList[i2].COUNT)  + ') </a>\n';
                        }
                    } else {
                        isExist = 'none';
                    }

                    tempTemplate = common.StringUtil.fnReplaceAll(tempTemplate, '{{isToday}}', isToday);
                    tempTemplate = common.StringUtil.fnReplaceAll(tempTemplate, '{{isExist}}', isExist);
                    tempTemplate = common.StringUtil.fnReplaceAll(tempTemplate, '{{date}}', proxyDate);
                    tempTemplate = common.StringUtil.fnReplaceAll(tempTemplate, '{{auctionList}}', auctionList);

                    innerHtml += tempTemplate;
                }

                if (todayProxyLinks == '') {
                    $('.todayAuc').hide();
                } else {
                    $('.todayAuc').show();
                    $('.btnLink').html(todayProxyLinks);
                }

                $('#mainSchedule').html(innerHtml);
            }
        })
    }

    , switchProxy : function(target, deadLine) {
        let userId = $('#userNm').val();
        let conversionDeadLine = deadLine.replaceAll('.', '-');

        if(target == 'live'){
            if(!!userId){
                $.ajax({
                    type: 'POST',
                    url: '/common/get-proxy-auth',
                    success: function(data){
                        if(data.authProxy){
                            location.href= data.buyerServerUrl + '/'+target+'Auction?token=' + data.token + '&deadline=' + conversionDeadLine;
                        }else{
                            modalPopup('.vipMsgPop');
                        }
                    },
                    error: function(e){
                        alert('A temporary error has occurred. Please try again later.');
                        location.href="/login"
                    }
                })
            }else{
                location.href= '/entry/carsale/get-carsale-pc-list-on';
            }
        }else{
            if(!!userId){
                $.ajax({
                    type: 'POST',
                    url: '/common/get-proxy-auth',
                    success: function(data){
                        if(data.authProxy){
                            location.href= data.buyerServerUrl + '/'+target+'Auction?token=' + data.token + '&deadline=' + conversionDeadLine;
                        }else{
                            modalPopup('.vipMsgPop');
                        }
                    },
                    error: function(e){
                        alert('A temporary error has occurred. Please try again later.');
                        location.href="/login"
                    }
                })
            }else{
                location.href="/login"
            }
        }


    }
}