function hexToRgb(hex) {
    hex = hex.replace("#", "");
    const bigint = parseInt(hex, 16);
    return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
    };
}

function rgbToHex(r, g, b) {
    return (
    "#" +
    [r, g, b]
        .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
}

function mixColors(c1, c2, weight) {
    const r = Math.round(c1.r * (1 - weight) + c2.r * weight);
    const g = Math.round(c1.g * (1 - weight) + c2.g * weight);
    const b = Math.round(c1.b * (1 - weight) + c2.b * weight);
    return { r, g, b };
}

function generateColorScale(baseHex) {
    const base = hexToRgb(baseHex);
    const white = { r: 255, g: 255, b: 255 };
    const black = { r: 0, g: 0, b: 0 };

    return {
    50: rgbToHex(...Object.values(mixColors(base, white, 0.9))),
    100: rgbToHex(...Object.values(mixColors(base, white, 0.75))),
    200: rgbToHex(...Object.values(mixColors(base, white, 0.6))),
    300: rgbToHex(...Object.values(mixColors(base, white, 0.45))),
    400: rgbToHex(...Object.values(mixColors(base, white, 0.3))),
    500: rgbToHex(...Object.values(mixColors(base, white, 0.15))),
    600: baseHex,
    700: rgbToHex(...Object.values(mixColors(base, black, 0.1))),
    800: rgbToHex(...Object.values(mixColors(base, black, 0.2))),
    900: rgbToHex(...Object.values(mixColors(base, black, 0.35))),
    950: rgbToHex(...Object.values(mixColors(base, black, 0.5))),
    };
}

function updateColors(hex) {
    const colorGrid = document.getElementById("colorGrid");
    colorGrid.innerHTML = "";

    const scale = generateColorScale(hex);
    for (const key in scale) {
    const color = scale[key];
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = color;
    div.innerHTML = ` ${key} <span>${color}</span>`;
    colorGrid.appendChild(div);
    }
}

const colorPicker = document.getElementById("baseColor");
const hexInput = document.getElementById("hexInput");

function syncInput(value) {
    hexInput.value = value;
    colorPicker.value = value;
    updateColors(value);
}

colorPicker.addEventListener("input", (e) => syncInput(e.target.value));
hexInput.addEventListener("input", (e) => {
    let val = e.target.value;
    if (!val.startsWith("#")) val = "#" + val;
    syncInput(val);
});

// Initial load
updateColors("#0000ff");