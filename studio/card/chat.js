/* Thean Card Studio chat: the website chat (built from index.html by build/mkchat.py). Do not edit by hand. */
(()=>{
var P={users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><path d="M15.5 4.7a3.5 3.5 0 0 1 0 6.6M17.5 14.3c2.4.6 4 2.6 4 5.7"/>',money:'<rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/>',
 home:'<path d="M4 11l8-7 8 7v9h-5.2v-5.5H9.2V20H4z"/>',
 pin:'<path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
 temple:'<path d="M12 2.6v2.6M10.5 7.4L12 5.2l1.5 2.2"/><path d="M9.9 12.2l.7-4.8h2.8l.7 4.8"/><path d="M4.6 12.2l1-3.2 1 3.2M17.4 12.2l1-3.2 1 3.2"/><path d="M3 21h18M4 12.2h16M5.2 12.2V21M18.8 12.2V21M9.3 12.2V21M14.7 12.2V21M9.3 16.4h5.4"/>',
 lotus:'<path d="M12 19.5c-4.2 0-7.4-2.6-8.5-6.3 2.7 0 5.2 1.1 6.7 3.1M12 19.5c4.2 0 7.4-2.6 8.5-6.3-2.7 0-5.2 1.1-6.7 3.1"/><path d="M12 19.5c-2.1-2-3.1-5-3.1-8 0-2.6 1.2-4.8 3.1-6.3 1.9 1.5 3.1 3.7 3.1 6.3 0 3-1 6-3.1 8z"/>',
 bed:'<path d="M3 19.5V6M21 19.5V14a3 3 0 0 0-3-3h-7.5v5"/><path d="M3 16h18"/><circle cx="7" cy="12.5" r="1.8"/>',
 compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
 play:'<path d="M8 5.2v13.6L19 12z" fill="currentColor"/>',
 video:'<rect x="2.5" y="5.5" width="14" height="13" rx="2.5"/><path d="M16.5 10l5-3v10l-5-3"/>',
 social:'<circle cx="7" cy="7.5" r="2.6"/><circle cx="17" cy="7.5" r="2.6"/><path d="M2.5 19.5c0-3 2-5.2 4.5-5.2s4.5 2.2 4.5 5.2M12.5 19.5c0-3 2-5.2 4.5-5.2s4.5 2.2 4.5 5.2"/>',
 donate:'<path d="M12 10.8S8.5 8.6 8.5 6.2A2 2 0 0 1 12 5a2 2 0 0 1 3.5 1.2c0 2.4-3.5 4.6-3.5 4.6z"/><path d="M2 14.5h3l4.5 1.5H13a1.5 1.5 0 0 1 0 3H9.5"/><path d="M5 20.5h9l6.8-3.8a1.5 1.5 0 0 0-1.4-2.6L14.5 16"/>',
 bell:'<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
 mail:'<rect x="3" y="5.5" width="18" height="13" rx="2.2"/><path d="M3.6 7.2l8.4 6 8.4-6"/>',
 thumb:'<path d="M7 11v9.5H3.5V11zM7 11l4-7a2 2 0 0 1 2.6 2.3L12.8 10H19a2 2 0 0 1 2 2.4l-1.3 6.2a2.3 2.3 0 0 1-2.2 1.9H7"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.6v.2"/>',
 facebook:'<path d="M14.5 8H17V4.5h-2.8C11.5 4.5 10 6.1 10 8.6v2H7.5V14H10v7h3.5v-7h2.7l.5-3.4h-3.2V9.1c0-.7.4-1.1 1-1.1z"/>',
 messenger:'<path d="M12 3C7 3 3 6.7 3 11.4c0 2.6 1.2 4.9 3.3 6.4V21l3.1-1.7c.8.2 1.7.3 2.6.3 5 0 9-3.6 9-8.2S17 3 12 3z"/><path d="M7.3 13.6l3.1-3.3 2.1 2.1 3.2-2.7-3 3.3-2.1-2.1z"/>',
 telegram:'<path d="M21 4.2L2.8 11.2l5.6 2L18 7.4l-7.4 7.2.3 5.2 3-3.6 4.7 3.6z"/>',
 tiktok:'<path d="M14 3.2v11.3a3.6 3.6 0 1 1-3.6-3.6"/><path d="M14 3.2c.5 2.6 2.4 4.4 5.2 4.6"/>',
 youtube:'<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.2v5.6l4.8-2.8z"/>',
 search:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
 instagram:'<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.2 6.8v.1"/>',
 phone:'<path d="M5.2 3.5h3.3l1.6 4.4-2.2 1.5a11 11 0 0 0 4.8 4.8l1.5-2.2 4.4 1.6v3.3a2.4 2.4 0 0 1-2.6 2.4C9.6 18.9 5.1 14.4 4.7 6.1a2.4 2.4 0 0 1 .5-2.6z"/>',
 address:'<path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
 website:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.5 3.7 5.5 3.7 9s-1.3 6.5-3.7 9c-2.4-2.5-3.7-5.5-3.7-9S9.6 5.5 12 3z"/>',
 email:'<rect x="3" y="5.5" width="18" height="13" rx="2.2"/><path d="M3.6 7.2l8.4 6 8.4-6"/>',
 chat:'<path d="M4 5h16v11H9.5L4 20z"/><path d="M8 9.3h8M8 12.3h5"/>',
 upload:'<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 19v-3"/>',
 sound:'<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
 trash:'<path d="M4.5 7h15M9.5 7V4.8h5V7M6.5 7l.9 12.2h9.2L17.5 7M10 10.5v5.5M14 10.5v5.5"/>',
 dots:'<circle cx="5.5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="18.5" cy="12" r="1.6" fill="currentColor"/>',
 ext:'<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
 mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>',grid:'<circle cx="6" cy="5" r="1.3"/><circle cx="12" cy="5" r="1.3"/><circle cx="18" cy="5" r="1.3"/><circle cx="6" cy="11" r="1.3"/><circle cx="12" cy="11" r="1.3"/><circle cx="18" cy="11" r="1.3"/><circle cx="6" cy="17" r="1.3"/><circle cx="12" cy="17" r="1.3"/><circle cx="18" cy="17" r="1.3"/><circle cx="12" cy="22" r=".9"/>',phoneoff:'<path d="M3 13.6c5-4.6 13-4.6 18 0l-2.3 2.6-3.6-1.4-.3-2.5a10 10 0 0 0-5.6 0l-.3 2.5-3.6 1.4z"/>',
 close:'<path d="M6 6l12 12M18 6L6 18"/>', menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
 left:'<path d="M15 5l-7 7 7 7"/>', right:'<path d="M9 5l7 7-7 7"/>', arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>', plus:'<path d="M12 5v14M5 12h14"/>',
 image:'<rect x="3" y="4.5" width="18" height="15" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 8.5"/>',
 up:'<path d="M5 15l7-7 7 7"/>', down:'<path d="M5 9l7 7 7-7"/>',
 link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"/>',
 car:'<path d="M4 16.5V12l2-5h12l2 5v4.5"/><path d="M3 12h18v4.5H3z"/><circle cx="7" cy="16.5" r="1.8"/><circle cx="17" cy="16.5" r="1.8"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>', star:'<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8L3.5 9.7l5.9-.8z"/>',
 calendar:'<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
 download:'<path d="M12 4v11M7 10.5l5 5 5-5M4.5 20h15"/>', globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.5 3.7 5.5 3.7 9s-1.3 6.5-3.7 9c-2.4-2.5-3.7-5.5-3.7-9S9.6 5.5 12 3z"/>',
 wave:'<path d="M2.5 9c2.4 0 2.4-2 4.75-2S9.6 9 12 9s2.4-2 4.75-2S19.1 9 21.5 9M2.5 14c2.4 0 2.4-2 4.75-2S9.6 14 12 14s2.4-2 4.75-2 2.35 2 4.75 2M2.5 19c2.4 0 2.4-2 4.75-2S9.6 19 12 19s2.4-2 4.75-2 2.35 2 4.75 2"/>',
 hills:'<path d="M2 19l6-9 4 5 3-4 7 8z"/><circle cx="17" cy="6" r="2"/>'
};
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function url(v){v=String(v||'').trim();return /^(https?:|mailto:|tel:)/i.test(v)?v:'https://'+v.replace(/^\/+/,'')}
function linkOf(k,v){v=String(v||'').trim();if(!v)return '';if(k==='email')return 'mailto:'+v;if(k==='phone')return 'tel:'+v.replace(/[^\d+]/g,'');
  const PRE={messenger:'m.me/',telegram:'t.me/',tiktok:'tiktok.com/@',youtube:'youtube.com/@',instagram:'instagram.com/',facebook:'facebook.com/'};
  if(PRE[k]&&!/^https?:/i.test(v)&&v.indexOf('/')<0&&!/\.(com|me|net|org|kh|io|be|tv|app)$/i.test(v))v=PRE[k]+v.replace(/^@/,'');return url(v)}
function I(n){return '<svg class="i" viewBox="0 0 24 24" aria-hidden="true">'+(P[n]||P.info||'')+'</svg>'}
let CS_S={links:{},brand:{logo:'/logo.png'},media:{},places:[],tips:[],festivals:[]};
window.TheanSite={get S(){return CS_S},get lang(){return (window.CS_LANG&&window.CS_LANG())||'km'},icon:I,esc:esc,linkOf:linkOf,
  setState(c){if(c&&typeof c==='object'){CS_S=Object.assign({places:[],tips:[],festivals:[]},c);CS_S.brand=Object.assign({},c.brand||{});if(!CS_S.brand.logo)CS_S.brand.logo='/logo.png';document.dispatchEvent(new Event('thean:render'))}},setFb(){},setMaint(){},setLang(){}};
})();

/* Small wrapper around Firebase Realtime Database, shared by the website chat and the agent inbox */
const TS={__ts:1};
const INC=n=>({__inc:n});
const ms=v=>typeof v==='number'?v:(v&&v.toMillis?v.toMillis():Date.now());
async function makeDB(cfg,name){
  const base='https://www.gstatic.com/firebasejs/10.12.2/';
  const [app,au,d]=await Promise.all([import(base+'firebase-app.js'),import(base+'firebase-auth.js'),import(base+'firebase-database.js')]);
  if(!cfg||!cfg.apiKey)throw new Error('no config');
  const a=app.initializeApp(cfg,name);
  const db=d.getDatabase(a,cfg.databaseURL);
  const R=p=>d.ref(db,p);
  const conv=o=>{if(o===null||typeof o!=='object'||Array.isArray(o))return o;const r={};for(const k in o){const v=o[k];r[k]=v===TS?d.serverTimestamp():(v&&v.__inc)?d.increment(v.__inc):v}return r};
  const list=(s,rev)=>{const out=[];s.forEach(c=>{out.push(Object.assign({id:c.key},c.val()))});return rev?out.reverse():out};
  return {
    auth:au.getAuth(a),A:au,
    get:async p=>{const s=await d.get(R(p));return s.exists()?s.val():null},
    set:(p,v)=>d.set(R(p),conv(v)),
    update:(p,v)=>d.update(R(p),conv(v)),
    push:(p,v)=>d.push(R(p),conv(v)),
    on:(p,cb,err)=>d.onValue(R(p),s=>cb(s.exists()?s.val():null),err||(()=>{})),
    onMsgs:(p,cb,err)=>d.onValue(d.query(R(p),d.orderByKey(),d.limitToLast(300)),s=>cb(list(s)),err||(()=>{})),
    onRecent:(p,field,n,cb,err)=>d.onValue(d.query(R(p),d.orderByChild(field),d.limitToLast(n)),s=>cb(list(s,true)),err||(()=>{})),
    onDisconnect:(p,v)=>d.onDisconnect(R(p)).update(conv(v)),
    onConnected:cb=>d.onValue(R('.info/connected'),s=>cb(!!s.val())),
    remove:p=>d.remove(R(p)),
    findEq:async(p,field,val)=>{const sn=await d.get(d.query(R(p),d.orderByChild(field),d.equalTo(val)));return list(sn)},
    tx:async(p,fn)=>{const r=await d.runTransaction(R(p),fn);return {committed:r.committed,val:r.snapshot.val()}},
    createUser:(e,pw)=>au.createUserWithEmailAndPassword(au.getAuth(a),e,pw)
  };
}

const FB_CONFIG = window.THEAN_FIREBASE;
const ADMIN_PAGE = !!window.THEAN_ADMIN_PAGE;
const T = window.TheanSite;
const PROF = window.THEAN_CHAT_PROFILE||null;
let chat=null;
let sesLang=null;
let siteLangSeen=T.lang;
const L = () => (sesLang||T.lang)==='km'?'km':'en';
function detectLang(t){t=String(t||'');if(/[\u1780-\u17FF]/.test(t))return 'km';if(/[a-z]{3,}/i.test(t))return 'en';return null}
function setLg(lg){if(!lg)return;sesLang=lg;if(chat&&chat.lang!==lg){chat.lang=lg;if(fb&&user&&!offline)fb.update(CP(),{lang:lg}).catch(()=>{})}}
const W = {
 en:{title:'Chat with us',bot:'Assistant · instant answers',wait:'Connecting you to an agent…',live:'Live Agent',ph:'Type a message…',
   welcome:'សូមស្វាគមន៍! សូមជ្រើសរើសភាសាដែលអ្នកចង់ប្រើ។\n\nWelcome! Please select your preferred language.',
   intro:'Hello! How can I help you today? I can assist you with:\n• Planning your trip day by day\n• Destinations, temples and the best time to visit\n• Hotels and restaurants\n• Khmer culture, festivals, dances and food\n• Travel tips and how to contact us\n\nJust type your question, or tap «Talk to Live Agent» to chat with our team.',
   hold1:'Our next available agent will assist you shortly.',hold2:'Please hold on! Our system is connecting you to an available agent. Thank you!',
   busy:'Sorry, all our agents are busy right now. Please try again later. You can keep chatting with me in the meantime.',
   ended:'Your chat session has ended. Thank you for contacting us today.',endedSys:'The customer ended the live chat.',
   more:'What would you like to know?',noLive:'Live chat is not available at the moment. You can still reach our team here:',
   peek:'New message from our team',typing:'typing',assistant:'Assistant',
   bLive:'Talk to Live Agent',bCall:'Call us',bMore:'More Options',bEnd:'End Live Chat',
   opts:[['plan','Plan my trip'],['culture','Culture & traditions'],['dest','Destinations'],['time','Best time to visit'],['stay','Where to stay'],['tips','Travel tips'],['contact','Contact']],
   autoEnd:'This chat was closed automatically after {min} minutes without new messages. Send us a message any time if you need more help.',
   follow:'Thank you. We found your case with ticket ID {t}. It is still open, so we are connecting you to our team to continue from where we left off.',
   tNotFound:'Sorry, we could not find a case with ticket ID {t}. Please check the number, or talk to our team.',
   tClosed:'Your case with ticket ID {t} was solved and closed on {d}. Would you like to reopen the case or talk to a live agent?',
   tReopened:'Your case has been reopened. Your new ticket ID is {t}. Please keep this number. We are connecting you to our team now.',
   bReopen:'Reopen my case',clr:'Clear chat',clrQ:'Clear this conversation from your screen?',clrQLive:'This ends your live chat and clears the conversation from your screen. Continue?',clrYes:'Clear',clrNo:'Cancel',
   reportAsk:'We are sorry to hear that. Please fill in this form so our team can check it. We take every report seriously and will give credit or remove the content where it is right to do so.',
   reportDone:'Thank you. We received your report. Your ticket ID is {t}. Please keep this number. Our team will review your report and contact you by phone or email as soon as possible.',
   contactDone:'Thank you. We received your details.',
   fSend:'Send',fSent:'Sent. Thank you.',fNeed:'Please add your full name and a phone number or email.',fNeed2:'Please add the link to the content or describe it in the details.',fUp:'Add screenshots (up to 3)',fUping:'Uploading…',fUpErr:'Upload failed. You can send the screenshot by email instead.',
   F:{name:'Full name',phone:'Phone number',email:'Email',other:'Telegram, WhatsApp or other',ours:'Link to the content on our website or page',orig:'Link to your original post',details:'Details: what was used and when',want:'What would you like us to do?',wCredit:'Give me credit',wRemove:'Remove the content',wOther:'Something else'}},
 km:{title:'ជជែកជាមួយយើង',bot:'ជំនួយការ · ឆ្លើយភ្លាមៗ',wait:'កំពុងភ្ជាប់ទៅភ្នាក់ងារ…',live:'ភ្នាក់ងារផ្ទាល់',ph:'សរសេរសារ…',
   welcome:'សូមស្វាគមន៍! សូមជ្រើសរើសភាសាដែលអ្នកចង់ប្រើ។\n\nWelcome! Please select your preferred language.',
   intro:'សួស្ដី! តើខ្ញុំអាចជួយអ្វីអ្នកបានខ្លះថ្ងៃនេះ? ខ្ញុំអាចជួយអ្នកអំពី៖\n• រៀបចំកាលវិភាគដំណើរតាមថ្ងៃនីមួយៗ\n• គោលដៅទេសចរណ៍ ប្រាសាទ និងពេលល្អសម្រាប់ទស្សនា\n• សណ្ឋាគារ និងភោជនីយដ្ឋាន\n• វប្បធម៌ ពិធីបុណ្យ របាំ និងម្ហូបខ្មែរ\n• គន្លឹះធ្វើដំណើរ និងរបៀបទាក់ទងយើង\n\nសូមសរសេរសំណួររបស់អ្នក ឬចុច «ជជែកជាមួយភ្នាក់ងារ» ដើម្បីជជែកជាមួយក្រុមការងាររបស់យើង។',
   hold1:'ភ្នាក់ងារដែលទំនេរបន្ទាប់ នឹងជួយអ្នកក្នុងពេលឆាប់ៗនេះ។',hold2:'សូមរង់ចាំបន្តិច! ប្រព័ន្ធរបស់យើងកំពុងភ្ជាប់អ្នកទៅភ្នាក់ងារដែលទំនេរ។ អរគុណ!',
   busy:'សូមអភ័យទោស ភ្នាក់ងាររបស់យើងទាំងអស់កំពុងរវល់នៅពេលនេះ។ សូមព្យាយាមម្ដងទៀតនៅពេលក្រោយ។ អ្នកអាចបន្តជជែកជាមួយខ្ញុំក្នុងពេលនេះ។',
   ended:'វគ្គជជែករបស់អ្នកបានបញ្ចប់។ អរគុណសម្រាប់ការទាក់ទងមកយើងនៅថ្ងៃនេះ។',endedSys:'អតិថិជនបានបញ្ចប់ការជជែកផ្ទាល់។',
   more:'តើអ្នកចង់ដឹងអំពីអ្វី?',noLive:'ការជជែកផ្ទាល់មិនទាន់អាចប្រើបានទេពេលនេះ។ អ្នកនៅតែអាចទាក់ទងក្រុមការងាររបស់យើងតាម៖',
   peek:'សារថ្មីពីក្រុមការងាររបស់យើង',typing:'កំពុងសរសេរ',assistant:'ជំនួយការ',
   bLive:'ជជែកជាមួយភ្នាក់ងារ',bCall:'ហៅមកយើង',bMore:'ជម្រើសផ្សេងៗ',bEnd:'បញ្ចប់ការជជែកផ្ទាល់',
   opts:[['plan','រៀបចំដំណើររបស់ខ្ញុំ'],['culture','វប្បធម៌ និងប្រពៃណី'],['dest','គោលដៅទេសចរណ៍'],['time','ពេលល្អសម្រាប់ទស្សនា'],['stay','កន្លែងស្នាក់នៅ'],['tips','គន្លឹះធ្វើដំណើរ'],['contact','ទំនាក់ទំនង']],
   autoEnd:'ការជជែកនេះត្រូវបានបិទដោយស្វ័យប្រវត្តិ បន្ទាប់ពី {min} នាទីដោយគ្មានសារថ្មី។ សូមផ្ញើសារមកយើងពេលណាក៏បាន ប្រសិនបើត្រូវការជំនួយបន្ថែម។',
   follow:'អរគុណ។ យើងបានរកឃើញករណីរបស់អ្នក ដែលមានលេខសំបុត្រ {t}។ ករណីនេះនៅបើកនៅឡើយ ដូច្នេះយើងកំពុងភ្ជាប់អ្នកទៅក្រុមការងារ ដើម្បីបន្តពីកន្លែងដែលបានបញ្ឈប់។',
   tNotFound:'សូមអភ័យទោស យើងរកមិនឃើញករណីដែលមានលេខសំបុត្រ {t} ទេ។ សូមពិនិត្យលេខម្ដងទៀត ឬនិយាយជាមួយក្រុមការងាររបស់យើង។',
   tClosed:'ករណីរបស់អ្នក ដែលមានលេខសំបុត្រ {t} ត្រូវបានដោះស្រាយ និងបិទនៅថ្ងៃ {d}។ តើអ្នកចង់បើកករណីនេះឡើងវិញ ឬជជែកជាមួយភ្នាក់ងារ?',
   tReopened:'ករណីរបស់អ្នកត្រូវបានបើកឡើងវិញ។ លេខសំបុត្រថ្មីរបស់អ្នកគឺ {t}។ សូមរក្សាលេខនេះទុក។ យើងកំពុងភ្ជាប់អ្នកទៅក្រុមការងារឥឡូវនេះ។',
   bReopen:'បើកករណីរបស់ខ្ញុំឡើងវិញ',clr:'សម្អាតការជជែក',clrQ:'សម្អាតការសន្ទនានេះពីអេក្រង់របស់អ្នក?',clrQLive:'សកម្មភាពនេះនឹងបញ្ចប់ការជជែកផ្ទាល់ ហើយសម្អាតការសន្ទនាពីអេក្រង់របស់អ្នក។ បន្តទេ?',clrYes:'សម្អាត',clrNo:'បោះបង់',
   reportAsk:'យើងសោកស្ដាយដែលបានឮដូច្នេះ។ សូមបំពេញទម្រង់នេះ ដើម្បីឱ្យក្រុមការងាររបស់យើងពិនិត្យ។ យើងយកចិត្តទុកដាក់លើរាល់របាយការណ៍ ហើយនឹងដាក់ឈ្មោះម្ចាស់ ឬលុបមាតិកាចេញ នៅពេលដែលត្រឹមត្រូវ។',
   reportDone:'អរគុណ។ យើងបានទទួលរបាយការណ៍របស់អ្នក។ លេខសំបុត្ររបស់អ្នកគឺ {t}។ សូមរក្សាលេខនេះទុក។ ក្រុមការងាររបស់យើងនឹងពិនិត្យ ហើយទាក់ទងអ្នកតាមទូរស័ព្ទ ឬអ៊ីមែលឱ្យបានឆាប់បំផុត។',
   contactDone:'អរគុណ។ យើងបានទទួលព័ត៌មានរបស់អ្នកហើយ។',
   fSend:'ផ្ញើ',fSent:'បានផ្ញើ។ អរគុណ។',fNeed:'សូមបញ្ចូលឈ្មោះពេញ និងលេខទូរស័ព្ទ ឬអ៊ីមែល។',fNeed2:'សូមបញ្ចូលតំណនៃមាតិកា ឬពិពណ៌នាវានៅក្នុងព័ត៌មានលម្អិត។',fUp:'បន្ថែមរូបថតអេក្រង់ (រហូតដល់ ៣)',fUping:'កំពុងបញ្ជូន…',fUpErr:'បញ្ជូនមិនបាន។ អ្នកអាចផ្ញើរូបថតអេក្រង់តាមអ៊ីមែលជំនួសវិញ។',
   F:{name:'ឈ្មោះពេញ',phone:'លេខទូរស័ព្ទ',email:'អ៊ីមែល',other:'Telegram, WhatsApp ឬផ្សេងៗ',ours:'តំណមាតិកានៅលើគេហទំព័រ ឬទំព័ររបស់យើង',orig:'តំណស្នាដៃដើមរបស់អ្នក',details:'ព័ត៌មានលម្អិត៖ អ្វីដែលត្រូវបានប្រើ និងពេលណា',want:'តើអ្នកចង់ឱ្យយើងធ្វើអ្វី?',wCredit:'ដាក់ឈ្មោះខ្ញុំជាម្ចាស់',wRemove:'លុបមាតិកាចេញ',wOther:'ផ្សេងៗ'}}
};
if(PROF&&PROF.w)['en','km'].forEach(l=>Object.assign(W[l],PROF.w[l]||{}));
window.THEAN_CHAT_W=W;
const w=(k,lg)=>{lg=lg||L();const d=W[lg][k];if(typeof d!=='string')return d;const o=((T.S||{}).chatText||{})[k];return (o&&typeof o[lg]==='string'&&o[lg].trim())?o[lg]:d};
const esc=T.esc, I=T.icon;
const STARTED='thean-chat-started', CACHE='thean-site-cache';

/* ---------------- firebase ---------------- */
let fb=null,fbP=null,user=null,msgs=[],unsub=[],botTyping=false,unread=0,peek=null,open=false,liveMode=false,waitMin=10,autoMin=30,local=[],offline=false;
const FV={};
let clearedAt=0;try{clearedAt=+localStorage.getItem('thean-chat-cleared')||0}catch(e){}
async function clearChat(){const live=chat&&(chat.status==='waiting'||chat.status==='assigned');
  if(live){try{await endLive()}catch(e){}}
  clearedAt=Math.max(Date.now(),...msgs.map(m=>ms(m.ts)||0),...local.map(m=>ms(m.ts)||0))+1;try{localStorage.setItem('thean-chat-cleared',String(clearedAt))}catch(e){}
  local=[];for(const k in FV)delete FV[k];sesLang=null;lastBody='';draw(true)}
async function nextTicket(){const r=await fb.tx('counters/ticket',cur=>(typeof cur==='number'?cur:0)+1);if(!r.committed||typeof r.val!=='number')throw new Error('ticket');return String(r.val).padStart(16,'0')}
const fmtT=t=>{const p=String(t||'').split('-');const b=p[0].replace(/\D/g,'').padStart(16,'0').replace(/(\d{4})(?=\d)/g,'$1 ');return p[1]?b+'-'+p[1]:b};
const kmDig=x=>String(x).replace(/\d/g,d=>'០១២៣៤៥៦៧៨៩'[d]);
function fmtDate(v,lg){const d=new Date(ms(v));const p=n=>String(n).padStart(2,'0');let h=d.getHours(),ap=h<12?'AM':'PM';h=h%12||12;
  if(lg==='km')return kmDig(p(d.getDate())+'/'+p(d.getMonth()+1)+'/'+d.getFullYear()+' ម៉ោង '+h+':'+p(d.getMinutes()))+' '+(ap==='AM'?'ព្រឹក':'ល្ងាច');
  return d.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})+' at '+h+':'+p(d.getMinutes())+' '+ap}
async function ticketFlow(base,lg){
  let rec=null;try{rec=await fb.get('tickets/'+base)}catch(e){}
  if(!rec){await typeThen(900,{from:'bot',text:w('tNotFound',lg).split('{t}').join(fmtT(base)),btns:btnLive(lg).concat([{l:w('bMore',lg),a:'more'}])});return}
  const cur=rec.cur||base;
  if(rec.status==='closed'){await touch({followTicket:base,lastMsg:'Asked about closed case '+fmtT(cur),lastFrom:'visitor'});
    await typeThen(1000,{from:'bot',text:w('tClosed',lg).split('{t}').join(fmtT(cur)).split('{d}').join(rec.closedAt?fmtDate(rec.closedAt,lg):'—'),btns:[{l:w('bReopen',lg),a:'reopen:'+base}].concat(btnLive(lg),[{l:w('bMore',lg),a:'more'}])});return}
  await fb.update(CP(),{followTicket:base,ticket:base,ticketCur:cur,ticketStatus:'open',status:'waiting',requestedAt:TS,updatedAt:TS,lastMsg:'Follow-up of ticket '+fmtT(cur),lastFrom:'visitor',unreadAgent:INC(1)});
  await typeThen(900,{from:'bot',text:w('follow',lg).split('{t}').join(fmtT(cur))});await typeThen(1800,{from:'bot',text:w('hold1',lg),btns:[{l:w('bEnd',lg),a:'end'}]})}
async function reopenCase(base){const lg=L();
  try{await ensureChat()}catch(e){offline=true}
  if(offline){local.push({from:'system',text:w('noLive',lg),alt:true,ts:Date.now()});draw(true);return}
  let rec=null;try{rec=await fb.get('tickets/'+base)}catch(e){}
  if(!rec){await typeThen(700,{from:'bot',text:w('tNotFound',lg).split('{t}').join(fmtT(base)),btns:btnLive(lg)});return}
  if(rec.status!=='closed')return ticketFlow(base,lg);
  const n=(rec.reopens||0)+1,cur=base+'-'+n;
  try{await fb.update('tickets/'+base,{status:'open',reopens:n,cur,curChat:user.uid,reopenedAt:TS})}catch(e){await typeThen(700,{from:'bot',text:w('busy',lg),btns:btnLive(lg)});return}
  await fb.update(CP(),{followTicket:base,ticket:base,ticketCur:cur,ticketStatus:'open',status:'waiting',requestedAt:TS,updatedAt:TS,lastMsg:'Reopened case '+fmtT(cur),lastFrom:'visitor',unreadAgent:INC(1)});
  await typeThen(900,{from:'bot',text:w('tReopened',lg).split('{t}').join(fmtT(cur))});await typeThen(1600,{from:'bot',text:w('hold1',lg),btns:[{l:w('bEnd',lg),a:'end'}]})}
const FORMS={contact:['name','phone','email','other'],report:['name','phone','email','ours','orig','details','want','files']};
const REPORT_RE=/(copyright|without (my |our )?permission|stole|stolen|steal|my (own )?(photo|picture|video|content|post)s?|take ?down|remove my|give (me )?credit|ច្បាប់ចម្លង|រក្សាសិទ្ធិ|គ្មានការអនុញ្ញាត|មិនបានអនុញ្ញាត|លួច)/i;
function loadFb(){if(fb)return Promise.resolve(fb);if(!fbP)fbP=makeDB(FB_CONFIG,'thean').then(x=>(fb=x));return fbP}
function authUser(){return loadFb().then(f=>new Promise(res=>{const off=f.A.onAuthStateChanged(f.auth,u=>{off();res(u)})}))}
async function ensureUser(){await loadFb();if(user&&user.isAnonymous)return user;let u=await authUser();if(!u||!u.isAnonymous){const c=await fb.A.signInAnonymously(fb.auth);u=c.user}user=u;return user}
const CP=()=>'chats/'+user.uid, MP=()=>'messages/'+user.uid;
async function ensureChat(lang){
  await ensureUser();
  if(!chat){
    const ex=await fb.get(CP());
    if(!ex){await fb.set(CP(),{visitorUid:user.uid,status:'bot',lang:lang||L(),name:(PROF&&PROF.who&&PROF.who().name)||'',contact:(PROF&&PROF.who&&PROF.who().contact)||'',page:(location.pathname+location.hash),createdAt:TS,updatedAt:TS,lastMsg:'',lastFrom:'',unreadAgent:0,unreadVisitor:0,ua:navigator.userAgent.slice(0,160)})}
    else chat=ex;
    if(PROF&&PROF.who){const wh=PROF.who();if(wh.name){fb.update(CP(),{name:wh.name,contact:wh.contact||'',page:location.pathname}).catch(()=>{})}}
    try{localStorage.setItem(STARTED,'1')}catch(e){}
    try{const s=await fb.get('settings/public');if(s&&s.waitMin)waitMin=+s.waitMin||10;if(s&&s.autoMin)autoMin=+s.autoMin||30}catch(e){}
    listen();
    await new Promise(r=>{const t=setInterval(()=>{if(chat){clearInterval(t);r()}},40)});
  }
  return chat;
}
let msgsLoaded=false;
function listen(){
  if(unsub.length)return;
  unsub.push(fb.on(CP(),v=>{chat=v;if(chat){liveMode=chat.status==='waiting'||chat.status==='assigned';if(open&&chat.unreadVisitor)fb.update(CP(),{unreadVisitor:0}).catch(()=>{});checkTimeout()}draw()}));
  unsub.push(fb.onMsgs(MP(),list=>{
    const known=new Set(msgs.map(m=>m.id));msgs=list;
    const fresh=list.filter(m=>!known.has(m.id)&&(m.from==='agent'||(m.from==='system'&&m.join)));
    if(msgsLoaded&&fresh.length&&!open){unread+=fresh.length;peek=fresh[fresh.length-1];beep()}
    msgsLoaded=true;draw(true);
  }));
}
function chatFileHtml(f){if(!f||!/^https:\/\/res\.cloudinary\.com\//.test(String(f.url||'')))return '';const u=esc(f.url),n=esc(f.name||'file');
  if(f.kind==='image')return '<a class="tc-file img" href="'+u+'" target="_blank" rel="noopener"><img alt="'+n+'" src="'+u+'" loading="lazy"></a>';
  if(f.kind==='video')return '<video class="tc-file vid" src="'+u+'" controls playsinline preload="metadata"></video>';
  return '<a class="tc-file doc" href="'+u+'" target="_blank" rel="noopener"><b>'+n+'</b>'+(f.size?'<small>'+(f.size>1048576?(f.size/1048576).toFixed(1)+' MB':Math.max(1,Math.round(f.size/1024))+' KB')+'</small>':'')+'</a>'}
async function sendFile(file){const M=T.S.media||{},km=L()==='km',ta=root.querySelector('.tc-foot textarea'),att=root.querySelector('.tc-att');
  const note=t=>{if(!ta)return;const ph=ta.placeholder;ta.placeholder=t;setTimeout(()=>{ta.placeholder=ph},4500)};
  if(!M.cloud||!M.preset){note(km?'មិនអាចផ្ញើឯកសារបានទេពេលនេះ។':'Files cannot be sent right now.');return}
  if(file.size>25*1048576){note(km?'ឯកសារធំពេក (អតិបរមា 25 MB)។':'This file is too big (25 MB max).');return}
  if(att){att.disabled=true;att.classList.add('busy')}if(ta)ta.placeholder=km?'កំពុងផ្ញើឯកសារ…':'Sending your file…';
  try{const fd=new FormData();fd.append('file',file);fd.append('upload_preset',M.preset);fd.append('folder','thean/chat');
    const j=await (await fetch('https://api.cloudinary.com/v1_1/'+encodeURIComponent(M.cloud)+'/auto/upload',{method:'POST',body:fd})).json();if(!j.secure_url)throw new Error('upload');
    const kind=/^image\//.test(file.type)?'image':/^video\//.test(file.type)?'video':'file',cap=(ta&&ta.value.trim()||'').slice(0,1500);if(ta){ta.value='';ta.style.height='';ta.placeholder=w('ph')}
    try{await ensureChat()}catch(e){offline=true}
    await say({from:'visitor',text:cap,file:{url:j.secure_url,name:String(file.name||'file').slice(0,120),kind:kind,size:file.size}});
    const live=chat&&(chat.status==='waiting'||chat.status==='assigned'),lm=(kind==='image'?'[Photo]':kind==='video'?'[Video]':'[File] '+file.name)+(cap?' '+cap:'');
    if(!offline){const up={lastMsg:lm.slice(0,120),lastFrom:'visitor'};if(live)up.unreadAgent=INC(1);if(chat&&chat.status==='closed')up.status='bot';await touch(up)}
    if(!live)await typeThen(800,{from:'bot',text:km?'អរគុណ យើងបានទទួលឯកសាររបស់អ្នក។ ដើម្បីឱ្យក្រុមការងារមើល សូមចុច «ជជែកជាមួយភ្នាក់ងារ»។':'Thank you, we received your file. For our team to look at it, tap «Talk to Live Agent».',btns:btnLive(L())});
  }catch(e){if(ta)ta.placeholder=w('ph');note(km?'មិនអាចផ្ញើឯកសារបានទេ។ សូមព្យាយាមម្តងទៀត។':'The file could not be sent. Please try again.')}
  finally{if(att){att.disabled=false;att.classList.remove('busy')}}}
async function say(m){
  if(!m.btns)delete m.btns; /* push a message from this visitor's browser */
  if(offline||!fb||!user||!chat){local.push(Object.assign({ts:Date.now(),id:'l'+Math.random()},m));draw(true);return}
  await fb.push(MP(),Object.assign({ts:TS},m));
}
async function touch(extra){if(fb&&user&&chat)await fb.update(CP(),Object.assign({updatedAt:TS},extra||{})).catch(()=>{})}

/* ---------------- flows ---------------- */
const btnLive=lg=>[{l:w('bLive',lg),a:'live'}].concat(callOn()?[{l:w('bCall',lg),a:'call'}]:[]);
const capsMsg=lg=>typeThen(900,{from:'bot',text:CAPS[lg]||CAPS.en,btns:btnLive(lg).concat(w('opts',lg).map(o=>({l:o[1],a:'opt:'+o[0]})))});
async function pickLang(lg){
  sesLang=lg;try{await ensureChat(lg);await fb.update(CP(),{lang:lg});chat.lang=lg}catch(e){offline=true}
  await say({from:'visitor',text:lg==='km'?'ភាសាខ្មែរ':'English'});
  await typeThen(1000,{from:'bot',text:hello(lg)});
  await capsMsg(lg);
  await touch({lastMsg:hello(lg).slice(0,120),lastFrom:'bot'});
}
async function goLive(){
  const lg=L();
  try{await ensureChat()}catch(e){offline=true}
  await say({from:'visitor',text:w('bLive',lg)});
  if(offline){local.push({from:'system',text:w('noLive',lg),alt:true,ts:Date.now()});draw(true);return}
  await fb.update(CP(),{status:'waiting',requestedAt:TS,updatedAt:TS,lastMsg:''+w('bLive',lg),lastFrom:'visitor',unreadAgent:INC(1),lang:lg});
  try{window.thTrack&&window.thTrack('live_agent_request',{language:lg})}catch(e){}
  await typeThen(1800,{from:'bot',text:w('hold1',lg)});
  await typeThen(2600,{from:'bot',text:w('hold2',lg),btns:[{l:w('bEnd',lg),a:'end'}]});
}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function typeThen(ms,m){botTyping=true;draw(true);await sleep(ms);botTyping=false;await say(m)}
async function endLive(){
  const lg=L();
  await say({from:'visitor',text:w('bEnd',lg)});
  if(fb&&user&&chat){await fb.update(CP(),{status:'bot',updatedAt:TS,lastMsg:w('endedSys','en'),lastFrom:'system'});await say({from:'system',text:w('endedSys','en'),staff:true})}
  await typeThen(1200,{from:'bot',text:w('ended',lg)});
}
let toBusy=false;
async function checkTimeout(){
  if(chat&&chat.status==='assigned'&&chat.lastFrom!=='visitor'&&chat.updatedAt&&!toBusy&&Date.now()-ms(chat.updatedAt)>=autoMin*60000){
    toBusy=true;
    try{const r=await fb.tx(CP()+'/status',cur=>cur===null?null:(cur==='assigned'?'bot':undefined));
      if(r.committed&&r.val==='bot'){const lg=L();await say({from:'bot',text:w('autoEnd',lg).split('{min}').join(lg==='km'?String(autoMin).replace(/\d/g,d=>'០១២៣៤៥៦៧៨៩'[d]):autoMin),auto:true});await touch({lastMsg:'Closed automatically after '+autoMin+' min without messages',lastFrom:'system'})}}catch(e){}
    toBusy=false;return}
  if(!chat||chat.status!=='waiting'||!chat.requestedAt||toBusy)return;
  if(Date.now()-ms(chat.requestedAt)<waitMin*60000)return;
  toBusy=true;
  try{const r=await fb.tx(CP()+'/status',cur=>cur===null?null:(cur==='waiting'?'bot':undefined));
    if(r.committed&&r.val==='bot'){const lg=L();await say({from:'bot',text:w('busy',lg),btns:btnLive(lg)});await touch({lastMsg:'No agent answered in time',lastFrom:'bot'})}}catch(e){}
  toBusy=false;
}
setInterval(checkTimeout,15000);
async function more(label){
  const lg=L();
  if(label)await say({from:'visitor',text:label});
  await say({from:'bot',text:w('more',lg),btns:w('opts',lg).map(o=>({l:o[1],a:'opt:'+o[0]}))});
}
function optAnswer(key,lg){
  if(PROF&&PROF.opt){const r=PROF.opt(key,lg);if(r)return r}
  const S=T.S,km=lg==='km';
  if(key==='dest')return listAnswer((S.places||[]).filter(x=>x.featured),lg,km?'កន្លែងដែលយើងចូលចិត្តបំផុត៖':'Our favourite places right now:',[km?'គោលដៅទាំងអស់':'All destinations','#/p/destinations']);
  if(key==='plan')return bot(km?'ជួយរៀបចំដំណើរ':'plan my trip');
  if(key==='culture')return bot(km?'វប្បធម៌ខ្មែរ':'khmer culture and traditions');
  if(key==='time')return tip('t1',lg);
  if(key==='stay')return bot(km?'សណ្ឋាគារ':'hotel');
  if(key==='tips')return {text:(km?'គន្លឹះធ្វើដំណើរ៖\n':'Travel tips:\n')+(S.tips||[]).map(t=>'• '+tr(t.title,lg)).join('\n')+(km?'\n\nសរសេរប្រធានបទណាមួយ ខ្ញុំនឹងពន្យល់បន្ថែម។':'\n\nType any topic and I will explain more.'),links:[[km?'គន្លឹះទាំងអស់':'All travel tips','#/p/tips']]};
  return bot(km?'ទំនាក់ទំនង':'contact');
}
async function option(key,label){
  const lg=L();
  await say({from:'visitor',text:label});
  botTyping=true;draw(true);
  setTimeout(async()=>{botTyping=false;const r=optAnswer(key,lg)||bot(label);
    await say({from:'bot',text:r.text,links:(r.links||[]).map(x=>({l:x[0],h:x[1]})),btns:r.live&&!r.caps?btnLive(lg):undefined});
    if(r.caps)await capsMsg(lg);
    await touch({lastMsg:r.text.slice(0,120),lastFrom:'bot'});
  },600);
}
async function send(text){
  text=String(text||'').trim().slice(0,1500);if(!text)return;
  const ta=root.querySelector('.tc-foot textarea');if(ta){ta.value='';ta.style.height=''}
  try{await ensureChat()}catch(e){offline=true}
  setLg(detectLang(text));
  await say({from:'visitor',text});
  const live=chat&&(chat.status==='waiting'||chat.status==='assigned');
  if(!offline){const up={lastMsg:text.slice(0,120),lastFrom:'visitor',page:(location.pathname+location.hash)};if(live)up.unreadAgent=INC(1);if(chat&&chat.status==='closed')up.status='bot';await touch(up)}
  if(live)return;
  const tm=text.match(/(?:^|[^\d])((?:\d[ ]?){15}\d)(?![\d])/);
  if(tm&&!offline){return ticketFlow(tm[1].replace(/\D/g,''),L())}
  if(REPORT_RE.test(text)){const lg=hasKm(text)?'km':L();await typeThen(900,{from:'bot',text:w('reportAsk',lg),form:'report'});await touch({lastMsg:'Content report form shown',lastFrom:'bot'});return}
  botTyping=true;draw(true);
  setTimeout(async()=>{botTyping=false;const lg=hasKm(text)?'km':L();const r=bot(text);
    await say({from:'bot',text:r.text,links:(r.links||[]).map(x=>({l:x[0],h:x[1]})),btns:r.caps?undefined:r.live?btnLive(lg):(r.more?btnLive(lg).concat(w('opts',lg).map(o=>({l:o[1],a:'opt:'+o[0]}))):undefined)});
    if(r.caps)await capsMsg(lg);
    await touch({lastMsg:r.text.slice(0,120),lastFrom:'bot'});
  },650+Math.min(900,text.length*12));
}
async function act(a,label){
  if(chatLive()&&a!=='end')return;
  if(a.indexOf('lang:')!==0)setLg(detectLang(label));
  if(a.indexOf('lang:')===0)return pickLang(a.slice(5));
  if(a==='live')return goLive();
  if(a==='call'){if(window.TheanCall)window.TheanCall.start();return}
  if(a==='end')return endLive();
  if(a==='more')return more(label);
  if(a.indexOf('reopen:')===0){await say({from:'visitor',text:label});return reopenCase(a.slice(7))}
  if(a.indexOf('opt:')===0)return option(a.slice(4),label);
}

/* ---------------- smart bot ---------------- */
function norm(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')}
const CAPS={en:'I can assist you with:\n• Planning your trip day by day\n• Destinations, temples and the best time to visit\n• Hotels and restaurants\n• Khmer culture, festivals, dances and food\n• Travel tips and how to contact us\n\nJust type your question, or tap «Talk to Live Agent» to chat with our team.',km:'ខ្ញុំអាចជួយអ្នកអំពី៖\n• រៀបចំកាលវិភាគដំណើរតាមថ្ងៃនីមួយៗ\n• គោលដៅទេសចរណ៍ ប្រាសាទ និងពេលល្អសម្រាប់ទស្សនា\n• សណ្ឋាគារ និងភោជនីយដ្ឋាន\n• វប្បធម៌ ពិធីបុណ្យ របាំ និងម្ហូបខ្មែរ\n• គន្លឹះធ្វើដំណើរ និងរបៀបទាក់ទងយើង\n\nសូមសរសេរសំណួររបស់អ្នក ឬចុច «ជជែកជាមួយភ្នាក់ងារ» ដើម្បីជជែកជាមួយក្រុមការងាររបស់យើង។'};
if(PROF&&PROF.caps)Object.assign(CAPS,PROF.caps);
function hello(lg){const h=new Date().getHours();if(lg==='km')return (h<12?'អរុណសួស្ដី':h<18?'ទិវាសួស្ដី':'សាយណ្ហសួស្ដី')+'! ខ្ញុំជាជំនួយការនិម្មិតរបស់អ្នកថ្ងៃនេះ។ តើខ្ញុំអាចជួយអ្វីអ្នកបានខ្លះ?';return (h<12?'Good morning':h<18?'Good afternoon':'Good evening')+"! I'm your virtual assistant today. How can I help you?"}
const hasKm=s=>/[ក-៿]/.test(s);
function tr(o,lg){if(!o)return '';if(typeof o==='string')return o;return o[lg]||o.en||o.km||''}
const KW={
 menu:['menu','option','options','more info','help me','what can you do','ជម្រើស','ម៉ឺនុយ','ជួយ'],
 howru:['how are you','how r u','សុខសប្បាយ','សុខទេ'],
 who:['who are you','are you a bot','are you human','are you real','your name','អ្នកជានរណា','អ្នកឈ្មោះអី'],
 ok:[' ok ',' okay ',' yes ',' sure ',' cool ',' nice ',' great ',' good ','បាទ','ចាស','យល់ព្រម','ល្អ'],
 bye:['bye','goodbye','see you','លាហើយ','លាសិនហើយ'],
 greet:['hello','hi ','hey','good morning','good afternoon','sus dey','សួស្ដី','ជម្រាបសួរ','សួស្តី'],
 thanks:['thank','thx','អរគុណ'],
 agent:['agent','human','real person','talk to someone','speak to someone','talk to a person','speak to a person','talk to agent','live agent','live chat','staff member','representative','customer service','support team','contact agent','talk to your team','speak with your team','ភ្នាក់ងារផ្ទាល់','បុគ្គលិក','និយាយផ្ទាល់','call me','ភ្នាក់ងារ','និយាយជាមួយមនុស្ស','ជជែកជាមួយភ្នាក់ងារ','និយាយជាមួយបុគ្គលិក'],
 t1:['best time','when to','season','weather','rain','month','hot','cold','climate','រដូវ','ពេលល្អ','ពេលណា','អាកាសធាតុ','ភ្លៀង'],
 t2:['visa','passport','evisa','ទិដ្ឋាការ','លិខិតឆ្លងដែន'],
 t3:['money','dollar','riel','atm','currency','cash','pay','khqr','លុយ','ប្រាក់','ដុល្លារ','រៀល'],
 t4:['dress','wear','clothes','etiquette','manner','rule','សំលៀកបំពាក់','សម្លៀកបំពាក់','សុជីវធម៌'],
 t5:['ticket','angkor pass','entrance','entry fee','សំបុត្រ'],
 t6:['tuk','grab','passapp','bus','taxi','transport','get around','getting around','drive','scooter','motorbike','រ៉ឺម៉ក','ឡានក្រុង','ធ្វើដំណើរ'],
 t7:['safe','safety','health','mosquito','water','sick','landmine','សុវត្ថិភាព','សុខភាព','មូស'],
 t8:['khmer word','language','how to say','phrase','ពាក្យខ្មែរ','ភាសា'],
 hotel:['hotel','stay','sleep','resort','guesthouse','hostel','accommodation','room','សណ្ឋាគារ','ស្នាក់','ផ្ទះសំណាក់','រីសត'],
 contact:['contact','email','phone','number','collab','sponsor','work with','partnership','advertis','ទំនាក់ទំនង','អ៊ីមែល','លេខទូរស័ព្ទ','សហការ'],
 donate:['donat','support','aba','qr','ឧបត្ថម្ភ','បរិច្ចាគ','គាំទ្រ'],
 video:['video','youtube','tiktok','reel','film','វីដេអូ'],
 fest:['festival','new year','water festival','pchum','holiday','celebrat','បុណ្យ','ចូលឆ្នាំ','ភ្ជុំ','អុំទូក'],
 temple:['temple','temples','ruin','heritage','angkor','ប្រាសាទ','អង្គរ'],
 food:['food','eat','restaurant','dish','amok','ម្ហូប','ញ៉ាំ','អាម៉ុក'],
 beach:['beach','island','sea','swim','ឆ្នេរ','កោះ','សមុទ្រ'],
 price:['price','cost','how much','budget','cheap','ថ្លៃ','តម្លៃ'],
 where:['where','destination','recommend','go','visit','trip','plan','ទៅណា','កន្លែង','គោលដៅ','ដំណើរ']
};
const EXTRA={'angkor-wat':['angkor wat','angkorwat','អង្គរវត្ត'],'bayon':['bayon','angkor thom','បាយ័ន','អង្គរធំ'],'ta-prohm':['ta prohm','taprohm','tomb raider','តាព្រហ្ម'],'banteay-srei':['banteay srei','banteay srey','បន្ទាយស្រី'],'preah-vihear':['preah vihear','វិហារ'],'koh-ker':['koh ker','កោះកេរ្តិ៍','កោះកេ'],'sambor-prei-kuk':['sambor','prei kuk','សំបូរ'],'kampot':['kampot','bokor','pepper','កំពត','បូកគោ','ម្រេច'],'kep':['kep','crab','rabbit island','កែប','ក្ដាម'],'koh-rong':['koh rong','samloem','sihanoukville','កោះរ៉ុង','សីហនុ'],'mondulkiri':['mondulkiri','sen monorom','bou sra','មណ្ឌលគិរី'],'ratanakiri':['ratanakiri','yeak laom','yeak loam','banlung','រតនគិរី','យក្សឡោម'],'kratie':['kratie','dolphin','kampi','ក្រចេះ','ផ្សោត'],'battambang':['battambang','bamboo train','bat cave','sampeau','បាត់ដំបង'],'phnom-kulen':['kulen','គូលែន'],'tonle-sap':['tonle sap','floating village','kampong phluk','ទន្លេសាប','បណ្ដែតទឹក'],'apsara':['apsara','dance','ballet','អប្សរា','របាំ'],'sbek-thom':['sbek','shadow','puppet','ស្បែកធំ'],'silk':['silk','weav','koh dach','សូត្រ','ត្បាញ'],'amok':['amok','food','eat','អាម៉ុក','ម្ហូប']};
function has(t,list){return list.some(k=>t.includes(norm(k)))}
function placeKeys(p){const ks=(EXTRA[p.id]||[]).slice();const te=norm(tr(p.title,'en')).replace(/temple|&|the/g,' ').replace(/\s+/g,' ').trim();if(te.length>3)ks.push(te);const tk=tr(p.title,'km').replace('ប្រាសាទ','');if(tk.length>1)ks.push(tk);return ks.map(norm)}
function findPlace(t){let best=null,score=0;(T.S.places||[]).forEach(p=>{placeKeys(p).forEach(k=>{if(k&&t.includes(k)&&k.length>score){best=p;score=k.length}})});return best}
function tip(id,lg){const x=(T.S.tips||[]).find(t=>t.id===id);return x?{text:''+tr(x.title,lg)+'\n'+tr(x.text,lg),links:[[lg==='km'?'គន្លឹះធ្វើដំណើរ':'All travel tips','#/p/tips']]}:null}
function placeAnswer(p,lg){const km=lg==='km';let s=''+tr(p.title,lg)+' · '+tr(p.region,lg)+'\n'+tr(p.sum,lg);if(tr(p.best,lg))s+='\n\n'+(km?'ពេលល្អ៖ ':'Best time: ')+tr(p.best,lg);if(tr(p.getting,lg))s+='\n'+(km?'':'')+tr(p.getting,lg);if(tr(p.tip,lg))s+='\n'+(km?'គន្លឹះ៖ ':'Tip: ')+tr(p.tip,lg);return {text:s,links:[[km?'អានបន្ថែម':'Read more','#/place/'+p.id],[km?'ផែនទី':'Map','https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.mapq||tr(p.title,'en')+', Cambodia')]]}}
function listAnswer(arr,lg,head,link){return {text:head+'\n'+arr.map(p=>'• '+tr(p.title,lg)+' ('+tr(p.region,lg)+')').join('\n'),links:[link].concat(arr.slice(0,3).map(p=>[tr(p.title,lg),'#/place/'+p.id]))}}
function bot0(text){
  const lg=hasKm(text)?'km':L(),km=lg==='km',t=' '+norm(text)+' ',S=T.S,Lk=S.links||{};
  if(has(t,KW.agent))return {text:km?'ប្រាកដណាស់! ចុចប៊ូតុង «ជជែកជាមួយភ្នាក់ងារ» ខាងក្រោម ហើយយើងនឹងភ្ជាប់អ្នកទៅភ្នាក់ងារ។':'Of course! Tap «Talk to Live Agent» below and we will connect you with an agent.',live:true};
  if(has(t,KW.hotel)){const st=(S.stays||[]);const m=st.find(s=>t.includes(norm(tr(s.region,'en')))||t.includes(norm(tr(s.region,'km'))));
    if(m)return {text:''+tr(m.title,lg)+'\n'+tr(m.text,lg),links:[[km?'កន្លែងស្នាក់នៅទាំងអស់':'All areas to stay','#/p/stay']]};
    return {text:(km?'កន្លែងស្នាក់នៅតាមតំបន់៖\n':'Where we suggest staying:\n')+st.map(s=>'• '+tr(s.title,lg)).join('\n')+(km?'\n\nប្រាប់យើងពីខេត្តដែលអ្នកនឹងទៅ យើងនឹងណែនាំបន្ថែម។':'\n\nTell us which province you are going to and we can say more.'),links:[[km?'មើលទំព័រសណ្ឋាគារ':'See the hotel page','#/p/stay']]}}
  const p=findPlace(t); if(p)return placeAnswer(p,lg);
  for(const id of ['t2','t3','t4','t5','t6','t7','t8']){if(has(t,KW[id]))return tip(id,lg)}
  if(has(t,KW.t1))return tip('t1',lg);
  if(has(t,KW.fest)){const f=(S.festivals||[]);return {text:(km?'ពិធីបុណ្យសំខាន់ៗ៖\n':'Main festivals:\n')+f.map(x=>'• '+tr(x.when,lg)+' — '+tr(x.title,lg)).join('\n'),links:[[km?'សិល្បៈ និងប្រពៃណី':'Art & Tradition','#/p/culture']]}}
  if(has(t,KW.food))return placeAnswer((S.places||[]).find(x=>x.id==='amok')||S.places[0],lg);
  if(has(t,KW.beach))return listAnswer((S.places||[]).filter(x=>x.art==='sea'),lg,km?'ឆ្នេរ និងកោះ៖':'Beaches and islands:',[km?'គោលដៅទាំងអស់':'All destinations','#/p/destinations']);
  if(has(t,KW.temple))return listAnswer((S.places||[]).filter(x=>x.cat==='temple'),lg,km?'ប្រាសាទដែលយើងណែនាំ៖':'Temples we recommend:',[km?'ទំព័រប្រវត្តិសាស្ត្រ':'Historical page','#/p/temples']);
  if(has(t,KW.contact)){const rows=[];if(Lk.email)rows.push(''+Lk.email);if(Lk.phone)rows.push(''+Lk.phone);if(Lk.messenger)rows.push('Messenger: '+Lk.messenger);if(Lk.telegram)rows.push('Telegram: '+Lk.telegram);
    return {text:(km?'អ្នកអាចទាក់ទងក្រុមការងាររបស់យើងតាម៖\n':'You can reach our team here:\n')+rows.join('\n')+(km?'':''),links:[[km?'ទំព័រទំនាក់ទំនង':'Contact page','#/p/contact']],live:true}}
  if(has(t,KW.donate))return {text:km?'អរគុណសម្រាប់ការចង់គាំទ្រ! ព័ត៌មានទាំងអស់មាននៅទំព័រការបរិច្ចាគ។':'Thank you for wanting to help! Everything is on the Donation page.',links:[[km?'ការបរិច្ចាគ':'Donation','#/p/donate']]};
  if(has(t,KW.video))return {text:km?'វីដេអូរបស់យើងមាននៅទីនេះ៖':'You can watch our videos here:',links:[[km?'វីដេអូ':'Videos','#/p/videos']].concat(Lk.youtube?[['YouTube','https://'+String(Lk.youtube).replace(/^https?:\/\//,'')]]:[])};
  if(has(t,KW.price))return {text:km?'តម្លៃខុសគ្នាតាមរដូវ និងកន្លែង។ សម្រាប់តម្លៃសណ្ឋាគារ ឬដំណើរកម្សាន្តជាក់លាក់ សូមសួរភ្នាក់ងាររបស់យើងផ្ទាល់។':'Prices change with the season and the place. For a specific hotel or trip price, it is best to ask one of our agents.',live:true,links:[[km?'គន្លឹះលុយកាក់':'Money tips','#/p/tips']]};
  if(has(t,KW.menu))return {text:km?'នេះជាប្រធានបទដែលខ្ញុំអាចជួយបាន៖':'Here are some things I can help with:',more:true};
  if(has(t,KW.howru))return {text:km?'ខ្ញុំសុខសប្បាយ អរគុណដែលសួរ! ចុះអ្នកវិញ? តើអ្នកកំពុងគ្រោងធ្វើដំណើរទៅណា?':"I'm doing great, thanks for asking! How about you? Are you planning a trip somewhere?"};
  if(has(t,KW.who))return {text:km?'ខ្ញុំជាជំនួយការស្វ័យប្រវត្តិរបស់ក្រុម Thean។ ខ្ញុំអាចឆ្លើយសំណួរអំពីការធ្វើដំណើរនៅកម្ពុជា។ ប្រសិនបើអ្នកចង់និយាយជាមួយមនុស្ស គ្រាន់តែប្រាប់ខ្ញុំ។':"I'm the Thean team's virtual assistant. I can answer questions about travelling in Cambodia. If you'd like to talk to a person, just tell me."};
  if(has(t,KW.bye))return {text:km?'លាសិនហើយ! សូមឱ្យដំណើររបស់អ្នករីករាយ។':'Goodbye! Have a wonderful trip.'};
  if(has(t,KW.thanks))return {text:km?'មិនអីទេ! រីករាយនឹងដំណើររបស់អ្នក។':"You're welcome! Enjoy your trip."};
  if(has(t,KW.greet))return {text:hello(km?'km':'en'),caps:true};
  const prov=(window.TheanProv||[]).find(pr=>t.includes(norm(pr[0]))||t.includes(pr[1]));
  if(prov){const inP=(S.places||[]).filter(x=>norm(tr(x.region,'en')).includes(norm(prov[0])));if(inP.length)return listAnswer(inP,lg,(km?'នៅ ':'In ')+(km?prov[1]:prov[0])+':',[km?'គោលដៅ':'Destinations','#/p/destinations']);
    return {text:(km?'យើងមិនទាន់មានមគ្គុទ្ទេសក៍សម្រាប់ ':'We don\'t have a guide for ')+(km?prov[1]:prov[0])+(km?' នៅឡើយទេ ប៉ុន្តែភ្នាក់ងាររបស់យើងអាចជួយអ្នកបាន។':' yet, but our agents can help you.'),live:true,links:[[km?'បើកផែនទី':'Open map','https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(prov[0]+', Cambodia')]]}}
  if(has(t,KW.where))return listAnswer((S.places||[]).filter(x=>x.featured),lg,km?'កន្លែងដែលយើងចូលចិត្តបំផុត៖':'Our favourite places right now:',[km?'គោលដៅទាំងអស់':'All destinations','#/p/destinations']);
  if(has(t,KW.ok))return {text:km?'ល្អណាស់! មានអ្វីផ្សេងទៀតដែលខ្ញុំអាចជួយបានទេ?':'Great! Is there anything else I can help you with?'};
  return {text:km?'សូមអភ័យទោស ខ្ញុំមិនទាន់មានចម្លើយសម្រាប់សំណួរនេះនៅឡើយទេ។':"Sorry, I don't have an answer for that yet.",caps:true,live:true,fallback:true};
}

/* ---------- more knowledge: culture, festivals, trip planner (Oct 2026) ---------- */
Object.assign(EXTRA,{'apsara':['apsara','ballet','tep apsara','អប្សរា'],'kampot':['kampot','pepper','កំពត','ម្រេច'],'phnom-bakheng':['bakheng','បាខែង'],'angkor-thom':['south gate','angkor thom gate','ទ្វារខាងត្បូង'],'preah-khan':['preah khan','ព្រះខ័ន'],'neak-pean':['neak pean','នាគព័ន្ធ'],
 'beng-mealea':['beng mealea','bengmealea','បឹងមាលា'],'banteay-chhmar':['chhmar','ឆ្មារ'],'royal-palace':['royal palace','silver pagoda','palace','emerald buddha','ព្រះបរមរាជវាំង','វាំង','ព្រះកែវមរកត'],
 'national-museum':['museum','សារមន្ទីរ'],'wat-phnom':['wat phnom','lady penh','វត្តភ្នំ','ដូនពេញ'],'oudong':['oudong','udong','ឧដុង្គ'],'phnom-chisor':['chisor','ជីសូរ'],'wat-nokor':['nokor','នគរបាជ័យ'],
 'phnom-penh':['riverside','sisowath','មាត់ទន្លេ'],'koh-kong':['koh kong','cardamom','chi phat','tatai','កោះកុង','ក្រវាញ','ចិផាត'],'kampong-cham':['kampong cham','bamboo bridge','koh paen','កំពង់ចាម','ស្ពានឫស្សី'],
 'kirirom':['kirirom','គិរីរម្យ'],'kbal-spean':['kbal spean','lingas','ក្បាលស្ពាន'],'bokor':['bokor','បូកគោ'],'pinpeat':['pinpeat','pin peat','khmer music','traditional music','ពិណពាទ្យ','ភ្លេងខ្មែរ'],
 'chapei':['chapei','chapey','ចាប៉ី'],'lakhon-khol':['lakhon','khol','masked dance','mask dance','ល្ខោនខោល'],'bokator':['bokator','kun khmer','kickbox','boxing','martial art','បុក្កតោ','គុនខ្មែរ','ប្រដាល់'],
 'krama':['krama','scarf','sampot','traditional dress','traditional clothes','traditional costume','ក្រមា','សំពត់','សម្លៀកបំពាក់ប្រពៃណី'],'pottery':['pottery','clay pot','kampong chhnang','គ្រឿងស្មូន','កំពង់ឆ្នាំង'],
 'palm-sugar':['sugar palm','palm sugar','palm tree','rice field','ត្នោត','វាលស្រែ'],'wedding':['wedding','marriage','married','marry','រៀបការ','អាពាហ៍ពិពាហ៍','ការរៀបការ']});
const FEST_K={f1:['khmer new year','new year','choul chnam','chaul chnam','ចូលឆ្នាំ'],f2:['visak','vesak','ពិសាខ','វិសាខ'],f8:['ploughing','plowing','chroat','ច្រត់ព្រះនង្គ័ល'],f9:['kite','khleng','ខ្លែង'],f3:['pchum','ancestor','ភ្ជុំ'],f4:['water festival','om touk','boat race','moon salute','អុំទូក','សំពះព្រះខែ'],
 f5:['meak bochea','magha','មាឃបូជា'],f6:['kathen','kathina','កឋិន'],f7:['independence','ឯករាជ្យ']};
const FAQ=[
 {k:['sampeah','greet','bow','say hello','how to greet','សំពះ'],en:"The sampeah is the Khmer greeting: press your palms together in front of your chest and bow slightly. The higher the hands, the more respect: chest level for friends, chin or nose level for elders, and forehead level for monks. A smile and a sampeah are always welcome.",km:"ការសំពះ គឺជាការគោរពរបស់ខ្មែរ៖ ផ្គុំបាតដៃនៅមុខទ្រូង ហើយឱនក្បាលបន្តិច។ ដៃកាន់តែខ្ពស់ កាន់តែគោរព៖ កម្រិតទ្រូងសម្រាប់មិត្តភក្តិ កម្រិតចង្កា ឬច្រមុះសម្រាប់ចាស់ទុំ និងកម្រិតថ្ងាសសម្រាប់ព្រះសង្ឃ។"},
 {k:['religion','buddhis','monk','pagoda','wat ','theravada','ព្រះពុទ្ធ','សាសនា','ព្រះសង្ឃ','វត្ត'],en:"Most Cambodians follow Theravada Buddhism, and every village has its pagoda (wat). Visitors are welcome: dress modestly, take off your shoes before the vihara, sit with your feet pointing away from the Buddha, and women should not touch monks or hand things to them directly. Early morning you will see monks collecting alms.",km:"ប្រជាជនកម្ពុជាភាគច្រើនគោរពព្រះពុទ្ធសាសនាថេរវាទ ហើយភូមិនីមួយៗមានវត្ត។ ភ្ញៀវត្រូវបានស្វាគមន៍៖ ស្លៀកពាក់សមរម្យ ដោះស្បែកជើងមុនចូលព្រះវិហារ អង្គុយកុំចង្អុលជើងទៅព្រះពុទ្ធរូប ហើយស្ត្រីមិនគួរប៉ះព្រះសង្ឃទេ។ ពេលព្រឹក អ្នកនឹងឃើញព្រះសង្ឃនិមន្តបិណ្ឌបាត។"},
 {k:['custom','taboo','dont','don\'t','do and','rude','polite','respect','culture shock','ទំនៀម','ហាម','គួរ'],en:"A few Khmer customs: don't touch anyone's head, don't point your feet at people or Buddha images, give and receive things with your right hand or both hands, take off shoes when entering homes and temples, dress modestly at sacred places, and keep public affection low-key. Speaking calmly and smiling goes a long way.",km:"ទំនៀមទម្លាប់ខ្មែរមួយចំនួន៖ កុំប៉ះក្បាលអ្នកដទៃ កុំចង្អុលជើងទៅមនុស្ស ឬព្រះពុទ្ធរូប ហុច និងទទួលរបស់ដោយដៃស្ដាំ ឬដៃទាំងពីរ ដោះស្បែកជើងពេលចូលផ្ទះ និងវត្ត ស្លៀកពាក់សមរម្យនៅទីសក្ការៈ។ និយាយទន់ភ្លន់ និងញញឹម ជួយបានច្រើន។"},
 {k:['national flower','national animal','national bird','national tree','national symbol','flag','rumdul','romduol','kouprey','ibis','ទង់ជាតិ','ផ្ការំដួល','គោព្រៃ','ត្រយ៉ងយក្ស','និមិត្តរូបជាតិ'],en:"🇰🇭 Cambodia's national symbols: the flag shows Angkor Wat; the national flower is the fragrant Rumdul; the national tree is the sugar palm (thnot); the national animal is the kouprey, a wild forest ox; and the national bird is the giant ibis.",km:"🇰🇭 និមិត្តរូបជាតិកម្ពុជា៖ ទង់ជាតិមានរូបអង្គរវត្ត ផ្កាជាតិគឺផ្ការំដួល ដើមឈើជាតិគឺដើមត្នោត សត្វជាតិគឺគោព្រៃ ហើយបក្សីជាតិគឺត្រយ៉ងយក្ស។"},
 {k:['khmer language','khmer script','alphabet','letters','writing','អក្សរខ្មែរ','ភាសាខ្មែរ','ព្យញ្ជនៈ'],en:"Khmer is the national language, written in Khmer script, one of the oldest writing systems in Southeast Asia, used since at least the 7th century. It has 33 consonants and many vowel signs. Learn sues-dey (hello) and or-kun (thank you) and people will love it.",km:"ភាសាខ្មែរ ជាភាសាជាតិ សរសេរដោយអក្សរខ្មែរ ដែលជាប្រព័ន្ធអក្សរចាស់ជាងគេមួយនៅអាស៊ីអាគ្នេយ៍ ប្រើតាំងពីយ៉ាងហោចណាស់សតវត្សទី៧។ មានព្យញ្ជនៈ ៣៣ និងស្រៈជាច្រើន។"},
 {k:['history','khmer empire','khmer rouge','pol pot','genocide','tuol sleng','killing field','ប្រវត្តិ','ខ្មែរក្រហម','ទួលស្លែង'],en:"In short: the Khmer Empire ruled much of mainland Southeast Asia from the 9th to 15th centuries, with Angkor as its capital. Cambodia was a French protectorate from 1863 and became independent in 1953. From 1975 to 1979 the Khmer Rouge regime killed around 1.7 million people. To understand this period with respect, visit the Tuol Sleng Genocide Museum and the Choeung Ek memorial in Phnom Penh.",km:"សង្ខេប៖ អាណាចក្រខ្មែរ គ្រប់គ្រងផ្នែកធំនៃអាស៊ីអាគ្នេយ៍ដីគោក ពីសតវត្សទី៩ ដល់ទី១៥ ដោយមានអង្គរជារាជធានី។ កម្ពុជាស្ថិតក្រោមអាណាព្យាបាលបារាំងចាប់ពីឆ្នាំ ១៨៦៣ និងទទួលបានឯករាជ្យនៅឆ្នាំ ១៩៥៣។ ពីឆ្នាំ ១៩៧៥ ដល់ ១៩៧៩ របបខ្មែរក្រហមបានសម្លាប់មនុស្សប្រហែល ១,៧ លាននាក់។ សារមន្ទីរទួលស្លែង និងវាលពិឃាតជើងឯក នៅភ្នំពេញ ជួយឱ្យយល់ពីរយៈពេលនេះ។"},
 {k:['tip ','tipping','service charge','គិតលុយបន្ថែម'],en:"Tipping is not required in Cambodia, but it is appreciated: round up for tuk-tuks, leave a dollar or two at restaurants, and tip guides and drivers at the end of a good day.",km:"ការផ្ដល់លុយបន្ថែម (tip) មិនមែនជាកាតព្វកិច្ចទេ ប៉ុន្តែគេពេញចិត្ត៖ បង្គ្រប់ថ្លៃរ៉ឺម៉ក ទុក ១ ឬ ២ ដុល្លារនៅភោជនីយដ្ឋាន ហើយផ្ដល់ដល់មគ្គុទ្ទេសក៍ និងអ្នកបើកបរ ក្រោយថ្ងៃល្អមួយ។"}
];
const CULT=['culture','tradition','traditional','custom','heritage','art ','arts','craft','វប្បធម៌','ប្រពៃណី','សិល្បៈ','បេតិកភណ្ឌ'];
/* trip planner */
const PLANK=['plan','itinerary','schedule','route','programme','program','trip for','days in','day trip','travel plan','arrange','កាលវិភាគ','រៀបចំដំណើរ','ផែនការ','គម្រោងដំណើរ','ដំណើរកម្សាន្ត'];
const KMD='០១២៣៤៥៦៧៨៩';
const NUMW={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,fourteen:14,'a week':7,'one week':7,'two weeks':14,'2 weeks':14,'weekend':2,'មួយ':1,'ពីរ':2,'បី':3,'បួន':4,'ប្រាំមួយ':6,'ប្រាំពីរ':7,'ប្រាំ':5,'មួយសប្ដាហ៍':7,'មួយអាទិត្យ':7,'ចុងសប្ដាហ៍':2};
function daysOf(t,loose){t=t.replace(/[០-៩]/g,d=>String(KMD.indexOf(d)));
  let m=t.match(/(\d{1,2})\s*-?\s*(day|days|d |nights?|ថ្ងៃ|យប់)/);if(m)return Math.max(1,+m[1]+(/night|យប់/.test(m[2])?1:0));
  m=t.match(/(\d{1,2})\s*(weeks?|សប្ដាហ៍|អាទិត្យ)/);if(m)return +m[1]*7;
  for(const k of Object.keys(NUMW).sort((a,b)=>b.length-a.length)){if(t.includes(k+' day')||t.includes(k+'ថ្ងៃ')||(k.length>3&&t.includes(k)&&/week|weekend|សប្ដាហ៍|អាទិត្យ/.test(k)))return NUMW[k]}
  if(loose){m=t.match(/\b(\d{1,2})\b/);if(m&&+m[1]>0&&+m[1]<=30)return +m[1];for(const k in NUMW)if(t.includes(' '+k+' ')||t.trim()===k)return NUMW[k]}
  return 0}
function interestsOf(t){const I={};
  if(has(t,['temple','angkor','history','historic','ruin','ប្រាសាទ','អង្គរ','ប្រវត្តិ']))I.T=1;
  if(has(t,['beach','island','sea','swim','snorkel','dive','ឆ្នេរ','កោះ','សមុទ្រ']))I.B=1;
  if(has(t,['nature','mountain','waterfall','forest','jungle','hike','trek','elephant','dolphin','wildlife','eco','countryside','ធម្មជាតិ','ភ្នំ','ទឹកធ្លាក់','ព្រៃ','ដំរី','ផ្សោត']))I.N=1;
  if(has(t,['culture','tradition','dance','craft','silk','food','market','local life','village','វប្បធម៌','ប្រពៃណី','របាំ','ម្ហូប','ផ្សារ','ភូមិ']))I.C=1;
  if(has(t,['city','phnom penh','shopping','nightlife','ភ្នំពេញ','ទីក្រុង']))I.P=1;
  return I}
const MON=[['jan','មករា'],['feb','កុម្ភៈ'],['mar','មីនា'],['apr','មេសា'],['may','ឧសភា'],['jun','មិថុនា'],['jul','កក្កដា'],['aug','សីហា'],['sep','កញ្ញា'],['oct','តុលា'],['nov','វិច្ឆិកា'],['dec','ធ្នូ']];
function monthOf(t){for(let i=0;i<12;i++){if(new RegExp('\\b'+MON[i][0]).test(t)||t.includes(MON[i][1]))return i}return -1}
const D=(en,km,ids)=>({en,km,ids:ids||[]});
const REG={
 SR:{n:['Siem Reap','សៀមរាប'],go:['Fly or take a bus to Siem Reap (about 6 hours by road from Phnom Penh).','ធ្វើដំណើរទៅសៀមរាប តាមយន្តហោះ ឬឡានក្រុង (ប្រហែល ៦ ម៉ោងតាមផ្លូវគោកពីភ្នំពេញ)។'],days:[
  D('Sunrise at Angkor Wat → Angkor Thom South Gate → Bayon → Ta Prohm. Evening: Apsara dance show.','ថ្ងៃរះនៅអង្គរវត្ត → ទ្វារខាងត្បូងអង្គរធំ → បាយ័ន → តាព្រហ្ម។ ពេលល្ងាច៖ មើលរបាំអប្សរា។',['angkor-wat','bayon','ta-prohm','apsara']),
  D('Banteay Srei and Kbal Spean in the morning → Preah Khan and Neak Pean in the afternoon → sunset at Phnom Bakheng.','បន្ទាយស្រី និងក្បាលស្ពាន ពេលព្រឹក → ព្រះខ័ន និងនាគព័ន្ធ ពេលរសៀល → ថ្ងៃលិចនៅភ្នំបាខែង។',['banteay-srei','kbal-spean','preah-khan','phnom-bakheng']),
  D('Phnom Kulen waterfall or Beng Mealea jungle temple → sunset at a Tonle Sap floating village.','ទឹកធ្លាក់ភ្នំគូលែន ឬប្រាសាទបឹងមាលា → ថ្ងៃលិចនៅភូមិបណ្ដែតទឹកទន្លេសាប។',['phnom-kulen','beng-mealea','tonle-sap']),
  D('Day trip to Koh Ker pyramid temple, back for Khmer dinner and the night market.','ដំណើរមួយថ្ងៃទៅប្រាសាទកោះកេរ ត្រឡប់មកញ៉ាំអាហារខ្មែរ និងផ្សាររាត្រី។',['koh-ker'])]},
 BB:{n:['Battambang','បាត់ដំបង'],go:['Bus to Battambang (about 3 hours from Siem Reap).','ឡានក្រុងទៅបាត់ដំបង (ប្រហែល ៣ ម៉ោងពីសៀមរាប)។'],days:[
  D('Colonial old town and riverside → countryside by tuk-tuk (rice paper, fish paste, rice wine villages) → Phnom Sampeau bat cave at sunset.','ក្រុងចាស់ និងមាត់ស្ទឹង → ជនបទតាមរ៉ឺម៉ក (ភូមិនំបញ្ចុក ប្រហុក ស្រា) → រូងប្រចៀវភ្នំសំពៅពេលថ្ងៃលិច។',['battambang'])]},
 PP:{n:['Phnom Penh','ភ្នំពេញ'],go:['Travel to Phnom Penh (bus about 6 hours from Siem Reap, or a short flight).','ធ្វើដំណើរទៅភ្នំពេញ (ឡានក្រុងប្រហែល ៦ ម៉ោងពីសៀមរាប ឬជិះយន្តហោះ)។'],days:[
  D('Royal Palace & Silver Pagoda → National Museum → Wat Phnom → sunset boat on the Mekong.','ព្រះបរមរាជវាំង និងវត្តព្រះកែវ → សារមន្ទីរជាតិ → វត្តភ្នំ → ជិះទូកមើលថ្ងៃលិចលើទន្លេមេគង្គ។',['royal-palace','national-museum','wat-phnom','phnom-penh']),
  D('Koh Dach silk island in the morning → Central Market and Russian Market → Khmer food: amok and num banh chok.','កោះដាច់ (កោះសូត្រ) ពេលព្រឹក → ផ្សារធំថ្មី និងផ្សារទួលទំពូង → ម្ហូបខ្មែរ៖ អាម៉ុក និងនំបញ្ចុក។',['silk','amok']),
  D('Day trip: Oudong old capital → Kampong Chhnang pottery villages.','ដំណើរមួយថ្ងៃ៖ អតីតរាជធានីឧដុង្គ → ភូមិគ្រឿងស្មូនកំពង់ឆ្នាំង។',['oudong','pottery'])]},
 NE:{n:['Kratie & Mondulkiri','ក្រចេះ និងមណ្ឌលគិរី'],go:['Head north-east (Phnom Penh to Kratie about 5 hours).','ធ្វើដំណើរទៅភាគឦសាន (ភ្នំពេញ ទៅក្រចេះ ប្រហែល ៥ ម៉ោង)។'],days:[
  D('Kratie: boat trip to see Irrawaddy dolphins at Kampi, sunset on the Mekong.','ក្រចេះ៖ ជិះទូកមើលផ្សោតនៅកំពី ថ្ងៃលិចលើទន្លេមេគង្គ។',['kratie']),
  D('Drive to Mondulkiri (about 3 hours) → Bou Sra waterfall → misty hills at sunset.','ធ្វើដំណើរទៅមណ្ឌលគិរី (ប្រហែល ៣ ម៉ោង) → ទឹកធ្លាក់ប៊ូស្រា → ភ្នំអ័ព្ទពេលថ្ងៃលិច។',['mondulkiri']),
  D('Ethical elephant sanctuary visit and forest walk with a local Bunong guide.','ទស្សនាជម្រកដំរីដែលគោរពសត្វ និងដើរព្រៃជាមួយមគ្គុទ្ទេសក៍ជនជាតិព្នង។',['mondulkiri'])]},
 KK:{n:['Kirirom & Koh Kong','គិរីរម្យ និងកោះកុង'],go:['Drive west into the mountains.','ធ្វើដំណើរទៅភាគខាងលិច ចូលតំបន់ភ្នំ។'],days:[
  D('Kirirom pine forest, lakes and waterfalls; night in a cabin.','ព្រៃស្រល់គិរីរម្យ បឹង និងទឹកធ្លាក់ ស្នាក់ក្នុងខ្ទម។',['kirirom']),
  D('Cardamom Mountains: Tatai river, mangrove walkway at Peam Krasop.','ជួរភ្នំក្រវាញ៖ ស្ទឹងតាតៃ ស្ពានព្រៃកោងកាងពាមក្រសោប។',['koh-kong'])]},
 KA:{n:['Kampot & Kep','កំពត និងកែប'],go:['Travel south to Kampot (about 3 hours from Phnom Penh).','ធ្វើដំណើរទៅកំពត (ប្រហែល ៣ ម៉ោងពីភ្នំពេញ)។'],days:[
  D('Kampot pepper farm → riverside sunset cruise and fireflies.','ចម្ការម្រេចកំពត → ជិះទូកមើលថ្ងៃលិច និងអំពិលអំពែក។',['kampot']),
  D('Bokor Mountain in the morning → Kep crab market and seaside sunset.','ភ្នំបូកគោពេលព្រឹក → ផ្សារក្ដាមកែប និងថ្ងៃលិចមាត់សមុទ្រ។',['bokor','kep'])]},
 KR:{n:['Koh Rong','កោះរ៉ុង'],go:['Bus to Sihanoukville and ferry to Koh Rong (allow most of the day).','ឡានក្រុងទៅក្រុងព្រះសីហនុ និងសាឡាងទៅកោះរ៉ុង (ចំណាយពេលស្ទើរពេញមួយថ្ងៃ)។'],days:[
  D('Arrive, white-sand beach afternoon, glowing plankton swim at night.','មកដល់ សម្រាកលើឆ្នេរខ្សាច់ស ហែលមើលភ្លាំងតុងភ្លឺពេលយប់។',['koh-rong']),
  D('Snorkelling or a boat trip around Koh Rong Samloem, lazy beach evening.','មុជទឹកមើលផ្កាថ្ម ឬជិះទូកជុំវិញកោះរ៉ុងសន្លឹម ល្ងាចសម្រាកលើឆ្នេរ។',['koh-rong'])]}
};
const GEO=['SR','BB','PP','NE','KK','KA','KR'];
function buildPlan(n,I,mon,lg){
  const km=lg==='km';n=Math.min(Math.max(n,1),14);
  let want=[];const add=(r,d)=>{if(!want.find(x=>x[0]===r))want.push([r,d])};
  if(I.P&&!I.T&&n<=3)add('PP',3);
  add('SR',I.T&&n>=8?4:3);
  if(I.C||I.P)add('PP',I.C&&!I.N&&!I.B?3:2);
  if(I.B){add('KA',2);add('KR',2)}if(I.N){add('NE',3);add('KK',2)}
  add('PP',2);if(I.C)add('BB',1);
  ['KA','KR','NE','BB','KK'].forEach(r=>add(r,2));
  let left=n,alloc={};
  for(const [r,d] of want){if(left<=0)break;const take=Math.min(d,left,REG[r].days.length);alloc[r]=take;left-=take}
  if(left>0){for(const r of ['SR','PP','NE']){if(left<=0)break;const extra=Math.min(REG[r].days.length-(alloc[r]||0),left);if(extra>0){alloc[r]=(alloc[r]||0)+extra;left-=extra}}}
  const order=GEO.filter(r=>alloc[r]);let day=0,out=[],ids=[];const kn=x=>km?String(x).replace(/\d/g,d=>KMD[+d]):String(x);
  order.forEach((r,ri)=>{const R=REG[r];for(let i=0;i<alloc[r];i++){day++;const d=R.days[i];ids=ids.concat(d.ids);
      out.push((km?'ថ្ងៃទី '+kn(day):'Day '+day)+' · '+R.n[km?1:0]+'\n'+(ri>0&&i===0?''+R.go[km?1:0]+' ':'')+d[km?'km':'en'])}});
  const lab={T:['temples','ប្រាសាទ'],B:['beaches','ឆ្នេរ'],N:['nature','ធម្មជាតិ'],C:['culture','វប្បធម៌'],P:['city','ទីក្រុង']};
  const like=Object.keys(I).map(k=>lab[k][km?1:0]).join(', ');
  let txt=(km?'ផែនការដំណើរ '+kn(n)+' ថ្ងៃនៅកម្ពុជា':'Your '+n+'-day Cambodia plan')+(like?' ('+like+')':'')+'\n\n'+out.join('\n\n');
  if(mon>=0){const cool=[10,11,0,1].includes(mon),hot=[2,3,4].includes(mon);
    txt+='\n\n'+(km?(cool?'ខែនេះត្រជាក់ និងស្ងួត ល្អណាស់សម្រាប់ធ្វើដំណើរ។':hot?'ខែនេះក្ដៅខ្លាំង៖ ចេញដំណើរពេលព្រឹកព្រលឹម ហើយសម្រាកពេលថ្ងៃត្រង់។':'រដូវវស្សា៖ ព្រឹកច្រើនតែភ្លឺល្អ ភ្លៀងខ្លីៗពេលរសៀល ទេសភាពខៀវស្រងាត់ ហើយភ្ញៀវតិច។'):(cool?'That month is cool and dry, the best time to travel.':hot?'That month is very hot: start early and rest at midday.':'Green season: mornings are usually clear, short rain in the afternoon, lush views and fewer visitors.'));
    const fs=(T.S.festivals||[]).filter(f=>norm(tr(f.when,'en')).includes(MON[mon][0])||tr(f.when,'km').includes(MON[mon][1]));
    if(fs.length)txt+='\n'+(km?'ពិធីបុណ្យខែនេះ៖ ':'Festival that month: ')+fs.map(f=>tr(f.title,lg)).join(', ')}
  if(n>=14)txt+='\n\n'+(km?'សម្រាប់ដំណើរវែងជាងនេះ ក្រុមការងាររបស់យើងអាចរៀបចំជូនបាន។':'For a longer trip, our team can design it with you.');
  txt+='\n\n'+(km?'ចង់ឱ្យក្រុមការងាររបស់យើងកែសម្រួល កក់សណ្ឋាគារ ឬរកអ្នកបើកបរ? ចុច «ជជែកជាមួយភ្នាក់ងារ»។':'Want our team to adjust it, book hotels or find a driver? Tap «Talk to Live Agent».');
  const P=T.S.places||[],links=[];[...new Set(ids)].forEach(id=>{const p=P.find(x=>x.id===id);if(p&&links.length<4)links.push([tr(p.title,lg),'#/place/'+id])});
  return {text:txt.slice(0,1990),links,live:true,plan:true}}
let PLAN=null;
function bot(text){
  if(PROF&&PROF.bot){const r=PROF.bot(text,hasKm(text)?'km':L());if(r)return r}
  const lg=hasKm(text)?'km':L(),km=lg==='km',t=' '+norm(text)+' ',S=T.S||{};
  /* Angkor Pass */
  if((has(t,['angkor pass','angkor ticket','entrance fee','entry fee','admission','សំបុត្រ','ticket','pass '])&&has(t,['angkor','angor','temple','ប្រាសាទ','អង្គរ','pass']))||has(t,['angkor pass'])){
    const loc=has(t,['local','locals','cambodian','khmer people','khmer citizen','khmer national','national id','citizen','ខ្មែរ','ពលរដ្ឋ','អ្នកស្រុក','ប្រជាជន']);
    const base=km?'ភ្ញៀវបរទេសត្រូវមានសំបុត្រអង្គរ (Angkor Pass)៖ ៣៧ ដុល្លារសម្រាប់ ១ ថ្ងៃ ៦២ ដុល្លារសម្រាប់ ៣ ថ្ងៃ (ប្រើក្នុងរយៈពេល ១០ ថ្ងៃ) និង ៧២ ដុល្លារសម្រាប់ ៧ ថ្ងៃ (ប្រើក្នុងរយៈពេល ៣០ ថ្ងៃ)។ កុមារអាយុក្រោម ១២ ឆ្នាំ ចូលដោយឥតគិតថ្លៃ ដោយបង្ហាញលិខិតឆ្លងដែន។ សូមទិញសំបុត្រតែនៅការិយាល័យលក់សំបុត្រអង្គរផ្លូវការ ឬគេហទំព័រផ្លូវការរបស់អង្គរអង់ទែប្រាយប៉ុណ្ណោះ។':'Foreign visitors need an Angkor Pass: $37 for 1 day, $62 for 3 days (use within 10 days) and $72 for 7 days (use within 30 days). Children under 12 enter free with their passport. Buy passes only at the official Angkor Ticket Office or on the official Angkor Enterprise website.';
    const lead=loc?(km?'ពលរដ្ឋខ្មែរមិនចាំបាច់ទិញសំបុត្រអង្គរទេ។ ជនជាតិខ្មែរអាចចូលទស្សនាតំបន់អង្គរដោយឥតគិតថ្លៃ សូមយកអត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរតាមខ្លួន ព្រោះបុគ្គលិកអាចសុំពិនិត្យ។\n\n':'Cambodian citizens do not need an Angkor Pass. Khmer nationals visit the Angkor temples free of charge; just bring your Khmer national ID card, as staff may ask to see it.\n\n'):'';
    return {text:lead+base+(km?'\n\nកន្លែងល្អៗនៅអង្គរ មាននៅទំព័រ ប្រវត្តិសាស្ត្រ។':'\n\nSee our favourite Angkor temples on the Historical page.'),links:[[km?'ប្រវត្តិសាស្ត្រ':'Historical','#/p/temples']]}}
  /* trip planner */
  const dd=daysOf(t),wantsPlan=(has(t,PLANK)&&(dd||has(t,['plan','itinerary','schedule','កាលវិភាគ','ផែនការ','រៀបចំ'])))||(dd>0&&(Object.keys(interestsOf(t)).length>0||has(t,['i have','we have','ខ្ញុំមាន','យើងមាន','trip','travel','visit','holiday','vacation','tour','cambodia','siem reap','ដំណើរ','ទៅលេង','កម្សាន្ត','កម្ពុជា','សៀមរាប'])));
  if(wantsPlan||(PLAN&&(daysOf(t,true)||Object.keys(interestsOf(t)).length))){
    const n=daysOf(t,!!PLAN)||(PLAN&&PLAN.n)||0,I=Object.assign({},PLAN&&PLAN.I,interestsOf(t)),mon=monthOf(t)>=0?monthOf(t):(PLAN?PLAN.mon:-1);
    if(!n){PLAN={I,mon,n:0};return {text:km?'រីករាយនឹងជួយរៀបចំដំណើររបស់អ្នក! តើអ្នកមានពេលប៉ុន្មានថ្ងៃ? ហើយអ្នកចូលចិត្តអ្វីខ្លះ៖ ប្រាសាទ ឆ្នេរ ធម្មជាតិ វប្បធម៌ ឬទីក្រុង? (ឧ. «៥ ថ្ងៃ ប្រាសាទ និងឆ្នេរ ខែធ្នូ»)':'I would love to plan your trip! How many days do you have, and what do you enjoy: temples, beaches, nature, culture or city life? (e.g. "5 days, temples and beach, in December")'}}
    PLAN=null;return buildPlan(n,I,mon,lg)}
  PLAN=null;
  /* dances & food (traditions lists) */
  const cf=c2Find(t);if(cf){const x=cf.x;return {text:tr(x.title,lg)+'\n'+tr(x.text,lg)+'\n\n'+(km?'ស្វែងយល់បន្ថែមនៅទំព័រ សិល្បៈ និងប្រពៃណី។':'See more on our Art & Tradition page.'),links:[[km?'សិល្បៈ និងប្រពៃណី':'Art & Tradition','#/p/culture']]}}
  const C2=S.c2||{};
  if(has(t,['traditional dance','khmer dance','dances','robam','របាំប្រពៃណី','របាំខ្មែរ'])&&!findPlace(t)){const g=[['classical',km?'របាំបុរាណ':'Classical court dances'],['folk',km?'របាំប្រជាប្រិយ':'Folk dances'],['social',km?'របាំសង្គម':'Social dances']];return {text:(km?'របាំប្រពៃណីខ្មែរ៖\n':'Traditional Khmer dances:\n')+g.map(x=>x[1]+': '+(C2[x[0]]||[]).map(y=>tr(y.title,lg)).join(', ')).join('\n\n'),links:[[km?'សិល្បៈ និងប្រពៃណី':'Art & Tradition','#/p/culture']]}}
  if(has(t,['khmer food','traditional food','what to eat','what should i eat','dishes','local food','dessert','street food','ម្ហូបខ្មែរ','ម្ហូបប្រពៃណី','បង្អែម'])){const g=[['foodMain',km?'ម្ហូប និងសម្ល':'Iconic dishes'],['foodStreet',km?'អាហារតាមផ្លូវ':'Street food'],['foodSweet',km?'នំ និងបង្អែម':'Desserts & cakes']];return {text:(km?'ម្ហូបខ្មែរប្រពៃណីដែលគួរសាកល្បង៖\n':'Traditional Khmer food to try:\n')+g.map(x=>x[1]+': '+(C2[x[0]]||[]).map(y=>tr(y.title,lg)).join(', ')).join('\n\n'),links:[[km?'សិល្បៈ និងប្រពៃណី':'Art & Tradition','#/p/culture']]}}
  /* specific festival */
  for(const id in FEST_K){if(has(t,FEST_K[id])){const f=(S.festivals||[]).find(x=>x.id===id);if(f)return {text:tr(f.title,lg)+' · '+tr(f.when,lg)+'\n'+tr(f.text,lg)+festDates(id,t,lg),links:[[km?'សិល្បៈ និងប្រពៃណី':'Art & Tradition','#/p/culture']]}}}
  /* place or culture item by name (most specific) */
  const p=findPlace(t);
  /* culture questions */
  for(const q of FAQ){if(has(t,q.k)&&!(p&&p.cat!=='culture'&&!/history|ប្រវត្តិ/.test(t)))return {text:q[km?'km':'en'],links:[[km?'សិល្បៈ និងប្រពៃណី':'Art & Tradition','#/p/culture']]}}
  if(!p&&has(t,CULT)){const cs=(S.places||[]).filter(x=>x.cat==='culture');return {text:(km?'វប្បធម៌ និងប្រពៃណីខ្មែរ ដែលយើងណែនាំ៖\n':'Khmer culture and traditions we love:\n')+cs.map(x=>'• '+tr(x.title,lg)+' — '+tr(x.sum,lg)).join('\n').slice(0,1500)+(km?'\n\nសួរខ្ញុំពីណាមួយ ខ្ញុំនឹងប្រាប់បន្ថែម។':'\n\nAsk me about any of them and I will tell you more.'),links:[[km?'សិល្បៈ និងប្រពៃណី':'Art & Tradition','#/p/culture']]}}
  return bot0(text)}

const FEST_DK={f1:'new year',f2:'visak',f8:'ploughing',f3:'pchum',f4:'water'};
function festDates(id,t,lg){const C=(T.S&&T.S.c2)||{},key=FEST_DK[id];if(!key)return '';const km=lg==='km';let yrs=['2026','2027','2028'];const y=yrs.filter(x=>t.includes(x));if(y.length)yrs=y;
  const rows=[];yrs.forEach(yy=>(C['d'+yy]||[]).forEach(d=>{if(norm(tr(d.title,'en')).includes(key))rows.push(tr(d.text,lg))}));
  return rows.length?'\n\n'+(km?'កាលបរិច្ឆេទ៖ ':'Dates: ')+rows.join(' · '):''}
function c2Find(t){const C=(T.S&&T.S.c2)||{};let best=null,sc=0;
  ['classical','folk','social','foodMain','foodStreet','foodSweet','national'].forEach(k=>(C[k]||[]).forEach(x=>{const en=norm(tr(x.title,'en'));const keys=[en.replace(/\(.*?\)/g,'').trim(),tr(x.title,'km')];(en.match(/\((.*?)\)/g)||[]).forEach(m=>keys.push(m.slice(1,-1).trim()));
    keys.slice().forEach(k2=>{if(k2&&/^robam /.test(k2))keys.push(k2.slice(6))});
    keys.forEach(kk=>{kk=String(kk||'').trim();if(kk.length>=5&&t.includes(kk)&&kk.length>sc){best={x,k};sc=kk.length}})}));
  return best}


/* ---------------- sound ---------------- */
let ac=null;
function beep(){try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();const o=ac.createOscillator(),g=ac.createGain();o.frequency.setValueAtTime(880,ac.currentTime);o.frequency.setValueAtTime(1175,ac.currentTime+.12);g.gain.setValueAtTime(.0001,ac.currentTime);g.gain.exponentialRampToValueAtTime(.2,ac.currentTime+.02);g.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+.35);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.36)}catch(e){}}

/* ---------------- render ---------------- */
const root=document.createElement('div');root.id='tc';
function tm(ts){return new Date(ms(ts)).toLocaleTimeString([], {hour:'numeric',minute:'2-digit'})}
function safeHref(h){h=String(h||'');return /^#\//.test(h)||/^https:\/\//.test(h)?h:'#/'}
function altLinks(){const Lk=T.S.links||{};return '<div class="tc-alt">'+['messenger','telegram','email'].filter(k=>Lk[k]).map(k=>'<a target="_blank" rel="noopener" href="'+esc(T.linkOf(k,Lk[k]))+'">'+I(k)+esc(k==='email'?Lk[k]:k[0].toUpperCase()+k.slice(1))+'</a>').join('')+'</div>'}
function chatLive(){return !!(chat&&(chat.status==='waiting'||chat.status==='assigned'))}
function msgHtml(m,isLast){
  if(m.staff)return '';
  if(m.from==='system')return '<div class="tc-sys">'+esc(m.text)+(m.alt?altLinks():'')+'</div>';
  const out=m.from==='visitor',by=m.from==='agent'?(m.agentName||'Agent'):m.from==='bot'?w('assistant'):'';
  let h='<div class="tc-m '+(out?'out':'in')+'">'+(by?'<span class="by">'+esc(by)+(m.from==='agent'?' · '+esc(w('live')):'')+'</span>':'')+esc(m.text)+
    (m.links&&m.links.length?'<span class="lk">'+m.links.map(x=>'<a href="'+esc(safeHref(x.h))+'"'+(/^https/.test(x.h)?' target="_blank" rel="noopener"':' data-nav')+'>'+esc(x.l)+'</a>').join('')+'</span>':'');
  if(m.form&&getForm(m.form)&&m.from!=='visitor')h+=formHtml(m);
  if(m.file)h+=chatFileHtml(m.file);
  if(Array.isArray(m.imgs)&&m.imgs.length)h+='<span class="tc-imgs">'+m.imgs.filter(u=>/^https:\/\//.test(u)).map(u=>'<a href="'+esc(u)+'" target="_blank" rel="noopener"><img alt="" src="'+esc(u)+'"></a>').join('')+'</span>';
  if(m.btns&&m.btns.length)h+='<span class="tc-btns">'+m.btns.map(b=>{const lk=chatLive()&&b.a!=='end';return '<button type="button" data-act="'+esc(b.a)+'"'+(lk?' class="lock" disabled tabindex="-1" aria-disabled="true"':isLast?'':' class="old"')+'>'+esc(b.l)+'</button>'}).join('')+'</span>';
  return h+'<time>'+tm(m.ts)+'</time></div>';
}
/* chat forms: built-in defaults, overridden by Admin → Words & headings → Chat forms (S.chatForms) */
function defForms(){const F=W.en.F,K=W.km.F,ty=k=>k==='email'?'email':k==='phone'?'phone':k==='details'?'area':(k==='ours'||k==='orig')?'url':k==='want'?'choice':k==='files'?'photos':'text';
  const mk=(id,en,km,ticket)=>({id,en,km,ticket,needContact:true,fields:FORMS[id].map(k=>{const x={k,type:ty(k),en:k==='files'?W.en.fUp:F[k],km:k==='files'?W.km.fUp:K[k],req:k==='name'};if(k==='want')x.opts=[['credit','wCredit'],['remove','wRemove'],['other','wOther']].map(o=>({v:o[0],en:F[o[1]],km:K[o[1]]}));return x})});
  return [mk('contact','Customer details form','ទម្រង់ព័ត៌មានអតិថិជន',false),mk('report','Content report form','ទម្រង់រាយការណ៍មាតិកា',true)]}
window.THEAN_FORMS_DEF=defForms;
function getForm(id){const C=T.S&&Array.isArray(T.S.chatForms)?T.S.chatForms:null,f=C&&C.find(x=>x&&x.id===id);return f&&Array.isArray(f.fields)?f:(defForms().find(x=>x.id===id)||null)}
const fLab=(x,lg)=>String((x&&(x[lg]||x.en||x.km))||(x&&x.k)||'');
function fLang(m){const t=String(m&&m.text||'');return /[ក-៿]/.test(t)?'km':(/[A-Za-z]/.test(t)?'en':L())}
function formHtml(m){const lg=fLang(m),fd=getForm(m.form),id=m.id||'',v=FV[id]||{};if(!fd)return '';
  if(msgs.some(x=>x.formReply===id)||(local.some(x=>x.formReply===id)))return '<span class="tc-fdone">'+esc(w('fSent',lg))+'</span>';
  let h='<span class="tc-cform" data-fid="'+esc(id)+'" data-fk="'+esc(m.form)+'" data-fl="'+lg+'">';
  fd.fields.forEach(x=>{const k=String(x.k||''),lab=esc(fLab(x,lg))+(x.req?' *':'');if(!k)return;
    if(x.type==='photos'){const M=T.S.media||{};if(M.cloud&&M.preset)h+='<span class="tc-up"><button type="button" data-fup>'+I('image')+esc(fLab(x,lg))+'</button><span class="tc-thumbs">'+(v.imgs||[]).map(u=>'<img alt="" src="'+esc(u)+'">').join('')+'</span><small data-fupmsg>'+esc(v.upMsg||'')+'</small></span>';return}
    if(x.type==='choice'){const O=Array.isArray(x.opts)?x.opts:[];h+='<label><span>'+lab+'</span><select data-ff="'+esc(k)+'">'+O.map((o,i)=>{const ov=o.v||String(i);return '<option value="'+esc(ov)+'"'+(v[k]===ov?' selected':'')+'>'+esc(fLab(o,lg))+'</option>'}).join('')+'</select></label>';return}
    if(x.type==='area'){h+='<label><span>'+lab+'</span><textarea data-ff="'+esc(k)+'" rows="3">'+esc(v[k]||'')+'</textarea></label>';return}
    const t=x.type==='email'?'email':x.type==='url'?'url':x.type==='phone'?'tel':x.type==='number'?'number':x.type==='date'?'date':'text';
    h+='<label><span>'+lab+'</span><input data-ff="'+esc(k)+'" type="'+t+'" value="'+esc(v[k]||'')+'"'+(t==='tel'?' inputmode="tel"':'')+'></label>'});
  return h+'<small class="tc-ferr" data-ferr></small><button type="button" class="tc-fsend" data-fsend>'+esc(w('fSend',lg))+'</button></span>'}
async function uploadShot(file){const M=T.S.media||{},fd=new FormData();fd.append('file',file);fd.append('upload_preset',M.preset);fd.append('folder','thean/reports');
  const r=await fetch('https://api.cloudinary.com/v1_1/'+encodeURIComponent(M.cloud)+'/image/upload',{method:'POST',body:fd});const j=await r.json();if(!j.secure_url)throw new Error('upload');return j.secure_url}
async function submitForm(box){const id=box.dataset.fid,kind=box.dataset.fk,lg=box.dataset.fl||L(),fd=getForm(kind),v=Object.assign({},FV[id]||{});if(!fd)return;
  box.querySelectorAll('[data-ff]').forEach(el=>{v[el.dataset.ff]=el.value.trim()});
  const err=box.querySelector('[data-ferr]'),has=k=>fd.fields.some(x=>x.k===k);
  const miss=fd.fields.filter(x=>x.req&&x.type!=='photos'&&x.type!=='choice'&&!v[x.k]);
  if(miss.length){err.textContent=(lg==='km'?'សូមបំពេញ៖ ':'Please fill in: ')+miss.map(x=>fLab(x,lg)).join(', ');return}
  if(fd.needContact&&(has('phone')||has('email'))&&!(v.phone||v.email)){err.textContent=w('fNeed',lg);return}
  if(kind==='report'&&has('ours')&&has('details')&&!v.ours&&!v.details){err.textContent=w('fNeed2',lg);return}
  const optLab=(x,val)=>{const o=(x.opts||[]).find((o,i)=>(o.v||String(i))===val);return o?fLab(o,lg):val};
  const lines=fd.fields.filter(x=>x.type!=='photos'&&v[x.k]).map(x=>{const lb=fLab(x,lg);return x.type==='choice'?lb+(/[?:។]$/.test(lb)?' ':': ')+optLab(x,v[x.k]):lb+': '+v[x.k]});
  const text=(lines.join('\n')||fLab(fd,lg)).slice(0,1900);
  try{await ensureChat()}catch(e){offline=true}
  FV[id]=v;
  await say({from:'visitor',text,formReply:id,form:kind,imgs:(v.imgs||[]).slice(0,3)});
  const cust={name:(v.name||'').slice(0,80),phone:(v.phone||'').slice(0,40),email:(v.email||'').slice(0,80),other:(v.other||'').slice(0,80)},hasCust=!!(cust.name||cust.phone||cust.email);
  const live=chat&&(chat.status==='waiting'||chat.status==='assigned'),fname=fLab(fd,'en')||'Form';
  const base=hasCust?{name:cust.name||undefined,contact:cust.phone||cust.email||undefined,customer:cust}:{};Object.keys(base).forEach(k=>base[k]===undefined&&delete base[k]);
  if(fd.ticket){let t=chat&&chat.ticket&&chat.ticketStatus!=='closed'?(chat.ticketCur||chat.ticket):'';
    if(!t&&!offline){try{t=await nextTicket();await fb.set('tickets/'+t,{n:Number(t),chatId:user.uid,status:'open',kind:kind==='report'?'report':'form',createdAt:TS})}catch(e){t=''}}
    if(!offline)await touch(Object.assign(base,{ticket:String(t).split('-')[0],ticketCur:t,ticketStatus:'open',lastMsg:kind==='report'?'Content report submitted':fname+' sent',lastFrom:'visitor',unreadAgent:INC(1)},kind==='report'?{reportOpen:true,report:{ours:(v.ours||'').slice(0,300),orig:(v.orig||'').slice(0,300),want:v.want||'',at:TS}}:{}));
    if(!live)await typeThen(900,{from:'bot',text:t?w('reportDone',lg).split('{t}').join(fmtT(t)):w('contactDone',lg)});
    if(offline){local.push({from:'system',text:w('noLive',lg),alt:true,ts:Date.now()});draw(true)}}
  else{if(!offline)await touch(Object.assign(base,{lastMsg:kind==='contact'?'Customer details sent':fname+' sent',lastFrom:'visitor',unreadAgent:live?INC(1):0}));
    if(!live)await typeThen(700,{from:'bot',text:w('contactDone',lg)})}
}
function statusLine(){
  if(chat&&chat.status==='assigned')return '<span class="tc-dot"></span>'+esc(chat.agentName||'Agent')+' · '+esc(w('live'));
  if(chat&&chat.status==='waiting')return '<span class="tc-dot wait"></span>'+esc(w('wait'));
  return '<span class="tc-dot bot"></span>'+esc(w('bot'));
}
let lastBody='';
function draw(scroll){
  if(ADMIN_PAGE)return;
  if(!root.isConnected)document.body.appendChild(root);
  const logo=T.S.brand&&T.S.brand.logo;
  let fab=root.querySelector('.tc-fab');
  if(!fab){root.innerHTML='<div class="tc-wrap"></div><button class="tc-fab" type="button"></button>';fab=root.querySelector('.tc-fab');fab.onclick=()=>toggle()}
  root.classList.toggle('is-open',open);
  fab.setAttribute('aria-label',w('title'));fab.setAttribute('aria-expanded',open);
  fab.innerHTML=(open?I('close'):I('chat')+'<span class="live"></span>')+'<span class="lbl">'+esc(open?(L()==='km'?'បិទ':'Close'):w('title'))+'</span>'+(unread&&!open?'<span class="tc-badge">'+unread+'</span>':'');
  const wrap=root.querySelector('.tc-wrap');
  if(!open){wrap.innerHTML=peek?'<div class="tc-peek" role="status"><b>'+esc(w('peek'))+'</b>'+esc(String(peek.text).slice(0,120))+'</div>':'';const pk=wrap.querySelector('.tc-peek');if(pk)pk.onclick=()=>toggle(true);lastBody='';return}
  let panel=wrap.querySelector('.tc-panel');
  if(!panel){
    wrap.innerHTML='<div class="tc-panel" role="dialog" aria-label="'+esc(w('title'))+'"><div class="tc-head"><span class="logo">'+(logo?'<img alt="" src="'+logo+'">':'')+'</span><div class="who"><b></b><small></small></div><button class="tc-clr" type="button">'+I('trash')+'</button><button class="tc-x" type="button" aria-label="Close">'+I('close')+'</button></div><div class="tc-confirm" hidden><span></span><button type="button" class="tc-cyes"></button><button type="button" class="tc-cno"></button></div><div class="tc-body" aria-live="polite"></div><form class="tc-foot"><button class="tc-att" type="button" aria-label="Send a photo or file"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5l-8.6 8.6a5.5 5.5 0 0 1-7.8-7.8l8.6-8.6a3.7 3.7 0 0 1 5.2 5.2l-8.6 8.6a1.8 1.8 0 0 1-2.6-2.6l7.9-7.9"/></svg></button><input class="tc-fin" type="file" hidden accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip"><textarea rows="1" aria-label="Message"></textarea><button class="tc-send" type="submit" aria-label="Send">'+I('arrow')+'</button></form></div>';
    panel=wrap.querySelector('.tc-panel');
    panel.querySelector('.tc-x').onclick=()=>toggle(false);
    const cf=panel.querySelector('.tc-confirm');
    panel.querySelector('.tc-clr').onclick=()=>{const lg=L(),live=chat&&(chat.status==='waiting'||chat.status==='assigned');cf.querySelector('span').textContent=w(live?'clrQLive':'clrQ',lg);cf.querySelector('.tc-cyes').textContent=w('clrYes',lg);cf.querySelector('.tc-cno').textContent=w('clrNo',lg);cf.hidden=false};
    cf.querySelector('.tc-cno').onclick=()=>{cf.hidden=true};
    cf.querySelector('.tc-cyes').onclick=async()=>{cf.hidden=true;await clearChat()};
    const f=panel.querySelector('form'),ta=f.querySelector('textarea');
    {const att=panel.querySelector('.tc-att'),fin=panel.querySelector('.tc-fin');att.onclick=()=>fin.click();fin.onchange=()=>{const x=fin.files&&fin.files[0];fin.value='';if(x)sendFile(x)}}
    f.onsubmit=e=>{e.preventDefault();send(ta.value)};
    ta.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&window.innerWidth>520){e.preventDefault();send(ta.value)}});
    ta.addEventListener('input',()=>{ta.style.height='';ta.style.height=Math.min(110,ta.scrollHeight)+'px';typingPing()});
    panel.addEventListener('input',e=>{const el=e.target.closest('[data-ff]');if(!el)return;const id=el.closest('[data-fid]').dataset.fid;FV[id]=FV[id]||{};FV[id][el.dataset.ff]=el.value});
    panel.addEventListener('change',e=>{const el=e.target.closest('[data-ff]');if(!el)return;const id=el.closest('[data-fid]').dataset.fid;FV[id]=FV[id]||{};FV[id][el.dataset.ff]=el.value});
    panel.addEventListener('click',e=>{const fs=e.target.closest('[data-fsend]');if(fs){const box=fs.closest('[data-fid]');fs.disabled=true;submitForm(box).catch(()=>{}).finally(()=>{fs.disabled=false});return}
      const fu=e.target.closest('[data-fup]');if(fu){const box=fu.closest('[data-fid]'),id=box.dataset.fid,lg=L();const inp=document.createElement('input');inp.type='file';inp.accept='image/*';inp.multiple=true;
        inp.onchange=async()=>{const files=[...inp.files].slice(0,3);if(!files.length)return;FV[id]=FV[id]||{};box.querySelectorAll('[data-ff]').forEach(el=>{FV[id][el.dataset.ff]=el.value});FV[id].imgs=FV[id].imgs||[];const msg=box.querySelector('[data-fupmsg]');msg.textContent=w('fUping',lg);
          for(const f of files){if(FV[id].imgs.length>=3)break;try{FV[id].imgs.push(await uploadShot(f));FV[id].upMsg=''}catch(er){FV[id].upMsg=w('fUpErr',lg)}}
          lastBody='';draw(false)};inp.click();return}
      const a=e.target.closest('a[data-nav]');if(a&&window.innerWidth<520)toggle(false);
      const b=e.target.closest('[data-act]');if(b){b.disabled=true;act(b.dataset.act,b.textContent).catch(()=>{}).finally(()=>{b.disabled=false})}});
  }
  panel.querySelector('.tc-head b').textContent=w('title');
  {const cb=panel.querySelector('.tc-clr');cb.setAttribute('aria-label',w('clr'));cb.title=w('clr')}
  panel.querySelector('.tc-head small').innerHTML=statusLine();
  panel.querySelector('.tc-foot textarea').placeholder=w('ph');
  const welcome={id:'w',from:'bot',text:w('welcome'),ts:0,btns:[{l:'ភាសាខ្មែរ',a:'lang:km'},{l:'English',a:'lang:en'}]};
  const all=[welcome].concat(msgs.filter(m=>!clearedAt||ms(m.ts)>clearedAt),local.filter(m=>!clearedAt||ms(m.ts)>clearedAt)).sort((a,b)=>(a.id==='w'?-1:b.id==='w'?1:ms(a.ts)-ms(b.ts)));
  let lastBtn=-1;all.forEach((m,i)=>{if(m.btns&&m.btns.length)lastBtn=i});
  let h=all.map((m,i)=>msgHtml(m,i===lastBtn)).join('');
  if(botTyping)h+='<div class="tc-typing" aria-label="'+esc(w('typing'))+'"><i></i><i></i><i></i></div>';
  const body=panel.querySelector('.tc-body');
  if(h!==lastBody){body.innerHTML=h;lastBody=h;if(scroll!==false)body.scrollTop=body.scrollHeight}
}
let tpT=0;function typingPing(){if(!fb||!user||!chat||!liveMode)return;const n=Date.now();if(n-tpT<3000)return;tpT=n;fb.update(CP(),{visitorTyping:TS}).catch(()=>{})}
function started(){try{return !!localStorage.getItem(STARTED)}catch(e){return false}}
function toggle(v){
  open=v==null?!open:v;
  if(open){unread=0;peek=null;if(fb&&user&&chat&&chat.unreadVisitor)fb.update(CP(),{unreadVisitor:0}).catch(()=>{});if(!chat&&started())ensureChat().catch(()=>{offline=true})}
  else{const p=root.querySelector('.tc-panel');if(p)p.remove()}
  draw(true);
}
window.TheanChat={open:()=>toggle(true),toggle:()=>toggle(),close:()=>toggle(false)};
/* kongthean.com/?chat=1 opens the chat (used by Thean Card Studio) */
if(/[?&]chat=1\b/.test(location.search)&&!ADMIN_PAGE)setTimeout(()=>toggle(true),600);
document.addEventListener('thean:render',()=>{if(T.lang!==siteLangSeen){siteLangSeen=T.lang;sesLang=null;if(chat&&chat.lang!==L()&&fb&&user)fb.update(CP(),{lang:L()}).catch(()=>{})}const p=root.querySelector('.tc-panel');if(p){lastBody='';draw(false)}else draw()});
/* returning visitor: reconnect quietly so agent replies show a badge */
if(!ADMIN_PAGE&&started()){authUser().then(u=>{if(u&&u.isAnonymous){user=u;return fb.get(CP()).then(v=>{if(v){chat=v;listen();fb.get('settings/public').then(s=>{if(s&&s.waitMin)waitMin=+s.waitMin||10;if(s&&s.autoMin)autoMin=+s.autoMin||30}).catch(()=>{})}})}}).catch(()=>{})}
draw();

/* ---------------- live website content ---------------- */
function readCache(){try{return JSON.parse(localStorage.getItem(CACHE)||'null')}catch(e){return null}}
const SYNC={build:'20261010-0331',page:location.href,step:'start',cacheV:null,serverV:null,applied:null,error:''};
async function syncSite(){
  const c=readCache();SYNC.cacheV=c&&c.v||null;
  if(c&&c.content&&c.v){T.setState(c.content,{live:true,v:c.v});SYNC.applied='from this phone (saved copy)'}
  try{SYNC.step='loading Firebase';await loadFb();
    try{fb.on('settings/public/fb',v=>{try{T.setFb&&T.setFb(v)}catch(e){}})}catch(e){}
    if(!ADMIN_PAGE){try{fb.on('settings/public/maintenance',v=>{try{T.setMaint&&T.setMaint(v)}catch(e){}})}catch(e){}}
    SYNC.step='reading version';const v=await fb.get('site/version');SYNC.serverV=v||null;
    if(!v){SYNC.step='checking saved content';const c0=await fb.get('site/content');if(!c0){SYNC.step='done: nothing published yet';return}T.setState(c0,{live:true,v:1});SYNC.applied='from the server (old save)';SYNC.step='done: saved content shown';return}
    if(c&&c.v===v){SYNC.step='done: already up to date';return}
    SYNC.step='downloading content';const content=await fb.get('site/content');if(!content){SYNC.step='done: no content on server';return}
    try{localStorage.setItem(CACHE,JSON.stringify({v,content}))}catch(e){}
    T.setState(content,{live:true,v});SYNC.applied='from the server';SYNC.step='done: latest content shown';
  }catch(e){SYNC.error=String(e&&(e.code||e.message)||e);SYNC.step='FAILED'}
  finally{showCheck()}
}
function showCheck(){
  if(location.hash!=='#check')return;
  let el=document.getElementById('tcheck');if(!el){el=document.createElement('div');el.id='tcheck';el.style.cssText='position:fixed;left:12px;right:12px;top:calc(76px + env(safe-area-inset-top,0px));z-index:99;background:#fff;color:#111;border:2px solid #333;border-radius:14px;padding:14px;font:14px/1.5 system-ui;box-shadow:0 10px 30px rgba(0,0,0,.3)';document.body.appendChild(el)}
  const f=t=>t?new Date(t).toLocaleString():'—';
  el.innerHTML='<b>Website check</b><br>Page version: <b>'+SYNC.build+'</b><br>Status: <b>'+esc(SYNC.step)+'</b>'+(SYNC.error?'<br><span style="color:#b3362f">Error: '+esc(SYNC.error)+'</span>':'')+'<br>Last published (server): <b>'+f(SYNC.serverV)+'</b><br>Saved copy on this phone: '+f(SYNC.cacheV)+'<br>Content shown: '+(SYNC.applied||'built-in (not live)')+'<br><small>Send a screenshot of this box to support.</small>';
}
window.addEventListener('hashchange',()=>{if(location.hash==='#check')showCheck()});
syncSite();

window.TheanPush={
  async save(id,v){await loadFb();let u=await authUser();if(!u)u=await ensureUser();v.at=TS;await fb.set('push/subs/'+id,v)},
  async remove(id){await loadFb();let u=await authUser();if(!u)u=await ensureUser();await fb.set('push/subs/'+id,null)}};
/* ---------------- admin page API ---------------- */
if(ADMIN_PAGE){
  window.TheanAdmin={
    async current(){const u=await authUser();if(!u||u.isAnonymous)return null;const a=await fb.get('agents/'+u.uid);return a?{uid:u.uid,email:u.email,agent:a}:{uid:u.uid,email:u.email,agent:null}},
    async login(email,pw){await loadFb();await fb.A.signInWithEmailAndPassword(fb.auth,email,pw);return this.current()},
    async version(){await loadFb();return await fb.get('site/version')},
    async content(){await loadFb();return await fb.get('site/content')},
    async logout(){await loadFb();await fb.A.signOut(fb.auth)},
    async setMaint(v){await loadFb();await fb.set('settings/public/maintenance',v)},
    onMaint(cb){loadFb().then(()=>fb.on('settings/public/maintenance',cb)).catch(()=>{})},
    async setPostMaint(v){await loadFb();await fb.set('settings/public/postMaint',v)},
    async setPMKey(k){await loadFb();await fb.set('settings/private/postMaintKey',k)},
    async getPMKey(){await loadFb();return await fb.get('settings/private/postMaintKey')},
    onPostMaint(cb){loadFb().then(()=>fb.on('settings/public/postMaint',cb)).catch(()=>{})},
    async setCallAway(v){await loadFb();await fb.set('settings/public/callAway',v)},
    async pushQueue(v){await loadFb();const u=await authUser();v.at=TS;v.status='queued';v.by=(u&&u.email)||'';return fb.push('push/queue',v)},
    onPushQueue(cb){let off=null,dead=false;loadFb().then(()=>{if(!dead)off=fb.onRecent('push/queue','at',15,cb)}).catch(()=>{});return()=>{dead=true;try{off&&off()}catch(e){}}},
    async pushCount(){await loadFb();const v=await fb.get('push/subs');return v?Object.keys(v).length:0},
    async pushDel(id){await loadFb();await fb.set('push/queue/'+id,null)},
    onCallAway(cb){loadFb().then(()=>fb.on('settings/public/callAway',cb)).catch(()=>{})},
    async publish(S){await loadFb();
      const to=new Promise((_,rej)=>setTimeout(()=>rej(new Error('network: the server did not answer in 40 seconds')),40000));
      const now=Date.now();
      await Promise.race([(async()=>{await fb.set('site/content',JSON.parse(JSON.stringify(S)));await fb.set('site/version',now);
        const back=await fb.get('site/version');if(back!==now)throw new Error('The server did not keep the change (version check failed)')})(),to]);
      try{localStorage.setItem(CACHE,JSON.stringify({v:now,content:S}))}catch(e){}return now}
  };
  document.dispatchEvent(new Event('thean:admin-ready'));
}


/* ================= Web call ("Call us") — browser to inbox, free over the internet ================= */
const CW={
 en:{calling:'Calling…',mic:'Allow the microphone to call',micNo:'Microphone blocked. Allow it in your browser settings and try again.',unsupported:'Web calls are not supported in this browser. Please open the website in Safari or Chrome, or send us a message in the chat.',
   menuKm:'សូមស្វាគមន៍មកកាន់ភ្នាក់ងារបម្រើសេវាកម្មអតិថិជនរបស់គេហទំព័រធាន សូមចុចលេខ ១ សម្រាប់ភាសាខ្មែរ។',menuEn:'Welcome to Thean customer service. Please press 2 for English.',
   topics:'For general inquiries, press 1. For donations, press 2. To report as a copyright owner, press 3.',
   wait:'Please hold for a moment while we connect you to our customer service team. Where necessary, this call may be recorded for training and quality assurance purposes to improve our service. Thank you!',
   closed:'Welcome to Thean. We are sorry, our phone service is closed at the moment. Please contact us again later, or send us a message in the chat. Thank you!',
   busy:'We apologize for not being able to respond to you on time. Our customer service team is currently busy. Please try again later. Thank you!',
   connecting:'Connecting…',ended:'Call ended',mute:'Mute',unmute:'Mute',speaker:'Speaker',keypad:'Keypad',end:'End',chat:'Chat',where:'Cambodia',more:'More',recStart:'Record call',recStop:'Stop recording',recSave:'Save recording',recReady:'Your call recording is ready.',recClose:'Close',recNo:'Recording is not supported in this browser.',lost:'Connection lost'},
 km:{calling:'កំពុងហៅ…',mic:'សូមអនុញ្ញាតមីក្រូហ្វូន ដើម្បីហៅ',micNo:'មីក្រូហ្វូនត្រូវបានបិទ។ សូមអនុញ្ញាតក្នុងការកំណត់កម្មវិធីរុករក រួចព្យាយាមម្ដងទៀត។',unsupported:'កម្មវិធីរុករកនេះមិនគាំទ្រការហៅតាមគេហទំព័រទេ។ សូមបើកគេហទំព័រក្នុង Safari ឬ Chrome ឬផ្ញើសារមកយើងក្នុងការជជែក។',
   menuKm:'សូមស្វាគមន៍មកកាន់ភ្នាក់ងារបម្រើសេវាកម្មអតិថិជនរបស់គេហទំព័រធាន សូមចុចលេខ ១ សម្រាប់ភាសាខ្មែរ។',menuEn:'Welcome to Thean customer service. Please press 2 for English.',
   topics:'សម្រាប់ការសាកសួរទូទៅ សូមចុចលេខ ១។ សម្រាប់ការបរិច្ចាគ សូមចុចលេខ ២។ សម្រាប់ការរាយការណ៍ពីម្ចាស់កម្មសិទ្ធិ (រក្សាសិទ្ធិ) សូមចុចលេខ ៣។',
   wait:'សូមមេត្តារង់ចាំ យើងខ្ញុំកំពុងតភ្ជាប់លោកអ្នកទៅកាន់ភ្នាក់ងារបម្រើសេវាកម្មអតិថិជន។ ក្នុងករណីចាំបាច់ យើងខ្ញុំនឹងបើកមុខងារថតសំឡេងទុក ក្នុងគោលបំណងផ្តល់ជូននូវសេវាកម្មដែលមានប្រសិទ្ធភាព និងដើម្បីពង្រឹងគុណភាពសេវាកម្មរបស់យើងខ្ញុំ។ សូមអរគុណ។',
   closed:'សូមស្វាគមន៍មកកាន់គេហទំព័រធាន។ សូមអភ័យទោស បច្ចុប្បន្ននេះសេវាកម្មតាមទូរស័ព្ទរបស់យើងខ្ញុំបានបិទ។ សូមទាក់ទងមកយើងខ្ញុំម្តងទៀតនៅពេលក្រោយ ឬផ្ញើសារមកយើងខ្ញុំតាមការជជែក។ សូមអរគុណ។',
   busy:'យើងខ្ញុំសូមអភ័យទោសដែលមិនអាចឆ្លើយតបទៅកាន់លោកអ្នកបានទាន់ពេលវេលា។ បច្ចុប្បន្ននេះ ក្រុមការងារផ្នែកសេវាកម្មអតិថិជនរបស់យើងកំពុងមមាញឹក។ សូមព្យាយាមម្តងទៀតនៅពេលក្រោយ។ សូមអរគុណ។',
   connecting:'កំពុងភ្ជាប់…',ended:'ការហៅបានបញ្ចប់',mute:'បិទសំឡេង',unmute:'បិទសំឡេង',speaker:'ឧបករណ៍បំពងសំឡេង',keypad:'ក្ដារលេខ',end:'បញ្ចប់',chat:'ជជែក',where:'កម្ពុជា',more:'បន្ថែម',recStart:'ថតការហៅ',recStop:'បញ្ឈប់ការថត',recSave:'រក្សាទុកការថត',recReady:'ការថតការហៅរបស់អ្នករួចរាល់ហើយ។',recClose:'បិទ',recNo:'កម្មវិធីរុករកនេះមិនគាំទ្រការថតទេ។',lost:'ការតភ្ជាប់បានដាច់'}};
const cw=(k,lg)=>(CW[lg||'en']||CW.en)[k];
const ICE={iceServers:[{urls:['stun:stun.l.google.com:19302','stun:stun1.l.google.com:19302','stun:stun2.l.google.com:19302']}]};
let call=null;
/* ===== Call menu (IVR) model, shared by the website and the editor ===== */
var IVR_TXT={
 wait:{km:'សូមមេត្តារង់ចាំ យើងខ្ញុំកំពុងតភ្ជាប់លោកអ្នកទៅកាន់ភ្នាក់ងារបម្រើសេវាកម្មអតិថិជន។ ក្នុងករណីចាំបាច់ យើងខ្ញុំនឹងបើកមុខងារថតសំឡេងទុក ក្នុងគោលបំណងផ្តល់ជូននូវសេវាកម្មដែលមានប្រសិទ្ធភាព និងដើម្បីពង្រឹងគុណភាពសេវាកម្មរបស់យើងខ្ញុំ។ សូមអរគុណ។',
   en:'Please hold for a moment while we connect you to our customer service team. Where necessary, this call may be recorded for training and quality assurance purposes to improve our service. Thank you!'},
 busy:{km:'យើងខ្ញុំសូមអភ័យទោសដែលមិនអាចឆ្លើយតបទៅកាន់លោកអ្នកបានទាន់ពេលវេលា។ បច្ចុប្បន្ននេះ ក្រុមការងារផ្នែកសេវាកម្មអតិថិជនរបស់យើងកំពុងមមាញឹក។ សូមព្យាយាមម្តងទៀតនៅពេលក្រោយ។ សូមអរគុណ។',
   en:'We apologize for not being able to respond to you on time. Our customer service team is currently busy. Please try again later. Thank you!'},
 closed:{km:'សូមស្វាគមន៍មកកាន់គេហទំព័រធាន។ សូមអភ័យទោស បច្ចុប្បន្ននេះសេវាកម្មតាមទូរស័ព្ទរបស់យើងខ្ញុំបានបិទ។ សូមទាក់ទងមកយើងខ្ញុំម្តងទៀតនៅពេលក្រោយ ឬផ្ញើសារមកយើងខ្ញុំតាមការជជែក។ សូមអរគុណ។',
   en:'Welcome to Thean. We are sorry, our phone service is closed at the moment. Please contact us again later, or send us a message in the chat. Thank you!'}
};
function ivrKd(n){return String(n).replace(/\d/g,function(d){return '០១២៣៤៥៦៧៨៩'[d]})}
function ivrKeyWord(k,tts){if(k==='*')return tts==='km'?'ផ្កាយ':'star';if(k==='#')return tts==='km'?'សញ្ញាទ្រុង':'hash';return tts==='km'?ivrKd(k):k}
/* default words for a language option line, spoken in that language */
function ivrLangLine(l){var k=l.key||'';
  if(l.tts==='km')return 'សូមស្វាគមន៍មកកាន់ភ្នាក់ងារបម្រើសេវាកម្មអតិថិជនរបស់គេហទំព័រធាន សូមចុចលេខ '+ivrKeyWord(k,'km')+' សម្រាប់'+(l.id==='km'?'ភាសាខ្មែរ':(l.name||''))+'។';
  if(l.tts==='en')return 'Welcome to Thean customer service. Please press '+k+' for '+(l.id==='en'?'English':(l.agent||l.name||''))+'.';
  return (l.name||l.agent||'')+' · '+k}
/* default words for a topic line in a language */
function ivrTopicLine(t,lang){var nm=(t.names&&(t.names[lang.id]||t.names.en||t.names.km))||'',k=t.key||'';
  if(lang.tts==='km')return 'សម្រាប់'+nm+' សូមចុចលេខ '+ivrKeyWord(k,'km')+'។';
  if(lang.tts==='en')return 'For '+nm+', press '+k+'.';
  return nm+' · '+k}
function ivrMsgText(name,lang){var d=IVR_TXT[name];return d&&lang&&(d[lang.id]||d[lang.tts])||''}
function ivrModel(c){c=c||{};var P=c.prompts||{},iv=c.ivr;
  if(iv&&iv.v===2){iv.langs=iv.langs||[];iv.topics=iv.topics||[];iv.notes=iv.notes||[];iv.msgs=iv.msgs||{};
    ['wait','busy','closed'].forEach(function(n){iv.msgs[n]=iv.msgs[n]||{on:true,clips:{},texts:{},bg:''}});
    if(!iv.bg){var f=function(a){for(var i=0;i<a.length;i++){if(a[i])return a[i]}return ''};
      iv.bg={greet:f(iv.langs.map(function(l){return l.bg}).concat(iv.notes.filter(function(n){return n.pos==='start'||n.pos==='afterLang'}).map(function(n){return n.bg}))),
        topic:f(iv.topics.map(function(t){return t.bg||(t.info&&t.info.bg)}).concat(iv.notes.filter(function(n){return n.pos==='beforeTopic'||n.pos==='afterTopic'}).map(function(n){return n.bg}))),
        wait:f([iv.msgs.wait.bg,iv.msgs.busy.bg]),closed:iv.msgs.closed.bg||''}}
    return iv}
  var DEF=[{id:'general',en:'General inquiry',km:'ការសាកសួរទូទៅ'},{id:'donation',en:'Donation',km:'ការបរិច្ចាគ'},{id:'copyright',en:'Copyright report',km:'ការរាយការណ៍ពីម្ចាស់កម្មសិទ្ធិ'}];
  var T=(Array.isArray(c.topics)&&c.topics.filter(function(x){return x&&(x.en||x.km)}).length)?c.topics.filter(function(x){return x&&(x.en||x.km)}):DEF;
  function msg(n){return {on:true,clips:{km:P[n+'Km']||'',en:P[n+'En']||''},ck:{},texts:{},bg:''}}
  return {v:2,langOn:true,topicOn:true,
    langs:[{id:'km',key:'1',name:'ខ្មែរ',agent:'Khmer',tts:'km',on:true,clip:P.menuKm||'',ck:P.menuKm?'1':'',text:'',bg:''},
           {id:'en',key:'2',name:'English',agent:'English',tts:'en',on:true,clip:P.menuEn||'',ck:P.menuEn?'2':'',text:'',bg:''}],
    topics:T.slice(0,9).map(function(t,i){return {id:t.id||('t'+(i+1)),key:String(i+1),type:'agent',on:true,names:{km:t.km||'',en:t.en||''},
      clips:{km:t.vKm||'',en:t.vEn||''},ck:{km:t.vKm?String(t.nKm||i+1):'',en:t.vEn?String(t.nEn||i+1):''},texts:{},bg:'',info:{clips:{},texts:{},bg:''}}}),
    notes:[],msgs:{wait:msg('wait'),busy:msg('busy'),closed:msg('closed')},bg:{greet:'',topic:'',wait:'',closed:''}}}
function ivrUrls(iv){var out=[];function add(u){if(u&&/^https:\/\//.test(u)&&out.indexOf(u)<0)out.push(u)}
  function clips(o){if(o&&o.clips)Object.keys(o.clips).forEach(function(k){add(o.clips[k])});if(o)add(o.bg)}
  (iv.langs||[]).forEach(function(l){add(l.clip);add(l.bg)});(iv.topics||[]).forEach(function(t){clips(t);clips(t.info)});(iv.notes||[]).forEach(clips);
  Object.keys(iv.msgs||{}).forEach(function(k){clips(iv.msgs[k])});if(iv.bg)Object.keys(iv.bg).forEach(function(k){add(iv.bg[k])});return out}
/* connection servers: free STUN plus an optional relay (TURN) set in the editor */
var ICE_CACHE={t:0,v:null};
function iceServersFor(c){c=c||{};var base=[{urls:['stun:stun.l.google.com:19302','stun:stun1.l.google.com:19302']}],out=base.slice();
  var srv=String(c.turnServer||'').trim();if(srv)out.push({urls:srv.split(/[\s,]+/).filter(Boolean),username:c.turnUser||'',credential:c.turnPass||''});
  var link=String(c.turnLink||'').trim();if(!/^https:\/\//.test(link))return Promise.resolve({iceServers:out});
  if(ICE_CACHE.v&&ICE_CACHE.link===link&&Date.now()-ICE_CACHE.t<20*60000)return Promise.resolve({iceServers:out.concat(ICE_CACHE.v)});
  return Promise.race([fetch(link).then(function(r){return r.json()}),new Promise(function(_,rej){setTimeout(function(){rej(new Error('timeout'))},6000)})])
    .then(function(j){var arr=Array.isArray(j)?j:(j&&j.iceServers)||[];ICE_CACHE={t:Date.now(),v:arr,link:link};return {iceServers:out.concat(arr)}}).catch(function(){return {iceServers:out}})}

function ivr(){return ivrModel(callCfg())}
function ivLangs(){return ivr().langs.filter(l=>l&&l.on!==false)}
function ivLang(){return ivLangs().find(l=>l.id===call.lang)||ivLangs()[0]||{id:'en',tts:'en'}}
function callCfg(){return (T.S&&T.S.call)||{}}
function callOn(){return callCfg().enabled!==false}
/* ---- sounds ---- */
function tone(freq,dur,vol,when){if(!call||!call.ac)return;const a=call.ac,o=a.createOscillator(),g=a.createGain(),t=a.currentTime+(when||0);o.frequency.value=freq;o.type='sine';g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol||.12,t+.02);g.gain.setValueAtTime(vol||.12,t+dur-.04);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(outNode());o.start(t);o.stop(t+dur+.02)}
function outNode(){if(!call.out){call.out=call.ac.createGain();call.out.gain.value=call.spk?2.4:1;call.out.connect(call.ac.destination)}return call.out}
const DTMF={'1':[697,1209],'2':[697,1336],'3':[697,1477],'4':[770,1209],'5':[770,1336],'6':[770,1477],'7':[852,1209],'8':[852,1336],'9':[852,1477],'*':[941,1209],'0':[941,1336],'#':[941,1477]};
function dtmf(k){const f=DTMF[k];if(f){tone(f[0],.16,.06);tone(f[1],.16,.06)}}
function ringBuf(){const u=(callCfg().prompts||{}).ringTone;if(!u)return Promise.resolve(null);if(!PBUF[u])loadPrompts();return Promise.resolve(PBUF[u])}
function playLoop(buf,vol){const src=call.ac.createBufferSource(),g=call.ac.createGain();g.gain.value=vol;src.buffer=buf;src.loop=true;src.connect(g);g.connect(outNode());src.start();return src}
async function ringback(times){if(!call||!call.ac)return sleepC(times*3000-1800);const buf=await ringBuf();if(!call)return;
  if(buf){const src=playLoop(buf,.8);call.ringSrc=src;await sleepC(times*3000-1800);try{src.stop()}catch(e){}call.ringSrc=null;return}
  for(let i=0;i<times;i++){tone(425,1,.08,i*3)}return sleepC(times*3*1000-1800)}
function holdStart(){holdStop();bgStop();if(!call||!call.ac)return;
  const u=(callCfg().prompts||{}).holdMusic;
  if(u){if(!PBUF[u])loadPrompts();const tok=call.holdTok={};Promise.resolve(PBUF[u]).then(buf=>{if(!call||call.holdTok!==tok)return;if(!buf)return holdTones();
    const src=call.ac.createBufferSource(),g=call.ac.createGain();g.gain.value=.7;src.buffer=buf;src.loop=true;src.connect(g);g.connect(outNode());src.start();call.holdSrc=src});return}
  holdTones()}
function holdTones(){if(!call)return;const notes=[392,440,523.25,587.33,659.25,587.33,523.25,440];let i=0;
  call.hold=setInterval(()=>{if(!call)return;const n=notes[i++%notes.length];tone(n,.55,.035);if(i%4===1)tone(n/2,1.1,.025)},600)}
function holdStop(){if(!call)return;call.holdTok=null;if(call.hold){clearInterval(call.hold);call.hold=null}if(call.holdSrc){try{call.holdSrc.stop()}catch(e){}call.holdSrc=null}}
function queueStart(){holdStop();if(!call||!call.ac)return;const tok=call.holdTok={};ringBuf().then(buf=>{if(!call||call.holdTok!==tok)return;if(buf){call.holdSrc=playLoop(buf,.8);return}tone(425,1,.08);call.hold=setInterval(()=>{if(call)tone(425,1,.08)},4000)})}
function sleepC(ms){return new Promise(r=>{const t=setTimeout(r,ms);if(call)call.timers.push(t)})}
function stopVoice(){if(call){call.vseq=(call.vseq||0)+1}try{speechSynthesis.cancel()}catch(e){}if(call&&call.src){try{call.src.stop()}catch(e){}call.src=null}}
const PBUF={};
function loadPrompts(){const P=callCfg().prompts||{},U=ivrUrls(ivr()).concat([P.ringTone,P.holdMusic]);U.forEach(u=>{if(!u||!/^https:\/\//.test(u)||PBUF[u])return;
  PBUF[u]=fetch(u).then(r=>r.arrayBuffer()).then(b=>new Promise((res,rej)=>call&&call.ac?call.ac.decodeAudioData(b,res,rej):rej())).catch(()=>null)})}
/* background music under a voice */
function bgSet(u){if(!call||!call.ac)return;if(call.bgUrl===u)return;bgStop();if(!u)return;call.bgUrl=u;const tok=call.bgTok={};if(!PBUF[u])loadPrompts();
  Promise.resolve(PBUF[u]).then(buf=>{if(!call||call.bgTok!==tok||!buf)return;const src=call.ac.createBufferSource(),g=call.ac.createGain();g.gain.value=.22;src.buffer=buf;src.loop=true;src.connect(g);g.connect(outNode());src.start();call.bgSrc=src;call.bgGain=g})}
function bgStop(){if(!call)return;call.bgTok=null;call.bgUrl='';if(call.bgSrc){try{call.bgSrc.stop()}catch(e){}call.bgSrc=null;call.bgGain=null}}
/* keep the part's music playing for the chosen seconds after the voices end, then fade out */
async function bgTail(part,st){const sec=+((ivr().tail||{})[part])||0;if(!call||!sec||!call.bgSrc)return;const tok=call.flow;await sleepC(Math.max(0,sec*1000-1500));
  if(!call||call.state!==st||call.flow!==tok)return;try{const g=call.bgGain,t=call.ac.currentTime;g.gain.setValueAtTime(g.gain.value,t);g.gain.linearRampToValueAtTime(.0001,t+1.5)}catch(e){}await sleepC(1500)}
/* play one IVR voice: recording, else phone voice, else words on screen */
function playIv(url,txt,tts,bg){if(bg!==undefined)bgSet(bg||'');return playOne('',txt||'',tts||'en',url||'__none__')}
function playOne(name,txt,vl,url){/* recorded voice from the editor, else the phone's own voice, else the words on screen */
  const u=url==='__none__'?'':(url||(callCfg().prompts||{})[name]);setIvr('');const seq=call.vseq=(call.vseq||0)+1;const show=t=>{if(call&&call.vseq===seq)setIvr(t)};
  return new Promise(res=>{let done=false;const fin=()=>{if(!done){done=true;res()}};
    const speak=()=>{try{const vs=speechSynthesis.getVoices(),v=vs.find(x=>x.lang&&x.lang.toLowerCase().replace('_','-').startsWith(vl));
      if(!txt){setTimeout(fin,200);return}
      if(!v&&vl!=='en'){show(txt);setTimeout(fin,Math.min(14000,2500+txt.length*60));return}
      const s=new SpeechSynthesisUtterance(txt);s.lang=vl==='km'?'km-KH':vl==='en'?'en-US':vl;if(v)s.voice=v;s.rate=.95;s.onend=fin;s.onerror=()=>{show(txt);setTimeout(fin,4000)};speechSynthesis.speak(s);setTimeout(fin,Math.min(25000,3000+txt.length*90))}catch(e){show(txt);setTimeout(fin,4000)}};
    if(u&&call&&call.ac){if(!PBUF[u])loadPrompts();Promise.resolve(PBUF[u]).then(buf=>{if(!call||done)return fin();if(!buf)return speak();
        const src=call.ac.createBufferSource();src.buffer=buf;src.connect(outNode());src.onended=fin;call.src=src;src.start();setTimeout(fin,buf.duration*1000+800)});return}
    speak()})}
function ivText(item,lang,kind){const t=item.texts&&item.texts[lang.id];if(t)return t;return kind?ivrMsgText(kind,lang):''}
function ivClip(item,lang,key){const u=item.clips&&item.clips[lang.id];if(!u)return '';if(key!=null&&item.ck&&item.ck[lang.id]&&item.ck[lang.id]!==key)return '';return u}
/* an item heard before the language is known: play it in every language, in menu order */
async function ivAll(item,kind,st,bg){for(const l of ivLangs()){if(!call||call.state!==st)return;await playIv(ivClip(item,l),ivText(item,l,kind),l.tts,bg);if(!call||call.state!==st)return;await sleepC(300)}}
async function ivNotes(pos,st,all){const bg=ivBg(pos==='start'||pos==='afterLang'?'greet':'topic');for(const n of ivr().notes.filter(x=>x&&x.on!==false&&x.pos===pos)){if(!call||call.state!==st)return;
    if(all)await ivAll(n,null,st,bg);else{const l=ivLang();await playIv(ivClip(n,l),ivText(n,l),l.tts,bg)}if(!call||call.state!==st)return;await sleepC(300)}}
async function ivMsg(name,st){const m=ivr().msgs[name];if(!m||m.on===false)return false;const l=ivLang();await playIv(ivClip(m,l),ivText(m,l,name),l.tts,ivBg(name==='closed'?'closed':'wait'));return true}
/* ---- screen ---- */
function callEl(){return document.getElementById('tcall')}
function drawCall(){let el=callEl();const lg=call.ui||call.lang;
  if(!el){el=document.createElement('div');el.id='tcall';el.setAttribute('role','dialog');el.setAttribute('aria-label','Call');document.body.appendChild(el);document.body.classList.add('tcall-on')}
  const B=(attr,icon,label,cls)=>'<button type="button" '+attr+(cls?' class="'+cls+'"':'')+'><span>'+I(icon)+'</span><small>'+esc(label)+'</small></button>';
  el.innerHTML='<div class="tcl-top"><span class="tcl-st" data-st>'+esc(cw('calling',lg))+'</span><b class="tcl-big" style="font-weight:'+({thin:200,light:300,regular:400}[callCfg().numStyle]||700)+'">'+esc(callCfg().number||'203')+'</b><span class="tcl-sub">'+esc(cw('where',lg))+'</span></div>'+
   '<div class="tcl-mid"><div class="tcl-dial" data-dial></div><div class="tcl-ivr" data-ivr hidden></div>'+
   '<div class="tcl-pad" data-pad hidden>'+[['1',''],['2','ABC'],['3','DEF'],['4','GHI'],['5','JKL'],['6','MNO'],['7','PQRS'],['8','TUV'],['9','WXYZ'],['*',''],['0','+'],['#','']].map(x=>'<button type="button" data-k="'+x[0]+'"'+(x[0]==='*'||x[0]==='#'?' class="sym"':'')+'><b>'+x[0]+'</b><small>'+(x[1]||'&nbsp;')+'</small></button>').join('')+'</div></div>'+
   '<div class="tcl-ctl" data-ctl>'+B('data-spk','sound',cw('speaker',lg),'r1')+B('data-chat','chat',cw('chat',lg),'r1')+B('data-mute','mic',cw('mute',lg),'r1')+
     B('data-more','dots',cw('more',lg),'mob')+'<button type="button" class="tcl-end" data-end aria-label="'+esc(cw('end',lg))+'"><span>'+I('phoneoff')+'</span><small>'+esc(cw('end',lg))+'</small></button>'+
     B('data-kp','grid',cw('keypad',lg),'kpb')+'<button type="button" class="tcl-hide" data-hide hidden>'+esc(lg==='km'?'លាក់':'Hide')+'</button></div>'+
   '<div class="tcl-sheet" data-sheet hidden></div><audio data-remote autoplay playsinline></audio>';
  el.onclick=e=>{if(el.classList.contains('mini')&&e.target.closest('.tcl-top')){setMini(false);return}const b=e.target.closest('button');if(!b)return;
    if(b.dataset.k){dtmf(b.dataset.k);addDigit(b.dataset.k);onKey(b.dataset.k);return}
    if(b.hasAttribute('data-end')){callEnd(true);return}
    if(b.hasAttribute('data-kp')){showPad(true);return}
    if(b.hasAttribute('data-hide')){showPad(false);return}
    if(b.hasAttribute('data-chat')){setMini(true);if(window.TheanChat)window.TheanChat.open();return}
    if(b.hasAttribute('data-more')){moreSheet();return}
    if(b.hasAttribute('data-rec')){if(call.rec)recStop();else recStart();return}
    if(b.hasAttribute('data-shclose')){const sh=el.querySelector('[data-sheet]');if(sh)sh.hidden=true;return}
    if(b.hasAttribute('data-spk')){call.spk=!call.spk;b.classList.toggle('on',call.spk);setSpk();return}
    if(b.hasAttribute('data-mute')){call.muted=!call.muted;if(call.stream)call.stream.getAudioTracks().forEach(t=>t.enabled=!call.muted);b.classList.toggle('on',call.muted);return}}}
function setSpk(){if(!call||!call.ac)return;outNode().gain.value=call.spk?2.4:1;/* phones do not let websites pick earpiece or loudspeaker, so Speaker makes the call louder */
  if(call.remote){try{if(!call.rg){call.rg=call.ac.createGain();call.ac.createMediaStreamSource(call.remote).connect(call.rg);call.rg.connect(call.ac.destination)}call.rg.gain.value=call.spk?1.6:0}catch(e){}}}
function addDigit(k){if(!call)return;call.dial=((call.dial||'')+k).slice(-18);const d=callEl()&&callEl().querySelector('[data-dial]');if(d)d.textContent=call.dial}
function setMini(v){const el=callEl();if(!el)return;el.classList.toggle('mini',v);document.body.classList.toggle('tcall-mini',v)}
function setSt(t){const e=callEl()&&callEl().querySelector('[data-st]');if(e)e.textContent=t}
function setIvr(t){const e=callEl()&&callEl().querySelector('[data-ivr]');if(!e)return;e.hidden=!t;e.textContent=t||''}
function showPad(v){const el=callEl();if(!el)return;if(!v){call.dial='';const d=el.querySelector('[data-dial]');if(d)d.textContent=''}el.querySelector('[data-pad]').hidden=!v;el.classList.toggle('padon',!!v);el.querySelector('[data-hide]').hidden=!v}
function clock(){if(!call||!call.t0)return '';const s=Math.floor((Date.now()-call.t0)/1000);return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function startClock(){if(!call||call.tick)return;call.t0=Date.now();const f=()=>{if(call&&!call.busy)setSt(clock())};f();call.tick=setInterval(f,1000)}

/* ---- Away / opening hours (settings/public/callAway) ---- */
function awayNow(a){if(!a)return false;if(a.on)return true;if(!a.sched)return false;
  const t=new Date(Date.now()+7*3600000),day=t.getUTCDay(),mins=t.getUTCHours()*60+t.getUTCMinutes();
  const days=Array.isArray(a.days)?a.days:[0,1,2,3,4,5,6];if(days.indexOf(day)<0)return true;
  const hm=x=>{const m=String(x||'').match(/^(\d{1,2}):(\d{2})/);return m?(+m[1])*60+(+m[2]):null},o=hm(a.open),c=hm(a.close);
  if(o==null||c==null)return false;return o<=c?(mins<o||mins>=c):(mins<o&&mins>=c)}
async function closedFlow(){call.state='closed';startClock();
  const m=ivr().msgs.closed;if(m&&m.on!==false)await ivAll(m,'closed','closed',ivBg('closed'));if(!call)return;await bgTail('closed','closed');if(!call)return;bgStop();await sleepC(600);callEnd(false)}
/* ---- flow ---- */
async function callStart(){
  if(call){setMini(false);return}
  if(!callOn())return;
  {const old=callEl();if(old)old.remove()}
  const lg0=L();
  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia||!window.RTCPeerConnection){toast2(cw('unsupported',lg0));return}
  call={state:'init',lang:lg0,ui:lg0,timers:[],unsub:[],seen:{},muted:false};
  try{call.ac=new (window.AudioContext||window.webkitAudioContext)();call.ac.resume()}catch(e){}
  try{speechSynthesis.getVoices();const u0=new SpeechSynthesisUtterance(' ');u0.volume=0;speechSynthesis.speak(u0)}catch(e){}
  loadPrompts();iceServersFor(callCfg());
  drawCall();setSt(cw('mic',lg0));
  try{call.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true}})}
  catch(e){setSt(cw('micNo',lg0));await sleepC(4500);return callEnd(false)}
  if(!call)return;
  const awayP=loadFb().then(f=>f.get('settings/public/callAway')).catch(()=>null);
  setSt(cw('calling',lg0));await sleepC(700);if(!call)return; /* no ring music before the menu */
  if(awayNow(await awayP)){if(!call)return;ensureUser().then(u=>fb.push('calls',{callerUid:u.uid,status:'closed',lang:lg0,createdAt:TS,page:(location.pathname+location.hash)})).catch(()=>{});return closedFlow()}
  call.state='menu';startClock();
  const tok=call.flow={};await ivNotes('start','menu',true);if(!call||call.flow!==tok||call.state!=='menu')return;
  const LS=ivLangs(),iv=ivr();
  if(!iv.langOn||LS.length<2){call.lang=(LS.find(l=>l.id===lg0)||LS[0]||{id:lg0}).id;return afterLangFlow()}
  for(let i=0;i<2;i++){for(const l of LS){if(!call||call.flow!==tok||call.state!=='menu')return;
      await playIv(l.clip&&(!l.ck||l.ck===l.key)?l.clip:'',l.text||ivrLangLine(l),l.tts,ivBg('greet'));if(!call||call.flow!==tok||call.state!=='menu')return;await sleepC(250)}
    await sleepC(5000);if(!call||call.flow!==tok||call.state!=='menu')return}
  await bgTail('greet','menu');if(!call||call.flow!==tok||call.state!=='menu')return;bgStop();callEnd(false) /* no language chosen after the menu played twice */
}
function onKey(k){if(!call)return;
  if(call.state==='menu'){const l=ivLangs().find(x=>x.key===k);if(!l||!ivr().langOn)return;stopVoice();call.lang=l.id;afterLangFlow();return}
  if(call.state==='topic'){const t=ivTopics().find(x=>x.key===k);if(!t)return;stopVoice();if(t.type==='info')return infoFlow(t);return connectFlow(t)}
  if(call.state==='info'){if(k==='#'){stopVoice();topicMenu();return}if(k==='1'){stopVoice();connectFlow(call.infoTopic);return}}}
function ivBg(part){const b=ivr().bg||{};return b[part]||''}
function ivTopics(){return ivr().topics.filter(t=>t&&t.on!==false)}
async function afterLangFlow(){call.state='topic';const tok=call.flow={};
  await ivNotes('afterLang','topic',false);if(!call||call.flow!==tok||call.state!=='topic')return;
  if(!ivr().topicOn||!ivTopics().length)return connectFlow(null);
  await ivNotes('beforeTopic','topic',false);if(!call||call.flow!==tok||call.state!=='topic')return;
  topicMenu(true)}
async function topicMenu(skipNotes){call.state='topic';const tok=call.flow={},l=ivLang();await sleepC(300);
  for(let i=0;i<2;i++){for(const t of ivTopics()){if(!call||call.flow!==tok||call.state!=='topic')return;
      await playIv(ivClip(t,l,t.key),ivText(t,l)||ivrTopicLine(t,l),l.tts,ivBg('topic'));if(!call||call.flow!==tok||call.state!=='topic')return;await sleepC(250)}
    await sleepC(5000);if(!call||call.flow!==tok||call.state!=='topic')return}
  await bgTail('topic','topic');if(!call||call.flow!==tok||call.state!=='topic')return;bgStop();callEnd(false)}
async function infoFlow(t){call.state='info';call.infoTopic=t;const tok=call.flow={},l=ivLang(),inf=t.info||{};
  await playIv(ivClip(inf,l),ivText(inf,l),l.tts,ivBg('topic'));if(!call||call.flow!==tok||call.state!=='info')return;await sleepC(600);
  if(call&&call.flow===tok&&call.state==='info')topicMenu()}
async function connectFlow(t){const l=ivLang(),nm=t?((t.names&&(t.names.en||t.names[l.id]||t.names.km))||'Topic'):'General inquiry';
  call.topic=t?t.id:'general';call.topicEn=nm;call.topicKm=t&&t.names?(t.names.km||nm):'ការសាកសួរទូទៅ';call.langName=l.agent||l.name||l.id;
  call.state='wait';const tok=call.flow={};afterLang().catch(()=>{});
  await ivNotes('afterTopic','wait',false);if(!call||call.flow!==tok||call.state!=='wait')return;
  await ivMsg('wait','wait');if(!call||call.flow!==tok||call.state!=='wait')return;await bgTail('wait','wait');if(!call||call.flow!==tok||call.state!=='wait')return;bgStop();
  queueStart();clearTimeout(call.ringT);call.ringT=setTimeout(()=>{if(call&&call.state==='wait')noAnswer()},(+callCfg().ringSec||35)*1000)}
function noAnswer(){const id=call.id;busyEnd();if(id)fb.update('calls/'+id,{status:'missed',endedAt:TS}).catch(()=>{})}
function drawLabels(){const el=callEl();if(!el)return;const lg=call.lang;[['data-mute','mute'],['data-spk','speaker'],['data-kp','keypad'],['data-chat','chat'],['data-end','end']].forEach(([a,k])=>{const b=el.querySelector('['+a+'] small');if(b)b.textContent=cw(k,lg)})}
async function anyAgentOnline(){try{const a=await fb.get('agents')||{};const now=Date.now();return Object.keys(a).some(k=>a[k]&&a[k].online&&(!a[k].lastSeen||now-ms(a[k].lastSeen)<5*60000))}catch(e){return false}}
async function afterLang(){const lg=call.lang;
  try{await ensureChat(lg)}catch(e){await ensureUser()}if(!call)return;
  const ref=await fb.push('calls',{callerUid:user.uid,lang:lg,langName:call.langName||'',topic:call.topic||'general',topicName:call.topicEn||'',topicKm:call.topicKm||'',callerRec:!!call.rec,status:'ringing',leg:0,createdAt:TS,name:(chat&&chat.name)||'',page:(location.pathname+location.hash),ua:navigator.userAgent.slice(0,120)});
  if(!call){fb.update('calls/'+ref.key,{status:'cancelled',endedAt:TS}).catch(()=>{});return}
  call.id=ref.key;call.leg=0;const P='calls/'+call.id;
  try{await say({from:'system',text:'Web call started · '+(call.langName||lg)+' · '+(call.topicEn||'General inquiry'),staff:true});await touch({lastMsg:'Web call: '+(call.topicEn||'General inquiry')+' ('+(call.langName||lg)+')',lastFrom:'visitor'})}catch(e){}
  try{fb.onDisconnect(P,{status:'ended',endedAt:TS,endedBy:'caller'})}catch(e){}
  call.unsub.push(fb.on(P,v=>{if(!call||!v)return;
    if(v.status==='active'&&(+v.leg||0)>call.leg){call.agent=v.agentName||'';newLeg(+v.leg)}
    if(v.status==='transfer'&&call.state==='active'){call.state='transfer';closeLeg();holdStart();clearTimeout(call.ringT);call.ringT=setTimeout(()=>{if(call&&call.state==='transfer')noAnswer()},90000)}
    if(call.state==='active'){if(v.hold&&!call.onHold){call.onHold=true;holdStart();muteRemote(true)}else if(!v.hold&&call.onHold){call.onHold=false;holdStop();muteRemote(false)}}
    if((v.status==='ended'||v.status==='missed')&&call.state!=='ending'&&call.state!=='busy'){callEnd(false)}}));
}
function muteRemote(v){const a=callEl()&&callEl().querySelector('[data-remote]');if(a)a.muted=v;if(call.rg)call.rg.gain.value=v?0:(call.spk?1.6:0)}
function closeLeg(){if(!call)return;(call.legUnsub||[]).forEach(u=>{try{u()}catch(e){}});call.legUnsub=[];try{call.pc&&call.pc.close()}catch(e){}call.pc=null;call.connected=false;if(call.rg){try{call.rg.disconnect()}catch(e){}call.rg=null}call.remote=null}
async function newLeg(n){closeLeg();call.leg=n;call.state='active';call.onHold=false;clearTimeout(call.ringT);holdStop();stopVoice();bgStop();setIvr('');
  const P='calls/'+call.id,L='calls/'+call.id+'/sig/'+n,seen={},cfgI=await iceServersFor(callCfg());if(!call||call.leg!==n)return;const pc=new RTCPeerConnection(cfgI);call.pc=pc;call.legUnsub=[];
  call.stream.getTracks().forEach(t=>pc.addTrack(t,call.stream));
  pc.ontrack=e=>{call.remote=e.streams[0];if(call.rec&&call.ac){try{call.recRem&&call.recRem.disconnect()}catch(x){}try{call.recRem=call.ac.createMediaStreamSource(call.remote);call.recRem.connect(call.rec.dest)}catch(x){}}const a=callEl()&&callEl().querySelector('[data-remote]');if(a){a.srcObject=e.streams[0];a.muted=false;a.play().catch(()=>{})}if(call.spk)setSpk()};
  pc.onconnectionstatechange=()=>{if(!call||call.pc!==pc)return;const s=pc.connectionState;if(s==='connected')onConnected();
    if(s==='failed'&&call.id)fb.update('calls/'+call.id,{fail:'network'}).catch(()=>{});
    if((s==='failed'||s==='disconnected')&&call.state==='active'){setTimeout(()=>{if(call&&call.pc===pc&&pc.connectionState!=='connected'&&call.state==='active')callEnd(true)},8000)}};
  pc.onicecandidate=e=>{if(e.candidate&&call&&call.pc===pc)fb.push(L+'/cc',JSON.parse(JSON.stringify(e.candidate.toJSON()))).catch(()=>{})};
  const offer=await pc.createOffer({offerToReceiveAudio:true});await pc.setLocalDescription(offer);
  await fb.update(L,{offer:{type:offer.type,sdp:offer.sdp}});
  let answered=false;
  call.legUnsub.push(fb.on(L+'/answer',v=>{if(v&&!answered&&call&&call.pc===pc){answered=true;call.answered=true;pc.setRemoteDescription(v).catch(()=>{})}}));
  call.legUnsub.push(fb.on(L+'/ac',v=>{if(!v||!call||call.pc!==pc)return;Object.keys(v).forEach(k=>{if(seen[k])return;seen[k]=1;pc.addIceCandidate(v[k]).catch(()=>{})})}));
}
function onConnected(){if(!call||call.connected)return;call.connected=true;call.everConnected=true;clearTimeout(call.ringT);if(!call.onHold)holdStop();stopVoice();setIvr('')}
async function busyEnd(){if(!call||call.state==='busy'||call.state==='ending')return;call.state='busy';clearTimeout(call.ringT);closeLeg();holdStop();stopVoice();showPad(false);await sleepC(300);if(!call)return;await ivMsg('busy','busy');if(!call)return;await bgTail('wait','busy');if(!call)return;bgStop();await sleepC(800);callEnd(false)}
async function callEnd(byMe){if(!call||call.state==='ending')return;if(call.rec)recStop();const c=call;c.state='ending';
  holdStop();stopVoice();bgStop();try{c.ringSrc&&c.ringSrc.stop()}catch(e){}clearTimeout(c.menuTimer);clearTimeout(c.ringT);clearInterval(c.tick);c.timers.forEach(t=>clearTimeout(t));
  if(byMe&&c.id){try{await fb.update('calls/'+c.id,{status:c.everConnected||c.answered?'ended':'cancelled',endedAt:TS,endedBy:'caller'})}catch(e){}}
  c.unsub.forEach(u=>{try{u()}catch(e){}});(c.legUnsub||[]).forEach(u=>{try{u()}catch(e){}});
  try{c.pc&&c.pc.close()}catch(e){}try{c.stream&&c.stream.getTracks().forEach(t=>t.stop())}catch(e){}
  setSt(cw('ended',c.ui||c.lang));setIvr('');tone(480,.25,.08);tone(480,.25,.08,.35);
  setTimeout(()=>{const el=callEl();if(el)el.remove();document.body.classList.remove('tcall-on','tcall-mini');try{c.ac&&c.ac.close()}catch(e){}},1400);
  call=null}

/* ---- customer call recording (More > Record call) ---- */
function moreSheet(){const el=callEl();if(!el)return;const sh=el.querySelector('[data-sheet]'),lg=call.ui||call.lang;
  if(!sh.hidden){sh.hidden=true;return}
  sh.innerHTML='<button type="button" data-rec><span class="rdot'+(call.rec?' on':'')+'"></span>'+esc(cw(call.rec?'recStop':'recStart',lg))+'</button><button type="button" data-shclose>'+esc(cw('recClose',lg))+'</button>';sh.hidden=false}
function recMark(){const el=callEl();if(!el)return;el.classList.toggle('recon',!!call.rec);const mb=el.querySelector('[data-more]');if(mb)mb.classList.toggle('on',!!call.rec);const sh=el.querySelector('[data-sheet]');if(sh)sh.hidden=true}
function recStart(){if(!call||call.rec)return;if(!window.MediaRecorder||!call.ac||!call.ac.createMediaStreamDestination){toast2(cw('recNo',call.ui||call.lang));return}
  try{const a=call.ac,dest=a.createMediaStreamDestination();outNode().connect(dest);
    if(call.stream){call.recMic=a.createMediaStreamSource(call.stream);call.recMic.connect(dest)}
    if(call.remote){try{call.recRem=a.createMediaStreamSource(call.remote);call.recRem.connect(dest)}catch(e){}}
    const mt=['audio/mp4','audio/webm;codecs=opus','audio/webm'].filter(t=>MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(t))[0];
    const mr=new MediaRecorder(dest.stream,mt?{mimeType:mt}:undefined),ch=[];mr.ondataavailable=e=>{if(e.data&&e.data.size)ch.push(e.data)};mr.start(1000);
    call.rec={mr,ch,dest,type:mr.mimeType||mt||'audio/webm',t0:Date.now()};recMark();
    if(call.id)fb.update('calls/'+call.id,{callerRec:true}).catch(()=>{})}catch(e){toast2(cw('recNo',call.ui||call.lang))}}
function recStop(){const c=call;if(!c||!c.rec)return;const r=c.rec;c.rec=null;recMark();
  try{c.out&&c.out.disconnect(r.dest)}catch(e){}try{c.recMic&&c.recMic.disconnect()}catch(e){}try{c.recRem&&c.recRem.disconnect()}catch(e){}
  if(c.id)fb.update('calls/'+c.id,{callerRec:false}).catch(()=>{});
  const lg=c.ui||c.lang;r.mr.onstop=()=>{const blob=new Blob(r.ch,{type:r.type});if(blob.size<1000)return;recOffer(blob,r.type,lg)};try{r.mr.stop()}catch(e){}}
function recOffer(blob,type,lg){let card=document.getElementById('tcrec');if(card)card.remove();card=document.createElement('div');card.id='tcrec';
  const d=new Date(),p=n=>String(n).padStart(2,'0'),name='thean-call-'+d.getFullYear()+p(d.getMonth()+1)+p(d.getDate())+'-'+p(d.getHours())+p(d.getMinutes())+(/mp4/.test(type)?'.m4a':'.webm');
  card.innerHTML='<span>'+esc(cw('recReady',lg))+'</span><button type="button" data-rsave>'+esc(cw('recSave',lg))+'</button><button type="button" data-rx aria-label="'+esc(cw('recClose',lg))+'">'+I('close')+'</button>';
  document.body.appendChild(card);
  card.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-rx')){card.remove();return}
    const file=new File([blob],name,{type:blob.type||type});
    if(navigator.canShare&&navigator.canShare({files:[file]})){navigator.share({files:[file],title:name}).catch(()=>{});return}
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},3000)}}
function toast2(t){const d=document.createElement('div');d.className='toast';d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),5000)}
window.TheanCall={start:callStart,enabled:callOn};

