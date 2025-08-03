// TIME-2WIN - Index.js
// Redirection vers l'application Next.js

console.log('TIME-2WIN - Index.js loaded');

// Redirection vers l'application principale
if (typeof window !== 'undefined') {
    window.location.href = '/';
}

// Export pour Node.js si nécessaire
module.exports = {
    name: 'TIME-2WIN',
    version: '1.0.0',
    description: 'Lotterie de Montres de Luxe'
}; 