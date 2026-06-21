import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { navItems } from "../data/siteContent";
import { ButtonLink } from "./ButtonLink";

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/" onClick={() => setIsOpen(false)}>
          <span className="brand-icon" aria-hidden="true">花</span>
          <span>量子轉念</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? "關閉選單" : "開啟選單"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`site-nav ${isOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
          <ButtonLink to="/quiz" variant="primary" eventName="nav_quiz_click">
            開始免費測驗
          </ButtonLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <Link className="footer-brand" to="/">
              <span className="brand-icon light" aria-hidden="true">花</span>
              <span>量子轉念</span>
            </Link>
            <p>看見潛意識印記，重新拿回生命的選擇權。</p>
          </div>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-note">
            <p>量子轉念引導不是醫療、不是通靈問事，也不是承諾神奇改變。</p>
            <p>Copyright © Quantum Shift. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
