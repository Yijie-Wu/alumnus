# 校友管理系统

## 运行前置条件

* 安装Python 3.11+
* 安装NodeJS 20.13.1+

## 如何打包

* 下载或者克隆代码到本地
* 打开终端, 进入代码所在目录

```shell
cd alumnus
cd app-ui # 进入UI目录
npm install -S -g cnpm # 安装cnpm
cnpm install # 安装相关UI库
npm run build  # 编译前端代码，编译完成以后会生成一个dist文件夹
# 将dist文件夹里到所有文件(不包括dist文件夹本身)复制到 app文件夹下面的static文件夹里，覆盖原来的文件
cd alumnus/app # 进入到alumnus/app文件夹下
pip3 install -r requirements.txt  # 安装python 依赖库
# 开始打包程序
pyinstaller application.spec

```






