import shutil
import os

files = [
    (r"C:\Users\User\iCloudDrive\6. 建志工程\10-優惠\照片\NV5-2168.jpg", "public/images/hero-bg.jpg"),
    (r"C:\Users\User\iCloudDrive\6. 建志工程\1. name card\KINGI logo.jpg", "public/images/logo.jpg"),
    (r"C:\Users\User\iCloudDrive\6. 建志工程\1. name card\建志卡片-Alfred.jpg", "public/images/card.jpg")
]

# Ensure directory exists
os.makedirs("public/images", exist_ok=True)

for src, dst in files:
    try:
        if os.path.exists(src):
            shutil.copy2(src, dst)
            print(f"Copied {src} to {dst}")
        else:
            print(f"Source not found: {src}")
            # Try to find it by listing dir? No, just report error.
    except Exception as e:
        print(f"Error copying {src}: {e}")

