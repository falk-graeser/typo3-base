lib.footer_left = COA
lib.footer_left {
    wrap = <div class="menu_footer menu_ul"><ul>|</ul></div>
    10 = TEXT
    10 {
        data = date:U
        strftime = %Y
        wrap = <li>&copy; 2011-|&nbsp;TYPO3Buddy</li><li>&#124;</li>
    }
    20 = HMENU
    20 {
        special = directory
        # special.value will contain the page ID of the Footer menu page
        special.value = 4
        1 = TMENU
        1 {
            target = _self
            NO {
                allWrap = <li>|</li><li>&#124;</li>|*|<li>|</li><li>&#124;</li>|*|<li>|</li>
                wrap = <div class="footer_no">|</div>
            }
        }
    }
}

lib.footer_right = TEXT
lib.footer_right.value (
    
)
