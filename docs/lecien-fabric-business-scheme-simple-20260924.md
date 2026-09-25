# Lecien quilting fabric — Business Scheme（単純設計）

**Date:** 2026-09-24  
**Updated:** Faire=3PL常備、backorder=中国直送（Cosmo同型）を確定  
**Status:** 設計案（Broker・生地報酬率・上海契約の確定前）  
**前提（固定）:** 署名済み `Master Commercial Agreement（Consignment + U.S. Principal）` ＋ Amendment No.1 / No.2  
**原則:** 刺しゅうシェルを動かさない。生地は **同じ型に載せる＋差分だけ付則**。

---

## 0. 一文

**米レグは刺しゅうと同じ（SOR/IOR=TANAAKK、出荷前在庫=LCJ、出荷日 Path B title、Net Sales 配分）。Faire用は米3PLに常備し、欠品・backorderは中国から顧客へ直送（Cosmoの日本直送の China 版）。前段だけ F&A→上海→LCJ を足し、報酬率は生地スケジュールで書く。**

---

## 1. 設計原則（シンプルのルール）

| # | ルール |
|---|---|
| 1 | **新モデルを発明しない** — 既存 Master の Product / Category Schedule で fabric を追加 |
| 2 | **米の売主・IOR・精算の型は刺しゅうと同一** |
| 3 | **差分は3つだけ:** (a) 上海買取 (b) China→U.S. 物理 (c) 報酬率 X% ≠ 15% |
| 4 | **履行モードは Cosmo 同型の2つ** — ①Faire等は **3PL常備** ②欠品・backorderは **中国直送**（所有・SOR・精算の型は同じ） |
| 5 | **口癖:** 「在庫は出荷まで LCJ、米の売主は TANAAKK」— 「LCJ→retailer」とは言わない |

---

## 2. 役割（これだけ）

| 会社 | 役割 | 刺しゅうとの差 |
|---|---|---|
| **F&A** | 第三者メーカー・完全受注生産 | 生地のみ |
| **上海 LECIEN** | F&Aから買取（B）・LCJ指示の品揃えを発注・中国輸出実務 | 生地のみ |
| **LCJ（日本）** | Principal（DEMPE・品揃え指示）／出荷前 consignment owner／85%側（または 100−X）の経済 | 同じ型 |
| **TANAAKK** | 米 SOR・IOR・Faire/Distributor 販売・3PL窓口・X%側 | 同じ型・率だけ別 |
| **3PL** | 保管・出荷（契約名義は TANAAKK） | 同じ |
| **顧客** | Faire retailer / Checker 等 | 同じ |

```
指揮:  LCJ ──指示──► 上海 ──発注──► F&A
米販:  TANAAKK = SOR（顧客契約・価格・返金・出荷確定）
在庫:  出荷日まで LCJ
```

---

## 3. Title / 物理（2レグだけ意識する）

### 3.1 アジア側（生地固有）

```
Title:  F&A ──$2.95──► 上海 ──TP──► LCJ
Physical: Qingdao 出荷準備（受注生産・米向け分離）
```

- F&A 完成・FOB Qingdao で上海が title（bona fide sale → FSR 候補）  
- 上海→LCJ はグループ内。上海は routine（薄い利益）  
- **日本倉庫を挟まない**

### 3.2 米レグ — Cosmo 同型の履行モード（確定）

刺しゅう（Amendment No.2）: 標準は米3PL、欠品時は **日本→顧客直送**。  
生地: 標準は米3PL、欠品・backorderは **中国→顧客直送**（起点だけ China）。

```
Mode F (標準・Faire在庫):     Qingdao → 米3PL（LCJ consignment）→ 注文後 3PL outbound
Mode B (backorder / 欠品):   Qingdao → 顧客直送（Faire購入者・Distributor 等）
Mode D (大口・任意):         受注生産で最初から Qingdao → Checker 等直送（3PLを介さない）

Title（いずれも同型）:
  3PL保管中 … LCJ consignment
  3PL ship date または 直送 tender … LCJ → TANAAKK（Path B）
  顧客へ … TANAAKK = SOR
```

| | **Mode F（Faire標準）** | **Mode B（backorder）** | Mode D（大口直送） |
|---|---|---|---|
| いつ使う | Faire掲載・即出荷用の常備在庫 | 3PL欠品・backorder行 | 最初から直送合意の大口等 |
| 物理 | CN→米3PL→米国内出荷 | **CN→顧客直送** | CN→顧客直送 |
| Cosmo対応 | 3PL fulfillment | Am.No.2 日本直送の **China版** | 同左 |
| 在庫 | 米3PLに LCJ consignment | 顧客向け製造・直送（常備なし） | なし |
| Title瞬間 | 3PL ship date（原契約） | 国際運送人 tender（No.2同型） | 同左 |
| 精算 | Net Sales × X/(100−X) | 同じ＋**Direct Fulfillment Costs を配分前控除**（No.2思想） | 同左 |
| 関税・国際送料 | 補充時は LCJ（在庫owner／Art.4） | 配分前控除＋立替精算 | 同左 |

**オペ順序（Faire）**

1. TANAAKK が受注（SOR）  
2. 3PLに引当可能 → **Mode F**（米国内出荷）  
3. 欠品 → backorder として上海／F&Aへ米向け分離PO → **Mode B**（中国直送）  
4. どちらも精算は同じシェル。Settlement に fulfillment-mode タグ（3PL / Direct）を付ける（No.2先例）

---

## 4. お金（単純算式）

### 4.1 米精算（Master 流用・率だけ生地）

```
Net Sales（生地）= Gross − Returns −（定義どおりの控除）
※ Direct のとき: Direct Fulfillment Costs（送料・関税等、No.2定義に準拠）を配分前控除

TANAAKK Share = Net Sales × X%
LCJ Share     = Net Sales × (100 − X)%
```

| | 刺しゅう | 生地 |
|---|---|---|
| 算式 | 15 / 85 | **X / (100−X)** |
| X の置き方 | 15% 固定 | **別紙で固定**（下記） |

**X の暫定方針（設計）:** 売上15%は置かない。  
目安は **関税・Faire手数料控除後も LCJ に残余が残る水準**（例: 一桁％台〜低十％未満を Broker/Excel 感度で決定）。確定値は別合意。

### 4.2 誰が何を負担（原契約 Art.4＋Net Sales定義）

**Masterの整理（刺しゅう契約どおり）**

| 費用 | 最終負担 | Net Salesとの関係 |
|---|---|---|
| China→米3PL 国際輸送・通関・入庫 | **LCJ**（在庫owner） | 配分外（owner費用） |
| **3PL Storage（保管料）** | **LCJ**（立替→実費精算） | **Net Salesに含めない**（Faire在庫チャネル固有） |
| **Pick/Pack/Ship** | 契約上SOR負担だが | **Grossから控除してから** 15/X 配分（Net Sales定義） |
| **Marketplace（Faire等）手数料** | 同上 | **Grossから控除してから**配分 |
| Distributor向け追加ship | **かからない**（本件前提） | Distributorは3PL保管前提なし |

**チャネル含意**

| | Distributor（直送等） | Faire（3PL常備） |
|---|---|---|
| Storage | なし（または僅少） | **あり → LCJが全額** |
| Pick/Pack | なし／低い | **あり → Net Salesを押し下げ**（双方の取り分の母数が減る） |
| リスト卸価 $6.17 | 原資≈23.8%が見えやすい | **同じリストでも貢献は薄い**（storage+pick/pack+Faire fee） |

→ 卸の建値をチャネルで必ずしも分けなくてもよいが、**貢献利益・在庫回転・X%のOM検証はチャネル別**に見る。Faireだけ見た目の卸利益率で判断しない。

| その他 | 負担 |
|---|---|
| 関税・broker・bond | TANAAKK立替 → **LCJ実費** |
| Direct の国際送料・関税等 | No.2同型: **配分前控除**＋立替精算 |
| 上海の routine | 上海→LCJ の TP に織り込み |

### 4.3 アジア側 TP（米の15/Xとは別帳簿）

```
F&A → 上海: $2.95（第三者）
上海 → LCJ: 上海が薄い ROS になる仕入値（TNMM routine）
```

米の X% 精算と混線させない。

---

## 5. First Sale（生地だけのゲート）

1. LCJ が数量・品揃え承認  
2. 上海→F&A: **米向け（3PL補充＝Mode F／backorder直送＝Mode B／大口直送＝Mode D）・転用禁止・固有PO**  
   - 3PL補充ロットと backorder 直送ロットは PO・荷印で分離（混載・転用禁止）  
3. 船積・Entry まで US 一貫  
4. IOR=TANAAKK。FSR申告は Broker 手順  
5. 失敗時: 関連者建値に落ち、差額経済は **LCJ**（在庫owner）  

日本倉庫・グローバル引当はしない（FSRと単純さを壊す）。

---

## 6. 契約パッケージ（増やす書類を最小化）

| 文書 | 要否 | 内容 |
|---|---|---|
| 既存 Master + Am.1 + Am.2 | **そのまま** | 米レグの憲法 |
| **Category Schedule: Quilting Fabric**（新規・短い） | 必須 | 対象SKU、X%、China物流の費用読替、**Mode F/B/D**（Faire 3PL＋CN backorder直送）、FSR POルール |
| 上海–F&A 購買 | 必須 | $2.95、受注生産、US向け条項 |
| 上海–LCJ LR | 必須 | back-to-back、routine、指示はLCJ |
| 刺しゅう原契約の本文改正 | **不要**（できれば） | Schedule 追加で足りる設計にする |

---

## 7. やらないこと（複雑化禁止リスト）

- 生地だけ買取 LRD + OM に分岐する  
- 「LCJ → retailer」売主に書き換える（Master と矛盾）  
- 報酬15%を生地にコピーする  
- 上海→日本倉庫→米  
- Faire用と Distributor用で別の ownership 物語を作る  
- TANAAKK に出荷前 title を持たせる（原契約と逆）  

---

## 8. 一枚フロー

```
[Asia]  F&A ─$2.95─► 上海 ─TP─► LCJ
[US]    Mode F: Qingdao → 米3PL（Faire常備）→ outbound
        Mode B: Qingdao → 顧客（backorder 中国直送）
        在庫: 出荷まで LCJ
        出荷瞬間: Path B → TANAAKK (SOR)
        精算: Net Sales の X% / (100−X)%（Directは配分前コスト控除）
```

---

## 9. 残オープン（推測で埋めない）

1. **X% の確定値**（感度表が必要）  
2. Broker: Path B consignment + FSR + China原点の Entry 型  
3. 上海→LCJ の建値・通貨  
4. 初回 Faire 投入量・3PL カバレッジ  
5. Category Schedule の法務文面  

---

## 10. 自己チェック

1. 刺しゅうより段が増えるのは **上海だけ** — それ以外を増やしていないか。  
2. 口頭で「日本が売っている」と言うと Master（SOR=TANAAKK）とズレる — 社内説明を契約に合わせる。  
3. X を先送りしたまま問屋に $5.92 を出すと、関税変動で LCJ が全吸収 — 提示は調整条項付き。  

---

## 11. サマリー

**Fabric = 既存 Consignment + U.S. Principal に、上海買取・報酬率 X%・China物流を足し、履行は Cosmo 同型（Faire=3PL常備、backorder=中国直送）にする。それがいま取れる最もシンプルな business scheme。**
