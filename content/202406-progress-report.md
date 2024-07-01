---
title: 2024.06 Progress Report
description: "We're excited to share our progress report of June 2024, highlighting key advancements."
date: 2024-07-01
---

## Image Updates

- ISO is now generated [with uefi/mbr hybrid support](https://github.com/eweOS/iso/commit/2d265f803a70875dbf590755834b969b632e1f39) with cd profile of limine
- More [firmwares are included](https://github.com/eweOS/iso/commit/ed2c6cf06128136038b65b6d852f4296cb733077) in `liveimage-desktop` images
- [Remove linux kernel](https://github.com/eweOS/iso/commit/7a36d4f2d36a12d1aa8f30d9c46f50cac50bbe4f) from `tarball`
- `doas` can now [be an alternative](https://github.com/eweOS/iso/commit/5f9115cffad6344ed871f36d3b9f4fe61df1260e) for `sudo` in image creation
- [Added `liveimage-standard`](https://github.com/eweOS/iso/commit/bdd07c223dc25dc194268b05505412a54b0bf55b) to provide light desktop live experience

## Package Highlights

> 163 PRs merged in total during May 2024. See a full list [here](https://github.com/eweOS/packages/pulls?q=is:pr+merged:2024-06-01..2024-06-30+).

### Kernel

- `linux` [6.9.3](https://github.com/eweOS/packages/commit/1d0157c9ccbd714d44431bdef588b0a463da83af)

### Toolchain / Programming Languages

- `llvm` [18.1.7](https://github.com/eweOS/packages/commit/8e332319cb57232473ee43db70778f5e89795a5e) is also presented in `riscv64`, with [bug fixes in crtbegin.o](https://github.com/eweOS/packages/commit/3d9d036f05d39abe0579929b050997fbb4a8382b)
- Linking failures for multiple packages in `riscv64` is now identified with issue of `mold`.
- Linking failures for `llvm` in `riscv64` is now identified with issue of `llvm`. [Patch is submitted](https://github.com/llvm/llvm-project/pull/95848).
- `gdb` is temporary packaged in `testing` repo since `lldb-server` is now available in `riscv64`
- `go` [1.22.4](https://github.com/eweOS/packages/commit/4e24eff33622a74db45cec4fbb3dcbded49be29d)
- `mold` [2.32.0](https://github.com/eweOS/packages/commit/498ab25170189b967d3c198422d1316aa3b0529f)
- `cmake` [3.29.6](https://github.com/eweOS/packages/commit/f069496988ed49086b89935179aa0e3af9d6d8fd)
- `patchelf` [0.18.0](https://github.com/eweOS/packages/commit/ba85282f8c036a2299befe997c6ebbbfdc4949f3)

### Utils

- `qemu` [9.0.0](https://github.com/eweOS/packages/commit/9284e61f853040b074f176185a599170056048b3) (New)
- `turnstile` [0.1.8](https://github.com/eweOS/packages/commit/b8270728088bcf6e3084b64c31d8fa8151e7665e) (New) is now default desktop session manager and replaces `dinit-userservd` and `pam_rundir`
- `catnest` now [reloads configs automatically](https://github.com/eweOS/packages/commit/ccd471bca7ab617942d8db44f5fe0412c1280f64) when new config is installed
- `qemu` [9.0.0](https://github.com/eweOS/packages/commit/9284e61f853040b074f176185a599170056048b3) (New)
- `busybox` now [loads kernel modules correctly](https://github.com/eweOS/packages/commit/d96c19e17b3cc2ab6604f4167f10933fad4fa306)
- `tinyramfs` is now maintained in [forked repo of eweOS](https://github.com/eweOS/tinyramfs)
- `tinyramfs` now [handles kernel arguments correctly and accept `quiet` and `break` arguments](https://github.com/eweOS/tinyramfs/commit/5a9e947178a321daa6e89e3b54329e353bc49b47)
- `makepkg` now [warns about `glibc` in `depends`](https://github.com/eweOS/packages/commit/a28c17a7de64f8c15121cc4a70e64360b6d7cdf0)
- `mesa-demos` [9.0.0.r70](https://github.com/eweOS/packages/commit/56fc9c99055a41f067738113f0f89599fec3e449) (New)
- `gettext-tiny` now handles po file better. [Patch submitted to upstream](https://github.com/sabotage-linux/gettext-tiny/pull/70).

### Libraries

- `openssl` [3.0 transition](https://github.com/eweOS/packages/pull/475), [3.3.1](https://github.com/eweOS/packages/commit/592e05dff38b08b7f28d9797f2c5522c87203fb0) is provided now
- `mesa` now is [built with VA-API and vulkan drivers and splitted packages](https://github.com/eweOS/packages/commit/69982d00198bf7c64f7c0459268e2d2eaf10ce9f)
- `gtk3` [3.24.42 with im module fix](https://github.com/eweOS/packages/commit/8788148ef1b12cc5bd5e7b7f705abcda8c74a931)
- `libgcrypt` [1.11.0](https://github.com/eweOS/packages/commit/beb55ac006368f2940bcdc7b69f1f5f161853c42)
- `zlib-ng` [2.2.0](https://github.com/eweOS/packages/commit/ebbf622f2b06655c588f4fd76019440032851360)

### Bootloaders

- `limine` now supports linux protocol for `aarch64` and `riscv64` ([Submitted in upstream](https://github.com/limine-bootloader/limine/pull/370))
- `bios` / `pxe` / `cd` options are now [fully enabled](https://github.com/eweOS/packages/commit/0a315150a5c9a5b3b3020c12d3a4d1c78abd31df) for `limine`
- `limine-mkconfig` is now [rewritten](https://github.com/eweOS/packages/commit/5fc5fbbad142db4ba91ea7fc5b26d91b12466faf) to provide flexible config files

### Desktop Applications

- compositors:
    - `hyprland` [0.41.1](https://github.com/eweOS/packages/commit/db3361d1a00d66d9b7ca29a775bb2f4b3c8fcb03)
- games:
    - `supertux` [0.6.3](https://github.com/eweOS/packages/commit/26f45d16e5e880c97ea15fd5c57ee7fd8c011b46) (New)
    - `supertuxkart` [1.4](https://github.com/eweOS/packages/commit/f3b449a3a370227d941cee577833c5da1ec42d12) (New)
    - `warzone2100` [4.4.2](https://github.com/eweOS/packages/commit/c6e849dbc50bdadae807dac627ed8c61380cfefc) (New)
- text editors:
    - `featherpad` [1.5.1](https://github.com/eweOS/packages/commit/0cb31aa27a826e60a6539e4e6e4037790da9201b) (New)
    - `mousepad` [0.6.2](https://github.com/eweOS/packages/commit/7a4b4958ec8097f1fba2ad1de78e265c612794f1) (New)
- image viewers:
    - `fim` [0.7.1](https://github.com/eweOS/packages/commit/efa3ec0a6d956e50c16c6274011438d9db13f2cd) (New)
    - `swayimg` [2.2](https://github.com/eweOS/packages/commit/74fa2ce238383fe0b79c0419b432f23c85cb4647) (New)
- misc:
    - `telegram-desktop` [5.1.8](https://github.com/eweOS/packages/commit/98edc03533fb40658f2521f6d4ae5c093a62a26a)

### Server Applications

- `nginx` [1.27.0](https://github.com/eweOS/packages/commit/a22b6aaf90774a2cad7a06531f0a31167c017ffe)
- `caddy` [2.8.4](https://github.com/eweOS/packages/commit/f092a4e6bf65cefd2a0e8c7720f1a909583c89ad)

### Misc

- All binary packages in `riscv64` are now rebuilt against fixed llvm to avoid issues with broken `crtbegin.o`

### More

- ...and more!

## Infra

### Website

- The homepage of eweOS is now [fully rewritten](https://github.com/eweOS/web/tree/web-ng) with `nuxt` to provide better user experience. JavaScript is now optional for most pages.
- Blog of eweOS is [now fully static](https://os.ewe.moe/blog) to avoid API requests to GitHub.
- Traffic statistics of official repository servers are now [visible in website](https://os.ewe.moe/download).

### Build System

- `arch=` field is now supported in build system to exclude package building
- Unused source package generation is now disabled to reduce build time

### Repository

```
Current size of repositories:
11G     ./eweos
2.2G    ./eweos-images
```

- Added [`vnstati` traffic statistics collecting](https://os-repo-stats-lu.ewe.moe/) for all official repository servers
- New aliases of official mirrors are assigned, and will be primary urls of repositores
    - `os-repo-lu.ewe.moe`
    - `os-repo-cn.ewe.moe`

## Community

- eweOS repository is mirrored and hosted on [Mirror of Nanjing University](https://mirrors.nju.edu.cn/eweos/)
- `minecraft` is [verified to be able to be launched](https://t.me/eweos/5) via `flatpak`
- We are going to have a talk on AOSCC 2024 about our packaging policies and development
