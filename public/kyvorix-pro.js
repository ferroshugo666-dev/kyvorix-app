"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ========================================================
       MOBILE MENU
       ======================================================== */

    const header = document.querySelector(".site-header");
    const nav = header?.querySelector("nav");

    if (header && nav && !document.getElementById("kxMobileMenu")) {

        const button = document.createElement("button");

        button.id = "kxMobileMenu";
        button.type = "button";
        button.setAttribute("aria-label", "Open menu");
        button.setAttribute("aria-expanded", "false");

        button.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        Object.assign(button.style, {
            display: "none",
            width: "42px",
            height: "42px",
            border: "1px solid #e1e4e8",
            borderRadius: "11px",
            background: "#fff",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "4px"
        });

        button.querySelectorAll("span").forEach((span) => {
            Object.assign(span.style, {
                width: "17px",
                height: "2px",
                borderRadius: "4px",
                background: "#111318",
                display: "block"
            });
        });

        header.querySelector(".nav")?.appendChild(button);

        const style = document.createElement("style");

        style.textContent = `
            @media (max-width:700px) {
                #kxMobileMenu {
                    display:flex !important;
                }

                .site-header nav.kx-open {
                    display:flex !important;
                    position:absolute;
                    left:14px;
                    right:14px;
                    top:60px;
                    padding:10px;
                    flex-direction:column;
                    align-items:stretch;
                    background:#fff;
                    border:1px solid #e1e4e8;
                    border-radius:14px;
                    box-shadow:0 18px 45px rgba(17,19,24,.12);
                }

                .site-header nav.kx-open a {
                    padding:12px 14px;
                }
            }
        `;

        document.head.appendChild(style);

        button.addEventListener("click", () => {

            const open = nav.classList.toggle("kx-open");

            button.setAttribute("aria-expanded", String(open));

        });

        nav.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("kx-open");

                button.setAttribute("aria-expanded", "false");

            });

        });
    }

    /* ========================================================
       BETTER SEARCH
       ======================================================== */

    const search = document.getElementById("toolSearch");

    if (search) {

        search.addEventListener("input", () => {

            const value = search.value.trim();

            if (value.length > 0) {
                search.setAttribute("aria-label", `Searching for ${value}`);
            } else {
                search.setAttribute("aria-label", "Search Kyvorix tools");
            }

        });
    }

    /* ========================================================
       TOOL CARD MICRO INTERACTION
       ======================================================== */

    document.querySelectorAll(".tool-card").forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.style.setProperty("--kx-hover", "1");

        });

        card.addEventListener("mouseleave", () => {

            card.style.setProperty("--kx-hover", "0");

        });

    });

    /* ========================================================
       TRACK TOOL OPENING
       ======================================================== */

    document.querySelectorAll(".tool-card[href]").forEach((card) => {

        card.addEventListener("click", () => {

            try {

                const href = card.getAttribute("href");

                if (!href) return;

                const recent = JSON.parse(
                    localStorage.getItem("kyvorix_recent_tools_v2") || "[]"
                );

                const clean = recent.filter((item) => {

                    const itemHref =
                        typeof item === "string"
                            ? item
                            : item?.href;

                    return itemHref !== href;

                });

                clean.unshift({
                    href,
                    name:
                        card.querySelector("h3")?.textContent?.trim() ||
                        card.dataset.tool ||
                        "Kyvorix tool"
                });

                localStorage.setItem(
                    "kyvorix_recent_tools_v2",
                    JSON.stringify(clean.slice(0, 6))
                );

            } catch (_) {}

        });

    });

    /* ========================================================
       SCROLL TO TOOLS
       ======================================================== */

    document.querySelectorAll('a[href="#tools"]').forEach((link) => {

        link.addEventListener("click", () => {

            setTimeout(() => {

                document.getElementById("toolSearch")?.focus();

            }, 450);

        });

    });

});
