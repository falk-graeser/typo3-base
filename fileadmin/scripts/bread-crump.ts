lib.breadcrumb=COA
lib.breadcrumb {
    10 = HMENU
    10 {
        special = rootline
        #special.range = 0|-1
        # "not in menu pages" should show up in the breadcrumbs menu
        includeNotInMenu = 1
        1 = TMENU
        1 {
            noBlur = 1
            # Current item should be unlinked
            target = _self
            wrap = <div class="menu_breadcrumb menu_ul"><ul> | </ul></div>
            NO {
                stdWrap.field = title
                ATagTitle.field = nav_title // title
                linkWrap = <li>|</li><li>&gt;</li>|*|<li>|</li><li>&gt;</li>|*|<li>|</li>
            }
            # Current menu item is unlinked
            CUR = 1
            CUR < .NO
        }
    }
}
