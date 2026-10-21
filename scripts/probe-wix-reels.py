import json
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

options = webdriver.ChromeOptions()
options.add_argument("--headless=new")
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")
options.add_argument("--autoplay-policy=no-user-gesture-required")
options.set_capability("goog:loggingPrefs", {"performance": "ALL"})

for label, url in [
    ("ACTION_HOME", "https://www.chimaakenzua.com/"),
    ("PARKOUR_COORDINATOR", "https://www.chimaakenzua.com/parkourdirector")
]:
    driver = None
    try:
        driver = webdriver.Chrome(options=options)
        driver.set_page_load_timeout(45)
        driver.get(url)
        time.sleep(10)
        media = driver.execute_script("""
          return {
            iframes: [...document.querySelectorAll('iframe')].slice(0,35).map(e => ({id:e.id, src:e.src, title:e.title})),
            videos: [...document.querySelectorAll('video')].slice(0,15).map(e => ({src:e.src,currentSrc:e.currentSrc,duration:e.duration})),
            players: [...document.querySelectorAll('[class*=VideoPlayer]')].slice(0,8).map(e => ({id:e.id,tag:e.tagName,html:e.outerHTML.slice(0,1300)}))
          };
        """)
        print("VIDEO_PAGE", label, json.dumps(media)[:13000], flush=True)
        found = []
        for entry in driver.get_log("performance"):
            try:
                message = json.loads(entry["message"])["message"]
                if message.get("method") not in ("Network.requestWillBeSent", "Network.responseReceived"): continue
                info = message.get("params", {}).get("request") or message.get("params", {}).get("response") or {}
                candidate = info.get("url", "")
                if any(k in candidate.lower() for k in ("vimeo.com", "youtube.com", "wixstatic.com/video/", "m3u8", ".mp4", "video.wix", "mpd", "wixvideo")):
                    found.append(candidate)
            except Exception:
                pass
        print("VIDEO_NETWORK", label, json.dumps(list(dict.fromkeys(found))[:45])[:13000], flush=True)
    except Exception as exc:
        print("VIDEO_ERROR", label, type(exc).__name__, str(exc)[:600], flush=True)
    finally:
        if driver:
            driver.quit()
