import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeDollarSign, CheckCircle2, Download, HelpCircle, MessageCircle } from "lucide-react";
import {
  companyProfilePdfPath,
  companyProfilePricing,
  registrationProcess,
  requiredDocuments,
  visaPricing
} from "@/lib/companyProfile";
import { companyName, emailAddress, phoneNumber, siteUrl, whatsappUrl } from "@/components/seo";

export const metadata: Metadata = {
  title: "ZYS Advisory 公司资料 | 中国公司注册、财税、签证服务",
  description:
    "下载 ZYS Advisory 公司资料，了解中国公司注册、WFOE 外资公司注册、代理记账、税务服务、签证、工作许可、香港、美国、新加坡和迪拜公司注册服务。",
  alternates: {
    canonical: `${siteUrl}/zh/company-profile`,
    languages: {
      en: `${siteUrl}/company-profile`,
      "zh-CN": `${siteUrl}/zh/company-profile`
    }
  },
  openGraph: {
    title: "ZYS Advisory 公司资料 | 中国公司注册、财税、签证服务",
    description:
      "中文公司资料页，包含服务项目、价格参考、签证费用、注册流程、所需文件和联系方式。",
    url: `${siteUrl}/zh/company-profile`,
    siteName: companyName,
    type: "website",
    locale: "zh_CN"
  }
};

const services = [
  "中国公司注册 / WFOE 外资公司设立",
  "香港公司注册",
  "美国公司设立",
  "新加坡公司注册",
  "迪拜 / UAE 公司注册",
  "代理记账、税务申报与审计协调",
  "签证、工作许可与居留许可",
  "商标、知识产权、进出口资质"
];

const faqItems = [
  {
    question: "外国投资者可以在中国设立全资公司吗？",
    answer: "多数行业可以设立外商独资企业，但需要根据经营范围、行业准入、注册地址和当地审批要求进行判断。"
  },
  {
    question: "中国公司注册通常需要多长时间？",
    answer: "资料齐全后通常需要数周，具体取决于城市、经营范围、注册地址、特殊许可和税务开通进度。"
  },
  {
    question: "公司注册后是否必须记账报税？",
    answer: "是。中国公司注册后需要持续记账、纳税申报、年度报告，并保持可审计的财务资料。"
  },
  {
    question: "ZYS 是否可以同时处理中国注册和境外公司注册？",
    answer: "可以。我们可协助中国公司注册，也可支持香港、美国、新加坡、迪拜 / UAE 等境外公司注册规划。"
  }
];

const processLabels = ["咨询沟通", "架构与经营范围", "文件清单", "申请提交", "审批与执照", "银行税务与合规"];

export default function ZhCompanyProfilePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#06172c_0%,#0b2744_52%,#17211f_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gold/70" />
        <div className="container-shell relative grid min-h-[600px] items-center gap-12 py-20 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase text-gold">Company Profile 中文版</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal md:text-6xl">
              ZYS Advisory 公司资料与国际企业服务指南。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              了解 {companyName} 在中国公司注册、财税合规、签证工作许可、香港、美国、新加坡和迪拜公司注册方面的服务范围、流程和价格参考。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={companyProfilePdfPath}
                download
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-gold bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
              >
                下载 PDF
                <Download aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/55 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp 咨询
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="rounded-md border border-white/12 bg-white/8 p-6 shadow-soft backdrop-blur">
            <p className="text-sm font-bold uppercase text-gold">Global Business Expansion Partner</p>
            <h2 className="mt-3 text-2xl font-bold">服务覆盖中国市场进入与全球公司设立。</h2>
            <div className="mt-6 grid gap-3">
              {services.map((service) => (
                <p key={service} className="flex gap-3 text-sm leading-7 text-white/82">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-gold" />
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">价格参考</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              便于预算规划的服务起步价。
            </h2>
            <p className="mt-5 text-sm leading-7 text-graphite">
              以下价格为参考起步价，不含政府费用、第三方费用、翻译、公证、注册地址、银行及特殊许可费用，最终报价以具体服务范围为准。
            </p>
          </div>
          <div className="overflow-hidden rounded-md border border-line">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-ink text-white">
                <tr>
                  <th className="p-4 font-semibold">服务</th>
                  <th className="p-4 font-semibold">参考价格</th>
                  <th className="hidden p-4 font-semibold md:table-cell">说明</th>
                </tr>
              </thead>
              <tbody>
                {companyProfilePricing.map(([service, price, note]) => (
                  <tr key={service} className="border-t border-line align-top">
                    <td className="p-4 font-semibold text-ink">{service}</td>
                    <td className="p-4 text-gold">{price}</td>
                    <td className="hidden p-4 text-graphite md:table-cell">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">签证费用</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              中国签证、工作许可和居留许可支持。
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {visaPricing.map(([service, price, note]) => (
                <div key={service} className="rounded-md border border-line bg-white p-5 shadow-sm">
                  <BadgeDollarSign aria-hidden="true" className="h-6 w-6 text-gold" />
                  <h3 className="mt-4 font-bold text-ink">{service}</h3>
                  <p className="mt-2 text-lg font-bold text-evergreen">{price}</p>
                  <p className="mt-2 text-sm leading-7 text-graphite">{note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md bg-ink p-6 text-white">
            <p className="text-sm font-bold uppercase text-gold">所需文件</p>
            <h2 className="mt-3 text-2xl font-bold">常见材料清单</h2>
            <div className="mt-6 space-y-4">
              {requiredDocuments.map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-7 text-white/82">
                  <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-gold" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">注册流程</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              从架构规划到执照取得，再到银行、税务和合规落地。
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
            {registrationProcess.map((step, index) => (
              <div key={step} className="relative rounded-md border border-line bg-paper p-5">
                <p className="text-sm font-bold text-gold">0{index + 1}</p>
                <h3 className="mt-3 text-base font-bold text-ink">{processLabels[index]}</h3>
                <p className="mt-2 text-xs leading-5 text-graphite">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-evergreen">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              常见问题。
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-md border border-line bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer items-center gap-3 text-lg font-bold text-ink">
                  <HelpCircle aria-hidden="true" className="h-5 w-5 flex-none text-gold" />
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-graphite">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white md:py-20">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-gold">下载与咨询</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              下载公司资料或直接联系 ZYS 顾问。
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
              href="/zh/contact"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/55 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              联系我们
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
