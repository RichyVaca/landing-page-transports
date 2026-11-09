import { useEffect, useState } from "react";
import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";
import { contactLink, navLinks } from "../data/navigation";
import { contactInfo, whatsappHref } from "../data/contact";
import logo from "../assets/logo.png";
import logoLight from "../assets/logo-light.png";

const SECTION_IDS = [...navLinks.map((link) => link.id), contactLink.id];

const useActiveSection = () => {
  const [active, setActive] = useState(SECTION_IDS[0]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-42% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return active;
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const solid = scrolled || isOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);

    if (!isOpen) {
      return () => document.body.classList.remove("nav-open");
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("nav-open");
    };
  }, [isOpen]);

  const closeNav = () => setIsOpen(false);

  return (
    <MDBNavbar
      fixed="top"
      expand="lg"
      aria-label="Navegación principal"
      className={`mv-navbar ${solid ? "mv-navbar--solid" : "mv-navbar--transparent"}`}
    >
      <MDBContainer>
        <MDBNavbarBrand
          href="#inicio"
          className="mv-brand"
          onClick={closeNav}
          aria-label="Transportes MORVAC, ir al inicio"
        >
          <img
            src={solid ? logo : logoLight}
            width="256"
            height="256"
            alt=""
            decoding="async"
          />
          <span>
            MORVAC
            <small>Transports</small>
          </span>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          type="button"
          aria-expanded={isOpen}
          aria-controls="mv-navigation"
          aria-label={isOpen ? "Cerrar navegación" : "Abrir navegación"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <MDBIcon fas icon={isOpen ? "xmark" : "bars"} />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={isOpen} id="mv-navigation">
          <div className="w-100">
            <MDBNavbarNav
              fullWidth={false}
              className="ms-auto align-items-lg-center"
            >
              {navLinks.map(({ id, label }) => (
                <MDBNavbarItem key={id}>
                  <MDBNavbarLink
                    href={`#${id}`}
                    className={active === id ? "active" : ""}
                    aria-current={active === id ? "location" : undefined}
                    onClick={closeNav}
                  >
                    {label}
                  </MDBNavbarLink>
                </MDBNavbarItem>
              ))}
              <MDBNavbarItem className="d-flex">
                <a
                  href={`#${contactLink.id}`}
                  className="btn btn-accent rounded-pill px-4 mv-nav-cta"
                  onClick={closeNav}
                >
                  {contactLink.label}
                  <MDBIcon fas icon="arrow-right" className="ms-2" />
                </a>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <div className="mv-nav-quick">
              <a
                href={contactInfo.phoneHref}
                className="btn btn-outline-ink rounded-pill"
              >
                <MDBIcon fas icon="phone" className="me-2" />
                Llamar
              </a>
              <a
                href={whatsappHref}
                className="btn btn-accent rounded-pill"
                target="_blank"
                rel="noreferrer"
              >
                <MDBIcon fas icon="comment-dots" className="me-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
