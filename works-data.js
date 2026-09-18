/* =========================================================
   TO ADD A NEW PROJECT: copy one object below, fill it in,
   and add a comma after the one before it. Both index.html
   and work.html read from this same list automatically.

   Fields:
     id       - short unique slug, used in the URL (e.g. work.html?id=your-id)
                letters, numbers, and dashes only, no spaces
     category - short label, e.g. "Live event · On-site editing"
     title    - project name, e.g. "Woogie Stage — Lightning in a Bottle"
     blurb    - one sentence of real context: what it was, what you did
     images   - an array of direct image URLs (Dropbox "raw=1" links work).
                Start with one if that's all you have — you can add more
                later without touching anything else. Leave as [] to show
                a placeholder card until you have a photo.
     folder   - the Dropbox folder (or wherever) with the FULL set for this
                project — this is what the "See full gallery" button on the
                detail page links out to. Leave as "" if you don't have one yet.
     videos   - an array of video links for this project, or [] if none.
                Each one is an object: { type: "youtube", url: "..." }
                or { type: "instagram", url: "..." }
                YouTube videos get embedded and play right on the page.
                Instagram videos show as a "Watch on Instagram" button instead
                (Instagram's own embed carries too much of its own branding
                to sit cleanly on the page).
   ========================================================= */
const WORKS = [
  {
    id: "woogie-stage",
    category: "Live event · On-site editing",
    title: "Woogie Stage — Lightning in a Bottle",
    blurb: "Same-day turnaround edits cut and delivered from a laptop at the stage.",
    images: [
      "https://www.dropbox.com/scl/fi/fkr6pc77kv6bli75kqy8h/Lightning-in-a-Bottle-Woogie-Stage.jpg?rlkey=xy0xhyn5lg9b49csz1bldib9u&st=13eva84g&raw=1"
    ],
    videos: [],
    folder: "https://www.dropbox.com/scl/fo/8nymescozy6i6rhnqlpx7/AMWPmno475W8KkdO4KBbeLs?rlkey=7rxbaybgsor897bryz0hi4lv6&st=s9s8uisf&dl=0"
  },
  {
    id: "mochakk-torch",
    category: "Performance · Video",
    title: "Mochakk — The Torch",
    blurb: "Multi-cam performance coverage for an artist set booked through Framework.",
    images: [
      "https://www.dropbox.com/scl/fi/cjp5sjj0za6n8fr7buof2/Mochakk-The-Torch-1.jpg?rlkey=rwklzn23ey78661xzmwgi7e70&st=cbwjr1f7&raw=1"
    ],
    videos: [],
    folder: "https://www.dropbox.com/scl/fo/8guvlxq1w7za1twiyo6k8/ADVD-a2oReC-yHLgR7jlD7A?rlkey=4340kpsygs21d9uy9c2ls2zk2&st=q884b7ri&dl=0"
  },
  {
    id: "lucalush-litb",
    category: "Performance · Photography",
    title: "LucaLush — Lightning in a Bottle",
    blurb: "Stills coverage across a full festival set, shot for artist promo use.",
    images: [
      "https://www.dropbox.com/scl/fi/3jjyynmo9m947hfhbrfwx/LucaLush-Lightning-in-a-Bottle.jpg?rlkey=bq7kk77f4ysm7jycds78odi3f&st=hkglggvu&raw=1"
    ],
    videos: [],
    folder: "https://www.dropbox.com/scl/fo/sj1leor4miilkkk8fk3fs/AFrRfELAKAiwM40GQ1YJcL0?rlkey=aow8g8aqgeakkg6fceedlwg35&st=7qe4sshe&dl=0"
  },
  {
    id: "video-digital-reel",
    category: "Digital media",
    title: "Video &amp; digital media reel",
    blurb: "A cut of short-form content built for social and campaign use.",
    images: [
      "https://www.dropbox.com/scl/fi/tvo8qs8sr7foaksa4baf2/Thumbnail_v4.jpg?rlkey=k586aw04inv9meqyopyubbpy3&st=fae0tsdj&raw=1"
    ],
    videos: [],
    folder: "https://www.dropbox.com/scl/fo/rti3r82er36demth2c7f1/AGu_n1PSYI6Q3hRhSoVlxsc?rlkey=eaygannsr3vkc8v2uiolh1woq&st=u0e1c38w&dl=0"
  },
  {
    id: "impala64-promo",
    category: "Photography",
    title: "Impala64 — Promo photo",
    blurb: "Promotional portrait shot for the artist Impala64.",
    images: [
      "https://www.dropbox.com/scl/fi/4jdfx325rxmnpcqq31d3x/impala64_promo_photo3_square.jpg?rlkey=gwh1srqendilugry39w5z38d7&st=78mnxpy5&raw=1"
    ],
    videos: [],
    folder: "https://www.dropbox.com/scl/fi/4jdfx325rxmnpcqq31d3x/impala64_promo_photo3_square.jpg?rlkey=gwh1srqendilugry39w5z38d7&st=78mnxpy5&dl=0"
  },
  {
    id: "fisher-chris-lake-ad",
    category: "Brand / ads",
    title: "Fisher x Chris Lake — Taking Over Hollywood Blvd",
    blurb: "Edited for Goldenvoice and Framework.",
    images: [
      "https://www.dropbox.com/scl/fi/m1a35ww4dh6n00opmdmt0/Fisher-x-Chris-Lake_Ad_shot.jpg?rlkey=u38mq2jczxy2hk6ih02ym0epe&st=8lyx38iv&raw=1"
    ],
    videos: [{ type: "instagram", url: "https://www.instagram.com/reel/Cx-_o5FpeSl/?stkn=NTc4MTIwNjQ2YQ==" }],
    folder: "https://www.dropbox.com/scl/fi/m1a35ww4dh6n00opmdmt0/Fisher-x-Chris-Lake_Ad_shot.jpg?rlkey=u38mq2jczxy2hk6ih02ym0epe&st=8lyx38iv&dl=0"
  },
  {
    id: "crssd-onsite-1",
    category: "Live event · On-site editing",
    title: "On-site edit — Crssdfest 2026",
    blurb: "On-site edit produced for Crssdfest 2026.",
    images: [],
    videos: [{ type: "instagram", url: "https://www.instagram.com/reel/DV6xK6RkiwL/?stkn=NTc4MTIwNjQ2YQ==" }],
    folder: ""
  },
  {
    id: "odd-mob-crssd-2026",
    category: "Live event · On-site editing",
    title: "Odd Mob — Live set (Crssdfest 2026)",
    blurb: "On-site cut of the Odd Mob live set at Crssdfest 2026.",
    images: [],
    videos: [{ type: "instagram", url: "https://www.instagram.com/reel/DWZhtfwhcMb/?stkn=NjZiM2M3MzIxNA%3D%3D" }],
    folder: ""
  },
  {
    id: "trace-sound-nightclub",
    category: "Brand / ads",
    title: "Trace Music — Sound Nightclub",
    blurb: "Edited and produced.",
    images: [],
    videos: [{ type: "instagram", url: "https://www.instagram.com/reel/DP4Ye3pEdSA/?stkn=NTc4MTIwNjQ2YQ==" }],
    folder: ""
  },
  {
    id: "laidback-luke-gasoline",
    category: "Brand / ads",
    title: "Laidback Luke — Gasoline",
    blurb: "Shot, directed, produced, and edited.",
    images: [],
    videos: [{ type: "instagram", url: "https://www.instagram.com/reel/DLav5LMB3LH/?stkn=NTc4MTIwNjQ2YQ==" }],
    folder: ""
  },
  {
    id: "anatta-music-dark-ad",
    category: "Brand / ads",
    title: "Anatta Music — Dark Ad",
    blurb: "Edited and produced.",
    images: [],
    videos: [{ type: "youtube", url: "https://youtube.com/shorts/fHa78uX0t7s?feature=share" }],
    folder: ""
  },
  {
    id: "laidback-luke-tao-beach",
    category: "Brand / ads",
    title: "Laidback Luke — Tao Beach Club",
    blurb: "Edited and produced.",
    images: [],
    videos: [{ type: "youtube", url: "https://youtube.com/shorts/7GStEN-aeTI" }],
    folder: ""
  },
  {
    id: "steve-aoki-epk",
    category: "Brand / ads",
    title: "Steve Aoki — EPK Compilation",
    blurb: "Edited.",
    images: [],
    videos: [{ type: "youtube", url: "https://youtu.be/pCLmC_4fsPI" }],
    folder: ""
  },
  {
    id: "ookay-speakers-knockin",
    category: "Digital media",
    title: "Ookay — Speakers Knockin'",
    blurb: "Shot and edited.",
    images: [],
    videos: [{ type: "youtube", url: "https://www.youtube.com/watch?v=Aw7tC0Fysqc" }],
    folder: ""
  },
  {
    id: "james-brown-laidback-luke-lyric",
    category: "Digital media",
    title: "James Brown & Laidback Luke — “I Got Soul (Super Bad)” (Lyric Video)",
    blurb: "Edited and animated. Special thanks to Andrea Reyes, illustrator and character animator, and Primary Wave for James Brown photos and video.",
    images: [],
    videos: [{ type: "youtube", url: "https://www.youtube.com/watch?v=INhze_KHTB0" }],
    folder: ""
  },
  {
    id: "ookay-linney-drive-away-slow",
    category: "Digital media",
    title: "Ookay & Linney — Drive Away Slow",
    blurb: "Shot, directed, and edited.",
    images: [],
    videos: [{ type: "youtube", url: "https://www.youtube.com/watch?v=2eKoNgJUdto" }],
    folder: ""
  },
  {
    id: "pump-it-up-steve-aoki",
    category: "Digital media",
    title: "3 Are Legend, Tujamo, Jaxx & Vega ft. Black & White Brothers — Pump It Up",
    blurb: "Edited.",
    images: [],
    videos: [{ type: "youtube", url: "https://www.youtube.com/watch?v=ZrmkvGLHNgE" }],
    folder: ""
  },
  {
    id: "henry-fong-64-impala",
    category: "Digital media",
    title: "Henry Fong & Chyl — 64 Impala (Music Video)",
    blurb: "Shot and edited, with direction help from Alex Estrada.",
    images: [],
    videos: [{ type: "youtube", url: "https://www.youtube.com/watch?v=9ql3AA3uRsc" }],
    folder: ""
  },
  {
    id: "laidback-luke-nostalgix-1000bpm",
    category: "Digital media",
    title: "Laidback Luke & Nostalgix — 1000 BPM (Music Video)",
    blurb: "Some of my shots are included in this video.",
    images: [],
    videos: [{ type: "youtube", url: "https://www.youtube.com/watch?v=2KQZrFjSba8" }],
    folder: ""
  },
  {
    id: "trickstar-tiaro-redemption",
    category: "Digital media",
    title: "TRICKSTAR & TIARO — Redemption (Official Video)",
    blurb: "Edited and produced.",
    images: [],
    videos: [{ type: "youtube", url: "https://www.youtube.com/watch?v=yYWXkQsldFo" }],
    folder: ""
  },
  {
    id: "snavs-out-of-love",
    category: "Digital media",
    title: "Snavs — Out Of Love (Lyric Video)",
    blurb: "Edited and produced.",
    images: [],
    videos: [{ type: "youtube", url: "https://www.youtube.com/watch?v=LYdK3UQX6c8" }],
    folder: ""
  },
  {
    id: "mondry-backline",
    category: "Digital media",
    title: "Mondry — Backline (feat. Niko Slim)",
    blurb: "Edited and produced.",
    images: [],
    videos: [{ type: "youtube", url: "https://www.youtube.com/watch?v=TJDvraXzQqs" }],
    folder: ""
  },
  {
    id: "sikdope-mic-drop",
    category: "Digital media",
    title: "Sikdope & The Melody Men — Mic Drop (Lyric Video)",
    blurb: "Edited and produced.",
    images: [],
    videos: [{ type: "youtube", url: "https://www.youtube.com/watch?v=4ooTzFezyfc" }],
    folder: ""
  },
  {
    id: "4b-cant-stop-me",
    category: "Digital media",
    title: "4B — Can't Stop Me",
    blurb: "Edited and produced.",
    images: [],
    videos: [{ type: "youtube", url: "https://www.youtube.com/watch?v=oS8zHufh2Ak" }],
    folder: ""
  },
  {
    id: "cheyenne-giles-ookay-for-life",
    category: "Digital media",
    title: "Cheyenne Giles & Ookay — For Life (feat. Manno) (Visualizer)",
    blurb: "Edited and produced.",
    images: [],
    videos: [{ type: "youtube", url: "https://www.youtube.com/watch?v=Q4HvYoZG25g" }],
    folder: ""
  },
  {
    id: "yt-bf6-sor300sc",
    category: "Personal · Gaming",
    title: "SOR-300SC the HIPFIRE META? (BF6)",
    blurb: "Gameplay short posted to my YouTube channel.",
    images: [],
    videos: [{ type: "youtube", url: "https://youtube.com/shorts/SLnMz6oDJrw?si=C9_bVovhRP9hFCX6" }],
    folder: ""
  },
  {
    id: "yt-bf6-fun-moments",
    category: "Personal · Gaming",
    title: "Battlefield 6 — Genuine Moments of Fun",
    blurb: "Gameplay short posted to my YouTube channel.",
    images: [],
    videos: [{ type: "youtube", url: "https://youtube.com/shorts/YwziDnTZeqk?si=q8ujW8lvwIHu-gSI" }],
    folder: ""
  },
  {
    id: "yt-girlfriend-range",
    category: "Personal · Other",
    title: "Girlfriend Goes to the Range",
    blurb: "Not gaming content, but one of my best-performing personal shorts.",
    images: [],
    videos: [{ type: "youtube", url: "https://www.youtube.com/shorts/Jnyqih3QFvA" }],
    folder: ""
  },
  {
    id: "tiktok-cod-mw4-beta",
    category: "Personal · Gaming",
    title: "Call of Duty MW4 Beta",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/7681436333021121806?_r=1&_t=ZT-99oub2eJGn7" }],
    folder: ""
  },
  {
    id: "tiktok-bf6-clip-1",
    category: "Personal · Gaming",
    title: "I Am Anti-Air (BF6)",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/7594537171042831629?_r=1&_t=ZT-99ounTvrPjy" }],
    folder: ""
  },
  {
    id: "tiktok-bf6-clip-2",
    category: "Personal · Gaming",
    title: "BF6 — Attack Heli Run",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/7575843545521605902?_r=1&_t=ZT-99ouqCnTnm1" }],
    folder: ""
  },
  {
    id: "tiktok-mw2-clip",
    category: "Personal · Gaming",
    title: "MW2 — Resurgence Warzone",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/7341613210824379691?_r=1&_t=ZT-99ouz06atFG" }],
    folder: ""
  },
  {
    id: "tiktok-resurgence-1",
    category: "Personal · Gaming",
    title: "Resurgence Warzone",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/6921157736860323077?_r=1&_t=ZT-99ov2kPH2mU" }],
    folder: ""
  },
  {
    id: "tiktok-resurgence-2",
    category: "Personal · Gaming",
    title: "Resurgence Warzone",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/6920421012769099013?_r=1&_t=ZT-99ov6YyVPo6" }],
    folder: ""
  },
  {
    id: "tiktok-resurgence-3",
    category: "Personal · Gaming",
    title: "Resurgence Warzone",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/6920104040982482181?_r=1&_t=ZT-99ov8iP8jT4" }],
    folder: ""
  },
  {
    id: "tiktok-shipment-247",
    category: "Personal · Gaming",
    title: "Shipment 24/7",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/6890463261209136390?_r=1&_t=ZT-99ovCXIEt4g" }],
    folder: ""
  },
  {
    id: "tiktok-verdansk-1",
    category: "Personal · Gaming",
    title: "Warzone in Verdansk",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/6875068799763090693?_r=1&_t=ZT-99ovEPibaT0" }],
    folder: ""
  },
  {
    id: "tiktok-verdansk-funny-wipe",
    category: "Personal · Gaming",
    title: "Warzone in Verdansk — Funny Squad Wipe",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/6875002921596046597?_r=1&_t=ZT-99ovEb3PqQf" }],
    folder: ""
  },
  {
    id: "tiktok-verdansk-gulag-spawn",
    category: "Personal · Gaming",
    title: "Warzone in Verdansk — How to Quickly Spawn in the Gulag",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/6865463256207740166?_r=1&_t=ZT-99ovHYea4TO" }],
    folder: ""
  },
  {
    id: "tiktok-verdansk-toxic",
    category: "Personal · Gaming",
    title: "Warzone in Verdansk — How to Be Toxic",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/6858830491697548549?_r=1&_t=ZT-99ovMXySL42" }],
    folder: ""
  },
  {
    id: "tiktok-verdansk-semtex-wipe",
    category: "Personal · Gaming",
    title: "Warzone in Verdansk — Semtex Squad Wipe",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/6828421883113901317?_r=1&_t=ZT-99ovOW3wMWM" }],
    folder: ""
  },
  {
    id: "tiktok-verdansk-lmg-wipe",
    category: "Personal · Gaming",
    title: "Warzone in Verdansk — When in Doubt, LMG It Out (Crazy Squad Wipe)",
    blurb: "Posted to TikTok.",
    images: [],
    videos: [{ type: "tiktok", url: "https://www.tiktok.com/@xanderson_24/video/6819805660931181829?_r=1&_t=ZT-99ovQBQBoQH" }],
    folder: ""
  },
  // Add more project objects here, following the same shape.
];
