import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { I18nProvider } from "fumadocs-ui/i18n";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s - Coffee Host",
		default: "Coffee Host 官方文檔",
	},
	description: "Coffee Host 官方文檔",
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<body className="flex min-h-screen flex-col">
				<I18nProvider
					locale="cn"
					translations={{
						cn: {
							name: "Traditional Chinese",
							toc: "目錄",
							search: "在此搜尋...",
							searchNoResult: "找不到任何結果",
							lastUpdate: "最後更新於",
							previousPage: "上一頁",
							nextPage: "下一頁",
						},
					}}
				>
					<RootProvider>{children}</RootProvider>
				</I18nProvider>
				<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fc0c46db83974e1e8666c368312952c3"}'></script>
			</body>
		</html>
	);
}
