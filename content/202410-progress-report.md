---
title: 2024.10 Progress Report
description: "In October, eweOS continued its development with substantial system enhancements, package updates, and expanded community outreach, demonstrating its commitment to versatility and efficiency."
date: 2024-10-31
---

> In October, eweOS continued its development with substantial system enhancements, package updates, and expanded community outreach, demonstrating its commitment to versatility and efficiency.

## Image Updates

- `loongarch64` is [now supported](https://github.com/eweOS/iso/commit/a5b1143fb9226ab2e63253a99ff3f34cbb300af7) for tarball generation.

## Package Highlights

> 307 PRs merged in total during October 2024. 
> 35.5%(109) of them are [automated](https://github.com/eweOS/packages/pulls?q=is:pr+merged:2024-10-01..2024-10-31+label%3Aautomated)

> See a full list [here](https://github.com/eweOS/packages/pulls?q=is:pr+merged:2024-10-01..2024-10-31+).

### Kernel

- linux [6.11.3](https://github.com/eweOS/packages/commit/5c8b08074fb11b8d3ab52f6ce0735c29db1b9770)
- linux-lts [6.6.58](https://github.com/eweOS/packages/commit/ad1a1c475fbed554fdf84cd6bb9592d3df194fb8)
- [zstd compression of firmware](https://github.com/eweOS/kernel-config/commit/6e9b2e296331360db328f9b41669f2b3f542a0f2) is now enabled.
- [disabled ikheaders](https://github.com/eweOS/kernel-config/commit/45ec3905050bc391c4c46d832920d9edd44bd8db) to fix build failures.
- [loongarch64 support](https://github.com/eweOS/packages/commit/df43f3213077448331fcefbd20417555dbafcac0) is introduced

### Toolchain / Programming Languages

- llvm is now [splitted into more sub-packages](https://github.com/eweOS/packages/pull/1705)
- rust [1.82.0](https://github.com/eweOS/packages/pull/1833)
- cmake [3.30.5](https://github.com/eweOS/packages/pull/1692)
- meson [1.6.0](https://github.com/eweOS/packages/pull/1852)
- wine [9.20](https://github.com/eweOS/packages/pull/1849)

### Utils

- tinc [1.0.36](https://github.com/eweOS/packages/pull/1579) (New)
- vnstat [2.12](https://github.com/eweOS/packages/pull/1686) (New)
- vulkan-tools [1.3.290](https://github.com/eweOS/packages/pull/1762) (New)
- networkmanager [1.48.10](https://github.com/eweOS/packages/pull/1754) (New)
- mercurial [6.8.2](https://github.com/eweOS/packages/pull/1883)
- qemu [9.1.1](https://github.com/eweOS/packages/pull/1853)
- texlive-bin [20240312](https://github.com/eweOS/packages/pull/1760) (New)

![texlive demo](/content-img/202410-progress-report/texlive.jpg)

### Libraries

- poppler [24.09.0](https://github.com/eweOS/packages/pull/1629) (New)
- gd [2.3.3](https://github.com/eweOS/packages/pull/1668) (New)
- fontconfig: [added a hook](https://github.com/eweOS/packages/pull/1662) to rebuild font cache
- mesa: [enable and split panfrost driver](https://github.com/eweOS/packages/pull/1750)
- opencv [4.10.1](https://github.com/eweOS/packages/pull/1727) (New)
- js128 [128.3.1](https://github.com/eweOS/packages/pull/1770) (New)
- gjs [1.82.0](https://github.com/eweOS/packages/pull/1782) (New)
- python-numpy [2.1.2](https://github.com/eweOS/packages/pull/1725) (New)
- openssl [3.4.0](https://github.com/eweOS/packages/pull/1851)

![opencv demo](/content-img/202410-progress-report/opencv.jpg)

### Desktop

- gnome-terminal [3.54.0](https://github.com/eweOS/packages/pull/1795) (New)
- gnome-sound-recorder [42.0](https://github.com/eweOS/packages/pull/1794) (New)
- adw-gtk-theme [5.5](https://github.com/eweOS/packages/pull/1787) (New)
- firefox [131.0.3](https://github.com/eweOS/packages/pull/1742)
- sway [1.10](https://github.com/eweOS/packages/pull/1876)
- foot [1.19.0](https://github.com/eweOS/packages/pull/1864)

### Games

- minetest [5.9.1](https://github.com/eweOS/packages/pull/1749) (New)

![minetest demo](/content-img/202410-progress-report/minetest.jpg)

### Misc

- `loongarch64` arch is added to PKGBUILDs in repositories partially, 647/1011(63.9%) of them got built successfully.

### More

- ...and more!

## Infra

### Build System

- `loongarch64` is now added to the build system and enabled in main projects.

### Workflow

- rollmeow [0.2.3](https://github.com/eweOS/rollmeow/releases/tag/v0.2.3)
- ewe-pkgtool [0.3.0](https://github.com/eweOS/ewe-pkgtool/releases/tag/v0.3.0)

### Website

- `loongarch64` is now added to package info page

### Repository

```
41G    ./eweos
135G   ./eweos-snapshots

3.3G   ./eweos-images
73G    ./eweos-images-snapshots
```

## Upstream

- [fixed a bug](https://github.com/openSUSE/obs-build/pull/1026) of filelisting in Open Build Service
- [get unsupported arch excluded](https://github.com/openSUSE/obs-build/pull/1018) in Open Build Service
- [Fix building with LLVM on loongarch64](https://github.com/ivmai/bdwgc/pull/672) for gc

## Community

- eweOS is now mirrored and hosted on [mirror of Shandong University of Science and Technology](https://mirrors.sdust.edu.cn/eweos/)

## Regular Meeting

No regular meeting at this month!