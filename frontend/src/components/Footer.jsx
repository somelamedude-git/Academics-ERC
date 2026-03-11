import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const { pathname } = useLocation();
  const year = new Date().getFullYear();

  const isStudent = pathname.startsWith("/student");
  const isFaculty = pathname.startsWith("/faculty");
  const isAdmin = pathname.startsWith("/admin");
  const roleLinks = isStudent
    ? [
        { label: "Dashboard", to: "/student/dashboard" },
        { label: "Assignments", to: "/student/assignments" },
        { label: "Timetable", to: "/student/timetable" },
      ]
    : isFaculty
      ? [
          { label: "Dashboard", to: "/faculty/dashboard" },
          { label: "Upload Assignment", to: "/faculty/upload" },
        ]
      : isAdmin
        ? [
            { label: "Dashboard", to: "/admin/dashboard" },
            { label: "Manage Users", to: "/admin/manage-users" },
          ]
        : [{ label: "Home", to: "/" }];

  return (
    <footer className="app-footer">
      <div className="app-footer__inner">
        <section className="app-footer__grid" aria-label="Footer details">
          <div className="app-footer__block">
          
           
            <p className="app-footer__address">Indian Institute of Information Technology Gwalior, Madhya Pradesh, India</p>
          </div>

          <div className="app-footer__block">
            <h4>Quick Links</h4>
            <ul>
              {roleLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="app-footer__block">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="mailto:support@classroom.local">Support Email</a>
              </li>
              <li>
                <a href="tel:+911234567890">Contact Desk</a>
              </li>
              <li>
                <a href="#faq">FAQs</a>
              </li>
              <li>
                <a href="#guides">User Guides</a>
              </li>
            </ul>
          </div>

          <div className="app-footer__block">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms of Use</a>
              </li>
              <li>
                <a href="#security">Security</a>
              </li>
            </ul>
          </div>
        </section>

        <div className="app-footer__bottom">
          <p className="app-footer__copy">© {year} IIIT Gwalior. All rights reserved.</p>
          <p className="app-footer__hours">Support Hours: Mon-Fri, 9:00 AM to 6:00 PM IST</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
