import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import os
import json
import requests
import arabic_reshaper
from bidi.algorithm import get_display
from matplotlib import font_manager

def fetch_real_prices():
    url = "https://www.goldapi.io/api/XAU/EGP"
    headers = {
        "x-access-token": "goldapi-he1ssmi5xkvun-io",
        "Content-Type": "application/json",
    }
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        data = response.json()
        prices = [
            data.get("price_gram_24k"),
            data.get("price_gram_22k"),
            data.get("price_gram_21k"),
            data.get("price_gram_18k"),
            data.get("price_gram_14k"),
            data.get("price_gram_10k"),
        ]
        return [p for p in prices if p is not None]
    except Exception as e:
        print(f"خطأ في جلب البيانات: {e}")
        return []

def analyze_gold_prices(prices):
    df = pd.DataFrame(prices, columns=["price"])
    summary = {
        "average": round(df["price"].mean(), 2),
        "max": round(df["price"].max(), 2),
        "min": round(df["price"].min(), 2),
        "count": int(df["price"].count()),
        "prices": prices
    }
    return summary

def get_cairo_font_path():
    # يجب أن يكون لديك ملف خط Cairo.ttf في مجلد fonts أو المسار المناسب
    font_paths = [
        os.path.join(os.path.dirname(__file__), "public", "Amiri-Regular.ttf")
    ]
    for path in font_paths:
        if os.path.exists(path):
            return path
    return None

def reshape_arabic(text):
    reshaped = arabic_reshaper.reshape(text)
    return get_display(reshaped)

def save_price_plot(prices, out_path):
    df = pd.DataFrame(prices, columns=["سعر الذهب"])
    plt.figure(figsize=(8, 5))
    sns.set_theme(style="whitegrid")
    font_path = get_cairo_font_path()
    if font_path:
        font_prop = font_manager.FontProperties(fname=font_path)
    else:
        font_prop = font_manager.FontProperties()
    title = reshape_arabic("تحليل أسعار الذهب")
    xlabel = reshape_arabic("اليوم")
    ylabel = reshape_arabic("السعر (ج.م)")
    ax = sns.lineplot(data=df, x=df.index, y="سعر الذهب", marker="o", color="#131E2B")
    ax.set_title(title, fontsize=16, color="#131E2B", fontproperties=font_prop)
    ax.set_xlabel(xlabel, fontsize=12, fontproperties=font_prop)
    ax.set_ylabel(ylabel, fontsize=12, fontproperties=font_prop)
    for label in ax.get_xticklabels() + ax.get_yticklabels():
        label.set_fontproperties(font_prop)
    plt.tight_layout()
    plt.savefig(out_path, dpi=120)
    plt.close()

if __name__ == "__main__":
    prices = fetch_real_prices()
    if not prices:
        print("تعذر جلب الأسعار الحقيقية، سيتم استخدام بيانات وهمية.")
        prices = [1900.18, 1912.50, 1895.75, 1905.30, 1908.00]
    result = analyze_gold_prices(prices)

    public_dir = os.path.join(os.path.dirname(__file__), "public")
    os.makedirs(public_dir, exist_ok=True)
    img_path = os.path.join(public_dir, "gold_stats.png")
    save_price_plot(prices, img_path)
    print(f"تم حفظ الصورة في: {img_path}")

    json_path = os.path.join(public_dir, "gold_stats.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    print(f"تم حفظ الملخص في: {json_path}")
