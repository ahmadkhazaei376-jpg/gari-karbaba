<!doctype html>
<html lang="fa" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#1c1c1e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="کهربا">
<link rel="manifest" href="manifest.json">
<link rel="icon" href="icon.svg" type="image/svg+xml">
<title>کهربا | گالری طلا — نسخه ۶</title>
<style>
:root{--bg:#f7f3ea;--card:#fffdf8;--ink:#2f261a;--gold:#c9a227;--gold2:#f2df9b;--muted:#7d7468;--danger:#9d2c2c;--ok:#2e7d4f;--line:#e8dfcf}
*{box-sizing:border-box}
body{margin:0;background:radial-gradient(circle at top,#fffaf0,#f2ede3 70%);font-family:Tahoma,Arial,sans-serif;color:var(--ink)}
.app{max-width:560px;margin:auto;min-height:100vh;padding:16px 12px 30px}
.header{background:linear-gradient(160deg,#232326,#141416 55%,#1e1c16);color:#fff;border-radius:24px;padding:20px 14px 16px;text-align:center;box-shadow:0 12px 35px #14141640;position:relative;overflow:hidden}
.header::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 30% 0%,#c9a22714,transparent 55%);pointer-events:none}
.logoWrap{position:relative;z-index:1;display:flex;justify-content:center}
.brandSub{font-size:9px;letter-spacing:4px;white-space:nowrap;color:#d9c07a;margin:2px 0 4px;position:relative;z-index:1}
.badge{display:inline-block;margin-top:8px;background:#c9a22722;border:1px solid #c9a22777;color:#f2df9b;border-radius:99px;padding:4px 12px;font-size:11px;position:relative;z-index:1}
#installBtn{display:none;margin-top:10px;border:1px solid #f2df9b;background:transparent;color:#f2df9b;border-radius:99px;padding:6px 16px;font-family:inherit;font-size:12px;font-weight:800;cursor:pointer;position:relative;z-index:1}
/* ---------- تب‌ها ---------- */
nav.tabs{display:grid;grid-template-columns:repeat(5,1fr);gap:5px;margin-top:12px;position:relative;z-index:1}
nav.tabs button{border:1px solid #c9a22755;background:#ffffff10;color:#eadfbf;border-radius:12px;padding:8px 2px;font-family:inherit;font-size:10.5px;font-weight:800;cursor:pointer}
nav.tabs button.on{background:var(--gold);color:#20190f;border-color:var(--gold)}
.panel{display:none}.panel.on{display:block}
.card{margin-top:14px;background:var(--card);border:1px solid var(--line);border-radius:20px;padding:16px;box-shadow:0 7px 24px #2f261a0c}
.row{display:grid;grid-template-columns:1fr 1.25fr;gap:10px;align-items:center;margin-bottom:12px}
label{font-size:13px;font-weight:700}
.input{width:100%;border:1px solid #d9cfbd;background:#fff;border-radius:13px;padding:12px 11px;font-size:16px;font-weight:700;color:var(--ink);outline:none;font-family:inherit}
select.input{font-size:14px;padding:12px 10px}
.input:focus{border-color:var(--gold);box-shadow:0 0 0 3px #c9a22722}
.unit{font-size:11px;color:var(--muted);margin-top:-7px;margin-bottom:10px}
.pricebox{display:flex;justify-content:space-between;align-items:center;gap:9px;flex-wrap:wrap}
.source{font-size:11px;color:var(--muted);flex:1;min-width:150px;line-height:1.8}
.btn{border:0;border-radius:13px;padding:12px 14px;font-family:inherit;font-weight:800;cursor:pointer;font-size:13px}
.goldbtn{background:var(--gold);color:#20190f}
.darkbtn{background:var(--ink);color:#fff}
.clearbtn{background:#f6e3e3;color:var(--danger)}
.okbtn{background:#e3f2e8;color:var(--ok)}
.actions{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:12px}
.result{margin-top:15px;border-radius:18px;background:linear-gradient(145deg,#f8e8aa,#fff8df);border:1px solid #e4ca70;padding:17px}
.resultline{display:flex;justify-content:space-between;gap:10px;padding:8px 0;border-bottom:1px dashed #d9c78d;font-size:13px}
.resultline:last-child{border:0;padding-bottom:0}
.final{font-size:21px;font-weight:900}
.num{font-variant-numeric:tabular-nums}
.taxrow{display:flex;align-items:center;gap:8px;margin-bottom:12px;font-size:13px;font-weight:700;flex-wrap:wrap}
.taxrow input[type=number]{width:70px;padding:8px;border:1px solid #d9cfbd;border-radius:10px;font-weight:700}
.checkline{display:flex;align-items:center;gap:8px;font-size:12px;font-weight:700;margin:8px 0}
.status{margin-top:10px;font-size:11px;color:var(--muted);line-height:1.8}
.note{font-size:11px;color:var(--muted);line-height:1.9;margin:0}
.footer{text-align:center;color:var(--muted);font-size:10px;padding:18px}
details{margin-top:10px;border:1px dashed #d9cfbd;border-radius:13px;padding:10px 12px}
summary{cursor:pointer;font-size:12px;font-weight:800;color:var(--ink)}
.inner{margin-top:10px}
.apirow{display:flex;gap:8px;align-items:center}
.apirow input{flex:1;border:1px solid #d9cfbd;border-radius:10px;padding:9px 10px;font-size:12px;direction:ltr}
#rawResp{direction:ltr;text-align:left;background:#f4efe4;border:1px solid #e0d6c2;border-radius:10px;padding:10px;font-size:11px;line-height:1.7;white-space:pre-wrap;word-break:break-all;max-height:180px;overflow:auto;margin:0}
.err{color:var(--danger);font-size:11px;font-weight:700;line-height:1.9}
.okmsg{color:var(--ok);font-size:11px;font-weight:700}
.autoBadge{display:none;align-items:center;gap:5px;font-size:10px;font-weight:800;color:var(--ok)}
.dot{width:8px;height:8px;border-radius:50%;background:var(--ok);animation:pulse 1.5s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
.itemRow{border:1px solid #e8dfcf;border-radius:14px;padding:10px;margin-bottom:10px;background:#fff}
.itemGrid{display:grid;grid-template-columns:1.6fr 1fr 1fr;gap:8px;align-items:center}
.itemGrid .input{font-size:14px;padding:10px;border-radius:10px}
.iName{grid-column:1/4}
.iDel{grid-column:3/4;border:0;background:#f6e3e3;color:var(--danger);border-radius:10px;padding:10px;font-weight:800;cursor:pointer;font-family:inherit;font-size:12px}
.iTag{grid-column:1/3;font-size:11px;color:var(--muted);font-weight:700}
.invPanelBox{display:none;margin-top:15px;border:1px solid #e4ca70;border-radius:18px;background:#fffef7;padding:16px}
.invPanelBox.on{display:block}
.invPanelBox h3{margin:0 0 12px;text-align:center;font-size:15px}
.invWrap{overflow-x:auto}
.invTable{width:100%;border-collapse:collapse;font-size:12px;margin-top:8px;min-width:340px}
.invTable th{border-bottom:2px solid #c9a227;padding:6px 4px;font-size:11px;text-align:right}
.invTable td{padding:6px 4px;border-bottom:1px dashed #e4d8ae}
.invTable td:last-child,.invTable th:last-child{text-align:left;font-weight:700;font-variant-numeric:tabular-nums}
.invTable tr.total td{border-bottom:0;border-top:2px solid #c9a227;font-size:14px;font-weight:900;color:#20190f}
.invHead{text-align:center;font-size:11px;color:var(--muted);margin-bottom:8px}
.arcItem,.custItem,.txItem,.expItem{border:1px solid #e8dfcf;border-radius:14px;padding:10px;margin-bottom:8px;background:#fff;font-size:12px}
.arcTop,.custTop,.txTop,.expTop{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;font-weight:700}
.arcMeta,.custMeta,.txMeta,.expMeta{color:var(--muted);font-size:11px;margin-top:4px;line-height:1.8}
.arcBtns{display:flex;gap:6px;margin-top:8px;flex-wrap:wrap}
.arcBtns .btn{padding:7px 12px;font-size:11px}
.dash{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}
.dashBox{background:linear-gradient(145deg,#f8e8aa,#fff8df);border:1px solid #e4ca70;border-radius:14px;padding:10px;text-align:center}
.dashBox .v{font-size:15px;font-weight:900}.dashBox .l{font-size:10px;color:var(--muted);margin-top:3px}
.chips{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0}
.chips button{border:1px solid #d9cfbd;background:#fff;border-radius:99px;padding:6px 12px;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit}
.chips button.on{background:var(--gold);color:#20190f;border-color:var(--gold)}
#toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%) translateY(80px);background:var(--ink);color:#fff;padding:11px 20px;border-radius:14px;font-size:12px;opacity:0;transition:.3s;z-index:9;max-width:90%;text-align:center}
#toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
#printArea{display:none}
@media print{
  body *{visibility:hidden}
  #printArea,#printArea *{visibility:visible}
  #printArea{display:block;position:absolute;top:0;right:0;left:0;padding:24px;font-family:Tahoma,Arial,sans-serif}
  #printArea h2{text-align:center;margin:0 0 4px}
  #printArea .ph{text-align:center;color:#666;font-size:11px;margin-bottom:14px;border-bottom:2px solid #c9a227;padding-bottom:10px}
  #printArea table{width:100%;border-collapse:collapse;font-size:13px}
  #printArea th{border-bottom:2px solid #c9a227;padding:6px 4px;text-align:right;font-size:12px}
  #printArea td{padding:7px 4px;border-bottom:1px dashed #bbb}
  #printArea td:last-child,#printArea th:last-child{text-align:left;font-weight:700}
  #printArea tr.total td{border-top:2px solid #c9a227;border-bottom:0;font-size:15px;font-weight:900}
  #printArea .pf{margin-top:16px;text-align:center;font-size:10px;color:#888}
}
@media(max-width:380px){.row{grid-template-columns:1fr}.actions{grid-template-columns:1fr}.itemGrid{grid-template-columns:1fr 1fr}.iName{grid-column:1/3}.iTag{grid-column:1/2}nav.tabs{grid-template-columns:repeat(3,1fr)}}
</style>
</head>
<body>
<div class="app">
  <header class="header">
    <div class="logoWrap">
      <svg width="260" height="84" viewBox="0 0 300 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="لوگوی کهربا">
        <defs>
          <linearGradient id="gMetal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#fdf3c8"/><stop offset="45%" stop-color="#e9c85a"/><stop offset="100%" stop-color="#b8892b"/>
          </linearGradient>
          <linearGradient id="gLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f2df9b"/><stop offset="100%" stop-color="#c9a227"/>
          </linearGradient>
          <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" flood-color="#000" flood-opacity="0.45"/>
          </filter>
        </defs>
        <g stroke="url(#gLine)" stroke-width="2" fill="none" filter="url(#soft)">
          <path d="M32 34 L44 22 L60 22 L72 34 L52 58 Z" stroke-linejoin="round"/>
          <path d="M32 34 H72 M44 22 L52 58 L60 22" stroke-width="1.2"/>
          <g stroke-width="1.4" stroke-linecap="round">
            <path d="M18 20 L24 26"/><path d="M14 40 L22 40"/><path d="M80 16 L74 24"/>
            <path d="M86 34 L78 36"/><path d="M22 60 L28 54"/>
          </g>
          <path d="M36 62 Q52 78 68 62" stroke-width="2"/>
        </g>
        <text x="105" y="56" text-anchor="middle" font-family="Tahoma, Arial, sans-serif" font-size="40" font-weight="900" fill="url(#gMetal)" filter="url(#soft)">کهربا</text>
        <text x="220" y="46" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="15" letter-spacing="4" fill="url(#gMetal)">KAHROBA</text>
        <path d="M172 56 Q220 66 268 56" stroke="url(#gLine)" stroke-width="1" fill="none" opacity="0.8"/>
      </svg>
    </div>
    <div class="brandSub">G A L L E R Y &nbsp; K A H R O B A</div>
    <div class="badge">نسخه ۶ — حسابداری و باشگاه مشتریان</div>
    <div><button id="installBtn">📲 نصب برنامه</button></div>
    <nav class="tabs" id="tabs">
      <button data-t="sale" class="on">🛍 فروش</button>
      <button data-t="invoices">🗂 آرشیو</button>
      <button data-t="customers">💎 مشتریان</button>
      <button data-t="ledger">⚖️ طلا و بدهی</button>
      <button data-t="finance">📒 حسابداری</button>
    </nav>
  </header>

  <!-- ================= فروش ================= -->
  <section class="panel on" id="p-sale">
    <div class="card">
      <div class="row">
        <label for="price">قیمت هر گرم طلا</label>
        <input id="price" class="input num" inputmode="decimal" type="number" min="0" step="1000" value="26402000">
      </div>
      <div class="unit">تومان / گرم ۱۸ عیار — برای همه ردیف‌ها مشترک است</div>
      <div class="pricebox">
        <div class="source" id="priceMeta">قیمت دستی — با یک لمس از تابان گوهر به‌روزرسانی می‌شود</div>
        <span class="autoBadge" id="autoBadge"><span class="dot"></span>خودکار</span>
        <button class="btn goldbtn" id="refreshBtn">قیمت لحظه‌ای</button>
        <button class="btn darkbtn" id="sourceBtn">منبع قیمت</button>
      </div>
      <details>
        <summary>⚙️ تنظیمات قیمت آنلاین</summary>
        <div class="inner">
          <div class="checkline"><input type="checkbox" id="autoOn"><label for="autoOn">به‌روزرسانی خودکار هر ۶۰ ثانیه</label></div>
          <div class="checkline"><input type="checkbox" id="dbgOn"><label for="dbgOn">نمایش باکس اشکال‌زدایی</label></div>
          <div class="apirow" style="margin-top:6px">
            <input id="apiKey" type="text" placeholder="BrsAPI Key (اختیاری)">
            <button class="btn okbtn" id="saveKey">ثبت</button>
          </div>
        </div>
      </details>
      <details id="debugBox" style="display:none">
        <summary>🔍 پاسخ خام سرویس‌ها</summary>
        <div class="inner">
          <pre id="rawResp">هنوز واکشی انجام نشده.</pre>
          <div class="actions" style="margin-top:8px"><button class="btn okbtn" id="copyRaw">کپی پاسخ</button></div>
        </div>
      </details>
    </div>

    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <label style="font-size:14px">🛍️ اقلام فاکتور</label>
        <button class="btn okbtn" id="addItem" style="padding:8px 14px">➕ افزودن ردیف</button>
      </div>
      <div id="items"></div>
      <div class="row">
        <label for="unit">واحد وزن</label>
        <select id="unit" class="input">
          <option value="gram" selected>گرم</option>
          <option value="mesghal">مثقال (۴٫۶۰۸ گرم)</option>
        </select>
      </div>
      <div class="taxrow">
        <input type="checkbox" id="taxOn">
        <label for="taxOn">مالیات بر ارزش افزوده</label>
        <input id="taxRate" type="number" class="num" min="0" max="25" step="0.5" value="10">٪
      </div>
      <div class="unit" style="margin-top:-4px">مالیات فقط روی اجرت اعمال می‌شود</div>
      <div class="actions">
        <button class="btn clearbtn" id="clear">پاک کردن همه</button>
        <button class="btn darkbtn" id="save">ذخیره اطلاعات</button>
      </div>
    </div>

    <section class="result">
      <div class="resultline"><span>تعداد اقلام</span><strong id="itemCount" class="num">۰</strong></div>
      <div class="resultline"><span>جمع وزن</span><strong id="wEq" class="num">۰ گرم</strong></div>
      <div class="resultline"><span>جمع قیمت خام</span><strong id="raw" class="num">۰ تومان</strong></div>
      <div class="resultline"><span>جمع اجرت</span><strong id="makingAmount" class="num">۰ تومان</strong></div>
      <div class="resultline"><span>جمع سود (درآمد)</span><strong id="profitAmount" class="num">۰ تومان</strong></div>
      <div class="resultline" id="taxLine" style="display:none"><span>مالیات ارزش افزوده</span><strong id="taxAmount" class="num">۰ تومان</strong></div>
      <div class="resultline"><span>قیمت نهایی</span><strong id="final" class="final num">۰ تومان</strong></div>
      <div class="actions" style="margin-top:12px">
        <button class="btn okbtn" id="copy">کپی نتیجه</button>
        <button class="btn darkbtn" id="invToggle">🧾 صدور فاکتور</button>
      </div>
    </section>

    <section class="invPanelBox" id="invPanel">
      <h3>🧾 صدور فاکتور</h3>
      <div class="row"><label for="cName">نام مشتری</label><input id="cName" class="input" type="text" placeholder="نام و نام خانوادگی"></div>
      <div class="row">
        <label for="cPhone">موبایل مشتری</label>
        <input id="cPhone" class="input num" type="tel" inputmode="tel" placeholder="09xxxxxxxxx" list="custList">
        <datalist id="custList"></datalist>
      </div>
      <div class="unit" id="custHint" style="margin-top:-8px">اگر مشتری در باشگاه باشد، نام و امتیازش خودکار نمایش داده می‌شود.</div>
      <div class="invHead" id="invDate"></div>
      <div class="invWrap"><table class="invTable" id="invTable"></table></div>
      <div class="actions">
        <button class="btn goldbtn" id="invPrint">🖨️ چاپ فاکتور</button>
        <button class="btn okbtn" id="invShare">⚡ اشتراک‌گذاری</button>
      </div>
      <div class="actions">
        <button class="btn darkbtn" id="invSms">📱 پیامک</button>
        <button class="btn darkbtn" id="invWa">🟢 واتساپ</button>
      </div>
      <div class="actions">
        <button class="btn goldbtn" id="invArchive">💾 ثبت در آرشیو و حسابداری</button>
        <button class="btn clearbtn" id="invClear">🗑️ فاکتور جدید</button>
      </div>
    </section>
  </section>

  <!-- ================= آرشیو ================= -->
  <section class="panel" id="p-invoices">
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <label style="font-size:14px">🗂️ آرشیو فاکتورها</label>
        <button class="btn clearbtn" id="arcWipe" style="padding:7px 12px;font-size:11px">پاک‌کردن کل آرشیو</button>
      </div>
      <div id="archiveList"><p class="note">هنوز فاکتوری ثبت نشده است.</p></div>
    </div>
  </section>

  <!-- ================= مشتریان ================= -->
  <section class="panel" id="p-customers">
    <div class="card">
      <label style="font-size:14px">💎 افزودن / ویرایش مشتری</label>
      <div class="row" style="margin-top:10px"><label for="ncName">نام و نام خانوادگی</label><input id="ncName" class="input" type="text" placeholder="مثلاً زهرا محمدی"></div>
      <div class="row"><label for="ncPhone">موبایل</label><input id="ncPhone" class="input num" type="tel" inputmode="tel" placeholder="09xxxxxxxxx"></div>
      <div class="actions"><button class="btn goldbtn" id="ncSave">💾 ثبت مشتری</button></div>
    </div>
    <div class="card">
      <label style="font-size:14px">👥 لیست مشتریان</label>
      <input id="custSearch" class="input num" type="text" placeholder="جستجو با نام یا موبایل…" style="margin-top:10px;font-size:14px">
      <div id="custListDiv" style="margin-top:10px"></div>
    </div>
  </section>

  <!-- ================= طلا و بدهی ================= -->
  <section class="panel" id="p-ledger">
    <div class="card">
      <label style="font-size:14px">⚖️ ثبت تراکنش طلا / بدهی</label>
      <div class="row" style="margin-top:10px">
        <label for="txPhone">موبایل مشتری</label>
        <input id="txPhone" class="input num" type="tel" inputmode="tel" placeholder="09xxxxxxxxx" list="custList2">
        <datalist id="custList2"></datalist>
      </div>
      <div class="row">
        <label for="txType">نوع تراکنش</label>
        <select id="txType" class="input">
          <option value="goldIn">طلای مشتری نزد من (سپرده)</option>
          <option value="goldOut">تحویل طلا به مشتری (برداشت)</option>
          <option value="debtAdd">ثبت بدهی مشتری به من</option>
          <option value="debtPay">دریافت تسویه از مشتری</option>
        </select>
      </div>
      <div class="row" id="txWeightRow"><label for="txWeight">مقدار (گرم)</label><input id="txWeight" class="input num" inputmode="decimal" type="number" min="0" step="0.01" placeholder="مثلاً 5.20"></div>
      <div class="row" id="txAmountRow" style="display:none"><label for="txAmount">مبلغ (تومان)</label><input id="txAmount" class="input num" inputmode="decimal" type="number" min="0" step="10000" placeholder="مثلاً 5000000"></div>
      <div class="row"><label for="txNote">توضیح</label><input id="txNote" class="input" type="text" placeholder="اختیاری"></div>
      <div class="actions"><button class="btn goldbtn" id="txSave">💾 ثبت تراکنش</button></div>
      <div class="unit" id="txCustInfo" style="margin-top:6px"></div>
    </div>
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <label style="font-size:14px">📜 آخرین تراکنش‌ها</label>
        <button class="btn clearbtn" id="txWipe" style="padding:7px 12px;font-size:11px">پاک‌کردن دفتر</button>
      </div>
      <div id="txList"><p class="note">هنوز تراکنشی ثبت نشده است.</p></div>
    </div>
  </section>

  <!-- ================= حسابداری ================= -->
  <section class="panel" id="p-finance">
    <div class="card">
      <label style="font-size:14px">📊 داشبورد مغازه</label>
      <div class="dash" style="margin-top:10px" id="finDash"></div>
      <div class="chips" id="rangeChips">
        <button data-r="today" class="on">امروز</button>
        <button data-r="week">۷ روز</button>
        <button data-r="month">۳۰ روز</button>
        <button data-r="all">کل</button>
      </div>
      <div id="finReport"></div>
      <p class="note" style="margin-top:8px"><b>مبنای درآمد:</b> فقط سود فاکتورها درآمد محسوب می‌شود؛ اصل پول طلا صرف خرید مجدد می‌گردد.</p>
    </div>
    <div class="card">
      <label style="font-size:14px">⚙️ موجودی اولیه مغازه</label>
      <div class="row" style="margin-top:10px"><label for="finGold0">موجودی اولیه طلا (گرم)</label><input id="finGold0" class="input num" inputmode="decimal" type="number" min="0" step="0.01" placeholder="مثلاً 250"></div>
      <div class="row"><label for="finCash0">موجودی اولیه صندوق (تومان)</label><input id="finCash0" class="input num" inputmode="decimal" type="number" min="0" step="100000" placeholder="مثلاً 50000000"></div>
      <div class="actions"><button class="btn okbtn" id="finSaveBase">💾 ثبت موجودی اولیه</button></div>
      <p class="note" style="margin-top:6px">با هر فاکتور ثبت‌شده، وزن طلا از موجودی کم و مبلغ به صندوق اضافه می‌شود؛ سود فاکتور به درآمد.</p>
    </div>
    <div class="card">
      <label style="font-size:14px">➖ ثبت هزینه</label>
      <div class="row" style="margin-top:10px">
        <label for="expCat">دسته هزینه</label>
        <select id="expCat" class="input">
          <option>خرید طلای خام</option><option>اجاره</option><option>دستمزد پرسنل</option>
          <option>آب و برق و تلفن</option><option>حمل و نقل</option><option>متفرقه</option>
        </select>
      </div>
      <div class="row"><label for="expAmount">مبلغ (تومان)</label><input id="expAmount" class="input num" inputmode="decimal" type="number" min="0" step="10000" placeholder="مثلاً 2000000"></div>
      <div class="row"><label for="expNote">توضیح</label><input id="expNote" class="input" type="text" placeholder="اختیاری"></div>
      <div class="actions"><button class="btn clearbtn" id="expSave">➖ ثبت هزینه</button></div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;margin-bottom:6px">
        <label style="font-size:13px">لیست هزینه‌ها</label>
        <button class="btn clearbtn" id="expWipe" style="padding:5px 10px;font-size:10px">پاک‌کردن همه</button>
      </div>
      <div id="expList"><p class="note">هزینه‌ای ثبت نشده است.</p></div>
    </div>
  </section>

  <div class="footer">کهربا • نسخه وب v6</div>
</div>
<div id="printArea"></div>
<div id="toast"></div>

<script>
const $ = id => document.getElementById(id);
const STORE = "gariKarbaba_v3", ARC = "kahroba_v5_archive", MESGHAL = 4.608;
const CUST = "kahroba_v6_customers", TX = "kahroba_v6_tx", EXP = "kahroba_v6_expenses", FIN = "kahroba_v6_finance";
const PRIV = "https://webservice.tgnsrv.ir/Pr/Get/ahmadkhazaei3760238/a09188370238a";
const PUB  = "https://tabangohar.com/GheymatKhan/prices_in_table_parsian.html";
const PROXIES = [
  u => u,
  u => "https://r.jina.ai/" + u,
  u => "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent(u),
  u => "https://api.allorigins.win/raw?url=" + encodeURIComponent(u),
  u => "https://corsproxy.io/?url=" + encodeURIComponent(u)
];
const LOGO_SVG = document.querySelector(".header svg").outerHTML;

const fa2en = s => String(s).replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d)).replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d));
const parseNum = s => parseFloat(fa2en(String(s)).replace(/[,\s]/g, "")) || 0;
const fmt = n => new Intl.NumberFormat("fa-IR", {maximumFractionDigits: 0}).format(Math.round(Number(n) || 0));
const fmtFa = n => new Intl.NumberFormat("fa-IR", {maximumFractionDigits: 2}).format(n);
function toast(m){const t=$("toast");t.textContent=m;t.classList.add("show");clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove("show"),2600);}
function jdate(ts){try{return new Intl.DateTimeFormat("fa-IR",{dateStyle:"short",timeStyle:"short"}).format(new Date(ts));}catch(e){return new Date(ts).toLocaleString();}}
function dbg(t){$("rawResp").textContent = t;}
function setMsg(html){$("fetchStatus")?0:0;}
async function copyText(txt, msg){
  try{ await navigator.clipboard.writeText(txt); toast(msg); }
  catch(e){
    const ta = document.createElement("textarea"); ta.value = txt; document.body.appendChild(ta);
    ta.select(); document.execCommand("copy"); ta.remove(); toast(msg);
  }
}
function jget(k, d){ try{ return JSON.parse(localStorage.getItem(k)) || d; }catch(e){ return d; } }
function jset(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){ toast("حافظه پر است"); } }

/* ---------- تب‌ها ---------- */
document.querySelectorAll("#tabs button").forEach(b => b.onclick = () => {
  document.querySelectorAll("#tabs button").forEach(x => x.classList.remove("on"));
  b.classList.add("on");
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("on"));
  $("p-" + b.dataset.t).classList.add("on");
  window.scrollTo({top: 0, behavior: "smooth"});
});

/* ---------- ردیف کالاها ---------- */
function addItemRow(data){
  const d = data || {n:"", w:"", m:"", s:""};
  const div = document.createElement("div");
  div.className = "itemRow";
  div.innerHTML =
    '<div class="itemGrid">' +
    '<input class="input iName" type="text" placeholder="شرح کالا (مثلاً انگشتر ۱۸ عیار)" value="' + (d.n||"").replace(/"/g,"&quot;") + '">' +
    '<input class="input num iWeight" inputmode="decimal" type="number" min="0" step="0.01" placeholder="وزن" value="' + (d.w||"") + '">' +
    '<input class="input num iMaking" inputmode="decimal" type="number" min="0" max="100" step="0.01" placeholder="اجرت ٪" value="' + (d.m||"") + '">' +
    '<input class="input num iProfit" inputmode="decimal" type="number" min="0" max="7" step="0.01" placeholder="سود ٪" value="' + (d.s||"") + '">' +
    '<div class="iTag"></div>' +
    '<button class="iDel" title="حذف ردیف">🗑️ حذف</button>' +
    '</div>';
  div.querySelector(".iDel").onclick = () => { div.remove(); if(!$("items").children.length) addItemRow(); calculate(); };
  ["iName","iWeight","iMaking","iProfit"].forEach(c => div.querySelector("." + c).addEventListener("input", calculate));
  $("items").appendChild(div);
}
function getItems(){
  const unit = $("unit").value, p = parseNum($("price").value);
  return [...$("items").children].map(r => {
    const w = parseNum(r.querySelector(".iWeight").value);
    const m = parseNum(r.querySelector(".iMaking").value);
    const s = parseNum(r.querySelector(".iProfit").value);
    const wGram = unit === "mesghal" ? w * MESGHAL : w;
    const raw = p * wGram, ma = raw * m / 100, pa = (raw + ma) * s / 100;
    return {name: r.querySelector(".iName").value || "کالا", weight: w, wGram: wGram, m: m, s: s, raw: raw, ma: ma, pa: pa, total: raw + ma + pa};
  });
}
function itemsData(){
  return [...$("items").children].map(r => ({
    n: r.querySelector(".iName").value, w: r.querySelector(".iWeight").value,
    m: r.querySelector(".iMaking").value, s: r.querySelector(".iProfit").value
  }));
}

/* ---------- محاسبه ---------- */
let calc = {items:[], sumRaw:0, sumMa:0, sumPa:0, tax:0, total:0, wSum:0};
function calculate(){
  const p = parseNum($("price").value);
  const taxOn = $("taxOn").checked, tRate = parseNum($("taxRate").value);
  const items = getItems();
  const sumRaw = items.reduce((a,x) => a + x.raw, 0);
  const sumMa  = items.reduce((a,x) => a + x.ma, 0);
  const sumPa  = items.reduce((a,x) => a + x.pa, 0);
  const wSum   = items.reduce((a,x) => a + x.wGram, 0);
  const tax = taxOn ? sumMa * tRate / 100 : 0;
  const total = sumRaw + sumMa + sumPa + tax;
  calc = {items:items, sumRaw:sumRaw, sumMa:sumMa, sumPa:sumPa, tax:tax, total:total, wSum:wSum};
  $("itemCount").textContent = fmt(items.length);
  $("wEq").textContent = fmtFa(wSum) + " گرم";
  $("raw").textContent = fmt(sumRaw) + " تومان";
  $("makingAmount").textContent = fmt(sumMa) + " تومان";
  $("profitAmount").textContent = fmt(sumPa) + " تومان";
  $("taxLine").style.display = taxOn ? "flex" : "none";
  $("taxAmount").textContent = fmt(tax) + " تومان";
  $("final").textContent = fmt(total) + " تومان";
  const rows = [...$("items").children];
  rows.forEach((r,i) => { r.querySelector(".iTag").textContent = items[i] ? ("مبلغ ردیف: " + fmt(items[i].total) + " تومان") : ""; });
  saveState();
  if($("invPanel").classList.contains("on")) renderInvoice();
}

/* ---------- ذخیره و بازیابی ---------- */
function saveState(){
  const d = {price:$("price").value, unit:$("unit").value, taxOn:$("taxOn").checked, taxRate:$("taxRate").value,
             cName:$("cName").value, cPhone:$("cPhone").value, items:itemsData()};
  jset(STORE, d);
}
function loadState(){
  const x = jget(STORE, {});
  ["price","cName","cPhone"].forEach(k => { if(x[k] !== undefined && x[k] !== "") $(k).value = x[k]; });
  if(x.unit) $("unit").value = x.unit;
  if(x.taxOn !== undefined) $("taxOn").checked = !!x.taxOn;
  if(x.taxRate !== undefined && x.taxRate !== "") $("taxRate").value = x.taxRate;
  if(x.items && x.items.length) x.items.forEach(it => addItemRow(it));
  else addItemRow();
  const meta = jget(STORE + "_meta", null);
  if(meta){ $("priceMeta").textContent = meta.label; if(meta.price) $("price").value = meta.price; }
  const key = localStorage.getItem(STORE + "_apikey");
  if(key) $("apiKey").value = key;
  $("autoOn").checked = localStorage.getItem(STORE + "_auto") === "1";
  $("dbgOn").checked = localStorage.getItem(STORE + "_dbg") === "1";
  applyDbg();
}

/* ---------- واکشی نرخ ---------- */
async function getText(url){
  for(const p of PROXIES){
    try{
      const c = new AbortController();
      const t = setTimeout(() => c.abort(), 10000);
      const r = await fetch(p(url), {signal: c.signal, cache: "no-store"});
      clearTimeout(t);
      if(!r.ok) continue;
      let txt = await r.text();
      if(txt.startsWith("Title:")){
        const s = txt.indexOf("{"), e = txt.lastIndexOf("}");
        if(s >= 0 && e > s) txt = txt.slice(s, e + 1);
      }
      if(txt && txt.length > 5) return txt;
    }catch(e){}
  }
  return null;
}
function extractJson(text){
  if(!text) return null;
  try{return JSON.parse(text);}catch(e){}
  const a = text.indexOf("{"), b = text.lastIndexOf("}");
  if(a >= 0 && b > a){ try{return JSON.parse(text.slice(a, b + 1));}catch(e){} }
  return null;
}
function findGold18(j){
  if(!j) return null;
  const leaves = [];
  (function walk(o, path){
    if(o && typeof o === "object"){
      for(const k in o) walk(o[k], path ? path + "." + k : k);
    } else {
      const n = parseFloat(o);
      if(!isNaN(n) && isFinite(n)) leaves.push({key: path || "", val: n});
    }
  })(j, "");
  const ok = x => x.val >= 5e6 && x.val <= 2e9;
  let cands = leaves.filter(x => ok(x) && /18|geram|gram|gold|عیار/i.test(x.key.split(".").pop()));
  if(!cands.length) return null;
  let v = cands[0].val;
  if(v >= 1e8) v = v / 10;
  return v;
}
function applyPrice(v, source, declared){
  $("price").value = Math.round(v);
  $("priceMeta").textContent = declared ? (source + " — نرخ اعلامی: " + declared) : (source + " — " + jdate(Date.now()));
  jset(STORE + "_meta", {label: $("priceMeta").textContent, price: Math.round(v)});
  calculate();
}
async function fetchLive(manual){
  if(manual === undefined) manual = true;
  const btn = $("refreshBtn");
  btn.disabled = true; btn.textContent = "در حال دریافت…";
  let got = false;
  try{
    const txt = await getText(PRIV);
    dbg("مسیر ۱ (tgnsrv):\n" + (txt ? txt.slice(0, 500) : "بدون پاسخ (شبکه)"));
    const j = extractJson(txt);
    if(j && !j.Error){
      const v = findGold18(j);
      if(v && v > 1e6){ applyPrice(v, "سرویس اختصاصی tgnsrv"); got = true; }
    }
  }catch(e){}
  if(!got){
    try{
      const txt = await getText(PUB);
      const j = extractJson(txt);
      const v = j ? Number(j.x44) : NaN;
      if(!isNaN(v) && v > 1e6){
        const declared = (j.date ? String(j.date).replace(/^تاریخ\s*/, "") : "") + (j.time ? " ساعت " + j.time : "");
        applyPrice(v, "تابان گوهر نفیس", declared);
        got = true;
      }
    }catch(e){}
  }
  const key = ($("apiKey").value || "").trim();
  if(!got && key){
    try{
      const r = await fetch("https://Api.BrsApi.ir/Market/Gold_Currency.php?key=" + encodeURIComponent(key));
      const j = await r.json();
      const arr = (j && j.data && (j.data.gold || j.data.Gold)) || [];
      const item = arr.find(x => /18|۱۸/.test(x.name || ""));
      const v = item ? parseNum(item.price) : 0;
      if(v > 1e6){ applyPrice(v, "برق‌چی"); got = true; }
    }catch(e){}
  }
  btn.disabled = false; btn.textContent = "قیمت لحظه‌ای";
  if(got && manual) toast("قیمت به‌روزرسانی شد ✓");
  if(!got && manual) toast("دریافت نرخ ناموفق — قیمت دستی حفظ شد");
}
let autoTimer = null;
function setupAuto(){
  clearInterval(autoTimer); autoTimer = null;
  $("autoBadge").style.display = $("autoOn").checked ? "inline-flex" : "none";
  if($("autoOn").checked){
    autoTimer = setInterval(() => { if(!document.hidden) fetchLive(false); }, 60000);
    setTimeout(() => { if(!document.hidden) fetchLive(false); }, 3000);
  }
}
function applyDbg(){ $("debugBox").style.display = $("dbgOn").checked ? "block" : "none"; }

/* ---------- باشگاه مشتریان ---------- */
function normPh(s){ return fa2en(s).replace(/\D/g, ""); }
function customers(){ return jget(CUST, {}); }
function saveCust(c){ jset(CUST, c); }
function upsertCustomer(name, phone){
  const ph = normPh(phone);
  if(!ph) return null;
  const c = customers();
  if(!c[ph]) c[ph] = {name: name || "بدون نام", phone: ph, created: Date.now(), purchases: [], points: 0};
  else if(name) c[ph].name = name;
  saveCust(c);
  return c[ph];
}
function custBalance(ph){
  const txs = jget(TX, []).filter(t => t.phone === ph);
  let gold = 0, debt = 0;
  txs.forEach(t => {
    if(t.type === "goldIn") gold += t.weight;
    if(t.type === "goldOut") gold -= t.weight;
    if(t.type === "debtAdd") debt += t.amount;
    if(t.type === "debtPay") debt -= t.amount;
  });
  return {gold: gold, debt: debt};
}
function renderCustDatalists(){
  const c = customers(), keys = Object.keys(c);
  const html = keys.map(k => '<option value="' + k + '">' + c[k].name + '</option>').join("");
  $("custList").innerHTML = html;
  $("custList2").innerHTML = html;
}
function renderCustList(){
  const q = normPh($("custSearch").value) || $("custSearch").value.trim();
  const c = customers();
  const keys = Object.keys(c).filter(k => !q || c[k].name.includes(q) || k.includes(q));
  const div = $("custListDiv");
  if(!keys.length){ div.innerHTML = '<p class="note">مشتری‌ای یافت نشد. از فرم بالا یا صدور فاکتور (با موبایل) مشتری اضافه کنید.</p>'; return; }
  div.innerHTML = "";
  keys.sort((a,b) => c[b].purchases.length - c[a].purchases.length).forEach(k => {
    const cu = c[k], bal = custBalance(k);
    const el = document.createElement("div");
    el.className = "custItem";
    el.innerHTML =
      '<div class="custTop"><span>👤 ' + cu.name + '</span><span>' + cu.points + ' امتیاز</span></div>' +
      '<div class="custMeta">📱 ' + fa2en(cu.phone) + ' — ' + cu.purchases.length + ' خرید — جمع خرید: ' + fmt(cu.purchases.reduce((a,x) => a + x.total, 0)) + ' تومان</div>' +
      (bal.gold > 0.001 ? '<div class="custMeta" style="color:#8a6d1a">⚖️ طلای نزد شما: ' + fmtFa(bal.gold) + ' گرم</div>' : '') +
      (bal.debt > 0.5 ? '<div class="custMeta" style="color:#9d2c2c">📕 بدهکار: ' + fmt(bal.debt) + ' تومان</div>' : '') +
      (bal.debt < -0.5 ? '<div class="custMeta" style="color:#2e7d4f">📗 بستانکار: ' + fmt(-bal.debt) + ' تومان</div>' : '') +
      '<div class="arcBtns"><button class="btn darkbtn cHist">🧾 سابقه خرید</button><button class="btn clearbtn cDel">🗑️ حذف</button></div>' +
      '<div class="cDetail" style="display:none"></div>';
    el.querySelector(".cHist").onclick = () => {
      const d = el.querySelector(".cDetail");
      if(d.style.display === "none"){
        d.style.display = "block";
        d.innerHTML = cu.purchases.slice().reverse().map(x =>
          '<div class="arcMeta">• ' + jdate(x.ts) + ' — ' + x.items.map(i => i.name).join("، ") + ' — ' + fmt(x.total) + ' تومان</div>'
        ).join("") || '<div class="arcMeta">خریدی ثبت نشده.</div>';
      } else d.style.display = "none";
    };
    el.querySelector(".cDel").onclick = () => {
      if(confirm("مشتری «" + cu.name + "» و سابقه‌اش حذف شود؟ (تراکنش‌های دفتر طلا باقی می‌مانند)")){
        const cc = customers(); delete cc[k]; saveCust(cc);
        renderCustList(); renderCustDatalists(); toast("مشتری حذف شد");
      }
    };
    div.appendChild(el);
  });
}
$("custSearch").addEventListener("input", renderCustList);
$("ncSave").onclick = () => {
  const n = $("ncName").value.trim(), p = normPh($("ncPhone").value);
  if(!n || p.length < 10){ toast("نام و شماره موبایل معتبر (۱۱ رقمی) لازم است"); return; }
  upsertCustomer(n, p);
  $("ncName").value = ""; $("ncPhone").value = "";
  renderCustList(); renderCustDatalists();
  toast("مشتری ثبت شد ✓");
};

/* ---------- دفتر طلا و بدهی ---------- */
function updateTxFields(){
  const t = $("txType").value;
  $("txWeightRow").style.display = (t === "goldIn" || t === "goldOut") ? "grid" : "none";
  $("txAmountRow").style.display = (t === "debtAdd" || t === "debtPay") ? "grid" : "none";
}
$("txType").addEventListener("change", updateTxFields);
$("txPhone").addEventListener("input", () => {
  const ph = normPh($("txPhone").value), c = customers();
  const bal = custBalance(ph);
  $("txCustInfo").textContent = c[ph]
    ? (c[ph].name + " — طلای نزد شما: " + fmtFa(bal.gold) + " گرم — بدهی: " + fmt(Math.max(0, bal.debt)) + " تومان")
    : "";
});
$("txSave").onclick = () => {
  const ph = normPh($("txPhone").value);
  if(ph.length < 10){ toast("اول موبایل مشتری را وارد کنید"); return; }
  const c = customers();
  if(!c[ph]){ toast("این شماره در باشگاه مشتریان نیست — اول از تب مشتریان اضافه کنید"); return; }
  const t = $("txType").value;
  const tx = {id: Date.now(), ts: Date.now(), phone: ph, type: t, note: $("txNote").value.trim()};
  if(t === "goldIn" || t === "goldOut"){
    tx.weight = parseNum($("txWeight").value);
    if(tx.weight <= 0){ toast("مقدار وزن را وارد کنید"); return; }
  } else {
    tx.amount = parseNum($("txAmount").value);
    if(tx.amount <= 0){ toast("مبلغ را وارد کنید"); return; }
  }
  const arr = jget(TX, []);
  arr.push(tx);
  jset(TX, arr);
  ["txWeight","txAmount","txNote"].forEach(id => $(id).value = "");
  $("txCustInfo").textContent = "";
  renderTxList(); renderCustList();
  toast("تراکنش ثبت شد ✓");
};
const TX_LABEL = {goldIn: "📥 سپرده طلا", goldOut: "📤 برداشت طلا", debtAdd: "📕 ثبت بدهی", debtPay: "📗 تسویه بدهی"};
function renderTxList(){
  const arr = jget(TX, []).slice().reverse().slice(0, 30);
  const div = $("txList");
  if(!arr.length){ div.innerHTML = '<p class="note">هنوز تراکنشی ثبت نشده است.</p>'; return; }
  const c = customers();
  div.innerHTML = "";
  arr.forEach(t => {
    const el = document.createElement("div");
    el.className = "txItem";
    const val = (t.type === "goldIn" || t.type === "goldOut") ? fmtFa(t.weight) + " گرم" : fmt(t.amount) + " تومان";
    el.innerHTML =
      '<div class="txTop"><span>' + TX_LABEL[t.type] + ' — ' + ((c[t.phone] || {}).name || t.phone) + '</span><span>' + val + '</span></div>' +
      '<div class="txMeta">' + jdate(t.ts) + (t.note ? ' — ' + t.note : '') + '</div>';
    div.appendChild(el);
  });
}
$("txWipe").onclick = () => {
  if(confirm("کل دفتر طلا و بدهی پاک شود؟ برگشت‌پذیر نیست.")){ jset(TX, []); renderTxList(); renderCustList(); toast("دفتر پاک شد"); }
};

/* ---------- فاکتور ---------- */
function invoiceObj(){
  return {
    id: Date.now(), ts: Date.now(),
    customer: $("cName").value || "—",
    phone: normPh($("cPhone").value),
    price: parseNum($("price").value),
    items: calc.items.map(x => ({name: x.name, wGram: x.wGram, m: x.m, s: x.s, total: x.total})),
    sumRaw: calc.sumRaw, sumMa: calc.sumMa, sumPa: calc.sumPa,
    taxOn: $("taxOn").checked, taxRate: parseNum($("taxRate").value),
    tax: calc.tax, total: calc.total, wSum: calc.wSum
  };
}
function invTableHtml(o){
  let h = '<thead><tr><th>کالا</th><th>وزن</th><th>اجرت</th><th>سود</th><th>مبلغ</th></tr></thead><tbody>';
  o.items.forEach(x => {
    h += '<tr><td>' + x.name + '</td><td>' + fmtFa(x.wGram) + ' گرم</td><td>' + fmtFa(x.m) + '٪</td><td>' + fmtFa(x.s) + '٪</td><td>' + fmt(x.total) + '</td></tr>';
  });
  if(o.taxOn) h += '<tr><td colspan="4">مالیات ارزش افزوده (' + fmtFa(o.taxRate) + '٪ روی اجرت)</td><td>' + fmt(o.tax) + '</td></tr>';
  h += '<tr class="total"><td colspan="4">قیمت نهایی</td><td>' + fmt(o.total) + ' تومان</td></tr></tbody>';
  return h;
}
function renderInvoice(){
  $("invDate").textContent = "تاریخ صدور: " + jdate(Date.now()) + " — گالری کهربا";
  $("invTable").innerHTML = invTableHtml(invoiceObj());
}
function invoiceTextFromObj(o){
  let t = "🧾 فاکتور — گالری کهربا\n" +
    "مشتری: " + o.customer + "\n" +
    "تاریخ: " + jdate(o.ts) + "\n" +
    "--------------\n";
  o.items.forEach(x => {
    t += x.name + " — " + fmtFa(x.wGram) + " گرم — اجرت " + fmtFa(x.m) + "٪ — سود " + fmtFa(x.s) + "٪ — " + fmt(x.total) + " تومان\n";
  });
  t += "--------------\n";
  if(o.taxOn) t += "مالیات ارزش افزوده: " + fmt(o.tax) + " تومان\n";
  t += "قیمت نهایی: " + fmt(o.total) + " تومان";
  return t;
}
$("invToggle").onclick = () => {
  const p = $("invPanel");
  p.classList.toggle("on");
  if(p.classList.contains("on")) renderInvoice();
};
function printObj(o){
  $("printArea").innerHTML =
    '<div style="text-align:center">' + LOGO_SVG.replace('width="260" height="84"','width="200" height="65"') + '</div>' +
    '<h2 style="margin:0 0 4px">فاکتور فروش طلا</h2>' +
    '<div class="ph">' + jdate(o.ts) + '</div>' +
    '<table>' +
    '<tr><td>مشتری</td><td>' + o.customer + '</td></tr>' +
    (o.phone ? '<tr><td>موبایل</td><td>' + fa2en(o.phone) + '</td></tr>' : '') +
    '<tr><th>کالا</th><th>وزن</th><th>اجرت</th><th>سود</th><th>مبلغ</th></tr>' +
    o.items.map(x => '<tr><td>' + x.name + '</td><td>' + fmtFa(x.wGram) + ' گرم</td><td>' + fmtFa(x.m) + '٪</td><td>' + fmtFa(x.s) + '٪</td><td>' + fmt(x.total) + '</td></tr>').join("") +
    (o.taxOn ? '<tr><td colspan="4">مالیات ارزش افزوده (' + fmtFa(o.taxRate) + '٪)</td><td>' + fmt(o.tax) + '</td></tr>' : '') +
    '<tr class="total"><td colspan="4">قیمت نهایی</td><td>' + fmt(o.total) + ' تومان</td></tr>' +
    '</table>' +
    '<div class="pf">این فاکتور توسط گالری کهربا صادر شده است.</div>';
  window.print();
}
$("invPrint").onclick = () => { renderInvoice(); printObj(invoiceObj()); };
$("invShare").onclick = async () => {
  const txt = invoiceTextFromObj(invoiceObj());
  if(navigator.share){
    try{ await navigator.share({title: "فاکتور گالری کهربا", text: txt}); }catch(e){}
  } else copyText(txt, "اشتراک‌گذاری پشتیبانی نشد — متن کپی شد ✓");
};
$("invSms").onclick = () => {
  const ph = normPh($("cPhone").value);
  if(!ph){ toast("شماره موبایل مشتری را وارد کنید"); return; }
  window.location.href = "sms:" + ph + "?body=" + encodeURIComponent(invoiceTextFromObj(invoiceObj()));
};
$("invWa").onclick = () => {
  const ph = normPh($("cPhone").value);
  if(!ph){ toast("شماره موبایل مشتری را وارد کنید"); return; }
  window.open("https://wa.me/98" + ph.replace(/^0/, "") + "?text=" + encodeURIComponent(invoiceTextFromObj(invoiceObj())), "_blank", "noopener");
};
$("invClear").onclick = () => {
  $("items").innerHTML = ""; addItemRow();
  ["cName","cPhone"].forEach(id => $(id).value = "");
  $("custHint").textContent = "اگر مشتری در باشگاه باشد، نام و امتیازش خودکار نمایش داده می‌شود.";
  calculate();
  toast("فاکتور جدید آماده شد");
};
/* تشخیص مشتری هنگام تایپ موبایل */
$("cPhone").addEventListener("input", () => {
  const ph = normPh($("cPhone").value), c = customers();
  if(c[ph]){
    $("cName").value = c[ph].name;
    $("custHint").innerHTML = '💎 <b>' + c[ph].name + '</b> — ' + c[ph].points + ' امتیاز وفاداری — ' + c[ph].purchases.length + ' خرید قبلی';
  } else {
    $("custHint").textContent = "اگر مشتری در باشگاه باشد، نام و امتیازش خودکار نمایش داده می‌شود.";
  }
  saveState();
});

/* ---------- آرشیو ---------- */
function renderArchive(){
  const a = jget(ARC, []), list = $("archiveList");
  if(!a.length){ list.innerHTML = '<p class="note">هنوز فاکتوری ثبت نشده است.</p>'; return; }
  list.innerHTML = "";
  a.slice().reverse().forEach(o => {
    const div = document.createElement("div");
    div.className = "arcItem";
    div.innerHTML =
      '<div class="arcTop"><span>👤 ' + o.customer + '</span><span>' + fmt(o.total) + ' تومان</span></div>' +
      '<div class="arcMeta">' + jdate(o.ts) + ' — ' + o.items.length + ' قلم — سود: ' + fmt(o.sumPa) + ' تومان</div>' +
      '<div class="arcBtns">' +
      '<button class="btn goldbtn aPrint">🖨️ چاپ</button>' +
      '<button class="btn okbtn aShare">⚡ ارسال</button>' +
      '<button class="btn clearbtn aDel">🗑️ حذف</button>' +
      '</div>';
    div.querySelector(".aPrint").onclick = () => printObj(o);
    div.querySelector(".aShare").onclick = async () => {
      if(navigator.share){ try{ await navigator.share({title: "فاکتور گالری کهربا", text: invoiceTextFromObj(o)}); }catch(e){} }
      else copyText(invoiceTextFromObj(o), "متن فاکتور کپی شد ✓");
    };
    div.querySelector(".aDel").onclick = () => {
      if(confirm("این فاکتور از آرشیو و از محاسبات حسابداری حذف شود؟")){
        jset(ARC, jget(ARC, []).filter(x => x.id !== o.id));
        renderArchive(); renderFinance();
        toast("فاکتور حذف شد");
      }
    };
    list.appendChild(div);
  });
}
$("arcWipe").onclick = () => {
  if(confirm("کل آرشیو پاک شود؟ حسابداری هم بدون فروش‌ها می‌شود.")){ jset(ARC, []); renderArchive(); renderFinance(); toast("آرشیو پاک شد"); }
};
$("invArchive").onclick = () => {
  if(!calc.items.length || calc.total <= 0){ toast("اول اقلام فاکتور را وارد کنید"); return; }
  const o = invoiceObj();
  const a = jget(ARC, []);
  a.push(o);
  jset(ARC, a);
  /* باشگاه مشتریان */
  if(o.phone){
    const c = customers();
    if(!c[o.phone]) c[o.phone] = {name: o.customer, phone: o.phone, created: Date.now(), purchases: [], points: 0};
    else c[o.phone].name = o.customer;
    c[o.phone].purchases.push({id: o.id, ts: o.ts, total: o.total, items: o.items.map(x => ({name: x.name, wGram: x.wGram, total: x.total}))});
    c[o.phone].points += Math.floor(o.total / 10000);
    saveCust(c);
    renderCustDatalists(); renderCustList();
  }
  renderArchive();
  renderFinance();
  toast("فاکتور در آرشیو و حسابداری ثبت شد ✓");
};

/* ---------- حسابداری ---------- */
let finRange = "today";
function inRange(ts){
  const now = new Date();
  const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  if(finRange === "today") return ts >= startToday;
  if(finRange === "week") return ts >= startToday - 6 * 86400000;
  if(finRange === "month") return ts >= startToday - 29 * 86400000;
  return true;
}
function renderFinance(){
  const fin = jget(FIN, {gold0: 0, cash0: 0});
  if($("finGold0").value === "" && fin.gold0) $("finGold0").value = fin.gold0;
  if($("finCash0").value === "" && fin.cash0) $("finCash0").value = fin.cash0;
  const invs = jget(ARC, []).filter(o => inRange(o.ts));
  const sold = jget(ARC, []).reduce((a,o) => a + (o.wSum || 0), 0);
  const exps = jget(EXP, []).filter(e => inRange(e.ts));
  const revenue = invs.reduce((a,o) => a + o.sumPa, 0);
  const expense = exps.reduce((a,e) => a + e.amount, 0);
  const sales = invs.reduce((a,o) => a + o.total, 0);
  const escrowGold = Object.keys(customers()).reduce((a,k) => a + custBalance(k).gold, 0);
  const cash = (fin.cash0 || 0) + jget(ARC, []).reduce((a,o) => a + o.total, 0) - jget(EXP, []).reduce((a,e) => a + e.amount, 0);
  const gold = (fin.gold0 || 0) - sold;
  $("finDash").innerHTML =
    '<div class="dashBox"><div class="v">' + fmtFa(gold) + '</div><div class="l">موجودی طلا (گرم)</div></div>' +
    '<div class="dashBox"><div class="v">' + fmt(cash) + '</div><div class="l">مانده صندوق (تومان)</div></div>' +
    '<div class="dashBox"><div class="v">' + fmtFa(escrowGold) + '</div><div class="l">طلای امانی مشتریان</div></div>' +
    '<div class="dashBox"><div class="v">' + fmt(revenue) + '</div><div class="l">درآمد (سود) دوره</div></div>' +
    '<div class="dashBox"><div class="v">' + fmt(expense) + '</div><div class="l">هزینه‌های دوره</div></div>' +
    '<div class="dashBox"><div class="v">' + fmt(revenue - expense) + '</div><div class="l">سود خالص دوره</div></div>';
  const rName = {today: "امروز", week: "۷ روز اخیر", month: "۳۰ روز اخیر", all: "کل دوره"}[finRange];
  $("finReport").innerHTML =
    '<div class="resultline"><span>فروش دوره (' + rName + ')</span><strong>' + fmt(sales) + ' تومان</strong></div>' +
    '<div class="resultline"><span>تعداد فاکتور دوره</span><strong>' + fmt(invs.length) + '</strong></div>';
}
document.querySelectorAll("#rangeChips button").forEach(b => b.onclick = () => {
  document.querySelectorAll("#rangeChips button").forEach(x => x.classList.remove("on"));
  b.classList.add("on");
  finRange = b.dataset.r;
  renderFinance();
});
$("finSaveBase").onclick = () => {
  jset(FIN, {gold0: parseNum($("finGold0").value), cash0: parseNum($("finCash0").value)});
  renderFinance();
  toast("موجودی اولیه ثبت شد ✓");
};
$("expSave").onclick = () => {
  const amt = parseNum($("expAmount").value);
  if(amt <= 0){ toast("مبلغ هزینه را وارد کنید"); return; }
  const arr = jget(EXP, []);
  arr.push({id: Date.now(), ts: Date.now(), cat: $("expCat").value, amount: amt, note: $("expNote").value.trim()});
  jset(EXP, arr);
  $("expAmount").value = ""; $("expNote").value = "";
  renderExpList(); renderFinance();
  toast("هزینه ثبت شد ✓");
};
function renderExpList(){
  const arr = jget(EXP, []).slice().reverse().slice(0, 30);
  const div = $("expList");
  if(!arr.length){ div.innerHTML = '<p class="note">هزینه‌ای ثبت نشده است.</p>'; return; }
  div.innerHTML = "";
  arr.forEach(e => {
    const el = document.createElement("div");
    el.className = "expItem";
    el.innerHTML =
      '<div class="expTop"><span>' + e.cat + '</span><span>' + fmt(e.amount) + ' تومان</span></div>' +
      '<div class="expMeta">' + jdate(e.ts) + (e.note ? ' — ' + e.note : '') + '</div>';
    div.appendChild(el);
  });
}
$("expWipe").onclick = () => {
  if(confirm("همه هزینه‌ها پاک شود؟")){ jset(EXP, []); renderExpList(); renderFinance(); toast("هزینه‌ها پاک شد"); }
};

/* ---------- رویدادها ---------- */
$("addItem").onclick = () => { addItemRow(); calculate(); };
["price","taxRate"].forEach(id => $(id).addEventListener("input", calculate));
["unit","taxOn"].forEach(id => $(id).addEventListener("change", calculate));
$("clear").onclick = () => {
  $("items").innerHTML = ""; addItemRow();
  calculate();
  toast("پاک شد");
};
$("save").onclick = () => { calculate(); toast("ذخیره شد ✓"); };
$("refreshBtn").onclick = () => fetchLive(true);
$("sourceBtn").onclick = () => window.open("https://tabangohar.com/", "_blank", "noopener");
$("autoOn").addEventListener("change", () => {
  localStorage.setItem(STORE + "_auto", $("autoOn").checked ? "1" : "0");
  setupAuto();
  toast($("autoOn").checked ? "به‌روزرسانی خودکار روشن شد" : "به‌روزرسانی خودکار خاموش شد");
});
$("dbgOn").addEventListener("change", () => {
  localStorage.setItem(STORE + "_dbg", $("dbgOn").checked ? "1" : "0");
  applyDbg();
});
$("saveKey").onclick = () => {
  localStorage.setItem(STORE + "_apikey", $("apiKey").value.trim());
  toast($("apiKey").value.trim() ? "کلید ثبت شد ✓" : "کلید پاک شد");
};
$("copyRaw").onclick = () => copyText($("rawResp").textContent, "پاسخ خام کپی شد ✓");
$("copy").onclick = () => {
  let t = "گالری کهربا — محاسبه طلا\n";
  calc.items.forEach(x => { t += x.name + " (" + fmtFa(x.wGram) + " گرم، اجرت " + fmtFa(x.m) + "٪، سود " + fmtFa(x.s) + "٪): " + fmt(x.total) + " تومان\n"; });
  if($("taxOn").checked) t += "مالیات: " + $("taxAmount").textContent + "\n";
  t += "قیمت نهایی: " + $("final").textContent;
  copyText(t, "نتیجه کپی شد ✓");
};
["cName"].forEach(id => $(id).addEventListener("input", saveState));

/* ---------- نصب PWA ---------- */
let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault(); deferredPrompt = e;
  $("installBtn").style.display = "inline-block";
});
$("installBtn").onclick = async () => {
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  const c = await deferredPrompt.userChoice;
  if(c.outcome === "accepted") toast("برنامه نصب شد ✓");
  deferredPrompt = null;
  $("installBtn").style.display = "none";
};
if("serviceWorker" in navigator){
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(()=>{}));
}

/* ---------- شروع ---------- */
loadState();
updateTxFields();
calculate();
setupAuto();
renderArchive();
renderCustDatalists();
renderCustList();
renderTxList();
renderExpList();
renderFinance();
</script>
</body>
</html>
