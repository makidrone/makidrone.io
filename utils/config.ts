const socialIds = {
	discord: "72139729285427200",
	twitter: "_makidoll",
	github: "makidoll",
	// instagram: "makidrone_",
	soundcloud: "makidoll",
	steam: "makidoll",
	skeb: "@Maki",
	psnProfiles: "makifoxgirl",
	matrix: "@maki:hotmilk.space",
	mfc: "MakiXx_",
	sketchfab: "makidoll",
	osu: "3286216",
	flickr: "125408076@N04",
	mastodon: {
		instance: "mastodon.hotmilk.space",
		id: "110755825766915676",
		username: "maki",
	},
	xmpp: "maki@hotmilk.space",
};

const socialLinks = {
	// discord: "https://discord.com/users/" + socialIds.discord,
	twitter: "https://twitter.com/" + socialIds.twitter,
	github: "https://github.com/" + socialIds.github,
	githubGist: "https://gist.github.com/" + socialIds.github,
	// instagram: "https://instagram.com/" + socialIds.instagram,
	soundcloud: "https://soundcloud.com/" + socialIds.soundcloud,
	steam: "https://steamcommunity.com/id/" + socialIds.steam,
	skeb: "https://skeb.jp/" + socialIds.skeb,
	psnProfiles: "https://psnprofiles.com/" + socialIds.psnProfiles,
	matrix: "https://matrix.to/#/" + socialIds.matrix,
	osu: "https://osu.ppy.sh/users/" + socialIds.osu,
	mfc: "https://myfigurecollection.net/" + socialIds.mfc,
	flickr: "https://www.flickr.com/photos/" + socialIds.flickr,
	uptime: "https://uptime.hotmilk.space",
	sketchfab: "https://sketchfab.com/" + socialIds.sketchfab,
	mastodon: `https://${socialIds.mastodon.instance}/@${socialIds.mastodon.username}`,
	pronounsPage: "https://en.pronouns.page/@makidoll",
	kofi: "https://ko-fi.com/makidoll",
	codewars: "https://www.codewars.com/users/makidoll",
};

export const config = {
	api: {
		lanyard: "wss://lanyard.makidoll.io/socket",
		// bibliogram: "https://bibliogram.cutelab.space",
		// nitter: "https://nitter.cutelab.space",
	},
	socialIds,
	socialLinks,
	styles: {
		hoverTransition: "transform .15s ease-in-out",
	},
	selfHostedLinkTooltipMap: {
		"makidoll.io": "or maki.cafe",
	},
};
