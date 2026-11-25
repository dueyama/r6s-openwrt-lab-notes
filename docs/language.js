const languageLink=document.getElementById('language');
if(languageLink)languageLink.addEventListener('click',function(){this.href=this.getAttribute('href').split('#')[0]+location.hash;});
const destinations={"development-history":"index","latest-audit-note":"index","daily-audit-log":"audits","system-configuration":"index","mac-docker-build":"development","raspberry-pi3-trial":"development","friendlywrt-transition":"development","added-software":"development","dashboard-migration":"development","upstream-maintenance-policy":"operations","python-rust-migration":"rust","luna-monitoring":"luna","luna-dataflow":"luna","luna-concepts":"luna","luna-examples":"luna","software-security-review":"operations","operational-features":"operations","storage-update-recovery":"operations","audit-reading":"operations","npu-platform":"npu","feature-redesign-validation":"npu","architecture":"npu","processing-spec":"npu","numerical-validation":"npu","journal":"npu","limits":"npu","design-reset":"npu","feature-stream":"npu","history-semantics":"npu","fixed-model":"npu"};
function revealDetails(){const target=document.getElementById(location.hash.slice(1));if(!target)return;let expanded=false;for(let node=target;node;node=node.parentElement){if(node.tagName==='DETAILS'&&!node.open){node.open=true;expanded=true;}}if(expanded)target.scrollIntoView();}
window.addEventListener('hashchange',revealDetails);revealDetails();
if(location.hash){const target=location.hash.slice(1);const key=destinations[target];if(key&&!document.getElementById(target)){const en=document.documentElement.lang==='en';const file=key==='index'?(en?'en.html':'index.html'):key+(en?'-en':'')+'.html';location.replace(file+location.hash);}}

(function () {
  const switcher = document.getElementById('language');
  if (!switcher) return;
  const key = 'r6s-lab-language';
  switcher.addEventListener('click', function () {
    try { localStorage.setItem(key, switcher.hreflang); } catch {}
  });

  // The directory URL is the shared entrance. Keep explicit page and section links intact.
  if (location.pathname !== '/r6s-openwrt-lab-notes/' || location.hash) return;

  let preferred;
  try { preferred = localStorage.getItem(key); } catch {}
  if (preferred !== 'ja' && preferred !== 'en') {
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
    preferred = languages.map(tag => (tag || '').toLowerCase().split('-')[0])
      .find(language => language === 'ja' || language === 'en') || 'en';
  }
  if (preferred === 'en') location.replace('en.html' + location.search);
})();
