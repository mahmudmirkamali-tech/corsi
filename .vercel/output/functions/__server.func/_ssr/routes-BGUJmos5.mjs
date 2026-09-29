import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime, r as Slot, t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { a as Menu, c as Check, d as BookOpen, f as ArrowLeft, i as ShieldCheck, l as ChartLine, n as Waypoints, o as Earth, s as CircleCheck, t as X, u as CalendarClock } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BGUJmos5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV_LINKS = [
	{
		href: "#value",
		label: "ارزش"
	},
	{
		href: "#features",
		label: "قابلیت‌ها"
	},
	{
		href: "#pricing",
		label: "قیمت"
	},
	{
		href: "#stories",
		label: "نظرات"
	},
	{
		href: "#signup",
		label: "شروع"
	}
];
var PERSONAS = [
	{
		title: "مدرس دانشگاه",
		body: "سیلابس، آزمایشگاه و نمره‌دهی درس‌های هوش مصنوعی و فناوری‌های نوین را در یک کرسی جمع کنید؛ نه در پوشه‌های پراکنده."
	},
	{
		title: "آموزگار خصوصی",
		body: "نوبت جلسه، تکلیف و پیشرفت شاگرد را بدون پیام‌رسان‌های متفرق اداره کنید و زمان را به تدریس برگردانید."
	},
	{
		title: "مدیر امور دیجیتال",
		body: "برند دانشکده، رویدادهای آزاد و گزارش حضور دیجیتال را از یک داشبورد به هیئت علمی برسانید."
	}
];
var STATS = [
	{
		value: "۱۲۰+",
		label: "مدرس فعال"
	},
	{
		value: "۴٬۸۰۰",
		label: "دانشجو و شاگرد"
	},
	{
		value: "۱۸",
		label: "دانشکده همکار"
	},
	{
		value: "۹۲٪",
		label: "تمدید سالانه"
	}
];
var FEATURES = [
	{
		id: "studio",
		title: "استودیو دوره",
		body: "سیلابس، ویدیو، آزمایشگاه و بانک سوال را در یک ساختار درسی بچینید؛ مناسب هوش مصنوعی، بلاک‌چین و دروس میان‌رشته‌ای."
	},
	{
		id: "consult",
		title: "میز مشاوره خصوصی",
		body: "تقویم آموزگار، جلسهٔ یک‌به‌یک و یادداشت پیشرفت شاگرد در یک جریان واحد، بدون رفت‌وآمد میان ابزارها."
	},
	{
		id: "chain",
		title: "اعتبارنامه زنجیره‌ای",
		body: "گواهی پایان دوره را با اثرانگشت غیرقابل‌جعل روی زنجیره ثبت کنید تا کارفرما و دانشکده همان را ببینند."
	},
	{
		id: "portal",
		title: "پرتال دانشجو",
		body: "تکلیف، حضور، نمره و گفتگو در یک درگاه. دانشجو مسیر را می‌بیند؛ شما فقط استثناها را مدیریت می‌کنید."
	},
	{
		id: "presence",
		title: "اتاق دیجیتال مدرس",
		body: "صفحهٔ عمومی کرسی، رزومهٔ درسی و تقویم رویداد — حضور آکادمیک شما در وب، هم‌تراز با کار روی تخته."
	},
	{
		id: "insight",
		title: "بینش تدریس",
		body: "افت یادگیری، نرخ اتمام آزمایشگاه و تقاضای مشاوره را پیش از پایان ترم ببینید، نه در گزارش پایان سال."
	}
];
var STEPS = [
	{
		n: "۰۱",
		title: "کرسی را برپا کنید",
		body: "نقش خود را انتخاب کنید: مدرس، آموزگار خصوصی یا مدیر امور دیجیتال. ساختار دوره در چند دقیقه شکل می‌گیرد."
	},
	{
		n: "۰۲",
		title: "آموزش و مشاوره را وصل کنید",
		body: "سیلابس، آزمایشگاه و نوبت خصوصی را به پرتال دانشجو پیوند دهید. دعوت‌نامه با یک پیوند می‌رود."
	},
	{
		n: "۰۳",
		title: "اعتبار و درآمد را بسنجید",
		body: "گواهی زنجیره‌ای صادر کنید، تمدید دوره را ببینید و گزارش دیجیتال را به دانشکده بسپارید."
	}
];
var PLANS = [
	{
		id: "start",
		name: "آغاز",
		price: "۰",
		unit: "تومان / ماه",
		note: "۱۴ روز آزمایش کامل، سپس طرح رایگان محدود",
		cta: "شروع رایگان",
		featured: false,
		items: [
			"تا ۲ دوره همزمان",
			"تا ۳۰ دانشجو",
			"صفحهٔ سادهٔ مدرس",
			"پشتیبانی ایمیلی"
		]
	},
	{
		id: "chair",
		name: "کرسی",
		price: "۹۹۰٬۰۰۰",
		unit: "تومان / ماه",
		note: "برای مدرس و آموزگار تمام‌وقت",
		cta: "انتخاب کرسی",
		featured: true,
		items: [
			"دوره نامحدود",
			"تا ۵۰۰ دانشجو و شاگرد",
			"مشاوره خصوصی و تقویم",
			"گواهی زنجیره‌ای",
			"اتاق دیجیتال کامل",
			"بینش تدریس"
		]
	},
	{
		id: "faculty",
		name: "دانشکده",
		price: "۲٬۴۹۰٬۰۰۰",
		unit: "تومان / ماه",
		note: "برای مدیر امور دیجیتال و گروه‌های آموزشی",
		cta: "گفتگو با فروش",
		featured: false,
		items: [
			"همه امکانات کرسی",
			"چند مدرس و چند برند",
			"گزارش هیئت علمی",
			"ورود سازمانی",
			"مدیر موفقیت اختصاصی"
		]
	}
];
var STORIES = [
	{
		quote: "سیلابس درس یادگیری ماشین و آزمایشگاه را از سه ابزار جدا به آتیسا آوردم. نمره‌دهی و گواهی پایان‌ترم دیگر شب امتحان جمع نمی‌شود.",
		name: "دکتر ندا کیانی",
		role: "مدرس هوش مصنوعی، دانشگاه صنعتی شریف",
		initials: "نک"
	},
	{
		quote: "شاگردهای خصوصی بلاک‌چین تقویم و تکلیف را در یک جا می‌بینند. من فقط تدریس می‌کنم؛ پیگیری را سیستم انجام می‌دهد.",
		name: "آرمان بهشتی",
		role: "آموزگار خصوصی بلاک‌چین",
		initials: "آب"
	},
	{
		quote: "گزارش ماهانه حضور دیجیتال و دوره‌های آزاد را بدون فایل اکسل به هیئت علمی می‌دهم. این همان کاری است که مدیر امور دیجیتال باید بکند.",
		name: "سارا محمودی",
		role: "مدیر امور دیجیتال، دانشکده فناوری‌های نوین",
		initials: "سم"
	}
];
var UNIVERSITIES = [
	"دانشگاه تهران",
	"صنعتی شریف",
	"امیرکبیر",
	"علم و صنعت",
	"شهید بهشتی"
];
var ROLES = [
	{
		id: "lecturer",
		label: "مدرس دانشگاه"
	},
	{
		id: "tutor",
		label: "آموزگار خصوصی"
	},
	{
		id: "digital",
		label: "مدیر امور دیجیتال"
	}
];
var WAITLIST_KEY = "atisa-waitlist";
var ICONS = [
	BookOpen,
	CalendarClock,
	ShieldCheck,
	Waypoints,
	Earth,
	ChartLine
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "scroll-mt-20 border-b border-border paper-grid",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted-foreground",
					children: "۰۲ — قابلیت‌ها"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl",
					children: "از سیلابس تا گواهی زنجیره‌ای، همه روی یک شبکه."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: "هر قابلیت برای کار واقعی کلاس، جلسه خصوصی و اداره دیجیتال دانشکده طراحی شده است — نه برای ویترین."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: FEATURES.map((feature, i) => {
						const Icon = ICONS[i];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex size-10 items-center justify-center rounded-md bg-muted text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										strokeWidth: 1.6
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg font-semibold",
									children: feature.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: feature.body
								})
							]
						}, feature.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-8 overflow-hidden rounded-xl bg-ink text-ink-foreground md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-wide text-ink-foreground/55",
								children: "مسیر شروع"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-2xl font-semibold tracking-tight",
								children: "سه گام تا کرسی فعال"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-8 space-y-6",
								children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "grid grid-cols-[auto_1fr] gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm tabular-nums text-ink-foreground/45",
										children: step.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: step.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed text-ink-foreground/70",
										children: step.body
									})] })]
								}, step.n))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative min-h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/media/desk-still.jpg",
							alt: "میز کار آکادمیک با دفتر و ابزار دقیق",
							className: "absolute inset-0 size-full object-cover outline outline-1 -outline-offset-1 outline-ink-foreground/10"
						})
					})]
				})
			]
		})
	});
}
function Logo({ inverted = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#top",
		className: "inline-flex items-center gap-2.5",
		"aria-label": "آتیسا، بازگشت به بالا",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: inverted ? "flex size-8 items-center justify-center rounded-sm bg-ink-foreground text-ink" : "flex size-8 items-center justify-center rounded-sm bg-ink text-ink-foreground",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 32 32",
				className: "size-5",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M7 24V12.5L16 7l9 5.5V24",
						stroke: "currentColor",
						strokeWidth: "1.7",
						strokeLinejoin: "round"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M11 24v-7h10v7",
						stroke: "currentColor",
						strokeWidth: "1.7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "16",
						cy: "14.5",
						r: "1.4",
						fill: "currentColor"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-lg font-semibold tracking-tight",
			children: "آتیسا"
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground",
					children: "میز کار دیجیتال مدرسان هوش مصنوعی، بلاک‌چین و فناوری‌های نوین اطلاعاتی."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "صفحه"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: link.label
					}) }, link.href))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: "ارتباط"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "تهران · ایران" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:hello@atisa.ir",
						className: "hover:text-foreground",
						children: "hello@atisa.ir"
					}) })]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground",
				children: "© ۱۴۰۵ آتیسا. همه حقوق برای مدرسان فناوری‌های نوین محفوظ است."
			})
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var badgeVariants = cva("inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-primary/10 text-primary",
		outline: "border-border bg-transparent text-muted-foreground",
		ink: "border-transparent bg-ink-foreground/10 text-ink-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
			ink: "bg-ink text-ink-foreground hover:bg-ink/90",
			surface: "bg-surface text-foreground shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "border border-border bg-transparent text-foreground hover:bg-muted",
			ghost: "text-foreground hover:bg-muted",
			inverted: "bg-ink-foreground text-ink hover:bg-ink-foreground/90"
		},
		size: {
			default: "h-11 min-h-11 px-5",
			sm: "h-9 min-h-9 rounded-sm px-3",
			lg: "h-12 min-h-12 px-6 text-base",
			icon: "size-11 min-h-11 min-w-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden bg-ink text-ink-foreground",
		"aria-labelledby": "hero-heading",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 ink-grid opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/hero-hall.jpg",
				alt: "",
				className: "pointer-events-none absolute inset-0 size-full object-cover opacity-40 outline outline-1 -outline-offset-1 outline-ink-foreground/10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-l from-ink via-ink/85 to-ink/55" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:gap-12 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stagger-in md:col-span-6 lg:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "ink",
							children: "پلتفرم مدرسان فناوری‌های نوین"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							id: "hero-heading",
							className: "mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl",
							children: "کرسی دیجیتال مدرسان هوش مصنوعی و بلاک‌چین"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-ink-foreground/75 md:text-lg",
							children: "آتیسا میز کار واحد مدرس دانشگاه، آموزگار خصوصی و مدیر امور دیجیتال است. دوره، مشاوره و اعتبارنامه را از یک فضا اداره کنید — نه از ده ابزار پراکنده."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "inverted",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#signup",
									children: ["شروع ۱۴ روزه رایگان", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								className: "border-ink-foreground/20 text-ink-foreground hover:bg-ink-foreground/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#features",
									children: "مشاهده قابلیت‌ها"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardMock, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative border-t border-ink-foreground/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4",
					children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 py-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-ink-foreground/55",
							children: stat.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-2xl font-semibold tabular-nums tracking-tight",
							children: stat.value
						})]
					}, stat.label))
				})
			})
		]
	});
}
function DashboardMock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl bg-ink-foreground/8 p-2 shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-lg border border-ink-foreground/10 bg-ink-foreground text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: "کرسی من"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: "نیم‌سال پاییز"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 p-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockCard, {
							title: "یادگیری ماشین پیشرفته",
							meta: "۴۲ دانشجو · در جریان"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockCard, {
							title: "آزمایشگاه بلاک‌چین",
							meta: "۱۸ دانشجو · هفته سوم"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockCard, {
							title: "مشاوره خصوصی",
							meta: "سه‌شنبه · ۱۹:۰۰"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockCard, {
							title: "گواهی در انتظار صدور",
							meta: "۷ اعتبارنامه زنجیره‌ای"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "اتمام آزمایشگاه این هفته"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium tabular-nums",
							children: "۷۸٪"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-1.5 overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-3/4 rounded-full bg-primary" })
					})]
				})
			]
		})
	});
}
function MockCard({ title, meta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-border bg-surface p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium leading-snug",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xs text-muted-foreground",
			children: meta
		})]
	});
}
function MobileCta() {
	const [visible, setVisible] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const target = document.getElementById("signup");
		if (!target) return;
		const observer = new IntersectionObserver(([entry]) => setVisible(!entry?.isIntersecting), { threshold: .2 });
		observer.observe(target);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 md:hidden", "transition-transform duration-200 ease-out", visible ? "translate-y-0" : "translate-y-full"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "w-full",
			size: "lg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#signup",
				children: "شروع رایگان"
			})
		})
	});
}
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const onInk = !scrolled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,color] duration-200", onInk ? "border-ink-foreground/10 bg-ink text-ink-foreground" : "border-border bg-background/90 text-foreground shadow-[var(--shadow-border)]"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: onInk }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "ناوبری اصلی",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: cn("rounded-md px-3 py-2 text-sm transition-colors duration-150", onInk ? "text-ink-foreground/70 hover:text-ink-foreground" : "text-muted-foreground hover:text-foreground"),
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						size: "sm",
						className: onInk ? "text-ink-foreground hover:bg-ink-foreground/10" : void 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#signup",
							children: "ورود به فهرست انتظار"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: onInk ? "inverted" : "default",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#signup",
							children: "شروع رایگان"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: onInk ? "inverted" : "outline",
					size: "icon",
					className: "md:hidden",
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "بستن منو" : "باز کردن منو",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			className: cn("border-t px-5 py-4 md:hidden", onInk ? "border-ink-foreground/10 bg-ink" : "border-border bg-background"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				"aria-label": "ناوبری موبایل",
				children: [NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "flex min-h-11 items-center rounded-md px-3 text-base",
					onClick: () => setOpen(false),
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-2 w-full",
					variant: onInk ? "inverted" : "default",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#signup",
						onClick: () => setOpen(false),
						children: "شروع رایگان"
					})
				})]
			})
		}) : null]
	});
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted-foreground",
					children: "۰۳ — قیمت‌گذاری"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl",
					children: "از یک درس آزمایشی تا اداره دیجیتال دانشکده."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: "طرح رایگان برای شروع. کرسی برای تدریس تمام‌وقت. دانشکده برای تیم و مدیر امور دیجیتال. هر طرح را می‌توانید ماهانه لغو کنید."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 lg:grid-cols-3",
					children: PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: cn("flex flex-col rounded-xl p-6", plan.featured ? "bg-ink text-ink-foreground shadow-[var(--shadow-border)]" : "bg-surface text-foreground shadow-[var(--shadow-border)]"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold",
									children: plan.name
								}), plan.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-ink-foreground/10 px-3 py-1 text-xs",
									children: "پرکاربرد"
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 flex items-end gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-4xl font-semibold tabular-nums tracking-tight",
									children: plan.price
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("mb-1 text-sm", plan.featured ? "text-ink-foreground/60" : "text-muted-foreground"),
									children: plan.unit
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-2 text-sm", plan.featured ? "text-ink-foreground/65" : "text-muted-foreground"),
								children: plan.note
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex-1 space-y-3",
								children: plan.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: cn("mt-0.5 size-4 shrink-0", plan.featured ? "text-ink-foreground" : "text-primary"),
										strokeWidth: 1.8
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "mt-8 w-full",
								variant: plan.featured ? "inverted" : "default",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#signup",
									children: plan.cta
								})
							})
						]
					}, plan.id))
				})
			]
		})
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		suppressHydrationWarning: true,
		className: cn("flex h-11 w-full rounded-md border border-border bg-surface px-3 text-base text-foreground", "placeholder:text-muted-foreground/80", "transition-[box-shadow,border-color] duration-150", "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("text-sm font-medium leading-none text-foreground", className),
		...props
	});
}
function isEmail(value) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function Signup() {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("lecturer");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	function onSubmit(event) {
		event.preventDefault();
		const trimmedName = name.trim();
		const trimmedEmail = email.trim().toLowerCase();
		if (trimmedName.length < 2) {
			setStatus("error");
			setMessage("نام را کامل وارد کنید.");
			return;
		}
		if (!isEmail(trimmedEmail)) {
			setStatus("error");
			setMessage("یک ایمیل معتبر وارد کنید.");
			return;
		}
		const entry = {
			name: trimmedName,
			email: trimmedEmail,
			role,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const prev = JSON.parse(localStorage.getItem("atisa-waitlist") ?? "[]");
			const list = Array.isArray(prev) ? prev : [];
			localStorage.setItem(WAITLIST_KEY, JSON.stringify([entry, ...list].slice(0, 50)));
		} catch {}
		setStatus("done");
		setMessage("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "signup",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-0 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-72 overflow-hidden bg-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/corridor.jpg",
						alt: "راهروی دانشکده با نور گرم و شبکه هندسی",
						className: "absolute inset-0 size-full object-cover opacity-70 outline outline-1 -outline-offset-1 outline-ink-foreground/10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/45" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full flex-col justify-end p-8 text-ink-foreground md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-wide text-ink-foreground/70",
								children: "۰۵ — شروع"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 max-w-sm text-3xl font-semibold tracking-tight",
								children: "کرسی‌تان را این هفته برپا کنید."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-sm text-sm leading-relaxed text-ink-foreground/75",
								children: "ایمیل بگذارید تا دسترسی ۱۴ روزه طرح کرسی برایتان باز شود. بدون کارت، بدون تعهد."
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-surface px-5 py-12 md:px-10 md:py-16",
				children: status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full min-h-64 flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "size-8 text-primary",
							strokeWidth: 1.6
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-2xl font-semibold tracking-tight",
							children: "در فهرست قرار گرفتید."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground",
							children: "لینک شروع آزمایشی به ایمیل شما می‌رسد. تا آن لحظه می‌توانید قابلیت‌ها و طرح‌ها را مرور کنید."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "mt-6 w-fit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#features",
								children: "مرور قابلیت‌ها"
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "flex flex-col gap-5",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "full-name",
								children: "نام و نام خانوادگی"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "full-name",
								name: "name",
								autoComplete: "name",
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "مثلاً ندا کیانی"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "ایمیل کاری"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								name: "email",
								type: "email",
								inputMode: "email",
								autoComplete: "email",
								dir: "ltr",
								className: "text-start",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "you@university.ac.ir"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "text-sm font-medium",
								children: "نقش شما"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2",
								children: ROLES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: cn("flex min-h-11 cursor-pointer items-center gap-3 rounded-md border px-3 text-sm transition-colors duration-150", role === item.id ? "border-primary bg-primary/10" : "border-border bg-background hover:bg-muted"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "radio",
										name: "role",
										value: item.id,
										checked: role === item.id,
										onChange: () => setRole(item.id),
										className: "size-4 accent-primary",
										suppressHydrationWarning: true
									}), item.label]
								}, item.id))
							})]
						}),
						status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-primary",
							role: "alert",
							children: message
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							size: "lg",
							className: "w-full",
							children: ["دریافت دسترسی آزمایشی", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-relaxed text-muted-foreground",
							children: "با ارسال فرم، فقط برای اطلاع شروع آزمایشی با شما تماس می‌گیریم. فروش انبوه در کار نیست."
						})
					]
				})
			})]
		})
	});
}
function Stories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stories",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted-foreground",
					children: "۰۴ — صدای مدرسان"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl",
					children: "کسانی که کلاس، جلسه خصوصی و امور دیجیتال را با هم پیش می‌برند."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: STORIES.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "flex flex-col rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "flex-1 text-sm leading-relaxed text-foreground",
							children: [
								"«",
								story.quote,
								"»"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-10 items-center justify-center rounded-full bg-muted text-sm font-medium text-primary",
								"aria-hidden": "true",
								children: story.initials
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: story.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted-foreground",
								children: story.role
							})] })]
						})]
					}, story.name))
				})
			]
		})
	});
}
function Value() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "value",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted-foreground",
					children: "۰۱ — پیشنهاد ارزش"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl",
					children: "سه نقش، یک میز کار. ابزارها دیگر از هم جدا نیستند."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: "مدرس دانشگاه سیلابس می‌نویسد، آموزگار خصوصی جلسه می‌گیرد، مدیر امور دیجیتال گزارش می‌خواهد. آتیسا این سه جریان را روی یک کرسی می‌نشاند تا آموزش فناوری‌های نوین پراکنده نشود."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: PERSONAS.map((persona, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tabular-nums text-muted-foreground",
								children: [
									"۰۱",
									"۰۲",
									"۰۳"
								][i]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg font-semibold",
								children: persona.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: persona.body
							})
						]
					}, persona.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "مدرسان همکار از"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-foreground/80",
						children: UNIVERSITIES.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: name }, name))
					})]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background pb-20 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#value",
				className: "sr-only focus:not-sr-only focus:absolute focus:right-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2",
				children: "پرش به محتوا"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stories, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signup, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCta, {})
		]
	});
}
//#endregion
export { Home as component };
