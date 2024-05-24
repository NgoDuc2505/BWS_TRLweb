export default function headerHandler() {
    "use strict";
    function e() {
        let e, t, a, s, n = document.querySelector(".visme-menu"), 
        c = document.querySelectorAll(".v-megamenu"), 
        o = document.querySelectorAll(".v-megamenu-section"), 
        i = document.querySelectorAll(".v-parent-menu-item"), 
        l = document.querySelectorAll(".v-megamenu-label"), 
        r = document.querySelectorAll(".v-megamenu-tab"), 
        v = document.querySelectorAll(".v-megamenu-tab-menu"), 
        m = document.querySelector(".v-toggle"), 
        u = window.matchMedia("(min-width: 1280px)");
        function d(e) {
            e.matches ? (document.querySelector(".visme-menu").addEventListener("mouseleave", L),
            c.forEach(e=>e.addEventListener("mouseleave", L))) : (document.querySelector(".visme-menu").removeEventListener("mouseleave", L),
            c.forEach(e=>e.removeEventListener("mouseleave", L)))
        }
        function L() {
            clearTimeout(t),
            clearTimeout(a),
            a = setTimeout(()=>p(), 150)
        }
        function g(e) {
            e.matches ? (i.forEach(e=>{
                e.querySelector(".v-parent-menu-link").addEventListener("mouseover", h)
            }
            ),
            c.forEach(e=>e.addEventListener("mouseover", E))) : (i.forEach(e=>{
                e.querySelector(".v-parent-menu-link").removeEventListener("mouseover", h)
            }
            ),
            c.forEach(e=>e.removeEventListener("mouseover", E)))
        }
        function E() {
            clearTimeout(a)
        }
        function f(e) {
            r.forEach(e=>{
                e.classList.remove("v-megamenu-tab-active"),
                e.parentElement.classList.remove("v-col-active")
            }
            ),
            v.forEach(e=>e.classList.remove("v-megamenu-tab-menu-active")),
            e && (o.forEach(e=>e.classList.remove("v-megamenu-section-active")),
            n.classList.remove("v-level"))
        }
        function h(e) {
            clearTimeout(a),
            e.target.parentElement.classList.contains("v-has-menu") && e.preventDefault(),
            "click" == e.type && e.target.closest(".v-has-menu").classList.contains("v-active") ? (u.matches || p(),
            n.classList.contains("v-megamenu-transition") || p()) : "click" == e.type || n.classList.contains("v-megamenu-opened") ? y(e.target.closest(".v-has-menu")) : t = setTimeout(()=>y(e.target.closest(".v-has-menu")), 150),
            f(!0);
            let s = e.target.parentElement.querySelectorAll(".v-icon");
            s && s.forEach(e=>{
                e.dataset.icon && (e.style.backgroundImage = "url(" + e.dataset.icon + ")",
                delete e.dataset.icon)
            }
            );
            let c = e.target.parentElement.querySelectorAll(".v-thumb");
            c && c.forEach(e=>{
                e.dataset.thumb && (e.style.backgroundImage = "url(" + e.dataset.thumb + ")",
                setTimeout(()=>e.classList.add("loaded"), 100),
                e.src = e.dataset.thumb,
                delete e.dataset.thumb)
            }
            ),
            setTimeout(()=>document.querySelector(".v-nav").scrollTo(0, 0), 1)
        }
        function y(e) {
            e ? (t && clearTimeout(t),
            t = setTimeout(()=>{
                n.classList.add("v-megamenu-opened"),
                u.matches ? n.classList.add("v-megamenu-transition") : e.classList.add("v-active")
            }
            , 1),
            u.matches && (e.classList.add("v-active"),
            setTimeout(()=>n.classList.remove("v-megamenu-transition"), 150))) : n.classList.remove("v-megamenu-opened"),
            i.forEach(t=>e != t ? t.classList.remove("v-active") : null)
        }
        function p() {
            i.forEach(e=>e.classList.remove("v-active")),
            n.classList.remove("v-megamenu-opened"),
            f(!0)
        }
        function q(e) {
            o.forEach(e=>e.classList.remove("v-megamenu-section-active")),
            r.forEach(e=>{
                e.classList.remove("v-megamenu-tab-active"),
                e.parentElement.classList.remove("v-col-active")
            }
            ),
            n.classList.contains("v-level") ? n.classList.remove("v-level") : (n.classList.add("v-level"),
            e.currentTarget.closest(".v-megamenu-section").classList.add("v-megamenu-section-active")),
            setTimeout(()=>document.querySelector(".v-nav").scrollTo(0, 0), 1)
        }
        function S(e) {
            window.matchMedia("(min-width: 768px)").matches || (e.preventDefault(),
            e.currentTarget.classList.contains("v-megamenu-tab-active") ? e.currentTarget.classList.remove("v-megamenu-tab-active") : (f(!1),
            e.currentTarget.classList.add("v-megamenu-tab-active"),
            e.currentTarget.parentElement.classList.add("v-col-active"),
            e.currentTarget.parentElement.querySelector(".v-megamenu-tab-menu").classList.add("v-megamenu-tab-menu-active")),
            n.classList.contains("v-level") ? n.classList.remove("v-level") : (n.classList.add("v-level"),
            e.currentTarget.closest(".v-megamenu-section").classList.add("v-megamenu-section-active")),
            setTimeout(()=>document.querySelector(".v-nav").scrollTo(0, 0), 1))
        }
        u.addEventListener("change", function() {
            g(u),
            d(u)
        }),
        i.forEach(e=>{
            e.querySelector(".v-parent-menu-link").addEventListener("click", h, !1),
            g(u)
        }
        ),
        l.forEach(e=>{
            e.addEventListener("click", q, !1)
        }
        ),
        r.forEach(e=>{
            e.addEventListener("click", S, !1)
        }
        ),
        m.addEventListener("click", function e() {
            m.classList.contains("v-toggle-opened") ? (m.classList.remove("v-toggle-opened"),
            n.classList.remove("v-menu-opening"),
            n.classList.add("v-menu-closing"),
            clearTimeout(t),
            t = setTimeout(()=>{
                document.querySelector(".v-nav").classList.remove("v-nav-active"),
                document.body.classList.remove("v-body-overflow"),
                n.classList.remove("v-menu-closing"),
                n.classList.remove("v-menu-opened")
            }
            , 150)) : (m.classList.add("v-toggle-opened"),
            n.classList.remove("v-menu-closing"),
            n.classList.add("v-menu-opening"),
            document.querySelector(".v-nav").classList.add("v-nav-active"),
            clearTimeout(t),
            t = setTimeout(()=>{
                n.classList.remove("v-menu-opening"),
                n.classList.add("v-menu-opened"),
                document.body.classList.add("v-body-overflow")
            }
            , 1))
        }, !1),
        d(u),
        document.addEventListener("click", function(e) {
            n.classList.contains("v-megamenu-opened") && !n.contains(e.target) && p()
        }, !1),
        document.addEventListener("keydown", function(e) {
            let t = !1;
            (t = "key"in e ? "Escape" === e.key || "Esc" === e.key : 27 === e.keyCode) && n.classList.contains("v-megamenu-opened") && p()
        }),
        (n.classList.contains("v-menu-sticky") || n.classList.contains("v-menu-fixed")) && (s = 1,
        n.classList.contains("v-menu-sticky") && document.querySelector("header").classList.add("v-sticky-header"),
        window.addEventListener("scroll", function(t) {
            e && window.cancelAnimationFrame(e),
            e = window.requestAnimationFrame(function() {
                window.scrollY > s ? setTimeout(()=>n.classList.add("v-compact"), 1) : n.classList.remove("v-compact")
            })
        }),
        window.scrollY > s ? setTimeout(()=>n.classList.add("v-compact"), 1) : n.classList.remove("v-compact")),
        document.querySelectorAll(".v-btn-primary").forEach(e=>e.addEventListener("click", e=>e.preventDefault(), !1)),
        c.forEach(e=>e.style = "")
    }
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", ()=>{
        e()
    }
    ) : e()
};