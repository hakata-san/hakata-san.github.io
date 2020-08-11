(function($){
    $(document).ready(function() {
        let $tabs = $('.tabs');
        $tabs.each(function () {
            let $container = $(this),
                $tabList = $container.find('.tab');
            $tabList.each(function(i,tab) {
                let $tab = $(tab),
                    $tabLabel = $tab.find('> h3'),
                    tabName = $tabLabel.text();
                $tabLabel.html('<a href="" class="tab-button">'+tabName+'</a>');
                $tabLabel.click(function (e) {
                    e.preventDefault();
                    console.log('clicked');
                    $tabList.removeClass('selected');
                    $tab.addClass('selected')
                });
                if (i == 0) $tab.addClass('selected');
            });
        });

    });
})(jQuery);