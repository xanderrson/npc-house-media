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
     isGalleryLink - optional, only set to true for an entry that ISN'T a
                specific named piece of work, but just a folder of extra
                material (e.g. a general "browse more" Dropbox folder). On
                the All Work page, entries like this render as a small
                "Browse full gallery" link at the end of their category
                instead of a normal clickable project row. Omit this field
                entirely for a real, specific project.
     featured - optional, set to true for the handful of cards shown on
                the homepage grid. Only ever needs one entry per category
                really, but it's just whichever cards you want up front.
     featuredLink - optional, only meaningful alongside featured: true.
                When true, clicking that homepage card goes to that
                category's rolodex page (category.html) instead of the
                card's own detail page — useful when a card is standing in
                as a category's cover image even though you don't have a
                dedicated piece to show for it yet (e.g. a photo used as
                the "Performance · Video" cover while no video exists yet).
     videos   - an array of video links for this project, or [] if none.
                Each one is an object: { type: "youtube", url: "..." }
                Supported types:
                  "youtube"   - embeds and plays right on the page
                  "instagram" - shows a "Watch on Instagram" button instead
                                (Instagram's own embed carries too much of
                                its own branding to sit cleanly on the page)
                  "tiktok"    - shows a "Watch on TikTok" button (TikTok's
                                own embed is unreliable across browsers)
                  "medal"     - embeds and plays right on the page (for
                                clips hosted on medal.tv)
                  "video"     - a direct link to a video file (e.g. a
                                Dropbox raw link, or a file uploaded into
                                this repo) — plays with a plain built-in
                                video player, right on the page
   ========================================================= */
const WORKS = [
  {
    id: "woogie-stage",
    featured: true,
    featuredLink: true,
    category: "Live event · On-site editing & Recaps",
    title: "Woogie Stage — Lightning in a Bottle",
    blurb: "Same-day turnaround edits cut and delivered from a laptop at the stage.",
    images: [
      "https://www.dropbox.com/scl/fi/fkr6pc77kv6bli75kqy8h/Lightning-in-a-Bottle-Woogie-Stage.jpg?rlkey=xy0xhyn5lg9b49csz1bldib9u&st=13eva84g&raw=1"
    ],
    videos: [],
    folder: "https://www.dropbox.com/scl/fo/8nymescozy6i6rhnqlpx7/AMWPmno475W8KkdO4KBbeLs?rlkey=7rxbaybgsor897bryz0hi4lv6&st=s9s8uisf&dl=0"
  },
  {
    id: "dim-mak-pershing-square-recap",
    category: "Live event · On-site editing & Recaps",
    title: "Dim Mak — Pershing Square Recap",
    blurb: "Recap edit produced on-site for a Dim Mak event at Pershing Square.",
    images: ["images/dim-mak-pershing-square.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/t88fy04mrt8mx7azqtxwm/Dim-Mak-Pershing-Square-Recap.mp4?rlkey=gpyscfwvhczoae3v0jbin5nk0&st=ebc28h2g&raw=1" }],
    folder: ""
  },
  {
    id: "mochakk-torch",
    featured: true,
    featuredLink: true,
    isGalleryLink: true,
    category: "Performance · Video",
    title: "Mochakk — The Torch",
    blurb: "A behind-the-scenes look — the full performance video from this set isn't uploaded yet.",
    images: [
      "https://www.dropbox.com/scl/fi/cjp5sjj0za6n8fr7buof2/Mochakk-The-Torch-1.jpg?rlkey=rwklzn23ey78661xzmwgi7e70&st=cbwjr1f7&raw=1"
    ],
    videos: [],
    folder: "https://www.dropbox.com/scl/fo/8guvlxq1w7za1twiyo6k8/ADVD-a2oReC-yHLgR7jlD7A?rlkey=4340kpsygs21d9uy9c2ls2zk2&st=q884b7ri&dl=0"
  },
  {
    id: "4b-miami",
    category: "Performance · Video",
    title: "4B — Miami",
    blurb: "Live performance coverage for 4B in Miami.",
    images: ["images/4b-miami.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/ksl7n7y5a5gbfu8gqeoy1/4B-Miami-1.mp4?rlkey=x3qn556pvkz1f3fpndkk81aa5&st=k6pc16ch&raw=1" }],
    folder: "https://www.dropbox.com/scl/fo/8guvlxq1w7za1twiyo6k8/ADVD-a2oReC-yHLgR7jlD7A?rlkey=4340kpsygs21d9uy9c2ls2zk2&st=q884b7ri&dl=0"
  },
  {
    id: "hot-since-82-framework-kneedeep",
    featured: true,
    featuredLink: true,
    category: "Performance · Photography",
    title: "Hot Since 82 — Framework x Knee Deep, LA",
    blurb: "Performance photography for a Framework x Knee Deep show in LA.",
    images: [
      "https://www.dropbox.com/scl/fi/s2phthjfq7ag54c2dkarz/HS82-6.jpg?rlkey=b5sywaegnk8o4yy8x5wcayel9&st=opfe5sn0&raw=1"
    ],
    videos: [],
    folder: ""
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
    featured: true,
    featuredLink: true,
    isGalleryLink: true,
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
    featured: true,
    featuredLink: true,
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
    featured: true,
    featuredLink: true,
    category: "Brand / ads",
    title: "Fisher x Chris Lake — Taking Over Hollywood Blvd",
    blurb: "Edited for Goldenvoice and Framework.",
    images: [
      "https://www.dropbox.com/scl/fi/m1a35ww4dh6n00opmdmt0/Fisher-x-Chris-Lake_Ad_shot.jpg?rlkey=u38mq2jczxy2hk6ih02ym0epe&st=8lyx38iv&raw=1"
    ],
    videos: [
      { type: "video", url: "https://www.dropbox.com/scl/fi/itlg1mhylc2avrpkxxnvj/Chris-Lake-x-Fisher-Promo.MP4?rlkey=xgib3rv769e7t42c4mwq79qx8&st=60ic6pu5&raw=1" },
      { type: "instagram", url: "https://www.instagram.com/reel/Cx-_o5FpeSl/?stkn=NTc4MTIwNjQ2YQ==" }
    ],
    folder: "https://www.dropbox.com/scl/fi/m1a35ww4dh6n00opmdmt0/Fisher-x-Chris-Lake_Ad_shot.jpg?rlkey=u38mq2jczxy2hk6ih02ym0epe&st=8lyx38iv&dl=0"
  },
  {
    id: "crssd-onsite-1",
    category: "Live event · On-site editing & Recaps",
    title: "Crssdfest 2026 — Day 1 Recap",
    blurb: "Produced on-site for Crssdfest 2026.",
    images: ["images/crssd-onsite-1.jpg"],
    videos: [
      { type: "video", url: "https://www.dropbox.com/scl/fi/kpp69hxoj049pk5jbvoxa/CRSSD-2026-DAY-1-on-site-edit.MP4?rlkey=c3f07rsji0bat2ug187iv5s5c&st=58py6gfi&raw=1" },
      { type: "instagram", url: "https://www.instagram.com/reel/DV6xK6RkiwL/?stkn=NTc4MTIwNjQ2YQ==" }
    ],
    folder: ""
  },
  {
    id: "crssd-onsite-day2",
    category: "Live event · On-site editing & Recaps",
    title: "Crssdfest 2026 — Day 2 Recap",
    blurb: "Produced on-site for Crssdfest 2026.",
    images: ["images/crssd-onsite-day2.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/o9hcu5cbflwry32pld1n4/CRSSD-2026-DAY-2-on-site-edit.MP4?rlkey=cstxl5fddmdt2zurgh9aifzb8&st=0heglox2&raw=1" }],
    folder: ""
  },
  {
    id: "odd-mob-crssd-2026",
    category: "Live event · On-site editing & Recaps",
    title: "Odd Mob — Live set (Crssdfest 2026)",
    blurb: "On-site cut of the Odd Mob live set at Crssdfest 2026.",
    images: ["images/odd-mob-crssd-2026.jpg"],
    videos: [
      { type: "video", url: "https://www.dropbox.com/scl/fi/rkiw3cxxrh1cyfhq08bua/Odd-Mob-CRSSD-2026-on-site-edit.MP4?rlkey=bq9dgoqa6ln43cjl6fmvkkvf2&st=2sq4yleo&raw=1" },
      { type: "instagram", url: "https://www.instagram.com/reel/DWZhtfwhcMb/?stkn=NjZiM2M3MzIxNA%3D%3D" }
    ],
    folder: ""
  },
  {
    id: "xgames-winter-draft-onsite-edit",
    category: "Live event · On-site editing & Recaps",
    title: "X Games — Winter Draft 2026 — Blue Carpet Recap",
    blurb: "Edited on-site for X Games Winter Draft.",
    images: ["images/xgames-winter-draft-onsite-edit.jpg"],
    videos: [
      { type: "video", url: "https://www.dropbox.com/scl/fi/ol5jrszba0s2soa9cjg93/X-Games-Winter-Draft-2026.mov?rlkey=3xuqike6j5w7dzapq9r5udafg&st=rtdd2osb&raw=1" },
      { type: "instagram", url: "https://www.instagram.com/reel/DdZxhN6DLad/?stkn=NTc4MTIwNjQ2YQ==" }
    ],
    folder: ""
  },
  {
    id: "xgames-winter-draft-footage",
    category: "Live event · On-site editing & Recaps",
    title: "X Games — Winter Draft — Athlete Arrivals",
    blurb: "A recap of the Winter Draft event, including top-down and fisheye footage of athletes as they arrived and posed for the camera.",
    images: ["images/xgames-winter-draft-footage.jpg"],
    videos: [{ type: "instagram", url: "https://www.instagram.com/reel/Ddb-qI4EQ3g/?stkn=NTc4MTIwNjQ2YQ==" }],
    folder: ""
  },
  {
    id: "trace-sound-nightclub",
    category: "Brand / ads",
    title: "Trace Music — Sound Nightclub",
    blurb: "Edited and produced.",
    images: [],
    videos: [
      { type: "video", url: "https://www.dropbox.com/scl/fi/crz6w3rt68zht1j1z0z69/Trace-Support-Sound-LA-Social-Ad-2.MP4?rlkey=3j0g9hrw0hl39bafze3n6wxmf&st=kcb31qsg&raw=1" },
      { type: "instagram", url: "https://www.instagram.com/reel/DP4Ye3pEdSA/?stkn=NTc4MTIwNjQ2YQ==" }
    ],
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
  {
    id: "henry-fong-time",
    category: "Performance · Video",
    title: "Henry Fong — Time",
    blurb: "Live performance coverage at Time.",
    images: ["images/henry-fong-time.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/cbupjb54chcz3zw220t3s/HenryFong-Time-Vertical-Clip-1.MP4?rlkey=t6xmemdthndqe9qi3xizkymh4&st=jo7qxsd7&raw=1" }, { type: "video", url: "https://www.dropbox.com/scl/fi/6y9vdczvlkfqxu5pj73k5/HenryFong-Time-Vertical-Clip-3.MP4?rlkey=8z1bglw9aby3z8h31k3oeo4hf&st=6wp4k7x2&raw=1" }, { type: "video", url: "https://www.dropbox.com/scl/fi/g5yl04yyswaansxd0xjo5/HenryFong-Time-Vertical-Clip-2.MP4?rlkey=uocz96pyygbfzqa3gg73g71xe&st=j5p2wo2e&raw=1" }],
    folder: ""
  },
  {
    id: "pablo-fierro-sound",
    category: "Performance · Video",
    title: "Pablo Fierro — Sound",
    blurb: "Live performance coverage at Sound.",
    images: ["images/pablo-fierro-sound.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/rc9h15x80v3wzctqdz1l0/Pablo-Fierro-Sound.mov?rlkey=wt66fffd7jfcb1iibn79q53z4&st=vfx6cduv&raw=1" }],
    folder: ""
  },
  {
    id: "diplo-highergound-la",
    category: "Performance · Video",
    title: "Diplo — HigherGround, LA",
    blurb: "Live performance coverage at HigherGround in LA.",
    images: ["images/diplo-highergound-la.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/eipbgfqw52vasfoqf5am3/Diplo-1.mp4?rlkey=cvkha2q4m9rdqbeo3nq2iqze8&st=ziap1p6o&raw=1" }],
    folder: ""
  },
  {
    id: "maz-litb",
    category: "Performance · Video",
    title: "Maz — Lightning in a Bottle",
    blurb: "Live performance coverage at Lightning in a Bottle.",
    images: ["images/maz-litb.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/tqc07evvzlhgy6hzq4wb9/Maz-Lightning-in-a-Bottle-Horizontal-Cut-2.mp4?rlkey=w5chahyd4utama8m8rfbvc6m8&st=ntiwd4bb&raw=1" }],
    folder: ""
  },
  {
    id: "hugel-highergound-la",
    category: "Performance · Video",
    title: "Hugel — HigherGround, LA",
    blurb: "Live performance coverage at HigherGround in LA.",
    images: ["images/hugel-highergound-la.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/eqg7x19nahthncmnw34a2/Hugelthug-Vertical-Cut-1.mp4?rlkey=31iwjrhaekhd8n00tx23ed1lt&st=cs20z0au&raw=1" }],
    folder: ""
  },
  {
    id: "coco-breezy-highergound-la",
    category: "Performance · Video",
    title: "Coco & Breezy — HigherGround, LA",
    blurb: "Live performance coverage at HigherGround in LA.",
    images: ["images/coco-breezy-highergound-la.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/g6f6b3esx4eppm0syp30e/Coco-Breezy-HigherGround-Vertical-1.mp4?rlkey=pzu6c14k36v66ta0p6qnsfyeu&st=1kux50mw&raw=1" }],
    folder: ""
  },
  {
    id: "bob-moses-litb",
    category: "Performance · Video",
    title: "Bob Moses — Lightning in a Bottle",
    blurb: "Live performance coverage at Lightning in a Bottle.",
    images: ["images/bob-moses-litb.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/xnifgako0int8dsaq1j9t/Bob-Moses-Lightning-in-a-Bottle.mp4?rlkey=419ofk59in1svw4h4v930iclw&st=k44loe65&raw=1" }],
    folder: ""
  },
  {
    id: "jstjr-avalon",
    category: "Performance · Video",
    title: "Jstjr — Avalon",
    blurb: "Live performance coverage at Avalon.",
    images: ["images/jstjr-avalon.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/p3fpuwwppsd4dstrd7bp3/Jstjr-Avalon-1.mp4?rlkey=qv2d8djr4oxysgsyja18x4cv7&st=ez9l22zt&raw=1" }],
    folder: ""
  },
  {
    id: "jstjr-nova",
    category: "Performance · Video",
    title: "Jstjr — NOVA",
    blurb: "Live performance coverage at NOVA.",
    images: ["images/jstjr-nova.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/dyskwhhno8dc62ujb0oom/Jstjr-Nova.mp4?rlkey=cunkzamxkqapmldemmnhof6id&st=bcla0g8q&raw=1" }],
    folder: ""
  },
  {
    id: "lucalush-nova-sd",
    category: "Performance · Video",
    title: "LucaLush — NOVA, San Diego",
    blurb: "Live performance coverage at NOVA in San Diego.",
    images: ["images/lucalush-nova-sd.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/a7h4wzk7p58jgsl6dbmcq/LucaLush-2.mp4?rlkey=x2j3s4atbs6u5l3jfz4iqr3n1&st=cobww220&raw=1" }],
    folder: ""
  },
  {
    id: "deorro-torch-la",
    category: "Performance · Video",
    title: "Deorro — The Torch, LA",
    blurb: "Live performance coverage at The Torch in LA.",
    images: ["images/deorro-torch-la.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/lnibl0u436hddizhls6xp/Deorro-1.mp4?rlkey=tx503gcsjh88bmrxdde4rubue&st=xeok814k&raw=1" }],
    folder: ""
  },
  {
    id: "lupe-fuentes-torch-la",
    category: "Performance · Video",
    title: "Lupe Fuentes — The Torch, LA",
    blurb: "Live performance coverage at The Torch in LA.",
    images: ["images/lupe-fuentes-torch-la.jpg"],
    videos: [{ type: "video", url: "https://www.dropbox.com/scl/fi/20vgel3sedsum1jqt567l/Lupe-Fuentes-1.mp4?rlkey=lbpjvy7nm5m08lygt3dtk90cf&st=l3nwwusa&raw=1" }],
    folder: ""
  },
  // Add more project objects here, following the same shape.
];
