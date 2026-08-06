export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span className="footer-brand">ALOVHAITI</span>
        <span className="footer-note">
          © {new Date().getFullYear()} ALOVHAITI — Sensibilisation à la santé bucco-dentaire.
        </span>
      </div>
    </footer>
  );
}
