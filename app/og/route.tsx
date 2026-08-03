import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafafa',
          color: '#171717',
          fontSize: 60,
          fontWeight: 600,
          letterSpacing: '-0.02em',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <div style={{ fontSize: 80 }}>👋</div>
          <div>Jaycee Andal</div>
          <div style={{ fontSize: 32, color: '#737373', fontWeight: 400 }}>
            Full Stack Developer
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
