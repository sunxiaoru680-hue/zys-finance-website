import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Download, FileText, Globe2, MessageCircle, Plane, ShieldCheck } from "lucide-react";
import { companyProfilePdfPath } from "@/lib/companyProfile";
import { zhNavItems } from "@/lib/i18n";
import { companyName, emailAddress, phoneNumber, siteUrl, whatsappUrl } from "@/components/seo";

export const metadata: Metadata = {
  title: "ZYS Advisory 中文站 | 外资公司注册、财税、签证与跨境企业服务",
  description:
    "南京 ZYS Advisory 为海外投资者和中国企业提供中国公司注册、WFOE 外资公司注册、代理记账、税务服务、工作签证、香港公司、美国公司、新加坡公司和迪拜公司注册服务。",
  alternates: {
    canonical: `${siteUrl}/zh`,
    languages: {
      en: siteUrl,
      "zh-CN": `${siteUrl}/zh`
    }
  },
  openGraph: {
    title: "ZYS Advisory 中文站 | 外资公司注册、财税、签证与跨境企业服务",
    description:
      "面向海外投资者和中国企业的一站式公司注册、财税合规、签证许可和跨境企业服务。",
    url: `${siteUrl}/zh`,
    siteName: companyName,
    type: "website",
    locale: "zh_CN"
  }
};

const services = [
  {
    title: "中国公司注册 / WFOE",
    text: "外资企业设立、经营范围规划、注册地址协调、工商登记、刻章、税务报到及后续合规。",
    icon: Building2
  },
  {
    title: "代理记账与税务服务",
    text: "月度记账、纳税申报、VAT、企业所得税、个税协调、财务报表和管理层报告。",
    icon: ShieldCheck
  },
  {
    title: "工作签证与居留许可",
    text: "外国人来华工作许可、居留许可、商务签证、家属签证和公司担保资质准备。",
    icon: Plane
  },
  {
    title: "境外公司注册",
    text: "香港、美国、新加坡、迪拜 / UAE 公司注册方案评估、文件准备和后续维护规划。",
    icon: Globe2
  }
];

const process = ["需求沟通", "方案规划", "文件准备", "提交申请", "税务与银行", "长期合规"];

export default function ZhHomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#06172c_0%,#0b2744_54%,#17211f_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gold" />
        <div className="container-shell relative grid min-h-[640px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase text-gold">ZYS Advisory 中文服务</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal md:text-6xl">
              让全球企业进入中国，也让中国企业走向世界。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              {companyName} 为海外投资者、国际中小企业和中国出海企业提供公司注册、财税合规、签证许可、审计协调和跨境企业服务。
            </p>
            <div className="mt-8 grid gap-3 text-sm leading-7 text-white/82 sm:grid-cols-3">
              {["中英文顾问沟通", "注册到合规一站式服务", "清晰报价与流程"].map((item) => (
                <p key={item} className="flex gap-2">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-gold" />
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/zh/contact"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-gold bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
              >
                预约咨询
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp 联系
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="rounded-md border border-white/12 bg-white/8 p-6 shadow-soft backdrop-blur">
            <p className="text-sm font-bold uppercase text-gold">服务定位</p>
            <h2 className="mt-3 text-2xl font-bold">Global Business Expansion Partner</h2>
            <p className="mt-4 text-sm leading-7 text-white/76">
              我们把公司设立、财务税务、签证许可、知识产权、进出口资质和长期合规放在同一个执行计划里，帮助客户降低沟通成本和合规风险。
            </p>
            <div className="mt-6 grid gap-3">
              {zhNavItems.map((item) => (
                <Link key={item.href} href={item.href} className="focus-ring flex items-center justify-between rounded-md border border-white/12 px-4 py-3 text-sm font-semibold text-white/86 hover:bg-white/10">
                  {item.label}
                  <ArrowRight aria-hidden="true" className="h-4 w-4 text-gold" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">核心服务</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              面向外资进入中国和中国企业出海的一站式企业服务。
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-md border border-line bg-paper p-6">
                  <Icon aria-hidden="true" className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">服务流程</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              从首次咨询到长期合规，流程清晰、节点可控。
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-6">
            {process.map((step, index) => (
              <div key={step} className="rounded-md border border-line bg-white p-5 shadow-sm">
                <p className="text-sm font-bold text-gold">0{index + 1}</p>
                <h3 className="mt-3 text-base font-bold text-ink">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-gold">公司资料下载</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              下载 ZYS Advisory Company Profile，了解服务范围、价格和流程。
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75">
              Website: www.zysadvisory.com | WhatsApp: {phoneNumber} | Email: {emailAddress}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={companyProfilePdfPath}
              download
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-gold bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
            >
              下载 PDF
              <Download aria-hidden="true" className="h-4 w-4" />
            </a>
            <Link
              href="/zh/company-profile"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/55 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              查看中文介绍
              <FileText aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
