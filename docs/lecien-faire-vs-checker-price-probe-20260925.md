# Faire vs Checker 価格プローブ（Cursorログイン実施）

**Date:** 2026-09-25  
**方法:** Chrome Cookie（Default＝Checkerログイン / Profile 6＝Faire USER）を復号して取得。ブラウザ操作なし。

---

## 1. アカウント

| サイト | プロファイル | 種別 | 結果 |
|---|---|---|---|
| Checker | Chrome Default | 卸ログイン済み | 生地検索で **$/yd 表示可** |
| Faire | Chrome Default | **BRAND_USER**（TANAAKK） | 他ブランド卸は見られない |
| Faire | Chrome Profile 6 | **USER**（小売） | 検索で **WSP + MSRP 表示可** |

---

## 2. 結論（ショップ視点）

**同一SKUの厳密1対1は大手（Moda/Kona等）では取れなかった**（Faireにメーカー公式が出ていない／Checkerのベンダー絞りが弱い）。  
ただし **同カテゴリ（キルト綿・ヤード）のショップ向け建値**では、**Faire WSP ＜ Checker帯** の例が複数ある。

| 例 | Faire（ショップ向けWSP） | Checker（ショップ向け・帯） | 向き |
|---|---:|---:|---|
| Camelot Mixology（44/45" cotton） | **$5.40/yd**（MSRP $10.80＝50%） | キルト綿ヤード **≈$6.65–7.00** が中心 | **Faireの方が安い側** |
| Camelot Solid / Fresh Solids系 | **$4.95** / **$2.55**（要SKU精査） | 同上〜$7帯 | Faire安い側（低すぎるものは単位・販促の可能性） |
| Exquisite quilting cotton | **$6.24/yd** | Windham/AGF帯 **≈$6.65–6.85** | Faireやや安い〜同水準 |
| Radyan（他社生地の再販） | **$11.99–$14.99** 等 | Kaufman/Riley帯 **≈$6.7–7.8** | **Faireの方が高い**（再販上乗せ） |
| Riley Blake（Checker） | （公式Faire少） | **$6.65/yd** 固定寄り | — |

→ **「Checker（問屋のショップ価格）＞ Faire（ブランド直のショップ価格）」は起きうる**。特にブランドがFaireに **小売の約50%** で出すとき、問屋が同帯＋αで出すと逆転しやすい。  
逆に **Faire上の再販業者**は Checkerより高くなり得る。

---

## 3. 本件（Checker $7.5→店$10 / Faire $8–9）への含意

- 市場には **Faireの方がショップ仕入が安い**パターンがある（Camelot系の帯比較）。  
- したがって「Faireを Checker×1.33 より下げる」は **前例ゼロではない**が、**問屋との関係リスクは残る**。  
- 厳密な同一SKU証拠が欲しい場合は、Camelot Mixology色番など **両サイトで同じスタイル番号**を手で1本突合するのが次ステップ。

---

## 4. 出力ファイル

- `Desktop/20260925_checker_fabric_prices_sample.csv`
- `Desktop/20260925_faire_vs_checker_price_probe.csv`
- `Desktop/20260925_faire_checker_brand_band_compare.csv`

---

## 5. 限界

1. HTMLパースのため、検索ノイズ（COSMO刺しゅう等が混入）あり。  
2. Checker「Camelot」検索は Cameo 等の誤ヒットあり → Mixologyは Faire側が明確。  
3. Faire手数料・送料（店持ち）は建値比較に未反映。  
4. Cookie依存。期限切れで再取得が必要。
