# Fabric ビジネススキーム再検討 — D=$7.59/m・Faire 3PL / Distributor直送

**Date:** 2026-09-26  
**価格ロック（添付）:** Distributor **$7.59/m（$6.94/yd）** → Checker→Shop **$9.25/yd** → 含意小売 **$18.50/yd**  
**履行:** Faire＝**米3PL常備** ／ Distributor＝**中国直送（Mode D）**  
**契約シェル:** 署名済 Master（Consignment + U.S. Principal）＋ No.2 思想。刺しゅう15%は使わず **生地 X%**  
**Status:** 設計案（Broker・Category Schedule・航空実見積の確定前）

---

## 0. 一文

**F&A→上海（routine）→LCJ（principal・出荷前owner）→TANAAKK（SOR/IOR・X%）。Faireは3PL常備で即納、Distributorは計画直送。売価は卸 $7.59/m を軸に、関税・船便着地後粗利≈38%。移転価格は上海ROS薄利＋TANAAKK X%＋LCJ残余。Distributorで関税をTANAAKKが「経済負担」すると X%では赤字になるため、関税の経済は原則LCJ（IOR立替可）に戻す。**

---

## 1. ロック価格と着地経済

| 項目 | $/m | $/yd | 備考 |
|---|---:|---:|---|
| **Distributor（TANAAKK→Checker）** | **7.59** | **6.94** | 添付ロック |
| Checker→Retail shop | — | **9.25** | ×≈1.33 |
| 含意小売 MAP | — | **18.50** | ×2（キーストーン） |
| F&A | 2.95 | 2.70 | CUP／FSR建値候補 |
| 関税（48.9%×$2.95） | 1.44 | 1.32 | アシスト無し簡易 |
| 物流・MPF等（船便） | 0.30 | 0.27 | FCL束ね |
| 物流・MPF等（航空・仮） | 1.50 | 1.37 | 見積なし |
| **着地（船）** | **4.69** | **4.29** | |
| **着地後粗利（船）** | **2.90** | — | **GM 38.2%** |
| 着地後粗利（航空仮） | 1.70 | — | GM 22.4% |

```
F&A $2.95 ──► 上海 ≈$3.03 ──► LCJ
                              │
                    owner費用（原則）: 関税・船便国際物流・3PL Storage
                              │
              Faire: 3PL ／ Distributor: CN直送
                              │
                         TANAAKK SOR
                              │
         Checker $7.59/m ($6.94/yd)  →  Shop $9.25/yd  →  Retail $18.50/yd
         Faire   （ショップ向けは $9前後帯を別紙で調整可）
```

**換算:** `$/yd = $/m × 0.9144`。

---

## 2. 三社の役割（FAR）と移転価格

| 会社 | FAR（機能・資産・リスク） | TP方法 | **オペレーティング目安** | $7.59でのイメージ |
|---|---|---|---|---|
| **F&A** | 第三者製造 | CUP | **$2.95/m** | 固定 |
| **上海 LECIEN** | LR買取・発注窓口・輸出実務。DEMPEなし | TNMM **ROS** | **2.0–3.5%**（中心≈**2.5%**） | 売価≈**$3.03/m**、利益≈**$0.08/m** |
| **LCJ（日本）** | DEMPE・品揃え・出荷前 consignment owner・市場／滞留／関税経済 | **残余** | 固定%なし | Settlement (100−X)% − 上海仕入 − owner費用 |
| **TANAAKK INC** | 米 SOR／IOR／価格・与信・Faire/Checker販売・3PL窓口 | 契約 **Net Sales×X%**（検証は **OM≈2–3.5%**） | **X＝3–6%**（中心≈**4–5%**） | X=4.5%なら ≈**$0.34/m**（Net≈Gross時） |

**刺しゅう15%は生地に適用しない**（関税後パイが薄い＋FARが同じでも原価構造が違う）。

### 2.1 批判的ポイント（$7.59で再計算して判明）

Distributor経路で「関税＋船便物流を TANAAKK が経済負担」とすると:

```
TANAAKK 受取 X% ≈ $0.34
− 関税 $1.44 − 物流 $0.30
≈ −$1.40/m   ← X%では絶対に足りない
```

したがって **以前の「Distributorなら関税をTNK支払いでもよい」は、IOR名義・キャッシュ立替までは可だが、P&L上の最終負担にしてはいけない。**  
$7.59ロックでは次で統一する:

| | Faire 3PL | Distributor 直送 |
|---|---|---|
| IOR名義 | TANAAKK | TANAAKK |
| **関税・国際物流の経済** | **LCJ**（owner） | **LCJ**（Path Bまでowner／立替→Settlement） |
| Storage | **LCJ** | なし |
| Pick/pack・Faire手数料 | Net Salesから控除 | 原則なし |

※Distributorの「送料 Checker持ち」は **米国内／Checker側の配送**の話。China→米の輸入脚は上表どおり LCJ 経済。

---

## 3. 履行モード（物理）

### 3.1 Mode F — Faire 3PL（標準・即納）

```
F&A ─$2.95─► 上海 ─≈$3.03─► LCJ
                              │ consignment
                     Qingdao ─船─► 米3PL（LCJ所有）
                              │ 注文後 outbound
                         TANAAKK = SOR → Faire retailer
```

- Title: 3PL保管中＝LCJ → ship date に Path B で TANAAKK  
- 顧客LT: 在庫ありなら即出荷（製造2.5ヶ月は**補充**側）  
- Settlement: Net Sales（Gross−返品−Faire手数料−pick/pack）× X/(100−X)  
- Net外: Storage・補充時関税・CN→3PL運賃 → **全額 LCJ**

### 3.2 Mode D — Distributor 直送（Checker等）

```
計画PO / 受注生産（LT≈製造3–4週＋船≈1.5ヶ月 → 合計≈2.5ヶ月）
Qingdao ─船─► Checker（TANAAKK=SOR、送料条件はChecker持ちの範囲で契約）
```

- **反応型の都度直送は問屋商売として遅い** → **計画PO／先方在庫積み**が本線  
- Title: 国際 tender 時 Path B（No.2同型）  
- Settlement: Net Sales≈Invoice（控除少）× X/(100−X)  
- 関税・国際物流: IOR立替後 **LCJへ実費**（上記2.1）  
- 航空は例外のみ（GMが22%台に落ち、定番にしない）

### 3.3 Mode B — Faire欠品 backorder

Mode D と同型（中国→ショップ直送）。Direct Fulfillment Costs を配分前控除（Am.No.2）。

---

## 4. チャネル価格の置き方

| チャネル | ショップから見える仕入 | TANAAKK売値（目安） |
|---|---:|---|
| **Checker** | **$9.25/yd** | **$6.94/yd（$7.59/m）** |
| **Faire** | **≈$8.5–9.5/yd 帯**（要最終） | ＝ショップ向け卸（手数料はNet控除） |

- Faireを Checker のショップ価格（$9.25）より**大幅に下げない**（問屋衝突）。  
- 以前の「Faire $8–9」は **ショップ視点**。Checker仕入 $6.94 より高くてよい（段が違う）。  
- Faire手数料≈15%後の手取りが Checker $6.94 を大きく下回るなら、Faire建値を $9.25 近辺へ寄せる。

**検算（手数料15%・他控除なし仮）**

| Faire建値 $/yd | 手取り≈85% $/yd | vs Checker $6.94 |
|---:|---:|---|
| 8.00 | 6.80 | やや低い |
| 9.00 | 7.65 | **高い（望ましい）** |
| 9.25 | 7.86 | 高い |

→ Faireショップ価格の実務候補は **$9.00–9.25/yd**（=$9.84–10.12/m）。

---

## 5. $/m 利益配分イメージ（船便・Net≈Gross仮）

前提: 上海≈$3.03、X=**4.5%**、関税$1.44＋物流$0.30は **LCJ**、Faire手数料・Storageは別途。

### 5.1 Distributor（控除ほぼなし）

| | $/m | 対 D |
|---|---:|---:|
| Gross / Net Sales | 7.59 | 100% |
| TANAAKK X% | **0.34** | 4.5% |
| LCJ Share | **7.25** | 95.5% |
| − 上海仕入 | 3.03 | |
| − 関税・船便物流 | 1.74 | |
| **LCJ 残余（粗）** | **≈2.48** | **≈33%** |
| グループ着地後粗利（参考） | 2.90 | 38.2% |

上海≈$0.08 は LCJ 仕入側に含まれる。TANAAKKは X%のみ（関税は持たない）。

### 5.2 Faire 3PL（手数料で Net が痩せる例）

| | Net=D（理想） | Net=0.85D（手数料・pick概算） |
|---|---:|---:|
| TANAAKK X% | 0.34 | 0.29 |
| LCJ Share | 7.25 | 6.16 |
| − 上海 − 関税物流 | 4.77 | 4.77 |
| **LCJ 残余（Storage前）** | ≈2.48 | ≈1.39 |
| Storage | 別途 LCJ | 別途 LCJ |

**同じリストでも Faire は Storage＋手数料で LCJ が薄い。** 在庫回転と初回投入量が鍵。

---

## 6. Settlement 式（変更なし・率と価格だけ更新）

```
Net Sales E = Gross − Returns − Allowances − Marketplace − Pick/Pack[/− Direct Costs]

TANAAKK = E × X%          （生地 Schedule: 仮 4.5%）
LCJ     = E × (100−X)%

＋ Net外 pass-through（3PL/Direct）: Storage・関税・補充運賃等 → LCJ
```

月次。fulfillment-mode タグ: `3PL` / `Direct` / `Distributor`。

---

## 7. スキーム全体図

```
         [LCJ 指示]
              │
F&A ─$2.95─► 上海LECIEN ─ROS≈2.5%─► LCJ（日本）principal
                                      │
                    ┌─────────────────┴─────────────────┐
                    │ Mode F Faire                      │ Mode D Checker
                    ▼                                   ▼
              米3PL consignment                   CN→Checker 直送
              (LCJ owner)                         (計画PO・LT≈2.5ヶ月)
                    │                                   │
                    └──────────► TANAAKK INC ◄──────────┘
                                 SOR / IOR
                                 Net Sales × X%
                                      │
                         Faire retailers / Checker
                                      │
                              Shop $9.25 → Retail $18.50
```

---

## 8. Category Schedule に書くべき事項（短い必須リスト）

1. 対象SKU・単位（ボルト／$/m・$/yd併記）  
2. **Distributor list $7.59/m**、Faireショップ建値帯（$9.00–9.25/yd推奨）  
3. **X%**（仮4.5%、OM 2–3.5%で四半期調整）  
4. 上海 ROS 2.0–3.5%（売価逆算ルール）  
5. Mode F / B / D と費用: **関税・国際物流・Storage＝LCJ**（IOR＝TANAAKK立替可）  
6. FSR用米向け分離PO・転用禁止  
7. Direct Fulfillment Costs の配分前控除（No.2準拠）

---

## 9. リスクと決定事項

| # | 内容 | 優先 |
|---|---|---|
| 1 | Distributor関税をTNK経済負担にしない（$7.59×X%では破綻） | **確定推奨** |
| 2 | Faire建値を $9近辺にし、Checkerショップ $9.25 と衝突させない | 高 |
| 3 | Faire初回3PL量・Storage上限 | 高 |
| 4 | Checkerは計画PO（2.5ヶ月LTを契約に明記） | 高 |
| 5 | Broker: FSR×Path B×consignment | Go条件 |
| 6 | 航空は緊急のみ（定番にするとGM≈22%＋X%でLCJが薄い） | 中 |
| 7 | 小売 $18.50 は Asia mid/high より明確に高い — 品質ストーリー必須 | 中 |

---

## 10. サマリー

**価格は Distributor $7.59/m・Checkerショップ $9.25/yd・小売 $18.50 で固定してよい。**  
ビジネススキームは従来どおり **Consignment＋U.S. Principal** に載せ、  
- **上海**＝ROS≈2.5%（≈$3.03）、  
- **TANAAKK**＝Net Sales×X%（≈4.5%）、  
- **LCJ**＝残余＋関税・船便・3PL Storage。  

Faireは3PL即納、Distributorは船便直送（計画）。  
**唯一の修正:** Distributor関税の「TNK最終負担」は $7.59 では不可 → **経済はLCJ、IOR立替のみTNK。**
