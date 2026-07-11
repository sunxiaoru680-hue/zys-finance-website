import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  businessHours,
  companyName,
  emailAddress,
  officeAddress,
  phoneNumber,
  siteUrl,
  whatsappQrAlt,
  whatsappQrImage
} from "@/components/seo";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "联系 ZYS Advisory | 中国公司注册、财税与签证咨询",
  description:
    "通过 WhatsApp 或邮件联系 ZYS Advisory，咨询中国公司注册、外资公司注册、代理记账、税务服务、工作签证、香港公司、美国公司、新加坡公司和迪拜公司注册。",
  alternates: {
    canonical: `${siteUrl}/zh/contact`,
    languages: {
      en: `${siteUrl}/contact`,
      "zh-CN": `${siteUrl}/zh/contact`
    }
  },
  openGraph: {
    title: "联系 ZYS Advisory | 中国公司注册、财税与签证咨询",
    description: "预约中文或英文顾问，沟通公司注册、财税合规、签证许可和跨境企业服务。",
    url: `${siteUrl}/zh/contact`,
    siteName: companyName,
    type: "website",
    locale: "zh_CN"
  }
};

const contactDetails = [
  {
    label: "WhatsApp",
    value: phoneNumber,
    icon: MessageCircle
  },
  {
    label: "Email",
    value: emailAddress,
    href: `mailto:${emailAddress}`,
    icon: Mail
  },
  {
    label: "Phone",
    value: phoneNumber,
    href: `tel:${phoneNumber.replace(/\s/g, "")}`,
    icon: Phone
  },
  {
    label: "Office Address",
    value: officeAddress,
    icon: MapPin
  },
  {
    label: "Business Hours",
    value: businessHours,
    icon: Clock
  }
];

export default function ZhContactPage() {
  return (
    <>
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-bold uppercase text-gold">联系我们</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal md:text-6xl">
            预约中国公司注册、财税、签证或跨境企业服务咨询。
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
            请告诉我们你的业务类型、目标城市、股东结构、签证需求和时间计划。ZYS 顾问会根据实际情况提供下一步建议。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              source="zh_contact_hero"
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#25D366] bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              WhatsApp 联系
            </WhatsAppButton>
            <a
              href={`mailto:${emailAddress}`}
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              发送邮件
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase text-evergreen">联系方式</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              与 ZYS 中英文顾问沟通你的商业计划。
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">
              如果项目有明确截止日期，请同时说明目标日期和目前文件准备情况，便于我们判断可行时间表。
            </p>
            <div className="mt-8 grid gap-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <span className="flex gap-4 rounded-md border border-line bg-white p-5 text-sm leading-7 text-graphite shadow-sm transition hover:shadow-soft">
                    <Icon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-evergreen" />
                    <span>
                      <span className="block font-bold text-ink">{detail.label}</span>
                      <span>{detail.value}</span>
                    </span>
                  </span>
                );

                if (detail.label === "WhatsApp") {
                  return (
                    <WhatsAppButton
                      key={detail.label}
                      source="zh_contact_details"
                      className="focus-ring block text-left"
                      iconClassName="hidden"
                    >
                      {content}
                    </WhatsAppButton>
                  );
                }

                return detail.href ? (
                  <a key={detail.label} href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {content}
                  </a>
                ) : (
                  <div key={detail.label}>{content}</div>
                );
              })}
            </div>
          </div>
          <div className="rounded-md border border-line bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase text-evergreen">WhatsApp Business</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight">
              扫描二维码直接联系 ZYS。
            </h2>
            <p className="mt-4 text-sm leading-7 text-graphite">
              可用于咨询、资料沟通、项目进度跟进和服务报价确认。
            </p>
            <Image
              src={whatsappQrImage}
              alt={whatsappQrAlt}
              width={480}
              height={852}
              className="mt-6 h-auto w-full max-w-xs rounded-md border border-line bg-white"
              sizes="320px"
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                source="zh_contact_qr"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-bold text-white"
              >
                Open WhatsApp
              </WhatsAppButton>
              <Link
                href="/zh/company-profile"
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-line px-5 py-3 text-sm font-bold text-ink"
              >
                查看公司资料
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
