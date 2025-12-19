const LinkCard = ({ href, label, subtext }: { href: string; label: string; subtext: string }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: 'block',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                pointerEvents: 'auto',
                marginBottom: '1rem'
            }}

            onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
            onClick={(e) => e.stopPropagation()}
        >
            <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '4px' }}>{label}</div>
            <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.5)' }}>{subtext}</div>
        </a>
    );
};

export default LinkCard;