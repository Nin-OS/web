---
title: 2024.05 Progress Report
description: "We're excited to share our progress report of May 2024, highlighting key advancements."
date: 2024-05-31
---

## Package Highlights

> 131 PRs merged in total during May 2024. See a full list [here](https://github.com/eweOS/packages/pulls?q=is:pr+merged:2024-05-01..2024-06-01+).

### Kernel

- `linux` [6.9.2](https://github.com/eweOS/packages/commit/846b732dc5b11773fe22d165ad070401798a6bdb)
- `linux-lts` [6.6.31](https://github.com/eweOS/packages/commit/320444f7e527ce4938eca3df2db81fc9ca13e4b4) (New) We are now providing both latest stable and latest stable-lts kernels.

### Toolchain / Programming Languages

- Another group of python packages.
- `vala` [0.56.17](https://github.com/eweOS/packages/commit/e5cbc96e624535d7f29d40879828015f021cf3a0) (New)
- `go` [1.22.3](https://github.com/eweOS/packages/commit/5ab9fa76d10ab65968e7803011dc086a11a068ab). Go is available on riscv64 now.
- `rust` [1.78.0](https://github.com/eweOS/packages/commit/1f5e0378c79a267d819df88b85c09d01d2c2b685)

### Utils

- `makepkg` now [defines `JOBS`](https://github.com/eweOS/packages/commit/13996ce790f61fa9f50a57dcb01eab3999fba7e9) to adjust parallelism
- `tmux` [3.4](https://github.com/eweOS/packages/commit/b8fc9e5b3d7f941dc3f3af4df44d639403918cd8)
- `util-linux` [2.40.1](https://github.com/eweOS/packages/commit/8d513a5c3f2c9691fe3de2a6e695dd314dd9b771)
- `acpid` [service](https://github.com/eweOS/packages/commits/49ce141081d600b419d6491d2ff35708cf8d73ec)
- `cups` [2.4.8](https://github.com/eweOS/packages/commit/73881de32c3b190b9a17b39c54902a186e9737cb) (New) and related packages
- `nmap` [7.95](https://github.com/eweOS/packages/commit/cdedd62fa4a00e9b8660c055cebba44104f26d03) (New)

### Libraries

- `icu` [75.1](https://github.com/eweOS/packages/commit/cc41dbf63e66b0a5e53de3c8e4372a324b17c38a)
- `gettext-tiny` [0.3.2.r4](https://github.com/eweOS/packages/commit/b994631e772219ac583593e9ac4ff2f991f0f92a) (New) now replaces `gettext`
- `ffmpeg` [7.0](https://github.com/eweOS/packages/commit/07d6d68f6b8ab85ccdfd8a54e32a489595b8a214)
- `ncurses` [6.5](https://github.com/eweOS/packages/commit/a83261812126be3aafc5f7541a62123071a54806)
- `libva` [2.21.0](https://github.com/eweOS/packages/commit/94af999edf8d15aec179bd9a6eb36dd0da8fa9c6) (New) and vaapi support for some packages
- `openssl` [3.3.0](https://github.com/eweOS/packages/commit/d091f45bd06df84e8351c6bc44f2a4e63cf927be) and its transitions

### Fonts

- Font package names now follow the format of `font-{fontname}` and provide fonts in the format of `{ttf,otf}-{fontname}`.

### Desktop Applications

- Some GNOME applications
- Some packages for KDE Framework 6.1.0
- `fcitx5-chinese-addons` [5.1.4](https://github.com/eweOS/packages/commit/9916c0de38717e8dbc7a5bff5b9a66a60479e265) (New) to support Chinese IME.
- `telegram-desktop` [5.0.1](https://github.com/eweOS/packages/commit/295f8fb4487069d7692ce753ed2e6fb45b7fbaf9) (New)
- `wayvnc` [0.8.0](https://github.com/eweOS/packages/commit/c3f83b3686e0d0f21d741ad21d54a9b1f8136d77) (New) to provide VNC support

### More

- ...and more!

## Infra

### Workflow

- [Added a workflow](https://github.com/eweOS/workflow/blob/master/.github/workflows/bump_rel.yml) to bump `pkgrel` for packages and open PR automatically.
- [Added a workflow](https://github.com/eweOS/workflow/commit/5a57165226b3e6ba83c4bbbfd6e2819d66f38b87) to check diff in package files for PRs.
- [Added a workflow](https://github.com/eweOS/workflow/commit/bac56b7471906a5ee5df6ed2b7e6ea47d40550ab) to create a blank package branch, as a step to enforce PRs instead of direct commit to package repository.
- Packages from PR workflow are now [uploaded as artifacts](https://github.com/eweOS/workflow/commit/2dad8f65ffb407366934c80a43206e3243a0507a).
- [Added auto approval](https://github.com/eweOS/workflow/commit/d0864c7ad73b1f9ac64356058db0a5d50f7f10e1) for helper bot, and now two approvals (including one from helper bot) are required to merge a PR.

### Build System

- Disable chained rebuild to ensure each rebuild is triggered by a new `pkgrel`.

### Website

- Package list page is now [optimized](https://github.com/eweOS/web/commit/cf4bdb0119124d8317bd4a73063fbf0cf0caee81) to provide lag-free experience.

### Repository


```
    Current size of repositories:
    7.2G    ./eweos
    2.2G    ./eweos-images
```

- Images in repositories are now pulled periodically (once a week) from GitHub Actions.
- An [oracle object storage](https://os-repo-oracle.ewe.moe) is now deployed, serving eweOS images.

## Community

- eweOS repository is mirrored and hosted on [Mirror of Wuchang Shouyi University](https://mirrors.wsyu.edu.cn/eweos/)
- Telegram groups and channels are renamed and assigned with [new logos](https://github.com/eweOS/artwork/commit/a58aff31495c271d306b6d282d8bb9629d693c13). [A new group](https://t.me/eweospkg) is created for news of GitHub repositories. [A new channel](https://t.me/eweos) is created for news and updates.
