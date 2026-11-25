(() => {
  if (location.hostname !== "dueyama.github.io" || !location.pathname.startsWith("/r6s-openwrt-lab-notes/")) return;
  const cleanUrl = value => {
    if (!value) return "";
    try { const u = new URL(value); return u.origin + u.pathname; }
    catch { return ""; }
  };
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", "G-F05ZM2L7GZ", {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    page_location: cleanUrl(location.href),
    page_referrer: cleanUrl(document.referrer),
    cookie_flags: "SameSite=Lax;Secure"
  });
})();
