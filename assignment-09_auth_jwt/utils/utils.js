function cors(req, res) {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}
function helmet(req, res) {
  res.setHeader("X-Frame-Options", "DENY");

  res.setHeader("X-Content-Type-Options", "nosniff");

  res.setHeader("X-UA-Compatible", "IE=edge");

  res.setHeader("Content-Security-Policy", "default-src 'self'");

  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );

  res.setHeader("X-XSS-Protection", "1; mode=block");

  res.setHeader("X-DNS-Prefetch-Control", "off");

  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
}

module.exports = { cors, helmet };
