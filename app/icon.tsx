import { ImageResponse } from 'next/og'

export const size = {
    width: 32,
    height: 32,
}
export const dynamic = 'force-static'
export const contentType = 'image/png'

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'black',
                    color: 'white',
                    borderRadius: '50%',
                    fontSize: 20,
                    fontWeight: 700,
                    fontFamily: 'system-ui, sans-serif'
                }}
            >
                R
            </div>
        ),
        { ...size }
    )
}
