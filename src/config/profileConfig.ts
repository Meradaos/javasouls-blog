import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/demo-avatar.webp", // 后续替换为你的头像
	name: "JavaSouls",
	bio: "Java 之魂 | 用费曼学习法把并发编程讲透",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com", // TODO: 替换为你的 GitHub 地址
		},
	],
});
