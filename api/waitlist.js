// Vercel Serverless Function for Waitlist
export default async function handler(req, res) {
  // 设置CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  const { email } = req.body;

  // 验证email格式
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ 
      success: false,
      message: 'Invalid email address' 
    });
  }

  try {
    // 如果设置了Google Sheets webhook，发送数据
    if (process.env.GOOGLE_SHEETS_WEBHOOK) {
      await fetch(process.env.GOOGLE_SHEETS_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'waitlist'
        })
      });
    }

    // 也可以同时发送到其他服务（如Mailchimp, ConvertKit等）
    // if (process.env.MAILCHIMP_API_KEY) {
    //   await sendToMailchimp(email);
    // }

    return res.status(200).json({ 
      success: true,
      message: 'Successfully joined waitlist' 
    });
  } catch (error) {
    console.error('Waitlist error:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Failed to join waitlist. Please try again.' 
    });
  }
}
