---
title: C1902 刷机教程
---

# C1902 刷入系统

::: tip 准备
建议在 **Linux 系统或 Linux 虚拟机** 下进行刷机操作。虚拟机和 SDK Manager 安装方法可参考 [vmware虚拟机安装说明](#)。
:::

## 1. 使用 NVIDIA SDK Manager 进行刷机

### 1.1 设置 VMware 的 USB 模式

将 USB 连接模式设置为 **将设备连接到前台虚拟机**，避免刷机中途开发板重启导致失败。

![VMware USB 设置 1](/img/flash-vmware-usb-1.png)

![VMware USB 设置 2](/img/flash-vmware-usb-2.png)

### 1.2 进入恢复模式

1. 使用跳线帽短接开发板上的 **FC REC** 和 **GND** 针脚。
2. 使用 USB to Type-C 数据线将开发板连接到电脑。
3. 接通开发板的 DC 电源。

> 成功进入恢复模式后，SDK Manager 会自动检测到核心卡类型，并提示选择套件类型，同时散热器风扇不会工作。

![FC REC 跳线短接](/img/flash-recovery-jumper.jpg)

![恢复模式已检测到](/img/flash-recovery-detected.png)

::: warning 注意
进入恢复模式后一段时间内不操作会重启进入系统，请注意操作时机。
:::

### 1.3 配置 SDK

1. 取消 **Host Machine**，并点击 **CONTINUE**

![取消 Host Machine](/img/flash-sdk-cancel-host.png)

2. 只勾选 **Jetson Linux**

![只勾选 Jetson Linux](/img/flash-sdk-jetson-linux.png)

### 1.4 等待下载完成

![等待下载中](/img/flash-downloading.png)

### 1.5 配置刷机参数

**Pre-Config**：预设账号密码

![Pre-Config](/img/flash-preconfig.png)

**Runtime**：开机后自行配置账号密码

![Runtime](/img/flash-runtime.png)

**Storage Device**：系统刷入的介质，根据不同设备自行选择（内存卡 / 固态硬盘 / U盘）

![存储设备选择](/img/flash-storage-device.png)

选择 **Developer Kit Version**：

![选择 Developer Kit 版本](/img/flash-devkit-version.png)

![刷机进行中](/img/flash-sdk-flashing.png)

![刷机完成](/img/flash-sdk-done.png)

::: warning 注意事项
- 刷入过程中开发板可能会多次与主机重新连接，**请勿途中拔开数据线或切断开发板电源**。
- 可以在识别到开发板类型以后就拔掉跳线帽。
- 耐心等待刷机完成，大约 **10~20 分钟**。
:::

> 刷入完成后，拔掉跳线帽，上电正常进入系统桌面或初始化设置页面即刷机成功。

---

## 2. 使用命令行刷入 SUPER 固件

::: warning 前置条件
此操作需依赖官方固件环境，请先通过 SDK Manager 完成至少一次完整的烧录以创建固件缓存。
:::

### 2.1 进入恢复模式

使用跳线帽短接 **FC REC** 和 **GND** 针脚，使用 Type-C 数据线连接至电脑并接通开发板电源，使开发板进入恢复模式。

### 2.2 使用官方固件进行命令行刷机

::: danger 提醒
操作前请**关闭正在运行的 SDK Manager 软件**。刷入过程约为 **10~20 分钟**。
:::

**JetPack 6.2 版本刷入指令：**

```bash
cd /home/ubuntu/nvidia/nvidia_sdk/JetPack_6.2.1_Linux_JETSON_ORIN_NANO_TARGETS/Linux_for_Tegra
# 仅供参考，需要根据实际版本和路径进行修改

sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

**JetPack 5.1.5 版本刷入指令：**

```bash
cd /home/ubuntu/nvidia/nvidia_sdk/JetPack_5.1.5_Linux_JETSON_ORIN_NANO_TARGETS/Linux_for_Tegra
# 仅供参考，需要根据实际版本和路径进行修改

sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml \
  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

![命令行刷机中](/img/flash-cli-flashing.png)

### 2.3 验证是否处于 SUPER 模式

开发板上电开机完成用户配置后，在桌面右上角可以选择电源模式：
- **25W & MAXN SUPER** 为 SUPER 模式独有
- 普通模式只有 **7W** 和 **15W** 两档

![SUPER 模式验证](/img/flash-super-mode-verify.png)

---

## 3. 备份与恢复现有固件

### 3.1 备份固件

**方法一：硬件进入恢复模式**
- 使用跳线帽短接 **FC REC** 和 **GND** 针脚
- 使用 Type-C 数据线连接至电脑
- 接通开发板电源，使开发板进入恢复模式

**方法二：命令重启到恢复模式**
- 在正常开机状态下连接到主机，输入以下命令：

```bash
sudo reboot -f forced-recovery
```

**刷机步骤：**

1. 进入到原刷机固件缓存下的命令行目录：
```bash
cd /home/ubuntu/nvidia/nvidia_sdk/JetPack_6.2.1_Linux_JETSON_ORIN_NANO_TARGETS/Linux_for_Tegra
# 仅供参考，需要根据实际版本和路径进行修改
```

2. 主机上安装依赖包：
```bash
sudo apt-get install qemu-user-static libxml2-utils abootimg sshpass nfs-kernel-server binutils
```

3. **备份命令**：
```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -b -e nvme0n1 jetson-orin-nano-devkit-nvme
```

4. **恢复命令**：
```bash
sudo ./tools/backup_restore/l4t_backup_restore.sh -r -e nvme0n1 jetson-orin-nano-devkit-nvme
```

::: warning 第三方载板注意
若您使用第三方载板恢复备份，需要修改 `nvrestore_partitions.sh`，注释掉 **292~296 行**的内容。
:::

---

[← 返回 C1902 产品介绍](/c1902)

> 来源：[控元科技（广州）有限公司 — C1902刷入系统](https://www.linkzeelabs.com/wiki/books/68839/page/c1902)
