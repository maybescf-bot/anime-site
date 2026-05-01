export default function Home() {
  return (
    <div dir="rtl" style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* الهيدر */}
      <nav style={{ padding: '20px 50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#111', borderBottom: '2px solid #e50914' }}>
        <h1 style={{ color: '#e50914', margin: 0, fontSize: '24px' }}>عالم عبد الله للأنمي 🍿</h1>
        <div style={{ fontSize: '14px', color: '#888' }}>مشاهدة خاصة - جودة Blu-ray</div>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#161616', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.8)' }}>
          
          {/* مشغل الفيديو */}
          <div style={{ position: 'relative', paddingTop: '56.25%', backgroundColor: '#000' }}>
            <video 
              controls 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              poster="https://images.alphacoders.com/645/645163.jpg"
            >
              <source src="رابط_الحلقة_المباشر" type="video/mp4" />
              <track label="العربية" kind="subtitles" srcLang="ar" src="رابط_ملف_الترجمة" default />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>

          <div style={{ padding: '30px' }}>
            <h2 style={{ marginBottom: '10px' }}>Charlotte - الحلقة 01</h2>
            <p style={{ color: '#aaa', lineHeight: '1.8' }}>
              قصة يو أوتوساكا الذي يكتشف قدراته الخاصة في عالم غامض. (1080p Blu-ray) مع الصوت الياباني الأصلي.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}