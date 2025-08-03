import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'TIME-2WIN - Lotterie de Montres de Luxe'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          position: 'relative',
        }}
      >
        {/* Logo TIME-2WIN */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '20px',
            textAlign: 'center',
            letterSpacing: '2px',
          }}
        >
          TIME-2WIN
        </div>
        
        {/* Sous-titre */}
        <div
          style={{
            fontSize: '32px',
            color: '#fbbf24',
            marginBottom: '40px',
            textAlign: 'center',
            fontWeight: '600',
          }}
        >
          Lotterie de Montres de Luxe
        </div>
        
        {/* Description */}
        <div
          style={{
            fontSize: '24px',
            color: '#ffffff',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: '1.4',
            marginBottom: '40px',
          }}
        >
          Participez à nos compétitions exclusives pour gagner des montres de luxe authentiques
        </div>
        
        {/* Éléments décoratifs */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '40px',
            width: '80px',
            height: '80px',
            border: '3px solid #fbbf24',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: '#fbbf24',
          }}
        >
          ⏰
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            width: '80px',
            height: '80px',
            border: '3px solid #fbbf24',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: '#fbbf24',
          }}
        >
          💎
        </div>
        
        {/* Call to action */}
        <div
          style={{
            fontSize: '20px',
            color: '#fbbf24',
            textAlign: 'center',
            fontWeight: '600',
            border: '2px solid #fbbf24',
            padding: '12px 24px',
            borderRadius: '8px',
          }}
        >
          Gagnez votre montre de luxe
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 