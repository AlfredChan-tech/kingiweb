import os
import replicate
import requests

# Set your token here directly for this script
# os.environ["REPLICATE_API_TOKEN"] = "YOUR_TOKEN_HERE"

styles = {
    "modern": "modern minimalist living room, bright, clean lines, white and wood, 8k, photorealistic",
    "luxury": "modern luxury living room, marble floor, gold accents, expensive furniture, cinematic lighting, 8k",
    "nordic": "scandinavian living room, cozy, beige tones, wooden furniture, soft lighting, hygge, 8k",
    "industrial": "industrial loft living room, exposed brick wall, concrete floor, leather sofa, high ceiling, 8k",
    "wabi": "japanese wabi-sabi living room, textured walls, nature materials, zen atmosphere, minimal, 8k",
    "american": "american classic living room, elegant molding, fireplace, cozy sofa, warm lighting, traditional, 8k",
    "chinese": "modern chinese living room, new chinese style, zen, wooden screen, ink painting, elegant, 8k",
    "french": "french country living room, rustic, elegant, floral patterns, vintage furniture, bright, 8k"
}

# Using Stable Diffusion XL (SDXL) for high quality text-to-image
# stability-ai/sdxl: 39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b

model_version = "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b"

for name, prompt in styles.items():
    print(f"Generating {name}...")
    try:
        output = replicate.run(
            model_version,
            input={"prompt": prompt + ", interior design magazine, award winning, 8k, highly detailed"}
        )
        
        # Output is usually a list of URLs
        image_url = output[0]
        print(f"Downloading {name} from {image_url}")
        
        img_data = requests.get(image_url).content
        with open(f"public/images/style-{name}.png", 'wb') as handler:
            handler.write(img_data)
            
        print(f"Saved public/images/style-{name}.png")
        
    except Exception as e:
        print(f"Error generating {name}: {e}")

print("Done!")

