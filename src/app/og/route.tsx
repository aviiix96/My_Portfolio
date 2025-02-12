import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Avi Dixit';
  const description = searchParams.get('description') || 'Building cool things with code.';

  // Load custom font
  const fontData = await fetch(
    new URL('../../../public/fonts/Inter.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          padding: '4rem',
          background: 'linear-gradient(135deg, #1a1a1a, #000000)',
          color: 'white',
          fontFamily: 'Inter',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem',
            width: '100%',
          }}
        >
          <span
            style={{
              fontSize: '6rem',
              lineHeight: '6rem',
              letterSpacing: '-0.05em',
              whiteSpace: 'pre-wrap',
              textWrap: 'balance',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #ff0080, #7928ca)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontSize: '3rem',
              lineHeight: '3.5rem',
              whiteSpace: 'pre-wrap',
              textWrap: 'balance',
              opacity: '0.8',
            }}
          >
            {description}
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              marginTop: '2rem',
            }}
          >
            <img
              src="https://www.aviiix.me/avatar.png" // Replace with your avatar URL
              style={{
                width: '10rem',
                height: '10rem',
                objectFit: 'cover',
                borderRadius: '100%',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              <span
                style={{
                  fontSize: '3rem',
                  lineHeight: '3rem',
                  whiteSpace: 'pre-wrap',
                  textWrap: 'balance',
                }}
              >
                Avi Dixit
              </span>
              <span
                style={{
                  fontSize: '2rem',
                  lineHeight: '2rem',
                  whiteSpace: 'pre-wrap',
                  textWrap: 'balance',
                  opacity: '0.6',
                }}
              >
                Software Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
