---
title: 2024.12 Progress Report
description: "In December, eweOS solidified its progress with notable feature additions, comprehensive package updates, and strengthened multi-architecture support."
date: 2024-12-31
---

> In December, eweOS solidified its progress with notable feature additions, comprehensive package updates, and strengthened multi-architecture support.

## Image Updates

- [Xfce and LXQt now replace Hyprland as optional profiles](https://github.com/eweOS/iso/commit/47398f27b1bb20f0db90bc724fec6f0f2bbe909b) for live images, image generation workflow now builds the Xfce profile by default for desktop live images.
- `loongarch64` now [supports all live image profiles](https://github.com/eweOS/iso/commit/eac7a01125b20ee76fda372e7751aa91731150ba), ISOs are available in the repository

## Package Highlights

> 501 PRs merged in total during November 2024. 
> 61% (306) of them are [automated](https://github.com/eweOS/packages/pulls?q=is:pr+merged:2024-12-01..2024-12-31+label%3Aautomated)

> See a full list [here](https://github.com/eweOS/packages/pulls?q=is:pr+merged:2024-12-01..2024-12-31+).

> There are 1211 packages on eweOS in total
> 1204 (99.4%) are available on aarch64
> 1172 (96.7%) are available on riscv64
> 1167 (96.3%) are available on loongarch64

### Kernel

- linux [6.12.6](https://github.com/eweOS/packages/commit/efd92dcd83323c995a96e042bad4787384b27da7) and verified working on LoongArch real hardware.

### Toolchain / Programming Languages

- llvm [19.1.6](https://github.com/eweOS/packages/commit/2346175258d1f83ee013b36b681a6d9d8e4c7a00)
- perl with [library path adjusted](https://github.com/eweOS/packages/commit/0465a2694ae8e5db4040eb4d0c59e3b776abfce9)
- typst [0.12.0](https://github.com/eweOS/packages/commit/62e8cee92f13b63bc0fb931f34539f7ebf8a822f) (New)
- debugedit [5.1](https://github.com/eweOS/packages/commit/f233639feee1050a7e57219983721f3a67026276) (New)
- cmake [3.31.3](https://github.com/eweOS/packages/commit/d89ada831df0e41c91b2107a87fce76319dd8570)
- meson [1.6.1](https://github.com/eweOS/packages/commit/5975e8fae38895c386a80354e081992497d0791b)
- mold [2.35.0](https://github.com/eweOS/packages/commit/c7d1c257ab5b079d887f9909e13230d412c92d55)
- go [1.23.4](https://github.com/eweOS/packages/commit/45e9ed7ec4d59b26d6735cb38300020873805ac2)

### Utils

- python-sphinx [8.1.3](https://github.com/eweOS/packages/commit/0ce8d7fb9c566cebac7829a052db4e1320299db8) (New)
- python-pip [24.3.1](https://github.com/eweOS/packages/commit/52efe7ff9ef8174ece618cbc42637e9cf45a34c7) (New)
- imagemagick [7.1.1.43](https://github.com/eweOS/packages/commit/45db4d6393b5c08d4f724ea0f2b50826dddb3c4e) (New)
- fontforge [20230101](https://github.com/eweOS/packages/commit/10d6d95a5d231c95ef3abcb663b7c7e8a7ba11aa) (New)
- sane [1.3.1](https://github.com/eweOS/packages/pull/2486) (New)
- neovim [0.10.3](https://github.com/eweOS/packages/commit/d64b3ab5e50345c6dc0278283db9a97847589f55)
- nano [8.3](https://github.com/eweOS/packages/commit/87fdebbd5fa86a1c7f577cf52097698f34d19340)
- flashrom [1.5.1](https://github.com/eweOS/packages/commit/6f84bbb99dc418914493fba706ad72958214cae6)
- qemu [9.2.0](https://github.com/eweOS/packages/commit/23376356df49a17cdc079b624e108f77efbc274d)

### Libraries

- js128 [128.5.2](https://github.com/eweOS/packages/commit/d01bc0662d19bee5281f4f560ca73374bcc2a8b8) with [fixes for loongarch64](https://github.com/eweOS/packages/commit/6fb878716d3523fe00c9a6e90ef2910ba017bb58)
- boost [1.87.0](https://github.com/eweOS/packages/commit/2c68aef4c371c0c2a27280be6ed1de8c21f14a34)
- mesa [24.3.2](https://github.com/eweOS/packages/commit/af67cbcafad4428bc3e6ea1a3e2163f9b90aa6ac)
- pyqt6 [6.8.0](https://github.com/eweOS/packages/commit/4e2838ed2198c525789a44d98aa360361d6373b1) (New)
- openssh [9.9p1](https://github.com/eweOS/packages/commit/6e17bcc9b3ae40a0fc783506450ff6cbc0bd95b8) (New)
- libjxl [0.11.1](https://github.com/eweOS/packages/commit/88855583797f578ab506a3b845348f61cef4db93) (New)
- nodejs [23.4.0](https://github.com/eweOS/packages/commit/b411d279508fbad4064bd186c8d4063a375323eb) with [fixes for riscv64 and loongarch64](https://github.com/eweOS/packages/commit/0498fe5d0067ff875d2b9fe1e4842ca1dc47d255)
- pambase [20241203](https://github.com/eweOS/packages/commit/e57c0d8e72fc1200769833c9a31a9c2ad755d566) (New) is introduced to manage pam config in a standalone package
- ncnn [20240820](https://github.com/eweOS/packages/commit/8232b67dd50a3a2892e70f71bded5f88981effbf) (New) is now packaged, as required by our users.
- libseccomp is available [on loongarch64](https://github.com/eweOS/packages/commit/8dc1c39e394de7fdf8c5fc8e7a82facfb078c2ff) with test fixes
- protobuf [29.2](https://github.com/eweOS/packages/commit/91f6168f939b71aeb1568241c77adbc99d7bb4f2)
- curl [8.11.1](https://github.com/eweOS/packages/commit/29f0d6a92d6e14ce60038c5ce78535e4e6696a18)
- ctags [6.1.20241208.0-1](https://github.com/eweOS/packages/commit/1069e69d8f85280c8bcb3925283b6fdc6050942c)

### Desktop

- firefox [133.0.3](https://github.com/eweOS/packages/commit/7b028d1eed606dc58c2f58b23b6f2633b95801d5) is now built with [python 3.13.1](https://github.com/eweOS/packages/commit/224a26c1ad086b58dd08dc1f4009adb71dca9d85). [system libraries and fixes for loongarch64](https://github.com/eweOS/packages/commit/2af26d77aa575f138f433cd28e1f4dfe42ac7812) are also shipped.
- qgis [3.40.1](https://github.com/eweOS/packages/commit/90b7ea340a93d55563d7d7a0fc3bed212f085214) (New)
- merkaartor [0.20.0](https://github.com/eweOS/packages/commit/48e8e471534a8d48020a63e6208622ed4c5ffb49) (New)
- KDE Framework 6.9.0
- Xfce 4.20
- Xfce4 plugins (New)
- labwc [0.8.2](https://github.com/eweOS/packages/commit/dc79eb7c38ac75aaa9f527ac806164606d684e1f)
- gimp 3.0.0-RC2 is now fixed and verified to work in testing repo
- [intel-media-driver](https://github.com/eweOS/packages/commit/4c49c1c98cfca100589b82251e5b526b1583dda5) (New) is now packaged for VAAPI-based hardware transcoding on Intel platforms.

### Networking

- tor [0.4.8.13](https://github.com/eweOS/packages/commit/0b40f6a17c40d8e7969091d99b2ccd46546132b9) (New)
- bird [3.0.0](https://github.com/eweOS/packages/commit/dd28d2923b087fb8b0b6d8a44f7d5e64fe231533)

### Games

- luanti [5.10.0](https://github.com/eweOS/packages/commit/cb41ce82fc1d47f7be6d2687a67187db83c096da) (new) now replaces minetest

### Misc

- limine [8.6.1](https://github.com/eweOS/packages/commit/705b462dacf7b4d004ad3697d61e6dfd8b1a41be) with loongarch64 support enabled

### More

- ...and more!

## Upstream

- [Linux boot protocol support on LoongArch](https://github.com/limine-bootloader/limine/pull/439) is implemented in Limine
- [xdg-desktop-portal](https://github.com/flatpak/xdg-desktop-portal/pull/1550) test fixes


## Community

- Some new stickers have been designed and added to the artwork repository.
- A new version of the eweOS StickerSet [has been designed](https://github.com/eweOS/artwork/commit/e319034b7cc39fe28c771d09379ff32da3609507) and delivered for printing and will be distributed next month. The [Telegram Stickerset](https://t.me/addstickers/eweos_stickers) has been updated as well.

## Regular Meeting

> No regular meeting at this month.

## Gallery

![eweOS LoongArch64 running on Loongson 3A5000](/content-img/202412-progress-report/loongarch.jpg)
- eweOS LoongArch64 running on Loongson 3A5000

![eweOS LoongArch64 running on QEMU](/content-img/202412-progress-report/loongarch-vm.jpg)
- eweOS LoongArch64 running on QEMU

![eweOS AArch64 running on FT-D2000 laptop](/content-img/202412-progress-report/d2000.png)
- eweOS AArch64 running on FT-D2000 laptop
