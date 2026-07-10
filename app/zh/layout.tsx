export default function ZhLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div lang="zh-CN">{children}</div>;
}
