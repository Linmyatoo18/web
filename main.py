from PIL import Image
import matplotlib.pyplot as plt
import numpy as np
from sklearn.cluster import KMeans
import cv2

# Load image
image_path = "grass.webp"
image = Image.open(image_path).convert("RGB")
image_np = np.array(image)

# Resize for faster processing
small_image = cv2.resize(image_np, (100, 100))

# Reshape and apply KMeans for color sampling
pixels = small_image.reshape(-1, 3)
kmeans = KMeans(n_clusters=6, random_state=0).fit(pixels)
colors = kmeans.cluster_centers_.astype(int)

# Display the dominant colors
fig, ax = plt.subplots(1, 2, figsize=(12, 6))

# Show original image
ax[0].imshow(image_np)
ax[0].set_title("Original Image")
ax[0].axis("off")

# Show color palette
palette = np.zeros((100, 300, 3), dtype=int)
for i, color in enumerate(colors):
    palette[:, i * 50:(i + 1) * 50] = color
ax[1].imshow(palette)
ax[1].set_title("Sampled Color Palette")
ax[1].axis("off")

plt.tight_layout()
plt.show()
