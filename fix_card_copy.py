import shutil
import os
import glob

# Try to find the card file using glob to avoid exact encoding match issues
base_path = r"C:\Users\User\iCloudDrive\6. 建志工程\1. name card"
pattern = os.path.join(base_path, "*Alfred*.jpg")
files = glob.glob(pattern)

if files:
    src = files[0] # Take the first match, likely "建志卡片-Alfred.jpg"
    dst = "public/images/card.jpg"
    try:
        shutil.copy2(src, dst)
        print(f"Successfully copied {src} to {dst}")
    except Exception as e:
        print(f"Error copying: {e}")
else:
    print("No file matching *Alfred*.jpg found.")

