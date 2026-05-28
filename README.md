# Holytear Instagram Unfollowers

A lightweight GitHub Pages site and browser-console snippet for finding Instagram
accounts that do not follow you back.

[Open the site](https://holytear.github.io/instagram-unfollowers/)

## Features

- Scans only the accounts you follow.
- Uses Instagram's `follows_viewer` field instead of scraping your full follower list.
- Includes search, filters, hide/unhide, copy, and slow unfollow controls.
- Has a clean floating UI with TR/EN language support.
- Includes a security page with source links, verification notes, and the current snippet hash.
- Semgrep CI workflow for static analysis.

## Usage

1. Sign in at `https://www.instagram.com`.
2. Open DevTools Console.
3. Copy the snippet from [holytear.github.io/instagram-unfollowers](https://holytear.github.io/instagram-unfollowers/).
4. Paste it into the console and press Enter.
5. Click **Scan now**.

If Chrome blocks pasting, type `allow pasting` in the console first.

## Development

```bash
npm run check
npm run build
```

## Contact

Questions and feedback: [selimyalcnts@gmail.com](mailto:selimyalcnts@gmail.com)

## Credits

Inspired by the original workflow from
[davidarroyo1234/InstagramUnfollowers](https://github.com/davidarroyo1234/InstagramUnfollowers)
(MIT) and the rewrite from
[cobanov/instagram](https://github.com/cobanov/instagram).

## License

MIT — see [LICENSE](LICENSE).
