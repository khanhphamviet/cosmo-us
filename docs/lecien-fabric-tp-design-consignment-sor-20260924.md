# Fabric scheme 前提 — 移転価格設計（上海／LCJ／TANAAKK）

**Date:** 2026-09-24  
**Status:** Provisional AL設計（DBベンチマーク・Broker確認前）  
**前提スキーム:**  
`docs/lecien-fabric-business-scheme-simple-20260924.md`  
＝ Consignment + U.S. Principal（署名済み Master）＋ F&A→上海→LCJ ＋ Mode A STOCK / Mode B BACKORDER  

**重要:** 米レグは **買取TP2（仕入単価）ではない**。TANAAKK報酬は刺しゅうと同じく **Net Sales の X%**（Path B）。上海だけが関連者間の商品売買TP。

---

## 0. 結論（Provisional arm’s length）

| 当事者 | 性格付け | 指標 | Provisional AL | 確定に必要なもの |
|---|---|---|---|---|
| **F&A→上海** | 非関連・第三者 | 価格そのもの | **$2.95/m（CUP）** | 契約・支払実態の維持 |
| **上海 LECIEN** | Limited-risk buy-sell（調達・輸出） | 対売上 **ROS** | **2.5–4.0%**（中心 **≈3%**） | 中国比較可能性DB |
| **TANAAKK INC** | U.S. SOR / IOR / limited-risk（Path B） | **Net Sales の X%**（主）＋OMクロスチェック | **X = 4–8%**（中心 **≈5–6%**）。刺しゅう15%は使わない | 米比較・費用率実績・感度 |
| **LCJ（日本）** | Product principal / DEMPE／残余 | 残余利益（固定%なし） | **上海routine＋TANAAKK X%控除後の残り全部** | DEMPE証跡・在庫・関税負担の契約一致 |

```
利益の流れ（概念）:

  米 Net Sales
       │
       ├─ X% ──────────► TANAAKK（routine）
       └─ (100−X)% ────► LCJ
              │
  LCJ側さらに:
       売上相当 − 上海仕入 − 関税・補充物流 − 滞留等
       │
       └─ 残余 ＝ DEMPE + 在庫・関税・市場リスクの対価

  上海:
       対 LCJ 売上 × ROS 2.5–4% ＝ routine
```

---

## 1. FARと「何を検証するか」

| 会社 | 主機能 | 主リスク | 主資産 | tested? |
|---|---|---|---|---|
| F&A | 製造 | 製造 | — | 対象外（第三者） |
| **上海** | 購買・検品・輸出・LCJへ再販 | 短期運転資本（限定） | 運転資本 | **Yes（routine）** |
| **LCJ** | デザイン・品揃え・承認・価格政策・出荷前在庫owner | 市場・滞留・関税・FSR・為替 | 無形（DEMPE） | **No（残余）** |
| **TANAAKK** | SOR販売・IOR・3PL窓口・価格/返金/広告 | 与信・オペ（在庫は出荷前LCJ） | 米顧客関係（限定） | **Yes（routine）** |

Mode A / B で FAR は変えない。変わるのは履行コストの控除タイミング（Bは Direct Fulfillment Costs を配分前控除）。

---

## 2. 取引ごとの方法論

### 2.1 F&A → 上海（$2.95/m）

| 項目 | 設計 |
|---|---|
| 関連者か | **非関連** |
| 方法 | **CUP**（実際の第三者価格） |
| AL | **$2.95/m そのもの** |
| 注記 | First Sale の第一売買候補。TP「レンジ」ではなく**契約価格の維持・証憑**が論点 |

### 2.2 上海 → LCJ（関連者・商品売買）

| 項目 | 設計 |
|---|---|
| 性格 | Limited-risk distributor / buy-sell（中国側） |
| 方法 | **TNMM**（tested = 上海） |
| PLI | **ROS**（営業利益／売上） |
| Provisional | **2.5–4.0%**（中心 ≈3.0%） |
| 逆算 | `売価_上海→LCJ ≈ (2.95 + 上海単位経費) / (1 − 目標ROS)` |
| 根拠の扱い | 中国「合理的利益」・調達上乗せの方向感。**最終はDB**。Excel 2.9%は仮中心に過ぎない |
| 禁止 | 「グループ全体利益の○%だから上海は2.9%」を主根拠にする |

**補足:** 上海がフローをほぼ当日で LCJ に流す（back-to-back）なら、在庫リスクはさらに薄い → レンジは **下限寄り（≈2.5–3%）** でも説明しやすい。長期在庫を上海が持つ設計にはしない。

### 2.3 LCJ × TANAAKK（米レグ — Path B + Net Sales 配分）

| 項目 | 設計 |
|---|---|
| 法形式 | 署名済みどおり **Consignment + U.S. Principal / Path B**（通常の日→米仕入売買ではない） |
| 対価の形 | **Net Sales × X%** を TANAAKK が保持、**(100−X)%** を LCJ へ |
| 方法（文書化） | (1) 契約どおり % of sales を主。(2) **TNMM-OM でクロスチェック**し、X が routine 利益に収まることを示す |
| 刺しゅう | X=**15%**（既存）。生地には**横展開しない** |

#### TANAAKK が負担するコスト（原契約の読み）

SOR側（TANAAKK負担）の典型:
- Faire / marketplace 手数料  
- 3PL Pick/Pack/Outbound（Mode A）  
- 米オペ・広告・CSの当該分  

LCJ側（pass-through / 在庫owner）:
- China→3PL 補充の国際輸送・関税・保管（Mode A）  
- Mode B の Direct Fulfillment Costs は **配分前控除**（Am.No.2思想）  

→ **X%は「粗利」ではなく、上記 SOR 費用を賄ったうえで薄い営業利益が残る率**である必要がある。

#### Provisional X%（生地）

| | Provisional |
|---|---|
| **推奨レンジ** | **Net Sales の 4–8%** |
| **仮中心** | **≈5–6%** |
| **除外** | **15%**（関税後のパイが薄い＋刺しゅうと同率は説明困難） |
| **クロスチェック目標** | 生地に係る TANAAKK の **OM ≈ 1.5–3.5% of Net Sales**（Amount B繊維帯 1.75–5%は参考） |

**キャリブレーション（実務）**

```
① 想定: 売価、Faire手数料率、outbound、$/m、Mode A/Bミックス
② SOR費用率 ≈ 手数料 + outbound + 配賦オベ
③ 目標OM ≈ 2–3% of Net Sales
④ X% ≈ SOR費用率 + 目標OM
⑤ 結果が 4–8% を外れる → 売価改定 or 費用負担の再定義（契約）
```

例（仮数・要実測）: Faire手数料 12% + outbound 2% + OM 2% → **X≈16%** に見えるが、  
Net Sales 定義が **すでに marketplace 控除後**なら、X は outbound+OM+本社配賦程度で **≈4–7%** になり得る。  
→ **Category Schedule で「Net Sales の定義（Faire手数料控除前後）」を刺しゅう原契約と揃えてから X を固定する。**

### 2.4 LCJ（残余）

| 項目 | 設計 |
|---|---|
| 性格 | Product principal・DEMPE・出荷前在庫・関税経済 |
| 報酬 | **残余**（固定ROSを置かない） |
| ALの意味 | 上海・TANAAKKを routine に載せたあと、残る利益／損失が LCJ に帰属すること自体が方針 |
| 赤字のとき | 売価・X・数量・関税前提を見直す。routine側（上海・TANAAKK）の契約上の保護を維持 |
| 文書 | DEMPE（デザイン指示・品揃え・承認記録）、在庫owner・関税負担が契約と一致していること |

---

## 3. Mode A / B と TP

| | Mode A STOCK | Mode B BACKORDER |
|---|---|---|
| 上海 ROS | 同じ | 同じ |
| TANAAKK X% | 同じスケジュール率 | **同じ率** |
| 違う点 | 補充関税・保管は LCJ（配分外のowner費用） | Direct Fulfillment Costs を **15/X 配分前に控除**（No.2） |
| 設計含意 | Aが多いと LCJ の関税キャッシュが先行 | Bは顧客売上に近いタイミングでコスト控除 |

TP「率」はモードで分けない（シンプル維持）。分けるのは Settlement タグとコスト控除順だけ。

---

## 4. 数値イメージ（$5.92/m・概念・要再計算）

前提が揃うまでの **説明用スケルトン**（確定値ではない）:

| ステップ | だいたいの置き方 |
|---|---|
| F&A→上海 | $2.95 |
| 上海→LCJ | ≈$3.05–3.15（ROS≈3%になるよう逆算） |
| 米売価 | $5.92 帯（チャネルで異なり得る） |
| 関税等 | FSR成功時は低い建値ベース／否認時は重い → **LCJ** |
| TANAAKK | Net Sales × **5–6%**（仮） |
| LCJ | 残り − 上海仕入負担 − 関税・補充 − 滞留 |

感度: FSR否認・関税+1pt・Faire手数料上振れは **LCJ残余が減る**（上海ROS・TANAAKK X は契約で守る）。

---

## 5. 刺しゅう15%との関係（説明一文）

> 米レグの**契約型**（Consignment + SOR + Path B + % of Net Sales）は刺しゅうと同一。  
> **率だけカテゴリスケジュールで分離**する。生地は関税・原価構造が異なるため、arm’s length な routine 利益に対応する **X≈4–8%** を provisional とし、刺しゅう15%は生地に適用しない。

これで「モデルはシンプル・数字はカテゴリ別」を両立する。

---

## 6. 文書化・次アクション

| 期限感 | 内容 |
|---|---|
| 即時 | Category Schedule に **X%（仮）と Net Sales 定義**を書く |
| +2–4週 | 上海–LCJ に ROS 目標と逆算売価の運用ルール |
| +8–12週 | 上海 ROS・（必要なら）米の OM/% の **DBベンチマーク**で provisional 置換 |
| 並行 | Broker: FSR + Path B。税務: Path B の性格付けと %報酬の AL |

---

## 7. 批判的チェック

1. **15%を「統一」するとTP的には単純だが、生地では非AL・非経済。** 率の分離は複雑さではなく正当性。  
2. Path B のため「日→米の仕入TP」は無い。監査では **% of sales の AL** を問われる — OMクロスチェックを必ず付ける。  
3. Net Sales から Faire手数料をどう除くかで X の見た目が倍半分変わる — **定義を先に固定**。  
4. 上海 ROS と TANAAKK X を両方厚くすると LCJ が構造赤字 — 09-28 売価とセットで感度を見る。  

---

## 8. 一文サマリー

**上海は対売上ROS約2.5–4%（中心≈3%）のLR買取。TANAAKKはNet Salesの約4–8%（中心≈5–6%、刺しゅう15%ではない）でSOR routine。LCJはDEMPE残余。F&A→上海$2.95は第三者CUP。Mode A/Bで率は変えず、コスト控除順だけAm.No.2に合わせる。いずれもbenchmark前のprovisional。**
