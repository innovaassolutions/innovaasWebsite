"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/partners', label: 'Our Partners' },
  { href: '/about', label: 'About Us' },
];

function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue('#fff', '#f3f4f6');
  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
      onClick={toggleColorMode}
      variant="ghost"
      ml={2}
      color={iconColor}
    />
  );
}

export default function Header() {
  const pathname = usePathname();
  const navTextColor = useColorModeValue('#fff', '#f3f4f6');
  return (
    <nav style={{
      background: '#181f2a',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      height: '72px',
      borderBottom: '1px solid #222',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Link href="/">
          <Image src="/innovaas_logo_white.png" alt="Innovaas Logo" width={240} height={80} style={{ objectFit: 'contain', marginRight: '2.5rem', height: '80px', width: 'auto' }} />
        </Link>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                background: pathname === link.href ? 'var(--color-accent)' : 'transparent',
                color: pathname === link.href ? '#fff' : navTextColor,
                fontWeight: 700,
                fontFamily: 'Montserrat, Arial, sans-serif',
                fontSize: '1rem',
                transition: 'background 0.2s, color 0.2s',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <ColorModeSwitcher />
    </nav>
  );
} 