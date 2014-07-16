page = PAGE
page.typeNum = 0

page.10 = FLUIDTEMPLATE
page {
    10 {
        format = fluid.html
        file = {$paths.templates}/layouts/layout.fluid.html
        partialRootPath = {$paths.templates}/partials/
        layoutRootPath = {$paths.templates}/layouts/
        
        variables {
            content_main < styles.content.get
            content_main.select.where = colPos = 0
        }
        
        file.stdWrap.cObject = CASE
        file.stdWrap.cObject {
            key.data = levelfield:-1, backend_layout_next_level, slide
            key.override.field = backend_layout
            
            default = TEXT
            default.value = {$paths.templates}/default-layout.fluid.html
            1 = TEXT
            1.value = {$paths.templates}/special-layout.fluid.html
        }
    }
    # includeCss needs to be after the 'page layers'
    includeCSS {
        file1 = {$paths.templates}/css/main.css
    }
}

lib.header_top_right = HTML
lib.header_top_right.value {
    wrap = <div class="pagetitle">|</div>
    data = page : title
}
