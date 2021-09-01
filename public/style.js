window.onload = function () {
    var width = $(window).width();
    jQuery(document).ready(function ($) {
        var num = $(".nav_li ul li").length;
        for (var i = 0; i <= 100; i++) {
            $(".nav_li ul").after('<div class="a" id="a' + i + '"></div>');
        }
        change();

        function change() {
            for (var i = 0; i <= 100; i++) {
                var top = parseInt(150 * Math.random());
                var left = parseInt(width * Math.random());
                var right = parseInt(250 * Math.random());
                var bottom = parseInt(250 * Math.random());
                var transform = parseInt(260 * Math.random());
                $("#a" + i).css({
                    transform: 'rotate(' + transform + 'deg)',
                    top: top,
                    left: left,
                    right: right,
                    bottom: bottom,
                    transition: '0.5s',
                    width: i / 40 + 'px',
                    height: i / 40 + 'px',
                    background: "rgba(40,122,158,1)" + i / 200 + ")"
                });
            }
        }
        var nav_li = $(".nav_li ul li");
        var nav = nav_li.offset();
        $(".nav_li ul li").hover(function () {
            //console.log(x+","+y);
            a = $(this).find("a").offset();
            b = $(this).next().find("a").offset();
            wid = $(this).width();
            for (var i = 0; i <= 200; i++) {
                if (i <= wid / 2) {
                    $("#a" + i).css({
                        transform: 'rotate(0deg)',
                        top: a.top + 26,
                        left: a.left + (i * 2),
                        right: 0,
                        bottom: 0,
                        width: '2px',
                        height: '0.5px',
                        background: "rgba(40,122,158,1)"
                    });
                } else {
                    $("#a" + i).css({
                        transform: 'rotate(0deg)',
                        top: a.top + 27,
                        left: a.left + ((i - wid / 2 - 1) * 2),
                        right: 0,
                        bottom: 0,
                        width: '4px',
                        height: '0.5px',
                        background: "rgba(33, 93, 148,1)"
                    });
                }
            }
        }, function () {
            change();
        });
    });



    function secondToDate(second) {
        if (!second) {
            return 0;
        }
        var time = new Array(0, 0, 0, 0, 0);
        if (second >= 365 * 24 * 3600) {
            time[0] = parseInt(second / (365 * 24 * 3600));
            second %= 365 * 24 * 3600;
        }
        if (second >= 24 * 3600) {
            time[1] = parseInt(second / (24 * 3600));
            second %= 24 * 3600;
        }
        if (second >= 3600) {
            time[2] = parseInt(second / 3600);
            second %= 3600;
        }
        if (second >= 60) {
            time[3] = parseInt(second / 60);
            second %= 60;
        }
        if (second > 0) {
            time[4] = second;
        }
        return time;
    }

    function setTime() {
        var create_time = Math.round(new Date(Date.UTC(2021, 8, 00, 00, 00, 00)).getTime() / 1000);
        var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
        currentTime = secondToDate((timestamp - create_time));
        currentTimeHtml = 'Mr.zhang 的博客已经运行了：' + currentTime[0] + '年 ' + currentTime[1] + '天 ' +
            currentTime[2] + '时 ' + currentTime[3] + '分 ' + currentTime[4] +
            '秒';
        document.getElementById("htmer_time").innerHTML = currentTimeHtml;
    }
    setInterval(setTime, 1000);




// 图片放大缩小

    !function (a) { Zoomify = function (b, c) { var d = this; this._zooming = !1, this._zoomed = !1, this._timeout = null, this.$shadow = null, this.$image = a(b).addClass("zoomify"), this.options = a.extend({}, Zoomify.DEFAULTS, this.$image.data(), c), this.$image.on("click", function () { d.zoom() }), a(window).on("resize", function () { d.reposition() }), a(document).on("scroll", function () { d.reposition() }) }, Zoomify.DEFAULTS = { duration: 200, easing: "linear", scale: .9 }, Zoomify.prototype.transition = function (a, b) { a.css({ "-webkit-transition": b, "-moz-transition": b, "-ms-transition": b, "-o-transition": b, transition: b }) }, Zoomify.prototype.addTransition = function (a) { this.transition(a, "all " + this.options.duration + "ms " + this.options.easing) }, Zoomify.prototype.removeTransition = function (b, c) { var d = this; clearTimeout(this._timeout), this._timeout = setTimeout(function () { d.transition(b, ""), a.isFunction(c) && c.call(d) }, this.options.duration) }, Zoomify.prototype.transform = function (a) { this.$image.css({ "-webkit-transform": a, "-moz-transform": a, "-ms-transform": a, "-o-transform": a, transform: a }) }, Zoomify.prototype.transformScaleAndTranslate = function (a, b, c, d) { this.addTransition(this.$image), this.transform("scale(" + a + ") translate(" + b + "px, " + c + "px)"), this.removeTransition(this.$image, d) }, Zoomify.prototype.zoom = function () { this._zooming || (this._zoomed ? this.zoomOut() : this.zoomIn()) }, Zoomify.prototype.zoomIn = function () { var b = this, c = this.$image.css("transform"); this.transition(this.$image, "none"), this.transform("none"); var d = this.$image.offset(), e = this.$image.outerWidth(), f = this.$image.outerHeight(), g = this.$image[0].naturalWidth || +(1 / 0), h = this.$image[0].naturalHeight || +(1 / 0), i = a(window).width(), j = a(window).height(), k = Math.min(g, i * this.options.scale) / e, l = Math.min(h, j * this.options.scale) / f, m = Math.min(k, l), n = (-d.left + (i - e) / 2) / m, o = (-d.top + (j - f) / 2 + a(document).scrollTop()) / m; this.transform(c), this._zooming = !0, this.$image.addClass("zoomed").trigger("zoom-in.zoomify"), setTimeout(function () { b.addShadow(), b.transformScaleAndTranslate(m, n, o, function () { b._zooming = !1, b.$image.trigger("zoom-in-complete.zoomify") }), b._zoomed = !0 }) }, Zoomify.prototype.zoomOut = function () { var a = this; this._zooming = !0, this.$image.trigger("zoom-out.zoomify"), this.transformScaleAndTranslate(1, 0, 0, function () { a._zooming = !1, a.$image.removeClass("zoomed").trigger("zoom-out-complete.zoomify") }), this.removeShadow(), this._zoomed = !1 }, Zoomify.prototype.reposition = function () { this._zoomed && (this.transition(this.$image, "none"), this.zoomIn()) }, Zoomify.prototype.addShadow = function () { var b = this; this._zoomed || (b.$shadow && b.$shadow.remove(), this.$shadow = a('<div class="zoomify-shadow"></div>'), a("body").append(this.$shadow), this.addTransition(this.$shadow), this.$shadow.on("click", function () { b.zoomOut() }), setTimeout(function () { b.$shadow.addClass("zoomed") }, 10)) }, Zoomify.prototype.removeShadow = function () { var a = this; this.$shadow && (this.addTransition(this.$shadow), this.$shadow.removeClass("zoomed"), this.$image.one("zoom-out-complete.zoomify", function () { a.$shadow && a.$shadow.remove(), a.$shadow = null })) }, a.fn.zoomify = function (b) { return this.each(function () { var c = a(this), d = c.data("zoomify"); d || c.data("zoomify", d = new Zoomify(this, "object" == typeof b && b)), "string" == typeof b && ["zoom", "zoomIn", "zoomOut", "reposition"].indexOf(b) >= 0 && d[b]() }) } }(jQuery);

    (function ($) {

        // initialization
        Zoomify = function (element, options) {
            var that = this;

            this._zooming = false;
            this._zoomed = false;
            this._timeout = null;
            this.$shadow = null;
            this.$image = $(element).addClass('zoomify');
            this.options = $.extend({}, Zoomify.DEFAULTS, this.$image.data(), options);

            this.$image.on('click', function () { that.zoom(); });
            $(window).on('resize', function () { that.reposition(); });
            $(document).on('scroll', function () { that.reposition(); });
        };
        Zoomify.DEFAULTS = {
            duration: 200,
            easing: 'linear',
            scale: 0.9
        };

        // css utilities
        Zoomify.prototype.transition = function ($element, value) {
            $element.css({
                '-webkit-transition': value,
                '-moz-transition': value,
                '-ms-transition': value,
                '-o-transition': value,
                'transition': value
            });
        };
        Zoomify.prototype.addTransition = function ($element) {
            this.transition($element, 'all ' + this.options.duration + 'ms ' + this.options.easing);
        };
        Zoomify.prototype.removeTransition = function ($element, callback) {
            var that = this;

            clearTimeout(this._timeout);
            this._timeout = setTimeout(function () {
                that.transition($element, '');
                if ($.isFunction(callback)) callback.call(that);
            }, this.options.duration);
        };
        Zoomify.prototype.transform = function (value) {
            this.$image.css({
                '-webkit-transform': value,
                '-moz-transform': value,
                '-ms-transform': value,
                '-o-transform': value,
                'transform': value
            });
        };
        Zoomify.prototype.transformScaleAndTranslate = function (scale, translateX, translateY, callback) {
            this.addTransition(this.$image);
            this.transform('scale(' + scale + ') translate(' + translateX + 'px, ' + translateY + 'px)');
            this.removeTransition(this.$image, callback);
        };

        // zooming functions
        Zoomify.prototype.zoom = function () {
            if (this._zooming) return;

            if (this._zoomed) this.zoomOut();
            else this.zoomIn();
        };
        Zoomify.prototype.zoomIn = function () {
            var that = this,
                transform = this.$image.css('transform');

            this.transition(this.$image, 'none');
            this.transform('none');

            var offset = this.$image.offset(),
                width = this.$image.outerWidth(),
                height = this.$image.outerHeight(),
                nWidth = this.$image[0].naturalWidth || +Infinity,
                nHeight = this.$image[0].naturalHeight || +Infinity,
                wWidth = $(window).width(),
                wHeight = $(window).height(),
                scaleX = Math.min(nWidth, wWidth * this.options.scale) / width,
                scaleY = Math.min(nHeight, wHeight * this.options.scale) / height,
                scale = Math.min(scaleX, scaleY),
                translateX = (-offset.left + (wWidth - width) / 2) / scale,
                translateY = (-offset.top + (wHeight - height) / 2 + $(document).scrollTop()) / scale;

            this.transform(transform);

            this._zooming = true;
            this.$image.addClass('zoomed').trigger('zoom-in.zoomify');
            setTimeout(function () {
                that.addShadow();
                that.transformScaleAndTranslate(scale, translateX, translateY, function () {
                    that._zooming = false;
                    that.$image.trigger('zoom-in-complete.zoomify');
                });
                that._zoomed = true;
            });
        };
        Zoomify.prototype.zoomOut = function () {
            var that = this;

            this._zooming = true;
            this.$image.trigger('zoom-out.zoomify');
            this.transformScaleAndTranslate(1, 0, 0, function () {
                that._zooming = false;
                that.$image.removeClass('zoomed').trigger('zoom-out-complete.zoomify');
            });
            this.removeShadow();
            this._zoomed = false;
        };

        // page listener callbacks
        Zoomify.prototype.reposition = function () {
            if (this._zoomed) {
                this.transition(this.$image, 'none');
                this.zoomIn();
            }
        };

        // shadow background
        Zoomify.prototype.addShadow = function () {
            var that = this;
            if (this._zoomed) return;

            if (that.$shadow) that.$shadow.remove();
            this.$shadow = $('<div class="zoomify-shadow"></div>');
            $('body').append(this.$shadow);
            this.addTransition(this.$shadow);
            this.$shadow.on('click', function () { that.zoomOut(); })

            setTimeout(function () { that.$shadow.addClass('zoomed'); }, 10);
        };
        Zoomify.prototype.removeShadow = function () {
            var that = this;
            if (!this.$shadow) return;

            this.addTransition(this.$shadow);
            this.$shadow.removeClass('zoomed');
            this.$image.one('zoom-out-complete.zoomify', function () {
                if (that.$shadow) that.$shadow.remove();
                that.$shadow = null;
            });
        };

        // plugin definition
        $.fn.zoomify = function (option) {
            return this.each(function () {
                var $this = $(this),
                    zoomify = $this.data('zoomify');

                if (!zoomify) $this.data('zoomify', (zoomify = new Zoomify(this, typeof option == 'object' && option)));
                if (typeof option == 'string' && ['zoom', 'zoomIn', 'zoomOut', 'reposition'].indexOf(option) >= 0) zoomify[option]();
            });
        };

    })(jQuery);
    $(".example img").zoomify();
}