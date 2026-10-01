export const languages = ["es", "en"] as const;
export type Language = (typeof languages)[number];

export const content = {
	es: {
		meta: {
			title: "Kaizen Labs — Software y productos digitales",
			description: "Construimos software, sistemas y productos digitales que evolucionan con las necesidades reales de cada negocio.",
			ogTitle: "Kaizen Labs | Software y productos digitales",
			ogDescription: "Ingeniería de software con mejora continua. Fundada por Jorge Caiza en Ecuador.",
		},
		nav: { home: "Inicio", work: "Qué hacemos", projects: "Proyectos", journey: "Trayectoria", founder: "Fundador", contact: "Hablemos", menu: "Abrir navegación", language: "Cambiar idioma", navigationName: "Navegación principal" },
		accessibility: { skip: "Saltar al contenido" },
		hero: {
			eyebrow: "SOFTWARE · SISTEMAS · PRODUCTOS DIGITALES",
			title: "Software que evoluciona con tu negocio.",
			body: "Kaizen Labs diseña y desarrolla aplicaciones, sistemas y productos digitales con una base técnica sólida y espacio para crecer.",
			primary: "Hablemos de tu proyecto", secondary: "Explorar lo que hacemos", note: "Fundada por Jorge Caiza · Ecuador",
			imageAlt: "Ilustración de Jorge Caiza trabajando en una estación de desarrollo",
		},
		intro: { label: "KAIZEN LABS", title: "De una necesidad real a software que sigue mejorando.", body: "Cada solución parte de entender el problema. Luego se diseña, se construye y se ajusta con el uso: con decisiones técnicas claras y foco en lo que el producto necesita hoy y mañana." },
		capabilities: {
			label: "CAPACIDADES", title: "Tecnología pensada para resolver, no para decorar.",
			items: [
				{ number: "01", title: "Aplicaciones y sistemas", body: "Aplicaciones web y sistemas personalizados para procesos y necesidades concretas." },
				{ number: "02", title: "Backend e integración", body: "Servicios, APIs e integraciones que conectan productos y sistemas." },
				{ number: "03", title: "Datos y bases de datos", body: "Diseño y trabajo con bases de datos como parte central de soluciones confiables." },
				{ number: "04", title: "Productos digitales", body: "Construcción y evolución de productos digitales a lo largo de su ciclo de vida." },
			],
		},
		projects: { label: "PROYECTOS", title: "Trabajo en construcción.", body: "Kaizen Labs está preparando su espacio de proyectos. Aquí encontrarás productos y casos públicos cuando estén listos para compartir.", status: "NUEVOS PROYECTOS PRÓXIMAMENTE", empty: "Sin proyectos públicos por ahora.", view: "Ver proyecto", repository: "Repositorio" },
		stack: { label: "HERRAMIENTAS", title: "Elegidas según el problema.", body: "La tecnología es un medio. La selección depende del contexto, el producto y las necesidades del sistema.", groups: ["Desarrollo de software", "Backend y servicios", "Datos"], items: [["Aplicaciones web", "Sistemas"], ["APIs", "Integraciones"], ["Bases de datos"]] },
		experience: {
			label: "TRAYECTORIA", title: "Experiencia desde distintos ángulos del software.", body: "Una carrera que recorre desarrollo de videojuegos, enseñanza, tecnología empresarial y bases de datos.",
			items: [
				{ period: "2015 — 2018", role: "Desarrollador de videojuegos", place: "Chariot Entertainment", detail: "Primeros años creando software en la industria de videojuegos." },
				{ period: "2020 — 2022", role: "Docente de Tecnología Superior en Desarrollo de Software", place: "Educación superior", detail: "Enseñanza de desarrollo de software." },
				{ period: "2022 — 2025", role: "Analista de Tecnologías", place: "SEIBE", detail: "Experiencia en un entorno de tecnología empresarial." },
				{ period: "2025 — Actualidad", role: "Especialista de Base de Datos", place: "Payphone", detail: "Trabajo especializado en bases de datos." },
			],
		},
		founder: { label: "QUIÉN ESTÁ DETRÁS", title: "Jorge Caiza", role: "Fundador de Kaizen Labs", body: "La experiencia construida entre software, enseñanza, tecnología y bases de datos dio origen a Kaizen Labs: un estudio para crear soluciones digitales con criterio de ingeniería y mejora continua.", linkedin: "Ver perfil en LinkedIn", portraitAlt: "Retrato de Jorge Caiza, fundador de Kaizen Labs", location: "Ecuador", imageCaption: "JORGE CAIZA · ECUADOR" },
		process: { label: "FORMA DE TRABAJO", title: "Construir es un proceso continuo.", steps: [{ title: "Entender", body: "Aclarar la necesidad y el contexto." }, { title: "Diseñar", body: "Definir una solución apropiada." }, { title: "Construir", body: "Desarrollar con una base técnica clara." }, { title: "Mejorar", body: "Aprender del uso y evolucionar." }] },
		contact: { label: "CONTACTO", title: "¿Qué necesitas construir?", body: "Cuéntanos sobre el sistema, producto o proceso que quieres llevar adelante.", cta: "Conectar por LinkedIn", note: "Kaizen Labs · Software & Digital Products", mascotAlt: "Ilustración de Jorge saludando" },
		footer: { descriptor: "Software y productos digitales", links: "Explorar", socials: "Redes", soon: "Próximamente", copyright: "Todos los derechos reservados.", back: "Volver arriba" },
	},
	en: {
		meta: {
			title: "Kaizen Labs — Software & Digital Products",
			description: "We build software, systems, and digital products that evolve with the real needs of each business.",
			ogTitle: "Kaizen Labs | Software & Digital Products",
			ogDescription: "Software engineering with continuous improvement. Founded by Jorge Caiza in Ecuador.",
		},
		nav: { home: "Home", work: "What we do", projects: "Projects", journey: "Experience", founder: "Founder", contact: "Let's talk", menu: "Open navigation", language: "Change language", navigationName: "Main navigation" },
		accessibility: { skip: "Skip to content" },
		hero: {
			eyebrow: "SOFTWARE · SYSTEMS · DIGITAL PRODUCTS",
			title: "Software that evolves with your business.",
			body: "Kaizen Labs designs and develops applications, systems, and digital products on a solid technical foundation with room to grow.",
			primary: "Let's discuss your project", secondary: "Explore what we do", note: "Founded by Jorge Caiza · Ecuador",
			imageAlt: "Illustration of Jorge Caiza working at a development workstation",
		},
		intro: { label: "KAIZEN LABS", title: "From a real need to software that keeps improving.", body: "Every solution starts with understanding the problem. Then it is designed, built, and refined through use—with clear technical decisions and focus on what the product needs today and tomorrow." },
		capabilities: {
			label: "CAPABILITIES", title: "Technology built to solve, not decorate.",
			items: [
				{ number: "01", title: "Applications & systems", body: "Web applications and custom systems for specific processes and needs." },
				{ number: "02", title: "Backend & integration", body: "Services, APIs, and integrations that connect products and systems." },
				{ number: "03", title: "Data & databases", body: "Database design and engineering as a core part of reliable solutions." },
				{ number: "04", title: "Digital products", body: "Building and evolving digital products throughout their lifecycle." },
			],
		},
		projects: { label: "PROJECTS", title: "Work in progress.", body: "Kaizen Labs is preparing its project space. Products and public case studies will appear here when they are ready to share.", status: "NEW PROJECTS COMING SOON", empty: "No public projects yet.", view: "View project", repository: "Repository" },
		stack: { label: "TOOLS", title: "Chosen for the problem at hand.", body: "Technology is a means to an end. Choices depend on the context, product, and system requirements.", groups: ["Software development", "Backend & services", "Data"], items: [["Web applications", "Systems"], ["APIs", "Integrations"], ["Databases"]] },
		experience: {
			label: "EXPERIENCE", title: "Experience across different sides of software.", body: "A career spanning game development, teaching, enterprise technology, and databases.",
			items: [
				{ period: "2015 — 2018", role: "Video Game Developer", place: "Chariot Entertainment", detail: "Early years building software in the video game industry." },
				{ period: "2020 — 2022", role: "Higher Education Software Development Instructor", place: "Higher education", detail: "Teaching software development." },
				{ period: "2022 — 2025", role: "Technology Analyst", place: "SEIBE", detail: "Experience in an enterprise technology environment." },
				{ period: "2025 — Present", role: "Database Specialist", place: "Payphone", detail: "Specialized database work." },
			],
		},
		founder: { label: "THE PERSON BEHIND IT", title: "Jorge Caiza", role: "Founder of Kaizen Labs", body: "Experience across software, teaching, technology, and databases led to Kaizen Labs: a studio for building digital solutions with engineering judgment and continuous improvement.", linkedin: "View LinkedIn profile", portraitAlt: "Portrait of Jorge Caiza, founder of Kaizen Labs", location: "Ecuador", imageCaption: "JORGE CAIZA · ECUADOR" },
		process: { label: "HOW WE WORK", title: "Building is an ongoing process.", steps: [{ title: "Understand", body: "Clarify the need and the context." }, { title: "Design", body: "Define a fitting solution." }, { title: "Build", body: "Develop on a clear technical foundation." }, { title: "Improve", body: "Learn from use and keep evolving." }] },
		contact: { label: "CONTACT", title: "What do you need to build?", body: "Tell us about the system, product, or process you want to move forward.", cta: "Connect on LinkedIn", note: "Kaizen Labs · Software & Digital Products", mascotAlt: "Illustration of Jorge waving" },
		footer: { descriptor: "Software & digital products", links: "Explore", socials: "Social", soon: "Coming soon", copyright: "All rights reserved.", back: "Back to top" },
	},
} satisfies Record<Language, Record<string, any>>;
