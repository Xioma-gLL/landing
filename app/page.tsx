import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import ScrollReveal from "./ScrollReveal";

const services = [
  ["Exodoncias", "Extracciones dentales seguras y sin dolor.", "M20 14c2 8 2 8 8 0 5 4 8 4 12 0 2 1 3 3 3s3-1 3-3c0-4 4-7 4-12 0-6-6-8-10-5"],
  ["Restauraciones", "Recuperamos la función y estética de tu diente.", "M7 4c4-3 6 1 8 0 3-1 7 0 7 6 0 4-3 6-4 11-1 5-6 5-7 0-1-5-4-6-9-1-5-4-7-4-11 0-4 2-6 4-6"],
  ["Ortodoncia", "Alineamos tu sonrisa con brackets modernos.", "M4 10h16M5 14h14M6 9v6m4-6v12m4-12v12m4-6v6"],
  ["Prótesis fijas", "Soluciones duraderas para tu sonrisa.", "M7 5c3-2 7-2 10 0 3 2 4 4 4 8H3c0-4 1-6 4-8Zm-2 8h14v5H5z"],
  ["Prótesis removibles", "Prótesis cómodas y adaptadas a ti.", "M4 11c5 4 11 4 16 0M5 13c1 5 4 7 7 7s6-2 7-7M8 12v5m4-4v5m4-5v4"],
  ["Carillas y coronas", "Mejora la estética de tu sonrisa.", "M8 5c3-2 5 1 6 4 1-3 3-6 6-4 3 1 4 5 2 8-1 2-3 3-5 2"],
];

const serviceIcons = ["extraction", "restoration", "braces", "fixed", "removable", "veneer"];
const whatsappUrl = "https://wa.me/51963622602";

const priceCards = [
  { title: "Exodoncias", rows: [["Exodoncia adultos simples", "S/ 50.00"], ["Exodoncia niños simples", "S/ 35.00"]] },
  { title: "Restauraciones", rows: [["Restauraciones simples", "S/ 35.00"], ["Restauraciones compuestas", "S/ 40.00 - S/ 50.00"]] },
  { title: "Prótesis fijas (puente)", rows: [["Por pieza", "S/ 300 - S/ 900 (3 piezas)"]] },
  { title: "Prótesis removible", subtitle: "(base metálica)", rows: [["Superior", "S/ 800"], ["Inferior", "S/ 900"], ["Total", "S/ 1000"]] },
  { title: "Prótesis totales", rows: [["Completa", "S/ 800"], ["Completa superior", "S/ 900"], ["Completa inferior", "S/ 1000"]] },
  { title: "Ortodoncia", rows: [["Brackets (instalación)", "S/ 500"], ["Mensualidad", "S/ 120"]] },
];

const otherServices = [
  ["Pernos metálicos", "S/ 150.00"],
  ["Pernos de fibra de vidrio", "S/ 100"],
  ["Coronas de porcelana", "S/ 300"],
  ["Carillas de resina", "S/ 150.00"],
  ["Carillas de zirconio / disilicato", "S/ 700"],
];

const carouselCards = [
  ...priceCards.map((card, index) => ({ ...card, icon: serviceIcons[index % serviceIcons.length] })),
  { title: "Otros servicios", rows: otherServices, icon: "veneer" },
];

const benefits = [
  ["Atención integral", "Cubrimos todas tus necesidades odontológicas."],
  ["Profesionales capacitados", "Equipo con experiencia y en constante actualización."],
  ["Tratamientos personalizados", "Planes adaptados a tus necesidades y objetivos."],
  ["Ambiente seguro y confiable", "Esterilización y protocolos para tu tranquilidad."],
];

const testimonials = [
  ["Excelente atención y muy profesionales. Me explicaron todo el tratamiento y quedé muy contenta con mi sonrisa.", "María Fernanda R."],
  ["Me hice mi prótesis y quedé súper cómodo. El trato es amable y los precios son justos.", "Carlos Alberto G."],
  ["Llevé a mi hijo y tuvo una experiencia muy buena. Recomendados al 100%.", "Lucía Valentina P."],
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Dental Namay">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <path d="M15 7c5-5 10 0 14 0 5 0 9-3 13 1 5 6 1 14-2 22-2 6-3 12-7 12-5 0-3-13-9-13s-4 13-9 13c-4 0-5-6-7-12C5 21 1 12 7 7c3-3 6-2 8 0Z" />
          <path d="M14 31 19 17l8 18 7-19" />
        </svg>
      </span>
      <span>
        <strong>Dental <b>Namay</b></strong>
        <small>Odontología integral</small>
      </span>
    </a>
  );
}

function AppLogo() {
  return (
    <svg className="app-logo-mark" viewBox="0 0 96 96" aria-hidden="true">
      <rect width="96" height="96" rx="22" />
      <path d="M31 19c10-10 20 0 28 0 10 0 18-6 26 2 10 12 2 28-4 44-4 12-6 24-14 24-10 0-6-26-19-26S40 89 30 89c-8 0-10-12-14-24-6-18-14-34-2-44 6-6 12-4 17-2Z" />
      <path d="M27 66 37 38l16 36 14-38" />
    </svg>
  );
}

function Icon({ name }: { name: string }) {
  return (
    <svg className="line-icon" viewBox="0 0 64 64" aria-hidden="true">
      {name === "extraction" && (
        <>
          <path d="M24 8c4.8-3.2 8.7.2 12 0 4.2-.2 8.5-2.8 12.5 1.8 5.6 6.5 1.2 16.6-1.7 24.5-2.2 6-3.2 15.7-8.2 15.7-4.4 0-3.6-12.8-8.6-12.8S25.8 50 21.4 50c-5 0-6-9.7-8.2-15.7-2.9-7.9-7.3-18-1.7-24.5C15.5 5.2 19.2 8.2 24 8Z" />
          <path d="M47 14 55 6" />
          <path d="m49 6 6 6" />
        </>
      )}
      {name === "restoration" && (
        <>
          <path d="M21 9c4.5-3.4 8.6.5 11 0 4.5-1 8.6-2.5 12.5 2.1 5.2 6.1 1 15.8-1.8 23.4-2.1 5.8-3.1 14.5-7.9 14.5-4.1 0-3.6-11.6-8.8-11.6S21.3 49 17.2 49c-4.8 0-5.8-8.7-7.9-14.5-2.8-7.6-7-17.3-1.8-23.4C11.3 6.5 16.4 12.4 21 9Z" />
          <path d="M27 17h11" />
          <path d="M27 23h11" />
          <path d="M32.5 17v11" />
        </>
      )}
      {name === "braces" && (
        <>
          <path d="M10 26h44" />
          <path d="M10 38h44" />
          <path d="M17 20v24" />
          <path d="M27 20v24" />
          <path d="M37 20v24" />
          <path d="M47 20v24" />
          <path d="M14 26v-4h6v4" />
          <path d="M24 38v4h6v-4" />
          <path d="M34 26v-4h6v4" />
          <path d="M44 38v4h6v-4" />
        </>
      )}
      {name === "fixed" && (
        <>
          <path d="M17 34c0-12 6.8-20 15-20s15 8 15 20" />
          <path d="M17 34h30" />
          <path d="M20 34v13h24V34" />
          <path d="M25 47V34" />
          <path d="M39 47V34" />
        </>
      )}
      {name === "removable" && (
        <>
          <path d="M12 25c8 6 32 6 40 0" />
          <path d="M16 28c1.5 10 8.3 17 16 17s14.5-7 16-17" />
          <path d="M22 29v8" />
          <path d="M29 31v9" />
          <path d="M36 31v9" />
          <path d="M43 29v8" />
          <path d="M20 21c7 3.5 17 3.5 24 0" />
        </>
      )}
      {name === "veneer" && (
        <>
          <path d="M19 11c4.2-3 8.1.4 11 0 4.3-.6 8-2.4 11.5 1.8 4.8 5.7 1.1 14.6-1.6 21.7-2 5.3-3 13.5-7.4 13.5-3.8 0-3.3-10.8-7.5-10.8S21.3 48 17.5 48c-4.4 0-5.4-8.2-7.4-13.5-2.7-7.1-6.4-16-1.6-21.7C12 8.6 14.8 14 19 11Z" />
          <path d="M25 22c3.5-2.2 8.5-2.2 12 0" />
          <path d="M23 30c5.2 3.5 12.8 3.5 18 0" />
        </>
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <nav className="nav-shell" aria-label="Principal">
          <Logo />
          <div className="nav-links">
            {["Inicio", "Nosotros", "Servicios", "Precios", "Ubicación", "App", "Contacto"].map((item, index) => (
              <a className={index === 0 ? "active" : ""} key={item} href={`#${item.toLowerCase().replace("ó", "o")}`}>
                {item}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <ThemeToggle />
            <a className="nav-cta" href="/dental-namay.apk" download="dental-namay.apk">
            <span aria-hidden="true">▣</span> Agenda tu cita
            </a>
          </div>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-overlay" />
        <div className="hero-blob hero-blob-1" aria-hidden="true" />
        <div className="hero-blob hero-blob-2" aria-hidden="true" />
        <div className="hero-grid-glow" aria-hidden="true" />
        <div className="section hero-content">
          <div className="hero-copy">
            <span className="hero-badge">
              <span className="hero-live" aria-hidden="true" />
              Agenda abierta hoy · Lun a Sáb
            </span>
            <h1>
              Sonríe con <span>total confianza</span>
            </h1>
            <p>
              Odontología integral en Trujillo con tratamientos seguros, sin dolor y a tu medida.
              Tu primera valoración es <b>gratuita</b>.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                <span aria-hidden="true">💬</span> Reservar mi cita
              </a>
              <a className="btn secondary" href="#servicios">Ver servicios</a>
            </div>
            <ul className="hero-trust">
              <li><strong>+8</strong><span>Años de experiencia</span></li>
              <li><strong>+3000</strong><span>Pacientes felices</span></li>
              <li><strong>4.9★</strong><span>Valoración Google</span></li>
            </ul>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-photo-frame">
              <Image className="hero-photo" src="/images/hero-dentist.webp" alt="Dentista sonriendo en una clínica moderna" width={620} height={720} priority />
              <div className="hero-chip hero-chip-rating">
                <span className="hero-chip-stars">★★★★★</span>
                <small>+3000 sonrisas</small>
              </div>
              <div className="hero-chip hero-chip-safe">
                <span aria-hidden="true">🦷</span>
                <small>Sin dolor<br />garantizado</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section service-strip" id="servicios">
        {services.map(([title, text], index) => (
          <article className="service-card" key={title} data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
            <div className="service-icon-wrap"><Icon name={serviceIcons[index]} /></div>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="section prices" id="precios" data-reveal>
        <div className="section-title">
          <span />
          <h2>Nuestros servicios <b>y precios</b></h2>
          <span />
        </div>
        <div className="price-carousel" aria-label="Servicios y precios">
          <div className="price-track">
            {[...carouselCards, ...carouselCards].map((card, index) => (
              <article className="treatment-card" key={`${card.title}-${index}`}>
                <div className="treatment-visual">
                  <span className="treatment-orb" />
                  <Icon name={card.icon} />
                </div>
                <div className="treatment-body">
                  <h3>{card.title} {"subtitle" in card && card.subtitle && <small>{card.subtitle}</small>}</h3>
                  <div className="treatment-prices">
                    {card.rows.map(([name, price]) => (
                      <p key={name}><span>{name}</span><strong>{price}</strong></p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section why" id="nosotros">
        <div className="why-media" data-reveal>
          <Image src="/images/dental-team.webp" alt="Equipo odontológico de Dental Namay" width={820} height={520} />
          <div className="why-badge" aria-hidden="true">
            <strong>+8</strong>
            <span>años cuidando<br />tu sonrisa</span>
          </div>
        </div>
        <div data-reveal>
          <h2>¿Por qué elegir <b>Dental Namay?</b></h2>
          <div className="benefits">
            {benefits.map(([title, text], index) => (
              <article key={title} data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                <span className={index % 2 ? "red" : ""}>{["✚", "◒", "●", "◇"][index]}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="why-copy">
            En Dental Namay trabajamos con calidad, ética y compromiso para que cada paciente reciba una atención cercana,
            segura y de confianza.
          </p>
        </div>
      </section>

      <section className="location-band" id="ubicacion">
        <div className="section location">
          <div className="location-info" data-reveal>
            <h2>Estamos en <b>Trujillo, La Libertad</b></h2>
            <p>Brindamos servicios odontológicos para niños, jóvenes y adultos en un espacio cómodo, moderno y accesible.</p>
            <div className="info-box">
              <p><strong>Ubicación:</strong> Clínica Dental Namay</p>
              <p><strong>Especialidad:</strong> Odontología integral</p>
              <p><strong>Horario:</strong> Lun - Sáb / 2:00 PM - 9:00 PM</p>
            </div>
          </div>
          <div className="map-card" aria-label="Mapa de ubicación de Dental Namay" data-reveal>
            <iframe
              title="Ubicación de Dental Namay en Google Maps"
              src="https://www.google.com/maps?q=-8.071592,-79.066477&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section testimonials" data-reveal>
        <h2>Lo que dicen <b>nuestros pacientes</b></h2>
        <div className="testimonial-grid">
          {testimonials.map(([quote, name], index) => (
            <article key={name} data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
              <span className="quote-mark" aria-hidden="true">”</span>
              <p>“{quote}”</p>
              <div className="stars">★★★★★</div>
              <div className="testimonial-author">
                <span className="avatar" aria-hidden="true">{initials(name)}</span>
                <span>
                  <strong>{name}</strong>
                  <small>Paciente verificado</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="app-promo" id="app">
        <div className="section app-promo-grid">
          <div className="app-promo-copy" data-reveal>
            <span className="app-kicker">Nueva app Dental Namay</span>
            <h2>Tu cuidado dental, citas y pagos en un solo lugar</h2>
            <p>
              Reserva tus citas, revisa tu historial y mantente conectado con la clínica desde una experiencia moderna,
              rápida y pensada para pacientes.
            </p>
            <div className="app-promo-actions">
              <a className="btn primary" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar acceso</a>
              <a className="btn secondary" href={whatsappUrl} target="_blank" rel="noreferrer">Consultar por WhatsApp</a>
            </div>
          </div>
          <div className="app-showcase" aria-label="Vista previa de la aplicación Dental Namay" data-reveal>
            <div className="app-splash">
              <AppLogo />
            </div>
            <div className="phone-preview">
              <div className="phone-status"><span>7:46</span><span>LTE</span></div>
              <div className="phone-greeting">
                <strong>Hola, Liz</strong>
                <small>Bienvenida a Clínica Namay</small>
              </div>
              <div className="phone-hero">
                <span>Clínica Dental</span>
                <h3>Tu sonrisa es nuestra prioridad</h3>
                <p>Cuida tu salud dental con profesionalismo.</p>
                <button>Reservar cita</button>
              </div>
              <div className="phone-title"><strong>Accesos rápidos</strong><small>Ver todos</small></div>
              <div className="phone-shortcuts">
                <span>Citas</span>
                <span>Historial</span>
                <span>Pagos</span>
              </div>
              <div className="phone-nav"><span>Inicio</span><span>Citas</span><span>Chat</span><span>Perfil</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacto">
        <div className="section footer-grid">
          <div>
            <Logo />
            <p>Dental Namay - Odontología Integral<br />Trujillo, La Libertad</p>
            <p>Cuidamos tu sonrisa con profesionalismo y confianza.</p>
          </div>
          <div><h3>Enlaces rápidos</h3><a>Inicio</a><a>Nosotros</a><a>Servicios</a><a>Precios</a><a>Ubicación</a></div>
          <div><h3>Servicios</h3><a>Exodoncias</a><a>Restauraciones</a><a>Ortodoncia</a><a>Prótesis fijas</a><a>Carillas y coronas</a></div>
          <div><h3>Contáctanos</h3><p>+51 963 622 602</p><p>info@dentalnamay.com</p><p>Lun - Sáb / 2:00 PM - 9:00 PM</p></div>
        </div>
        <p className="copyright">© 2026 Dental Namay - Odontología Integral. Todos los derechos reservados.</p>
      </footer>
      <ScrollReveal />
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Escribir por WhatsApp">
        <svg viewBox="0 0 448 512" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101 32 1 132.1 1 255c0 39.3 10.2 77.7 29.6 111.5L0 480l116.1-30.5c32.4 17.7 68.9 27 106.9 27h.1c122.9 0 222.9-100.1 222.9-223 0-59.4-23.1-115.2-65.1-156.4ZM223 438.6c-33.9 0-67.1-9.1-96-26.2l-6.9-4.1-68.9 18.1 18.4-67.2-4.5-6.9C46.5 322.7 36.7 289 36.7 255 36.7 151.8 120.7 67.8 224 67.8c50.1 0 97.1 19.5 132.5 54.9 35.4 35.4 54.9 82.5 54.8 132.6 0 103.3-84 183.3-188.3 183.3Zm101.4-137.3c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.5-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.5-19.4 19-19.4 46.3s19.9 53.7 22.7 57.4c2.8 3.7 39.1 59.7 94.8 83.7 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.6-6.5Z" />
        </svg>
      </a>
    </main>
  );
}
