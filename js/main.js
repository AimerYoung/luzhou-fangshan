/**
 * 泸州方山景区 - 公共脚本
 */

(function () {
    'use strict';

    // 景点分类筛选（jingdian.html）
    var filters = document.querySelector('.filters');
    if (filters) {
        var buttons = filters.querySelectorAll('button');
        var items = document.querySelectorAll('.attraction-item');
        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                buttons.forEach(function (b) { b.classList.remove('active'); });
                this.classList.add('active');
                var tag = this.getAttribute('data-tag') || '';
                items.forEach(function (item) {
                    var itemTag = item.getAttribute('data-tag') || '';
                    var el = item.closest('.col') || item;
                    el.style.display = !tag || itemTag === tag ? '' : 'none';
                });
            });
        });
    }
})();
