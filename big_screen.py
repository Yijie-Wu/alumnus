import webview


# 在PyWebview应用程序中加载FastAPI应用程序的URL
webview.create_window('校友管理系统', 'http://localhost:5173/big-screen', fullscreen=True)
webview.start()
