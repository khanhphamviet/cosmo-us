# Fabric — LECIEN Japan との Settlement 計算

**Date:** 2026-09-24  
**根拠:** 署名済み Master（Consignment + U.S. Principal）Art.3–4 ＋ Amendment No.2  
**生地差分:** Category Schedule で **15% → X%**（仮 4–5%、確定は別紙）。商流シェルは刺しゅうと同じ。

---

## 0. 一文

**月次で Net Sales を作り、TANAAKK＝X%・LCJ＝(100−X)%。関税はチャネル分岐 — Distributorは TANAAKK負担可、3PL常備は LCJ ownership のため関税・Storage・補充は LCJ。Direct/backorder は履行費用を配分前控除（No.2）。**

---

## 1. 共通定義（Master）

### 1.1 Net Sales（精算基礎）

```
Net Sales (E) =
    Gross Sales (A)
  − Returns (B)
  − Discounts / Allowances (C)   ※ chargeback, markdown, co-op/MDF 等
  − Marketplace fees             ※ Faire手数料・決済手数料等
  − Pick/Pack/Ship Costs         ※ 3PL出荷費等
```

※ **Storage（保管料）はここに入れない**（Art.4：在庫owner=LCJが別途負担）。

### 1.2 配分（生地は X%、刺しゅうは 15%）

```
TANAAKK Share = Net Sales × X%
LECIEN Share  = Net Sales × (100 − X)%
```

| | Cosmo embroidery | Quilting fabric |
|---|---|---|
| X | **15%** | **X%（Schedule・仮4–5%）** |
| LCJ | 85% | **(100−X)%** |

支払: 月次。True-up 可（年次等）。

### 1.3 関税・物流 — **誰が払うか（チャネルで分岐）**

署名 Master は **IOR＝TANAAKK**（CBPへの申告・納付名義）。ただし **経済負担は在庫ownerに合わせる**。生地ではチャネルで明示分岐する（刺しゅう Master Art.4 の「常にLCJ」デフォルトを、Distributorだけ Schedule で外す想定）。

| | **Distributor**（3PL常備なし） | **Faire / 3PL常備**（Mode F） |
|---|---|---|
| 米在庫のowner | 常備なし。出荷瞬間に Path B で TANAAKK へ | **入庫〜出荷前＝LCJ consignment** |
| **関税の経済負担** | **TANAAKK で可**（ユーザー方針） | **LCJ が払うべき**（owner費用） |
| Storage / 入庫 | なし（または僅少） | **LCJ** |
| CN→米 国際運賃 | TANAAKK費用に含めて可 | **LCJ**（補充＝owner在庫の移動） |
| Settlement上の扱い | 関税は **LCJへ pass-through しない**（TANAAKK側コスト／X%内） | 関税・Storage・補充運賃は **Net外・全額 LCJ** |

**IOR vs 財布（混同しない）**

```
両チャネル共通: 米Entryの IOR 名義 ＝ TANAAKK
3PL:   納付立替 → Settlementで LCJ に実費請求（owner一致）
Distributor: 納付も経済も TANAAKK（pass-through行なし）
```

3PLで「TANAAKKが関税を負担」にすると、**所有＝LCJ・リスク＝TANAAKK** になり Art.4／TP説明が崩れる。ここだけは LCJ 必須。

### 1.4 Net Sales 外の pass-through（**3PL・Directのみ**）

| 項目 | Distributor | 3PL（Mode F） | Direct/BO |
|---|---|---|---|
| Storage | — | ✓ 全額 LCJ | — |
| Inbound/Receiving | — | ✓ LCJ | — |
| 関税・MPF/HMF・broker・bond | **TANAAKK負担（pass-throughしない）** | ✓ **LCJ**（IOR立替→実費） | Direct Fulfillment に含め配分前控除＋返還 |
| China→米3PL 国際輸送 | —（直送は別） | ✓ LCJ | Direct側 |

---

## 2. チャネル別の計算

### 2.1 Distributor（追加shipなし・3PL常備なし）

典型: Checker等へ直送／DDP。Pick/Pack・Faire手数料は **ゼロまたは僅少**。  
**関税は TANAAKK 支払い・経済負担**（LCJ Settlement に載せない）。

```
A = Distributor invoice（例: $6.17/m × 数量）
B, C = 返品・値引等（あれば）
Marketplace = 0
Pick/Pack = 0（前提）

E = Net Sales ≈ A − B − C
LCJへ支払 = E × (100−X)%     ← これだけ（関税行なし）
TANAAKK保持 = E × X%
TANAAKK側: 関税・国際物流は自社コスト（X%で回収想定）
```

**数値イメージ（1m・返品なし・X=4.5%）**

| | $/m |
|---|---:|
| Gross | 6.17 |
| Net Sales E | 6.17 |
| TANAAKK Share | 0.28 |
| **LCJ Share（＝送金）** | **5.89** |
| 関税 pass-through | **なし**（TANAAKK負担） |

※ X% を決めるとき、Distributor関税を TANAAKK が持つ前提なら、**刺しゅうより厚いバッファが要る可能性**あり（感度は別紙）。

### 2.2 Faire・3PL出荷（Mode F）

**在庫＝LCJ ownership → 関税・Storage・補充運賃は LCJ。**

```
A = Faire上の卸売相当 Gross
− Returns / Allowances
− Faire marketplace fees
− Pick/Pack/Ship（当該注文）
= E（Net Sales）

LCJ Share = E × (100−X)%
TANAAKK   = E × X%

別行（Net外・owner費用）:
  Storage（期間按分）           → 全額 LCJ
  補充時の関税・broker・bond    → 全額 LCJ（IOR=TANAAKK立替）
  CN→3PL 国際運賃・入庫       → 全額 LCJ
```

**ポイント:** リストが Distributor と同じでも、Faireは **E が小さくなる**（手数料＋pick/pack）うえ、**関税＋StorageがLCJを直撃**。Settlementタグ: `3PL`。

### 2.3 Backorder／中国直送（Mode B）— Am.No.2 同型

```
A = Gross Sales
B = Returns
C = Discounts/Allowances/Marketplace（該当すれば）
D = Direct Fulfillment Costs
    （国際送料・関税・通関実費等。第5条定義）

E = Net Sales = A − B − C − D     ← Dは配分前控除
F = LECIEN Share = E × (100−X)%
G = LECIEN が立替えた Direct Fulfillment 実費の返還
H = Final Amount Payable to LECIEN = F + G
```

※ D を 15/X 配分の対象に二度入れない（No.2明記）。  
Settlement タグ: `Direct`。

### 2.4 大口 Direct（Mode D）

Mode B と同じ算式（Direct Fulfillment Costs 配分前控除）。

---

## 3. 月次 Settlement Statement（推奨レイアウト）

| 行 | 項目 | Distributor | Faire 3PL | Direct/BO |
|---|---|---|---|---|
| A | Gross Sales | ✓ | ✓ | ✓ |
| B | Returns | ✓ | ✓ | ✓ |
| C | Discounts/Allowances/Marketplace | ✓ | ✓（Faire大） | ✓ |
| — | Pick/Pack/Ship | 0 | ✓（Net控除） | 0 or 実費をDへ |
| D | Direct Fulfillment Costs | — | — | ✓ |
| E | **Net Sales** | 計算 | 計算 | A−B−C−D |
| | TANAAKK X% × E | ✓ | ✓ | ✓ |
| F | **LECIEN Share (100−X)% × E** | ✓ | ✓ | ✓ |
| | Storage pass-through | — | ✓（別・LCJ） | — |
| | Duty / inbound / freight | **なし**（TNK負担） | ✓ **LCJ**（別） | 一部はDに含む |
| G | Direct advance 返還 | — | — | ✓ |
| **H** | **LCJへの支払合計** | **Fのみ** | F＋Storage＋関税等 | **F＋G** |

SKU／チャネル（3PL / Direct / Distributor）でサブトータル。

---

## 4. Excel P1（買取$3.86）との違い

| | Excel P1シミュレーション | **実際のLCJ Settlement（議論・契約）** |
|---|---|---|
| 日→米 | 仕入単価 ≈$3.86 | **仕入ではない** |
| LCJが受け取るもの | 「売上−上海仕入−経費」のPLイメージ | **Net Sales×(100−X)% ＋ pass-through実費** |
| 関税 | TANAAKK PLに計上後、経済は価格調整 | **3PL＝SettlementでLCJ実費**／**Distributor＝TANAAKK負担（pass-throughなし）** |
| 米5% | 関税・物流後粗利÷売価 | 契約は **Net Sales×X%**（XはSchedule） |

Excelは利益**水準**の参考。**送金計算の正本は上記 Settlement**。

---

## 5. 未確定（Scheduleで固定）

1. 生地の **X%**（仮4–5%）— Distributorで関税をTNK負担にする場合の感度込み  
2. Category Schedule に **「Distributor関税＝TANAAKK／3PL関税＝LCJ」** を明記（Master Art.4からの分岐）  
3. 月額コンサル $25,000 の生地按分・要否  
4. Storageの按分ルール（SKU日数／平均在庫）  
5. Faire Gross の定義（platform payout vs list）  

---

## 6. 一文サマリー

**Settlement本体は Net Sales×(100−X)%。関税はチャネルで分岐 — Distributorは TANAAKK負担（LCJへ載せない）、3PL常備は LCJ ownership のため関税・Storage・補充運賃を LCJ が払う（IOR立替→実費精算）。**
