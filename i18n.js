const path = require("path")


module.exports = {
    locales: ["en-US", "am-AM", "ru-RU"],
    defaultLocale: "am-AM",
    localeDetection: false,
    pages: {
        "*": ["common", "header", "homePage", "footer", "about", "swiper", "storeItems"],
    }
};