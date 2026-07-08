import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BookOpenCheck,
  Building2,
  Calculator,
  FileCheck2,
  Globe2,
  Landmark,
  Mail,
  MessageCircle,
  Plane,
  ReceiptText,
  ShieldCheck
} from "lucide-react";
import {
  companyName,
  contactChannels,
  emailAddress,
  phoneNumber,
  siteUrl,
  StructuredData,
  whatsappUrl
} from "@/components/seo";

const videoSlides = [
  {
    src: "/images/corporate-video/zys-office-entrance.jpg",
    alt: "Nanjing ZYS Advisory office building entrance in Nanjing",
    eyebrow: "Nanjing Office / 南京办公室",
    en: "Welcome to Nanjing ZYS Advisory.",
    zh: "欢迎来到南京云账师财务咨询有限公司。"
  },
  {
    src: "/images/corporate-video/zys-office-lobby.jpg",
    alt: "Professional lobby area for Nanjing ZYS Advisory corporate video",
    eyebrow: "Professional Space / 专业空间",
    en: "Professional company registration, accounting and tax advisory.",
    zh: "专业公司注册、代理记账与税务咨询服务。"
  },
  {
    src: "/images/corporate-video/zys-policy-consulting-desk.jpg",
    alt: "Policy consulting desk for China business advisory clients",
    eyebrow: "Policy Advisory / 政策咨询",
    en: "Clear guidance for China compliance and business licenses.",
    zh: "为中国合规与营业执照办理提供清晰指引。"
  },
  {
    src: "/images/corporate-video/zys-meeting-room.jpg",
    alt: "Meeting room for foreign investment and China company registration consultation",
    eyebrow: "Client Meetings / 客户会议",
    en: "Supporting foreign investors and outbound Chinese companies.",
    zh: "服务外国投资者与中国企业出海。"
  },
  {
    src: "/images/corporate-video/zys-conference-table.jpg",
    alt: "Conference table for audit tax accounting and visa consulting discussions",
    eyebrow: "Cross-border Solutions / 跨境方案",
    en: "Your reliable business partner in China.",
    zh: "云账师，让全球企业投资中国更简单。"
  }
];

const visualElements = [
  { label: "China Business License", zh: "中国营业执照", icon: FileCheck2 },
  { label: "Foreign Company Registration", zh: "外资公司注册", icon: Building2 },
  { label: "Tax Filing", zh: "税务申报", icon: ReceiptText },
  { label: "Bookkeeping", zh: "代理记账", icon: BookOpenCheck },
  { label: "Audit Services", zh: "审计服务", icon: ShieldCheck },
  { label: "Visa Consulting", zh: "签证办理", icon: Plane },
  { label: "Hong Kong Company", zh: "香港公司注册", icon: Landmark },
  { label: "US Company", zh: "美国公司注册", icon: Globe2 },
  { label: "Singapore Company", zh: "新加坡公司注册", icon: Calculator }
];

const scriptScenes = [
  {
    time: "00:00-00:04",
    en: "Welcome to Nanjing ZYS Advisory.",
    zh: "欢迎来到南京云账师财务咨询有限公司。"
  },
  {
    time: "00:04-00:12",
    en: "We provide professional company registration, accounting, tax advisory, audit, visa consulting and cross-border business solutions.",
    zh: "我们专注于公司注册、代理记账、税务咨询、审计服务、签证办理及跨境企业服务。"
  },
  {
    time: "00:12-00:20",
    en: "Whether you are expanding into China or taking your business overseas, our experienced team is ready to support every step of your journey.",
    zh: "无论您是海外企业进入中国，还是中国企业走向世界，我们都将为您提供专业、高效的一站式解决方案。"
  },
  {
    time: "00:20-00:28",
    en: "ZYS Advisory — Your Reliable Business Partner in China.",
    zh: "云账师，让全球企业投资中国更简单。"
  }
];

export function CorporateVideo() {
  return (
    <section className="bg-ink py-16 text-white md:py-24" id="corporate-video">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: `${companyName} Corporate Video`,
          alternateName: "南京云账师财务咨询有限公司 公司宣传视频",
          description:
            "Corporate video module for Nanjing ZYS Advisory Co., Ltd. covering China company registration, accounting, tax advisory, audit, visa consulting, business licenses, and overseas company registration services.",
          thumbnailUrl: `${siteUrl}/images/corporate-video/zys-office-entrance.jpg`,
          uploadDate: "2026-07-08",
          duration: "PT28S",
          publisher: {
            "@type": "Organization",
            name: companyName,
            url: siteUrl,
            telephone: phoneNumber,
            email: emailAddress
          },
          about: visualElements.map((item) => item.label),
          potentialAction: {
            "@type": "ContactAction",
            target: `${siteUrl}/contact`,
            name: "Book a Consultation"
          }
        }}
      />
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-gold">
              Corporate Video / 公司宣传视频
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
              Nanjing ZYS Advisory Co., Ltd. / 南京云账师财务咨询有限公司
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/78">
              A bilingual homepage video-style module built from real office photos,
              designed for foreign investors entering China and Chinese companies
              expanding overseas.
            </p>
          </div>
          <div className="rounded-md border border-white/15 bg-white/8 p-5 text-sm leading-7 text-white/80">
            <p className="font-bold text-white">Video素材方案</p>
            <p className="mt-2">
              28秒官网首页宣传片：办公室环境动态轮播、业务图标叠加、中英文字幕层、联系方式展示、免费咨询CTA。
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-md border border-white/15 bg-black shadow-2xl">
            <div className="relative aspect-[16/10] min-h-[420px] md:aspect-video">
              {videoSlides.map((slide, index) => (
                <div
                  key={slide.src}
                  className="corporate-video-slide absolute inset-0"
                  style={{ animationDelay: `${index * 5.6}s` }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/38 to-black/8" />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2 md:left-6 md:top-6">
                {["China Business License", "WFOE", "Tax", "Audit", "Visa"].map((item) => (
                  <span key={item} className="rounded-md bg-white/90 px-3 py-1 text-xs font-bold uppercase text-ink">
                    {item}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-7">
                <div className="max-w-3xl rounded-md border border-white/18 bg-black/62 p-4 backdrop-blur md:p-5">
                  <p className="text-xs font-bold uppercase text-gold">Bilingual Subtitle / 双语字幕</p>
                  <h3 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">
                    Welcome to Nanjing ZYS Advisory.
                  </h3>
                  <p className="mt-2 text-lg font-semibold leading-7 text-white/92">
                    欢迎来到南京云账师财务咨询有限公司。
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/76">
                    Company registration, tax advisory, bookkeeping, audit, visa consulting and cross-border solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-3 border-t border-white/15 bg-white/7 p-4 text-sm leading-7 text-white/78 md:grid-cols-3 md:p-5">
              <p><strong className="text-white">WhatsApp / 微信:</strong> {phoneNumber}</p>
              <p><strong className="text-white">Email / 邮箱:</strong> {emailAddress}</p>
              <p><strong className="text-white">Website / 官网:</strong> {siteUrl.replace("https://", "")}</p>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-md border border-white/15 bg-white p-6 text-ink">
              <h3 className="text-2xl font-bold">Visual Elements / 视觉元素</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {visualElements.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-md border border-line bg-paper p-4">
                      <Icon aria-hidden="true" className="h-5 w-5 text-evergreen" />
                      <p className="mt-3 text-sm font-bold">{item.label}</p>
                      <p className="mt-1 text-xs leading-5 text-graphite">{item.zh}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-md border border-white/15 bg-white/8 p-6">
              <h3 className="text-2xl font-bold">Video Script / 视频文案脚本</h3>
              <div className="mt-5 grid gap-4">
                {scriptScenes.map((scene) => (
                  <div key={scene.time} className="rounded-md border border-white/15 bg-black/20 p-4">
                    <p className="text-xs font-bold uppercase text-gold">{scene.time}</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white">{scene.en}</p>
                    <p className="mt-1 text-sm leading-6 text-white/72">{scene.zh}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-gold/40 bg-gold p-6 text-ink">
              <BadgeCheck aria-hidden="true" className="h-6 w-6" />
              <h3 className="mt-3 text-2xl font-bold">Book a Consultation / 免费咨询</h3>
              <p className="mt-3 text-sm leading-7">
                Contact us through {contactChannels}, phone, email or the official website to discuss China registration, tax, accounting, visa and overseas company setup.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-5 py-3 text-sm font-bold text-white">
                  Book a Consultation / 免费咨询
                </Link>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-ink px-5 py-3 text-sm font-bold">
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  WhatsApp
                </a>
                <a href={`mailto:${emailAddress}`} className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-ink px-5 py-3 text-sm font-bold">
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
