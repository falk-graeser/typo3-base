lib.header_menu = COA
lib.header_menu {
    10 = HMENU
    10 {
        wrap = <div class="menu_header menu_ul">|</div>
        entryLevel = 0
        1 = TMENU
        1 {
            expAll = 1
            noBlur = 1
            wrap = <ul>|</ul>
            target = _top
            NO {
                stdWrap.htmlSpecialChars = 1
                wrapItemAndSub = <li>|</li>
                allWrap = <div class="menu_header_no">|</div>
            }
            ACT < .NO
            ACT = 1
            ACT {
                allWrap = <div class="menu_header_act">|</div>
            }
            IFSUB < .NO
            IFSUB = 1
            IFSUB {
                allWrap = <div class="menu_header_ifsub">|</div>
            }
            ACTIFSUB < .IFSUB
            ACTIFSUB = 1
            ACTIFSUB {
                allWrap = <div class="menu_header_actifsub">|</div>
            }
        }
        2 = TMENU
        2 {
            noBlur = 1
            wrap = <ul class="menu_sub">|</ul>
            target = _top
            NO {
                stdWrap.htmlSpecialChars = 1
                wrapItemAndSub = <li>|</li>
                allWrap = <div class="menu_sub_no">|</div>
            }
            CUR < .NO
            CUR = 1
            CUR {
                allWrap = <div class="menu_sub_act">|</div>
            }
            ACT < .CUR
            ACT = 1
        }
    }
}
