import webview


# 在PyWebview应用程序中加载FastAPI应用程序的URL
webview.create_window('大屏轮播', 'http://127.0.0.1:8000/#/big-screen', fullscreen=False)
webview.start()
