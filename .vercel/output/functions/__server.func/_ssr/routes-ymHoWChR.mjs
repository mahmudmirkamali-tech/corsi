import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as require_jsx_runtime, r as Slot, t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { c as MapPin, d as BookOpen, f as ArrowLeft, i as UserCheck, l as CircleCheck, n as Waypoints, o as ShieldCheck, r as Wallet, s as Menu, t as X, u as Check } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ymHoWChR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SPLIT = {
	hourly: 5,
	coach: 4,
	kish: .5,
	network: .5
};
function splitHours(hours) {
	const safe = Math.max(1, Math.min(40, Math.round(hours) || 1));
	return {
		hours: safe,
		total: safe * SPLIT.hourly,
		coach: safe * SPLIT.coach,
		kish: safe * SPLIT.kish,
		network: safe * SPLIT.network
	};
}
var FA = "۰۱۲۳۴۵۶۷۸۹";
function faNum(value) {
	return (Number.isInteger(value) ? String(value) : value.toFixed(1).replace(/\.0$/, "")).replace(/\d/g, (d) => FA[Number(d)] ?? d).replace(".", "٫");
}
var FOUNDER = {
	name: "سید محمود میرکمالی",
	shortName: "محمود میرکمالی",
	role: "معلم و پشتیبان شهر کیش",
	fields: "هوش مصنوعی، بلاک‌چین و فناوری‌های نوین اطلاعاتی",
	university: "دانشگاه آزاد اسلامی واحد یادگار امام خمینی (ره) تهران",
	headline: "معلم · پشتیبان شهر کیش · شبکه مربیان آنلاین",
	phone: "09388302000",
	phoneDisplay: "۰۹۳۸۸۳۰۲۰۰۰",
	email: "mahtm.mir@gmail.com",
	city: "کیش"
};
var PAYMENT = {
	coin: "دوتو",
	ticker: "DOTO",
	hourly: 5,
	chain: "بلاکچین دات‌وان (دوتو کوین)",
	coach: 4,
	kish: .5,
	network: .5
};
var NAV_LINKS = [
	{
		href: "#instructor",
		label: "معلم"
	},
	{
		href: "#value",
		label: "مسیر"
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
		href: "#economy",
		label: "اقتصاد"
	},
	{
		href: "#signup",
		label: "درخواست"
	},
	{
		href: "#referral",
		label: "ارجاع"
	}
];
var PERSONAS = [
	{
		title: "شاگرد",
		body: "مربی آنلاین بخواهید. موضوع و شهر را می‌نویسید؛ جلسه فقط بعد از ارجاع پشتیبان کیش قطعی می‌شود."
	},
	{
		title: "مربی در هر شهر",
		body: "از هر شهر ایران می‌توانید درخواست را بپذیرید — به‌شرط احراز هویت. بدون تأیید محمود، وارد کلاس نمی‌شوید."
	},
	{
		title: "پشتیبان کیش",
		body: "محمود میرکمالی معلم و پشتیبان شهر کیش است. ارجاع مربی فقط با اوست؛ کیفیت و اعتماد از همین‌جا می‌آید."
	}
];
var STATS = [
	{
		value: "۵",
		label: "دوتو / ساعت"
	},
	{
		value: "۴",
		label: "سهم مربی"
	},
	{
		value: "۰٫۵",
		label: "سهم پشتیبان کیش"
	},
	{
		value: "۰٫۵",
		label: "سهم شبکه"
	}
];
var FEATURES = [
	{
		id: "request",
		title: "درخواست مربی آنلاین",
		body: "موضوع، شهر و ساعت را ثبت کنید. مربیان احرازشده در سراسر ایران می‌توانند اعلام آمادگی کنند."
	},
	{
		id: "kyc",
		title: "احراز هویت مربی",
		body: "هیچ مربی‌ای بدون احراز وارد شبکه نمی‌شود. مدارک بررسی می‌شود، بعد نوبت ارجاع است."
	},
	{
		id: "refer",
		title: "ارجاع شخصی پشتیبان",
		body: "جلسه وقتی قطعی است که محمود میرکمالی، پشتیبان کیش، مربی را شخصاً ارجاع دهد."
	},
	{
		id: "doto",
		title: "اقتصاد دوتو",
		body: "شاگرد ۵ دوتو در ساعت می‌پردازد: ۴ به مربی، ۰٫۵ به پشتیبان کیش، ۰٫۵ به شبکه احراز و تسویه. بدون نرخ پنهان."
	},
	{
		id: "cities",
		title: "هر شهر، یک کلاس",
		body: "مربی می‌تواند در تهران، اصفهان یا بندرعباس باشد؛ شاگرد در کیش یا هر جای دیگر. کلاس آنلاین است."
	},
	{
		id: "teach",
		title: "کرسی معلم",
		body: "هوش مصنوعی، بلاک‌چین، وب و دیجیتال مارکتینگ — با سابقه تدریس مهارت و اجرای پروژه در ایران."
	}
];
var STEPS = [
	{
		n: "۰۱",
		title: "درخواست یا ثبت مربی",
		body: "شاگرد مربی می‌خواهد. مربی از هر شهر ثبت‌نام می‌کند و احراز هویت را می‌پذیرد."
	},
	{
		n: "۰۲",
		title: "احراز، بعد اعلام آمادگی",
		body: "فقط مربی احرازشده می‌تواند درخواست را ببیند و بپذیرد. بدون احراز، صف ارجاع باز نمی‌شود."
	},
	{
		n: "۰۳",
		title: "ارجاع و تسویه",
		body: "محمود ارجاع می‌دهد. ۵ دوتو در ساعت روی دات‌وان تقسیم می‌شود: مربی، پشتیبان کیش، شبکه."
	}
];
var PLANS = [
	{
		id: "hour",
		name: "یک ساعت",
		price: "۵",
		unit: "DOTO",
		note: "نرخ پایه روی بلاکچین دات‌وان",
		cta: "درخواست جلسه",
		featured: false,
		items: [
			"۱ ساعت مربی آنلاین",
			"۴ دوتو سهم مربی",
			"۰٫۵ دوتو پشتیبان کیش",
			"۰٫۵ دوتو شبکه احراز"
		]
	},
	{
		id: "pack5",
		name: "بسته ۵ ساعت",
		price: "۲۵",
		unit: "DOTO",
		note: "۵ × ۵ دوتو · سهم مربی ۲۰",
		cta: "رزرو بسته",
		featured: true,
		items: [
			"۵ ساعت کلاس آنلاین",
			"۲۰ دوتو سهم مربی",
			"۲٫۵ دوتو پشتیبان کیش",
			"ارجاع شخصی پس از احراز",
			"تسویه روی شبکه دات‌وان"
		]
	},
	{
		id: "pack10",
		name: "بسته ۱۰ ساعت",
		price: "۵۰",
		unit: "DOTO",
		note: "۱۰ × ۵ دوتو · سهم مربی ۴۰",
		cta: "رزرو بسته",
		featured: false,
		items: [
			"۱۰ ساعت کلاس آنلاین",
			"۴۰ دوتو سهم مربی",
			"۵ دوتو پشتیبان کیش",
			"دفتر تسویه جلسه"
		]
	}
];
var STORIES = [
	{
		quote: "درخواست مربی وب دادم. چند مربی از شهرهای مختلف اعلام آمادگی کردند، اما جلسه وقتی شروع شد که پشتیبان کیش ارجاع داد.",
		name: "شاگرد دوره وب",
		role: "کلاس آنلاین",
		initials: "وب"
	},
	{
		quote: "از مشهد ثبت‌نام مربی کردم. تا احراز هویت کامل نشد وارد درخواست‌ها نشدم. ارجاع محمود یعنی شاگرد می‌داند چه کسی را می‌بیند.",
		name: "مربی احرازشده",
		role: "مشهد",
		initials: "مش"
	},
	{
		quote: "نرخ روشن است: پنج دوتو در ساعت؛ چهارتایش دستمزد مربی است. برای کیش که پشتیبان محلی دارد، این اقتصاد از پیام‌رسان پراکنده بهتر کار می‌کند.",
		name: "خانواده شاگرد",
		role: "جزیره کیش",
		initials: "کش"
	}
];
var CREDENTIALS = [
	"معلم و پشتیبان شهر کیش برای شبکه مربیان آنلاین",
	"کارشناسی هوش مصنوعی، بلاک‌چین و فناوری‌های نوین اطلاعاتی",
	"مدرس عالی مهارت و کارآفرینی",
	"دیجیتال مارکتر و توسعه‌دهنده وب از ۱۳۹۹"
];
var LANGUAGES = [
	{
		name: "فارسی",
		level: "زبان مادری"
	},
	{
		name: "انگلیسی",
		level: "سطح خوب"
	},
	{
		name: "عربی",
		level: "آشنایی مقدماتی"
	}
];
var SUBJECTS = [
	"هوش مصنوعی",
	"بلاک‌چین و دوتو",
	"توسعه وب",
	"دیجیتال مارکتینگ",
	"سئو و محتوا",
	"سایر مهارت‌ها"
];
var CITIES = [
	"کیش",
	"تهران",
	"اصفهان",
	"مشهد",
	"شیراز",
	"تبریز",
	"اهواز",
	"بندرعباس",
	"سایر / آنلاین"
];
function Economy() {
	const [hours, setHours] = (0, import_react.useState)(5);
	const ledger = (0, import_react.useMemo)(() => splitHours(hours), [hours]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "economy",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted-foreground",
					children: "۰۴ — اقتصاد شبکه"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl",
					children: "پنج دوتو در ساعت؛ تقسیم روشن، بدون نرخ پنهان."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: [
						"شاگرد می‌پردازد. مربی دستمزد می‌گیرد. پشتیبان کیش بابت اعتماد و ارجاع سهم دارد. شبکه بابت احراز و تسویه روی ",
						PAYMENT.chain,
						". ",
						FOUNDER.shortName,
						" درِ اقتصاد را باز می‌کند، نه قیمت را مبهم."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 overflow-hidden rounded-xl bg-ink text-ink-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-8 bg-primary px-4 py-3 text-xs font-medium",
								children: "مربی ۸۰٪"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-1 bg-ink-foreground/20 px-1 py-3 text-center text-xs",
								children: "کیش"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-1 bg-ink-foreground/10 px-1 py-3 text-center text-xs",
								children: "شبکه"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "grid gap-px border-t border-ink-foreground/10 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "پرداخت شاگرد",
								value: faNum(SPLIT.hourly),
								hint: "در ساعت"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "سهم مربی",
								value: faNum(SPLIT.coach),
								hint: "۸۰٪"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "پشتیبان کیش",
								value: faNum(SPLIT.kish),
								hint: "۱۰٪"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "شبکه آتیسا",
								value: faNum(SPLIT.network),
								hint: "۱۰٪"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: "ماشین‌حساب جلسه"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "ساعت را عوض کنید تا سهم مربی، کیش و شبکه همان لحظه دیده شود."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-6 block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm font-medium",
									children: ["ساعت کلاس: ", faNum(ledger.hours)]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 1,
									max: 20,
									value: hours,
									onChange: (e) => setHours(Number(e.target.value)),
									className: "mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-6 grid gap-3 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "پرداخت شاگرد",
										value: `${faNum(ledger.total)} ${PAYMENT.ticker}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "دستمزد مربی",
										value: `${faNum(ledger.coach)} ${PAYMENT.ticker}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "سهم پشتیبان کیش",
										value: `${faNum(ledger.kish)} ${PAYMENT.ticker}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "سهم شبکه",
										value: `${faNum(ledger.network)} ${PAYMENT.ticker}`
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex flex-col justify-between rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "چرا این تقسیم؟"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "مربی باید بتواند از هر شهر ایران تدریس کند و دستمزد اصلی را ببرد." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "پشتیبان کیش بابت احراز و ارجاع شخصی مسئولیت می‌گیرد؛ سهم اعتماد است نه کمیسیون پنهان." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "شبکه فقط تسویه و تطبیق را اداره می‌کند. قیمت جلسه همیشه ضریب ۵ دوتو است." })
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs text-muted-foreground",
							children: "تسویه بعد از ارجاع در پنل پشتیبان ثبت می‌شود."
						})]
					})]
				})
			]
		})
	});
}
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-xs text-ink-foreground/55",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
				className: "mt-1 text-2xl font-semibold tabular-nums tracking-tight",
				children: [
					value,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium text-ink-foreground/60",
						children: PAYMENT.ticker
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-ink-foreground/45",
				children: hint
			})
		]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-3 border-b border-border pb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-sm text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-sm font-medium tabular-nums",
			children: value
		})]
	});
}
var ICONS = [
	BookOpen,
	ShieldCheck,
	UserCheck,
	Wallet,
	MapPin,
	Waypoints
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
					children: "مربی سراسری، اعتماد محلی کیش."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: [
						"درخواست، احراز، ارجاع و پرداخت دوتو در یک مسیر. ",
						FOUNDER.shortName,
						" درِ ورود مربی را باز می‌کند."
					]
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
								children: "سه گام"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-2xl font-semibold tracking-tight",
								children: "تا کلاس آنلاین قطعی"
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
							src: "/media/portrait-cafe.jpg",
							alt: `${FOUNDER.name}، پشتیبان شهر کیش`,
							className: "absolute inset-0 size-full object-cover object-top outline outline-1 -outline-offset-1 outline-ink-foreground/10"
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground",
					children: [
						"شبکه مربی آنلاین با پشتیبان شهر کیش. هر ساعت ۵ دوتو: ۴ مربی، ۰٫۵ کیش، ۰٫۵ شبکه — روی",
						" ",
						PAYMENT.chain,
						"."
					]
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
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["پشتیبان شهر ", FOUNDER.city] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${FOUNDER.email}`,
							className: "hover:text-foreground",
							dir: "ltr",
							children: FOUNDER.email
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${FOUNDER.phone}`,
							className: "hover:text-foreground",
							children: FOUNDER.phoneDisplay
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground",
				children: [
					"© ۱۴۰۵ آتیسا · ",
					FOUNDER.name,
					" · معلم و پشتیبان شهر کیش"
				]
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
				className: "pointer-events-none absolute inset-0 size-full object-cover opacity-30 outline outline-1 -outline-offset-1 outline-ink-foreground/10"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-l from-ink via-ink/88 to-ink/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-12 md:gap-12 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stagger-in md:col-span-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "ink",
							children: FOUNDER.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-ink-foreground/70",
							children: FOUNDER.fields
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							id: "hero-heading",
							className: "mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl",
							children: FOUNDER.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg font-medium text-ink-foreground/90",
							children: FOUNDER.headline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-ink-foreground/75 md:text-lg",
							children: [
								"مربی آنلاین بخواهید. مربیان هر شهر پس از احراز می‌پذیرند؛ جلسه با ارجاع پشتیبان کیش قطعی می‌شود. اقتصاد روشن: ",
								PAYMENT.hourly,
								" ",
								PAYMENT.coin,
								" در ساعت — ۴ برای مربی، ۰٫۵ برای کیش، ۰٫۵ برای شبکه."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "inverted",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#signup",
									children: ["درخواست مربی", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								className: "border-ink-foreground/20 text-ink-foreground hover:bg-ink-foreground/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#signup",
									children: "ثبت‌نام مربی"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl bg-ink-foreground/10 p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/media/portrait-cinematic.jpg",
								alt: `${FOUNDER.name}، معلم و پشتیبان شهر کیش`,
								className: "w-full rounded-lg object-cover object-top outline outline-1 -outline-offset-1 outline-ink-foreground/15"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-6 right-6 left-6 rounded-md bg-ink/80 px-4 py-3 text-ink-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: FOUNDER.shortName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-ink-foreground/70",
								children: "پشتیبان شهر کیش · ارجاع مربیان احرازشده"
							})]
						})]
					})
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
function Instructor() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "instructor",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted-foreground",
					children: "۰۰ — معلم"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl",
					children: "پشتیبان شهر کیش. ارجاع مربی فقط با او."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: "معلم است، نه بازار بی‌حفاظ. مربی از هر شهر می‌تواند بیاید؛ تا احراز نشود و محمود ارجاع ندهد، جلسه‌ای شروع نمی‌شود."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-4 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2 lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/media/portrait-cafe.jpg",
							alt: `${FOUNDER.name} در جلسه کاری`,
							className: "aspect-square w-full rounded-xl object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/media/portrait-street.jpg",
							alt: `${FOUNDER.name}`,
							className: "aspect-square w-full rounded-xl object-cover object-top outline outline-1 -outline-offset-1 outline-foreground/10"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between rounded-xl bg-surface p-6 shadow-[var(--shadow-border)] lg:col-span-7 lg:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold",
								children: FOUNDER.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: FOUNDER.headline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3",
								children: CREDENTIALS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-r-2 border-primary pr-3 text-sm leading-relaxed",
									children: item
								}, item))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-8 grid gap-4 sm:grid-cols-3",
							children: LANGUAGES.map((lang) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted-foreground",
								children: lang.level
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-sm font-medium",
								children: lang.name
							})] }, lang.name))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mt-4 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/credential.jpg",
						alt: `گواهینامه پایان دوره مهارتی ${FOUNDER.name}`,
						className: "w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "px-5 py-4 text-sm text-muted-foreground",
						children: ["گواهینامه پایان دوره مهارتی · مدرس عالی مهارت و کارآفرینی · ", FOUNDER.university]
					})]
				})
			]
		})
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
				children: "درخواست مربی"
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
							children: "ثبت‌نام مربی"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: onInk ? "inverted" : "default",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#signup",
							children: "درخواست مربی"
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
						children: "درخواست مربی"
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl",
					children: [
						"ساعتی ",
						PAYMENT.hourly,
						" ",
						PAYMENT.coin,
						"، روی ",
						PAYMENT.chain,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: "یک نرخ برای همه جلسه‌ها. بسته فقط ضریب ساعت است. از هر ۵ دوتو: ۴ مربی، ۰٫۵ کیش، ۰٫۵ شبکه."
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
									children: "منتخب"
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
var REQUESTS_KEY = "atisa-coach-requests";
var COACHES_KEY = "atisa-coach-apps";
var SESSIONS_KEY = "atisa-sessions";
var EVENT = "atisa-store";
function notify() {
	if (typeof window === "undefined") return;
	window.dispatchEvent(new Event(EVENT));
}
function readList(key) {
	if (typeof window === "undefined") return [];
	try {
		const raw = JSON.parse(localStorage.getItem(key) ?? "[]");
		return Array.isArray(raw) ? raw : [];
	} catch {
		return [];
	}
}
function writeList(key, items) {
	if (typeof window === "undefined") return;
	localStorage.setItem(key, JSON.stringify(items.slice(0, 80)));
	notify();
}
function subscribeStore(onChange) {
	window.addEventListener(EVENT, onChange);
	return () => window.removeEventListener(EVENT, onChange);
}
function loadRequests() {
	return readList(REQUESTS_KEY).map((item) => ({
		...item,
		status: item.status === "settled" ? "settled" : "open"
	}));
}
function saveRequest(entry) {
	const item = {
		...entry,
		status: "open",
		id: crypto.randomUUID(),
		at: (/* @__PURE__ */ new Date()).toISOString()
	};
	writeList(REQUESTS_KEY, [item, ...loadRequests()]);
	return item;
}
function loadCoaches() {
	return readList(COACHES_KEY);
}
function saveCoach(entry) {
	const item = {
		...entry,
		status: "pending",
		id: crypto.randomUUID(),
		at: (/* @__PURE__ */ new Date()).toISOString()
	};
	writeList(COACHES_KEY, [item, ...loadCoaches()]);
	return item;
}
function referCoach(id) {
	const next = loadCoaches().map((coach) => coach.id === id ? {
		...coach,
		status: "approved"
	} : coach);
	writeList(COACHES_KEY, next);
	return next;
}
function loadSessions() {
	return readList(SESSIONS_KEY);
}
function settleSession(requestId, coachId) {
	const request = loadRequests().find((item) => item.id === requestId);
	const coach = loadCoaches().find((item) => item.id === coachId);
	if (!request || request.status === "settled" || !coach || coach.status !== "approved") return null;
	const ledger = splitHours(request.hours);
	const session = {
		id: crypto.randomUUID(),
		requestId,
		coachId,
		learnerName: request.name,
		coachName: coach.name,
		subject: request.subject,
		hours: ledger.hours,
		total: ledger.total,
		coachShare: ledger.coach,
		kishShare: ledger.kish,
		networkShare: ledger.network,
		at: (/* @__PURE__ */ new Date()).toISOString()
	};
	writeList(REQUESTS_KEY, loadRequests().map((item) => item.id === requestId ? {
		...item,
		status: "settled"
	} : item));
	writeList(SESSIONS_KEY, [session, ...loadSessions()]);
	return session;
}
function economyTotals() {
	return loadSessions().reduce((acc, session) => ({
		hours: acc.hours + session.hours,
		total: acc.total + session.total,
		coach: acc.coach + session.coachShare,
		kish: acc.kish + session.kishShare,
		network: acc.network + session.networkShare
	}), {
		hours: 0,
		total: 0,
		coach: 0,
		kish: 0,
		network: 0
	});
}
function Referral() {
	const [coaches, setCoaches] = (0, import_react.useState)([]);
	const [requests, setRequests] = (0, import_react.useState)([]);
	const [sessions, setSessions] = (0, import_react.useState)([]);
	const [pick, setPick] = (0, import_react.useState)({});
	function refresh() {
		setCoaches(loadCoaches());
		setRequests(loadRequests());
		setSessions(loadSessions());
	}
	(0, import_react.useEffect)(() => {
		refresh();
		return subscribeStore(refresh);
	}, []);
	const pending = coaches.filter((c) => c.status === "pending");
	const approved = coaches.filter((c) => c.status === "approved");
	const open = requests.filter((r) => r.status !== "settled");
	const totals = economyTotals();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "referral",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted-foreground",
					children: "۰۷ — پنل پشتیبان کیش"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl",
					children: "ارجاع، بعد تسویه دوتو."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: [FOUNDER.shortName, " مربی را ارجاع می‌دهد، سپس درخواست شاگرد را به مربی وصل می‌کند. همان لحظه سهم مربی، کیش و شبکه در دفتر اقتصاد ثبت می‌شود."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							label: "حجم تسویه‌شده",
							value: `${faNum(totals.total)} ${PAYMENT.ticker}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							label: "دستمزد مربیان",
							value: `${faNum(totals.coach)} ${PAYMENT.ticker}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							label: "سهم کیش",
							value: `${faNum(totals.kish)} ${PAYMENT.ticker}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							label: "ساعت کلاس",
							value: faNum(totals.hours)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-4 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: "صف احراز و ارجاع مربی"
							}),
							pending.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted-foreground",
								children: "مربی در انتظار ارجاع نیست."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: pending.map((coach) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex flex-col gap-3 rounded-md border border-border p-3 sm:flex-row sm:items-center sm:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: coach.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											coach.city,
											" · ",
											coach.subject
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										onClick: () => {
											setCoaches(referCoach(coach.id));
										},
										children: "ارجاع می‌کنم"
									})]
								}, coach.id))
							}),
							approved.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "آماده تسویه"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-2",
									children: approved.map((coach) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "text-sm",
										children: [
											coach.name,
											" · ",
											coach.city,
											" · ",
											coach.subject
										]
									}, coach.id))
								})]
							}) : null
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: "درخواست باز و تسویه"
						}), open.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: "درخواست بازی برای تسویه نیست."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: open.map((req) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "space-y-3 rounded-md border border-border p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: req.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: [
										req.city,
										" · ",
										req.subject,
										" · ",
										faNum(req.hours),
										" ساعت ·",
										" ",
										faNum(req.hours * PAYMENT.hourly),
										" ",
										PAYMENT.ticker
									]
								})] }), approved.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "اول مربی را ارجاع دهید."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										className: "h-11 flex-1 rounded-md border border-border bg-background px-3 text-sm",
										value: pick[req.id] ?? approved[0]?.id ?? "",
										onChange: (e) => setPick((prev) => ({
											...prev,
											[req.id]: e.target.value
										})),
										children: approved.map((coach) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: coach.id,
											children: [
												coach.name,
												" · ",
												coach.city
											]
										}, coach.id))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										onClick: () => {
											const coachId = pick[req.id] ?? approved[0]?.id;
											if (coachId) settleSession(req.id, coachId);
										},
										children: "تسویه"
									})]
								})]
							}, req.id))
						})]
					})]
				}),
				sessions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold",
						children: "دفتر اقتصاد"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: sessions.map((session) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex flex-col gap-1 border-b border-border pb-3 text-sm last:border-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-medium",
								children: [
									session.learnerName,
									" ← ",
									session.coachName,
									" · ",
									session.subject
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									faNum(session.hours),
									" ساعت · کل ",
									faNum(session.total),
									" · مربی ",
									faNum(session.coachShare),
									" · کیش ",
									faNum(session.kishShare),
									" · شبکه ",
									faNum(session.networkShare)
								]
							})]
						}, session.id))
					})]
				}) : null
			]
		})
	});
}
function Mini({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 text-lg font-semibold tabular-nums",
			children: value
		})]
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
function SelectField({ id, label, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor: id,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			id,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "flex h-11 w-full rounded-md border border-border bg-background px-3 text-base text-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: option,
				children: option
			}, option))
		})]
	});
}
function Signup() {
	const [tab, setTab] = (0, import_react.useState)("learner");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)(CITIES[0]);
	const [subject, setSubject] = (0, import_react.useState)(SUBJECTS[0]);
	const [hours, setHours] = (0, import_react.useState)(1);
	const [kyc, setKyc] = (0, import_react.useState)(false);
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [message, setMessage] = (0, import_react.useState)("");
	function resetForm() {
		setName("");
		setEmail("");
		setCity(CITIES[0]);
		setSubject(SUBJECTS[0]);
		setHours(1);
		setKyc(false);
	}
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
		if (tab === "coach" && !kyc) {
			setStatus("error");
			setMessage("برای ورود به صف ارجاع، احراز هویت الزامی است.");
			return;
		}
		try {
			if (tab === "learner") {
				saveRequest({
					name: trimmedName,
					email: trimmedEmail,
					city,
					subject,
					hours
				});
				setStatus("done-learner");
			} else {
				saveCoach({
					name: trimmedName,
					email: trimmedEmail,
					city,
					subject
				});
				setStatus("done-coach");
			}
		} catch {
			setStatus("error");
			setMessage("ثبت انجام نشد. دوباره تلاش کنید.");
			return;
		}
		setMessage("");
		resetForm();
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
						src: "/media/portrait-cinematic.jpg",
						alt: "",
						className: "absolute inset-0 size-full object-cover object-top opacity-80 outline outline-1 -outline-offset-1 outline-ink-foreground/10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full min-h-72 flex-col justify-end p-8 text-ink-foreground md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-wide text-ink-foreground/70",
								children: "۰۶ — درخواست"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 max-w-sm text-3xl font-semibold tracking-tight",
								children: "شاگرد بخواهد. مربی بپذیرد. کیش ارجاع دهد."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 max-w-sm text-sm leading-relaxed text-ink-foreground/75",
								children: [
									"نرخ ",
									PAYMENT.hourly,
									" ",
									PAYMENT.coin,
									" در ساعت. جلسه پس از احراز مربی و ارجاع",
									" ",
									FOUNDER.shortName,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 flex flex-col gap-1 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${FOUNDER.email}`,
									className: "hover:underline",
									dir: "ltr",
									children: FOUNDER.email
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${FOUNDER.phone}`,
									className: "hover:underline",
									children: FOUNDER.phoneDisplay
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-surface px-5 py-12 md:px-10 md:py-16",
				children: status === "done-learner" || status === "done-coach" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full min-h-64 flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "size-8 text-primary",
							strokeWidth: 1.6
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-2xl font-semibold tracking-tight",
							children: status === "done-learner" ? "درخواست مربی ثبت شد." : "در صف احراز و ارجاع هستید."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground",
							children: status === "done-learner" ? "مربیان احرازشده در شهرهای مختلف می‌توانند اعلام آمادگی کنند. کلاس وقتی شروع می‌شود که پشتیبان کیش ارجاع دهد." : "پس از بررسی احراز هویت، محمود میرکمالی شخصاً ارجاع می‌دهد. تا آن لحظه به درخواست شاگرد وصل نمی‌شوید."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => {
									setStatus("idle");
									setTab(status === "done-learner" ? "coach" : "learner");
								},
								children: status === "done-learner" ? "ثبت‌نام مربی" : "درخواست مربی"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#referral",
									children: "مشاهده پنل ارجاع"
								})
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-1 rounded-md bg-muted p-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("flex min-h-11 items-center justify-center rounded-sm text-sm font-medium transition-colors duration-150", tab === "learner" ? "bg-surface text-foreground shadow-[var(--shadow-border)]" : "text-muted-foreground"),
						onClick: () => {
							setTab("learner");
							setStatus("idle");
						},
						children: "درخواست مربی"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("flex min-h-11 items-center justify-center rounded-sm text-sm font-medium transition-colors duration-150", tab === "coach" ? "bg-surface text-foreground shadow-[var(--shadow-border)]" : "text-muted-foreground"),
						onClick: () => {
							setTab("coach");
							setStatus("idle");
						},
						children: "مربی می‌شوم"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "mt-6 flex flex-col gap-5",
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
								placeholder: "نام شما"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "ایمیل"
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
								placeholder: "you@email.com"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							id: "city",
							label: "شهر",
							value: city,
							onChange: setCity,
							options: CITIES
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							id: "subject",
							label: tab === "learner" ? "موضوع کلاس" : "حوزه تدریس",
							value: subject,
							onChange: setSubject,
							options: SUBJECTS
						}),
						tab === "learner" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "hours",
									children: "ساعت مورد نیاز"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "hours",
									name: "hours",
									type: "number",
									min: 1,
									max: 40,
									value: hours,
									onChange: (e) => setHours(Number(e.target.value) || 1)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										"جمع: ",
										hours * PAYMENT.hourly,
										" ",
										PAYMENT.ticker,
										" · مربی ",
										hours * PAYMENT.coach
									]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex min-h-11 cursor-pointer items-start gap-3 rounded-md border border-border bg-background px-3 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: kyc,
								onChange: (e) => setKyc(e.target.checked),
								className: "mt-0.5 size-4 accent-primary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "احراز هویت را می‌پذیرم. بدون تأیید مدارک و ارجاع پشتیبان کیش به شاگرد وصل نمی‌شوم." })]
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
							children: [tab === "learner" ? "ثبت درخواست مربی" : "ارسال برای احراز و ارجاع", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})]
						})
					]
				})] })
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
					children: "۰۵ — صدای شبکه"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl",
					children: "شاگرد، مربی شهر دیگر، ارجاع از کیش."
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
					children: "۰۱ — مسیر"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl",
					children: "شاگرد می‌خواهد. مربی می‌پذیرد. پشتیبان ارجاع می‌دهد."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: "شبکه سراسری است، اما درِ کلاس دست معلم کیش است. بدون احراز هویت مربی و بدون ارجاع محمود، پرداخت و جلسه انجام نمی‌شود."
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
				href: "#instructor",
				className: "sr-only focus:not-sr-only focus:absolute focus:right-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2",
				children: "پرش به محتوا"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instructor, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Value, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Economy, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stories, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signup, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Referral, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCta, {})
		]
	});
}
//#endregion
export { Home as component };
