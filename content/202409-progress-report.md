---
title: 2024.09 Progress Report
description: "In September, eweOS saw significant strides in package updates and system improvements, further solidifying its robust development and user engagement efforts."
date: 2024-09-30
---

> In September, eweOS saw significant strides in package updates and system improvements, further solidifying its robust development and user engagement efforts.

## Image Updates

- [limine 8.x is adapted](https://github.com/eweOS/iso/commit/c87aa49a994fb00336dfc76a6606296d7f7647e3) on live images

## Package Highlights

> 405 PRs merged in total during September 2024. 
> 45.6%(185) of them are [automated](https://github.com/eweOS/packages/pulls?q=is:pr+merged:2024-09-01..2024-09-30+label%3Aautomated)

> See a full list [here](https://github.com/eweOS/packages/pulls?q=is:pr+merged:2024-09-01..2024-09-30+).

### Kernel

- linux [6.11](https://github.com/eweOS/packages/pull/1348)
- linux-lts [6.6.52](https://github.com/eweOS/packages/pull/1352)
- [`cdrom` driver is now enabled](https://github.com/eweOS/packages/pull/1289) by default in all architectures
- [NLS configs are enabled and set up](https://github.com/eweOS/kernel-config/commit/6299f299c222bdb244168cd1148a3d808552908d) in kernel config

### Toolchain / Programming Languages

- ghc is [now available on `aarch64`](https://github.com/eweOS/packages/pull/1411)
- cabal is [now available on `aarch64`](https://github.com/eweOS/packages/pull/1474)
- mold [2.34.0](https://github.com/eweOS/packages/pull/1426), now patched to [have 1MiB `PT_GNU_STACK`](https://github.com/eweOS/packages/pull/1356) to prevent overflow during linking
- go [1.23.1](https://github.com/eweOS/packages/pull/1224)
- cbindgen[0.27.0](https://github.com/eweOS/packages/pull/1222)

### Utils

- dinit early services are now [idempotent for soft-reboot](https://github.com/eweOS/dinit-services/commit/d0b7da4842be326b68fa169523d1fd3237378e0a)
- dinit [0.19.0](https://github.com/eweOS/packages/pull/1360), wrapper removed
- dinit services are now [adapted to standard directories](https://github.com/eweOS/dinit-services/commit/74b15bd0f317f2bc33d3a571093cdd530b561541), all service files in repository are now updated
- qemu-user-static [9.1.0](https://github.com/eweOS/packages/pull/1270) (New)
- binfmt-manager [20240915](https://github.com/eweOS/packages/pull/1305) (New)
- minicom [2.9](https://github.com/eweOS/packages/pull/1139) (New)
- mpd [0.23.15](https://github.com/eweOS/packages/pull/1117) (New)
- mpc [0.35](https://github.com/eweOS/packages/pull/1141) (New)
- ncmpc [0.49](https://github.com/eweOS/packages/pull/1142) (New)
- bash [5.2.37](https://github.com/eweOS/packages/pull/1436)
- busybox [1.37.0](https://github.com/eweOS/packages/pull/1458), `modinfo` command now [supports `-k` option](https://github.com/eweOS/packages/pull/1403)
- shellcheck [0.10.0](https://github.com/eweOS/packages/pull/1218) (New)
- pacman [7.0.0](https://github.com/eweOS/packages/pull/1304)
- nano [8.2](https://github.com/eweOS/packages/pull/1208)

### Libraries

- minizip-ng [4.0.7](https://github.com/eweOS/packages/pull/1211) is now default minizip implementation
- bluez [5.77.1](https://github.com/eweOS/packages/pull/1205) (New)
- [wlroots0.18](https://github.com/eweOS/packages/pull/1182) and [wlroots0.17](https://github.com/eweOS/packages/pull/1181) are splitted into two packages
- openssl is now [enabled for ffmpeg](https://github.com/eweOS/packages/pull/1197) to support network streaming in ffmpeg
- [soup](https://github.com/eweOS/packages/pull/1163) and [mp3lame](https://github.com/eweOS/packages/pull/1155) are now enabled in gstreamer to support network streaming of mp3 music
- mesa [24.2.1](https://github.com/eweOS/packages/pull/1152), libGLX is now enabled without X to provide compatibility for OpenGL

### Desktop

- gsettings-desktop-schemas [got `gsettings-system-schemas` splitted](https://github.com/eweOS/packages/pull/1547)
- kdenlive [24.08.1](https://github.com/eweOS/packages/pull/1544) (New)
- KDE Framework packages and QT 6.7.2 (New)
- wcm [0.9.0](https://github.com/eweOS/packages/pull/1515) (New)
- firefox [13.0.1](https://github.com/eweOS/packages/pull/1520)
- netease-cloud-music-gtk [2.4.1](https://github.com/eweOS/packages/pull/1483) (New)
- kwallet [6.6.0](https://github.com/eweOS/packages/pull/1484) (New)
- wayfire [0.9.0](https://github.com/eweOS/packages/pull/1457)
- wf-shell [0.8.1](https://github.com/eweOS/packages/pull/1276) (New)
- nwg-hello [0.2.4](https://github.com/eweOS/packages/pull/1448) (New)
- gnome-keyring [46.2](https://github.com/eweOS/packages/pull/1443) (New)
- fractal [8](https://github.com/eweOS/packages/pull/1440) (New)
- telegram-desktop [5.5.5](https://github.com/eweOS/packages/pull/1438)
- hyprland [0.43.0](https://github.com/eweOS/packages/pull/1286)
- niri [0.1.8](https://github.com/eweOS/packages/pull/1217) (New)
- xdg-desktop-portal-wlr [0.7.1](https://github.com/eweOS/packages/pull/1216) (New)
- xdg-desktop-portal-gtk [1.15.1](https://github.com/eweOS/packages/pull/1212)
- ffmpeg [with openssl enabled](https://github.com/eweOS/packages/pull/1197)
- mpvpaper [1.7](https://github.com/eweOS/packages/pull/1194) (New)
- labwc [0.8.0](https://github.com/eweOS/packages/pull/1183) (New)
- wlroots [0.18](https://github.com/eweOS/packages/pull/1182) (New)
- wine [9.16](https://github.com/eweOS/packages/pull/1160) (New)
- waylyrics [0.3.13](https://github.com/eweOS/packages/pull/1153) (New)

### Misc

- `/opt` directory is now [present in filesystem](https://github.com/eweOS/packages/pull/1290) by default

### More

- ...and more!

## Infra

### Build System

- We opened up SSH access to all build machines to developers
- LoongArch 3A6000 motherboard is now on the rack and in the build system

### Workflow

- CI build matrix is now [generated dynamically](https://github.com/eweOS/workflow/commit/1db4b344e415941f47e1ef8ab21f9574332daab8) to reduce builds for arch-limited or arch-independent(`any`) packages

### Website

- Bot command for package upgrade [is now available](https://github.com/eweOS/web/commit/ecff2f0162075ed1e8d5e06e53d27688c028a9d9) by simply clicking on the labels

### Repository

```
Current size of repositories:
15G     ./eweos
3.4G    ./eweos-images

Current size of snapshot repositories:
61G     ./eweos-snapshots
33G     ./eweos-images-snapshots
```

## Community

- Some acrylic keychains for eweOS have been made and will be distributed at future offline events.

## Regular Meeting

No regular meeting at this month!