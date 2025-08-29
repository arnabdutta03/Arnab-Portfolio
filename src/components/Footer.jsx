import React from 'react'

function Footer() {
    return (
        <footer className="py-6 text-center text-sm text-slate-400 border-t border-slate-800 mt-12">
            © {new Date().getFullYear()} <span className="font-semibold text-white">Arnab Dutta</span> • Built with React & Tailwind
        </footer>
    )
}

export default Footer